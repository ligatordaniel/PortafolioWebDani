# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Commands

**Serve locally:**

```bash
python -m http.server 8000
```

**Validate JavaScript syntax:**

```bash
node --check assets/js/main.js
```

No linting, build pipeline, or test suite is configured.

## Architecture

Static bilingual portfolio site with no framework and a single entry point:
`index.html`.

**Core files:**

- `index.html` — page markup, SVG symbols, content sections, modal markup, and
  links to external CSS/JS.
- `assets/css/estilos.css` — all site styles, including responsive rules,
  day/night mode classes, modal styles, and decorative sprite animation.
- `assets/js/main.js` — reveal animations, day/night mode toggle, language
  toggle, translation maps, CV modal behavior, and CV download helper.
- `assets/img/` — wallpapers, profile images, icons, thumbnails, and animated
  decorative sprites.
- `assets/docs/` — CV source files and generated PDF/HTML exports.

External dependencies are limited to Google Fonts loaded from `index.html`.

## Implementation Notes

- Keep CSS and JS in their respective folders; do not reintroduce large inline
  `<style>` or `<script>` blocks in `index.html`.
- CSS image paths are relative to `assets/css/`; use `../img/...` for assets.
- Day/night mode is class-based through `body.dark` and related selectors.
- Language switching uses `[data-i18n]` attributes in `index.html` and the
  `T.es` / `T.en` translation maps in `assets/js/main.js`.
- If adding or renaming translated text, update both language maps and the
  matching `data-i18n` keys.
- Inline HTML handlers currently call global functions from `main.js`
  (`toggleLang`, `toggleDark`, `openCVModal`, `closeCVModal`, `downloadCV`).
  Keep those APIs in sync with the markup.
