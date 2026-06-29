# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Compile SASS (watch mode):**
```bash
sass --watch sass:assets/css
```

**Compile SASS (one-time):**
```bash
sass sass/estilos.scss assets/css/estilos.css
```

**Serve locally:**
```bash
python -m http.server 8000
```

No linting, build pipeline, or test suite is configured.

## Architecture

Static bilingual portfolio site (no framework). Two entry points: `index.html` (Spanish) and `indexEn.html` (English). All styling flows through a single SASS source at `sass/estilos.scss` → compiled to `assets/css/estilos.css`. All external dependencies (Bootstrap 4.4.1, jQuery 3.4.1) are loaded from CDN.

**JavaScript modules in `assets/js/`:**
- `nocturno.js` — day/night mode toggle; swaps CSS classes on major sections and swaps wallpaper `background-image` values
- `animacionesScroll.js` — `window.scroll` listener that adds/removes animation classes based on `window.pageYOffset` thresholds
- `idioma.js` — language toggle; reads/writes `localStorage('lang')`, applies translations via `[data-i18n]` attributes on all translatable elements, defaults to `'es'`

**Styling conventions:**
- Day/night mode is purely class-based (e.g. `.modoDiaPurpura`, `.modoNocheNegro`); `nocturno.js` is the source of truth for which elements get toggled
- Responsive breakpoints: 800px (tablet) and 500px (mobile), defined in the SASS file
- Compiled CSS (`assets/css/estilos.css`) is committed to the repo and must be regenerated after SASS edits
