---
title: "CSS :has() is a real parent selector"
date: 2026-06-09
tags: ["css", "frontend"]
description: "form:has(input:invalid) lets you style the whole form when any field is bad. No JS, finally."
---

I've wanted a parent selector in CSS for as long as I've been writing CSS. `:has()` finally delivers it — and it's more powerful than I expected.

```css
/* style the form when any field is invalid */
form:has(input:invalid) {
  border-color: #bf616a;
}

/* style a card when its checkbox is checked */
.card:has(input[type="checkbox"]:checked) {
  background: rgba(163, 190, 140, 0.1);
  border-color: #a3be8c;
}

/* select a label that comes after a focused input */
.field:has(input:focus) label {
  color: #88c0d0;
}
```

The thing that surprised me: `:has()` can look at *siblings too*, not just descendants. `.item:has(+ .item)` selects any `.item` followed by another `.item`.

Browser support is now excellent — all major browsers as of late 2023. The only gotcha: it's unforgiving with unknown selectors inside `:has()`. If the selector inside is invalid in a browser that *does* support `:has()`, the whole rule is dropped. Use `@supports selector(:has(a))` to guard if you need to be safe.
