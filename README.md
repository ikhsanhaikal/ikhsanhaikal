# ikhsan haikal — personal site

Hugo site with the **nord** theme. Tailwind CSS (CLI build) + Alpine.js.

## Stack

| Tool | Role |
|------|------|
| [Hugo](https://gohugo.io) | Static site generator |
| [Tailwind CSS v3](https://tailwindcss.com) | Utility-first CSS (CLI build pipeline) |
| [Alpine.js v3](https://alpinejs.dev) | Lightweight interactivity (CDN) |
| Nord colour palette | `#2e3440` dark theme |
| IBM Plex Mono / IBM Plex Sans / Newsreader | Typography |

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — intro, avatar, log preview |
| `/til/` | TIL list — grouped by month, expand-in-place |
| `/til/:slug/` | TIL detail — full note, related notes, prev/next |
| `/blog/` | Blog — empty state with TIL redirect |
| `/desktop/` | Desktop preview — interactive 3-column layout switcher |
| `/tags/:tag/` | Tag filtered list |

## Development

```bash
npm install
npm run dev        # Tailwind watch + Hugo server (concurrent)
```

## Production build

```bash
npm run build      # Tailwind minify → Hugo minify → ./public/
```

## Adding a TIL note

```bash
hugo new content til/your-note-slug.md
```

Front matter:

```yaml
---
title: "Your note title"
date: 2026-06-23
tags: ["git", "workflow"]
description: "One-line summary shown in cards."
---

Your content here. Markdown + fenced code blocks work.
```

## Theme structure

```
themes/nord/
├── assets/css/main.css       # Tailwind source (@tailwind directives)
├── static/
│   ├── css/main.css          # Built Tailwind output (gitignore this)
│   └── images/avatar.svg     # Profile illustration
└── layouts/
    ├── _default/
    │   ├── baseof.html        # Base shell — links CSS + Alpine
    │   └── home.html          # Homepage
    ├── til/
    │   ├── list.html          # TIL list page
    │   └── single.html        # TIL detail page
    ├── blog/list.html         # Blog (empty state)
    ├── desktop/single.html    # Desktop preview
    ├── tags/list.html         # Tag taxonomy page
    └── partials/
        ├── nav.html           # Sticky nav (Alpine scroll observer)
        └── statusbar.html     # Fake mobile status bar
```
