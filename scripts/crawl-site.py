#!/usr/bin/env python3
"""
Crawl the live Docusaurus site at wyattsnotes.wyattau.com to check for
broken links, missing pages, error pages, and broken image references.
"""

import re
import sys
import time
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed

import requests

BASE_URL = "https://wyattsnotes.wyattau.com"
USER_AGENT = "WyattsNotes-Crawler/1.0 (site health check)"
MAX_PAGES = 800
MAX_WORKERS = 8

LINK_RE = re.compile(r'href=["\']([^"\']+)["\']', re.IGNORECASE)
IMG_RE = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']', re.IGNORECASE)
TITLE_RE = re.compile(r"<title[^>]*>(.*?)</title>", re.IGNORECASE | re.DOTALL)

ERROR_PATTERNS = [
    "page not found",
    "404",
    "not found",
    "error 404",
    "does not exist",
    "page could not be found",
    "no results found",
    "page you were looking for",
    "stuck in a loop",
]

SKIP_EXT = {
    ".pdf",
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".svg",
    ".webp",
    ".css",
    ".js",
    ".woff",
    ".woff2",
    ".ttf",
    ".eot",
    ".ico",
    ".zip",
    ".tar",
    ".gz",
    ".mp4",
    ".webm",
    ".mp3",
    ".wav",
    ".json",
    ".xml",
    ".xsl",
}

SKIP_PATHS = {"/cdn-cgi/", "/search"}


session = requests.Session()
session.headers.update({"User-Agent": USER_AGENT})
adapter = requests.adapters.HTTPAdapter(
    pool_connections=MAX_WORKERS,
    pool_maxsize=MAX_WORKERS,
    max_retries=2,
)
session.mount("https://", adapter)
session.mount("http://", adapter)


def fetch(url):
    try:
        resp = session.get(url, timeout=15, allow_redirects=True)
        return resp.status_code, resp.url, resp.text
    except requests.RequestException as e:
        return 0, url, str(e)


def head_check(url):
    try:
        resp = session.head(url, timeout=10, allow_redirects=True)
        return resp.status_code
    except requests.RequestException:
        return 0


def extract_links(html, page_url):
    links = set()
    for match in LINK_RE.finditer(html):
        raw = match.group(1).strip()
        if raw.startswith(("#", "mailto:", "tel:", "javascript:", "data:")):
            continue
        parsed = urllib.parse.urljoin(page_url, raw)
        parsed_url = urllib.parse.urlparse(parsed)
        base_parsed = urllib.parse.urlparse(BASE_URL)
        if parsed_url.netloc and parsed_url.netloc != base_parsed.netloc:
            continue
        path = parsed_url.path
        if any(path.lower().endswith(ext) for ext in SKIP_EXT):
            continue
        if any(sp in path for sp in SKIP_PATHS):
            continue
        links.add(f"{parsed_url.scheme}://{parsed_url.netloc}{parsed_url.path}")
    return links


def extract_images(html, page_url):
    images = []
    for match in IMG_RE.finditer(html):
        raw = match.group(1).strip()
        if raw.startswith("data:"):
            continue
        parsed = urllib.parse.urljoin(page_url, raw)
        images.append(parsed)
    return images


def extract_title(html):
    m = TITLE_RE.search(html)
    if m:
        return m.group(1).strip()
    return ""


def is_error_page(html, status):
    if status == 404:
        return True
    lower = html.lower()
    body_start = lower.find("<body")
    if body_start >= 0:
        body = lower[body_start : body_start + 5000]
    else:
        body = lower[:5000]
    matches = sum(1 for pat in ERROR_PATTERNS if pat in body)
    return matches >= 2


