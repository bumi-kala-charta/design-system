Renders one Lucide glyph at BKC's stroke weight; use it anywhere an icon is needed instead of inline SVG.

```jsx
<Icon name="satellite" size={20} />
<Icon name="map" size={18} color="var(--bkc-green)" />
```

Requires `<script src="https://unpkg.com/lucide@0.451.0/dist/umd/lucide.min.js">` on the page. Lucide is a documented substitution — the BKC guideline defines no icon set. Sizes in use: 15 (inline with text), 18 (buttons, list rows), 20-22 (card headers), 30 (empty states).
