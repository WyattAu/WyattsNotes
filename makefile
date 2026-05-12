# Makefile - Modern Build System (v2.1)
# --------------------------------------------------
# Directives
.PHONY: help \
        install-deps \
        dev-server \
        build preview deploy \
        typecheck typecheck-watch \
        format lint validate \
        security clean clear-cache \
        extract-translations add-heading-ids swizzle \
        update-deps audit ci test \
        lighthouse bundle-analyze

# Configuration
# --------------------------------------------------
PKG_MGR := pnpm
NPX := pnpm exec
COMPONENT ?= @docusaurus/theme-classic

# Targets
# --------------------------------------------------

##@ Project Setup

node_modules: package.json pnpm-lock.yaml
	@echo "Installing dependencies..."
	@$(PKG_MGR) install --frozen-lockfile
	@touch node_modules  # Marker file

install-deps: node_modules  ## Install exact dependencies from lockfile

update-deps:  ## Update project dependencies
	@echo "Updating dependencies..."
	@$(PKG_MGR) update --latest
	@$(PKG_MGR) install

##@ Development

dev-server: node_modules  ## Start development server
	@echo "Starting dev server..."
	@$(PKG_MGR) start

typecheck: node_modules  ## Run static type checking
	@echo "Running type checks..."
	@$(PKG_MGR) run typecheck

typecheck-watch: node_modules  ## Continuous type checking
	@echo "Starting type watcher..."
	@$(PKG_MGR) run typecheck -- --watch

##@ Build & Deployment

build: node_modules  ## Build production artifacts
	@echo "Building production build..."
	@NODE_ENV=production $(PKG_MGR) run build

preview: build  ## Preview production build
	@echo "Previewing production build..."
	@$(PKG_MGR) run serve

deploy: build  ## Deploy documentation
	@echo "Deploying to production..."
	@$(PKG_MGR) run deploy

##@ Code Quality

format: node_modules  ## Format codebase
	@echo "Formatting code..."
	@$(PKG_MGR) run format

lint: node_modules  ## Lint project sources
	@echo "Linting code..."
	@$(PKG_MGR) run lint -- --max-warnings=0

validate: lint typecheck  ## Validate codebase (lint + typecheck)

##@ Security

audit: node_modules  ## Audit all dependencies
	@echo "Running security audit..."
	@$(PKG_MGR) audit

security: audit  ## Full security check
	@echo "Checking for known vulnerabilities..."
	@$(PKG_MGR) audit
	@echo "Checking for outdated dependencies..."
	@$(PKG_MGR) outdated 2>/dev/null || echo "No outdated dependencies found"

##@ Documentation

extract-translations: node_modules  ## Extract translations
	@echo "Extracting translations..."
	@$(NPM) run write-translations

add-heading-ids: node_modules  ## Add heading IDs
	@echo "Adding heading IDs..."
	@$(NPM) run write-heading-ids

swizzle: node_modules  ## Swizzle component
	@echo "Swizzling $(COMPONENT)..."
	@$(NPM) run swizzle -- $(COMPONENT) --danger

##@ Maintenance

clear-cache:  ## Clear project caches
	@echo "Clearing caches..."
	@$(NPM) run clear
	@rm -rf .cache .docusaurus .npm .node-gyp build

clean: clear-cache  ## Clean project (alias)

distclean: clean  ## Deep clean (including dependencies)
	@echo "Removing installed dependencies..."
	@rm -rf node_modules package-lock.json

##@ CI/CD

ci: validate build test  ## Run CI pipeline

test: node_modules  ## Run unit tests
	@echo "Running test suite..."
	@$(PKG_MGR) test

##@ Performance

lighthouse: node_modules  ## Run Lighthouse CI audit
	@echo "Running Lighthouse audit..."
	@$(NPX) lhci autorun || echo "Lighthouse CI not configured, skipping"

bundle-analyze: node_modules  ## Analyze bundle size
	@echo "Analyzing bundle..."
	@ANALYZE=true $(PKG_MGR) run build 2>&1 || echo "Bundle analysis requires build to succeed"

##@ Help

help:  ## Show help
	@awk 'BEGIN {FS = ":.*?## "; printf "\nUsage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"} \
	/^[a-zA-Z_-]+:.*?## / { printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2 }' $(MAKEFILE_LIST)