def main():
    print(f"Crawling {BASE_URL}")
    print(f"Max pages: {MAX_PAGES}, workers: {MAX_WORKERS}\n")

    visited = set()
    queue = [BASE_URL + "/"]
    errors = []
    error_pages = []
    no_title = []
    all_images = {}

    start = time.time()

    print("=== PHASE 1: Crawling pages ===")
    while queue and len(visited) < MAX_PAGES:
        batch = []
        while (
            queue
            and len(batch) < MAX_WORKERS * 2
            and len(visited) + len(batch) < MAX_PAGES
        ):
            url = queue.pop(0).split("#")[0].split("?")[0]
            if url not in visited and url not in {b for b in batch}:
                batch.append(url)

        with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
            futures = {executor.submit(fetch, url): url for url in batch}
            for future in as_completed(futures):
                url = futures[future]
                status, final_url, body = future.result()
                visited.add(url)

                if status != 200:
                    errors.append({"url": url, "status": status})
                    continue

                title = extract_title(body)
                if not title:
                    no_title.append(url)

                if is_error_page(body, status):
                    error_pages.append({"url": url, "title": title})

                links = extract_links(body, final_url)
                for link in links:
                    norm = link.split("#")[0].split("?")[0]
                    if norm not in visited and norm not in queue:
                        queue.append(norm)

                images = extract_images(body, final_url)
                for img_url in images:
                    if img_url not in all_images:
                        all_images[img_url] = []
                    all_images[img_url].append(url)

        count = len(visited)
        if count % 100 < len(batch):
            elapsed = time.time() - start
            print(f"  {count} pages, {len(queue)} in queue, {elapsed:.0f}s elapsed")

    elapsed = time.time() - start
    total = len(visited)
    print(f"  Pages crawled: {total} in {elapsed:.1f}s\n")

    print("=== PHASE 2: Checking images ===")
    broken_images = []
    unique_images = list(all_images.keys())
    print(f"  Unique images to check: {len(unique_images)}")

    batch_size = 50
    for i in range(0, len(unique_images), batch_size):
        img_batch = unique_images[i : i + batch_size]
        with ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
            futures = {executor.submit(head_check, img): img for img in img_batch}
            for future in as_completed(futures):
                img_url = futures[future]
                status = future.result()
                if status != 200:
                    broken_images.append(
                        {
                            "image": img_url,
                            "status": status,
                            "pages": all_images[img_url],
                        }
                    )
        if (i + batch_size) % 200 == 0:
            print(
                f"  Checked {min(i + batch_size, len(unique_images))}/{len(unique_images)} images..."
            )

    total_elapsed = time.time() - start
    print()
    print("=" * 70)
    print("CRAWL RESULTS")
    print("=" * 70)
    print(f"Total pages crawled:  {total}")
    print(f"Crawl time:           {total_elapsed:.1f}s")
    print(f"Non-200 status codes: {len(errors)}")
    print(f"Error pages found:    {len(error_pages)}")
    print(f"Broken images:        {len(broken_images)}")
    print(f"Pages missing title:  {len(no_title)}")

    if errors:
        print(f"\n--- PAGES WITH NON-200 STATUS ({len(errors)}) ---")
        for e in errors:
            print(f"  [{e['status']}] {e['url']}")

    if error_pages:
        print(f"\n--- PAGES THAT LOOK LIKE ERROR PAGES ({len(error_pages)}) ---")
        for e in error_pages:
            print(f"  {e['url']}  (title: {e['title']})")

    if broken_images:
        print(f"\n--- BROKEN IMAGE REFERENCES ({len(broken_images)}) ---")
        for b in broken_images:
            print(f"  [{b['status']}] {b['image']}")
            print(f"         on: {', '.join(b['pages'][:3])}")

    if no_title:
        print(f"\n--- PAGES MISSING <title> ({len(no_title)}) ---")
        for t in no_title[:20]:
            print(f"  {t}")
        if len(no_title) > 20:
            print(f"  ... and {len(no_title) - 20} more")

    if not errors and not error_pages and not broken_images and not no_title:
        print("\nAll checks passed!")

    if errors or error_pages or broken_images:
        sys.exit(1)


if __name__ == "__main__":
    main()
