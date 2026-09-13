---
name: bumi-kala-charta-design
description: Use this skill to generate well-branded interfaces and assets for Bumi Kala Charta (BKC), an Indonesian geospatial community and consultancy in geodesy and geomatics — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Bumi Kala Charta Design System v1.0

BKC is an Indonesian geospatial community and consultancy (geodesy & geomatics) in Bandung:
survey and mapping projects, training classes, open monthly discussions. Audience is threefold —
students, working geospatial professionals, and government/institutional clients.

**Before building anything, read `readme.md`.** It carries the brand context, content
fundamentals, visual foundations, and known gaps. This file is only the map.

## Non-negotiables

1. **Bahasa Indonesia first.** "kami" for BKC, "kamu" on Instagram, formal on other channels.
   Never "Anda". English only when an international reader is expected.
2. **Green `#358C67` leads, orange `#EA9012` only points.** Orange is a single-accent colour for
   one action, highlight, or marker per surface — never a background field, never a selection
   state, never in a gradient with green.
3. **Measurements are IBM Plex Mono with Indonesian number format** — `1.204`, `±0,8 cm`,
   `1:1.000`, `−6,9175`. Always state the unit and the reference system (SRGI 2013, UTM 48S).
4. **Never invent people.** No fabricated names, quotes, or testimonials. Use roles ("Koordinator
   pelatihan"), teams ("Tim Topografi"), or an explicit labelled placeholder.
5. **Photography does not exist yet.** Every photographic slot is an explicit labelled
   placeholder naming the shot it wants. Do not substitute stock or generated imagery.

## Where things are

| Path | What it is |
|---|---|
| `readme.md` | Full brand and system documentation. **Read first.** |
| `styles.css` | The only file to link. Imports every token file and the self-hosted IBM Plex webfonts. |
| `tokens/` | `colors` `typography` `spacing` `shape` `patterns` `contour-plates` `fonts` `base`. Change the system here, never in a page. |
| `components/*/` | 23 React primitives in 6 groups; each has a `.prompt.md` with usage rules and a JSX example. |
| `ui_kits/website/`, `ui_kits/dashboard/` | Full screen recreations — the best reference for composition and density. |
| `slides/`, `social/` | Ready 1280×720 slide and 1080×1350 Instagram specimens, one per layout. |
| `templates/` | Working deck and carousel starters. |
| `guidelines/` | 24 specimen pages, one per foundation topic. |
| `site/` | Human-facing documentation website. |
| `assets/` | Emblem, squirrel mark (4 colourways), 4 contour plates (SVG), IBM Plex woff2. |

## Building with it

**Static artifact (slide, poster, IG frame, mock).** Copy the nearest specimen from `slides/`,
`social/`, or `guidelines/` and replace its content. Do not start from an empty file — the
specimens already encode the correct spacing, type scale, and pattern usage.

**HTML/CSS.** One link tag gives you everything:

```html
<link rel="stylesheet" href="styles.css">
```

Then use tokens, never raw values:

```css
.panel{background:var(--surface-card);border-radius:var(--radius-card);
  padding:var(--space-6);box-shadow:var(--shadow-card)}
```

**React.** Load the compiled bundle and read from the global namespace:

```html
<script src="_ds_bundle.js"></script>
<script>
  const BKC = window.BumiKalaChartaDesignSystem_5e0b40;
  const { Button, Card, Input, NavBar, EventCard, ContourField, CoordinateReadout } = BKC;
</script>
```

## The contour pattern (the thing most likely to be got wrong)

The primary motif is **real contour geometry** — a synthetic heightfield traced with marching
squares — not stacked curved lines and not `repeating-radial-gradient`. Never regenerate it with
gradients or hand-drawn arcs. Use the shipped plates:

```html
<span class="bkc-contour"></span>                                        <!-- on green -->
<span class="bkc-contour" data-pattern-tone="light"></span>              <!-- on paper -->
<span class="bkc-contour" data-pattern-density="loose"></span>           <!-- full-bleed bands -->
<span class="bkc-contour bkc-contour--ridge"></span>                     <!-- hero terrain -->
```

It is always an absolutely-positioned empty element **behind** content, never a foreground
graphic. Tone: omit / `light` / `accent` / `dark`. Density: default (7 intervals, 1200px tile) /
`dense` (12 intervals, 620px — small surfaces only) / `loose` (5 intervals, 1700px). Override the
tile per surface with `--tile`, the line colour with `--c`. The default reading is a close crop of
terrain — broad lines, open ground — not a wide area packed with hills.

The secondary motif is the globe graticule (`.bkc-orbit` with six `<i>` children), reserved for
hero and closing moments. **The two motifs never share a surface.**

## Frosted glass

For elements floating over a map, a field photo, or the green contour field — never over a plain
page or card. One 5px blur; three variants:

```html
<div class="bkc-glass">…</div>                      <!-- light: over maps, bright photos -->
<nav class="bkc-glass" data-glass="brand">…</nav>   <!-- over green -->
<div class="bkc-glass" data-glass="ink">…</div>     <!-- white text over photos -->
```

In React pass `className="bkc-glass"`. No orange glass, no glass on glass, no long body copy on brand glass.

## Icons

There is no BKC icon set. v1 uses [Lucide](https://lucide.dev) via CDN, wrapped by the `Icon`
component so stroke weight and sizing stay consistent. Use `Icon`, not raw Lucide markup.
