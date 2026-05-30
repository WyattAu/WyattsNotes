import React, { useState, useRef, useEffect } from 'react';

interface LanguageSwitcherProps {
  currentLocale: string;
  availableLocales: { code: string; label: string; flag: string }[];
  currentPath: string;
  baseUrl: string;
}

const LOCALES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'zh', label: 'Chinese', flag: '🇨🇳' },
  { code: 'es', label: 'Spanish', flag: '🇪🇸' },
  { code: 'de', label: 'German', flag: '🇩🇪' },
  { code: 'fr', label: 'French', flag: '🇫🇷' },
  { code: 'ja', label: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', label: 'Korean', flag: '🇰🇷' },
];

export default function LanguageSwitcher({
  currentLocale,
  availableLocales = LOCALES,
  currentPath,
  baseUrl,
}: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = availableLocales.find((l) => l.code === currentLocale) || availableLocales[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [open]);

  function getLocalePath(code: string): string {
    const base = baseUrl.replace(/\/$/, '');
    if (code === 'en') {
      return `${base}${currentPath}`.replace(/\/{2,}/g, '/');
    }
    return `${base}/${code}${currentPath}`.replace(/\/{2,}/g, '/');
  }

  const otherLocales = availableLocales.filter((l) => l.code !== currentLocale);

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Current language: ${current.label}. Click to change language.`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          padding: '4px 10px',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: 'var(--ifm-global-radius)',
          background: 'var(--ifm-background-color)',
          color: 'var(--ifm-font-color-base)',
          cursor: 'pointer',
          fontSize: '0.875rem',
          fontFamily: 'inherit',
        }}
      >
        <span aria-hidden="true">{current.flag}</span>
        <span>{current.label}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}
        >
          <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label="Available languages"
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            marginTop: 4,
            minWidth: 140,
            padding: 0,
            margin: 0,
            listStyle: 'none',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: 'var(--ifm-global-radius)',
            background: 'var(--ifm-background-color)',
            boxShadow: 'var(--ifm-shadow-md)',
            zIndex: 1000,
            overflow: 'hidden',
          }}
        >
          {otherLocales.map((locale) => (
            <li key={locale.code} role="option">
              <a
                href={getLocalePath(locale.code)}
                onClick={() => setOpen(false)}
                role="option"
                aria-selected={false}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '8px 14px',
                  textDecoration: 'none',
                  color: 'var(--ifm-font-color-base)',
                  fontSize: '0.875rem',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--ifm-menu-color-background-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <span aria-hidden="true">{locale.flag}</span>
                <span>{locale.label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
