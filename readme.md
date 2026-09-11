# Bumi Kala Charta — Design System

**Bumi Kala Charta (BKC)** is an Indonesian geospatial community and consultancy working in
geodesy and geomatics: survey and mapping projects, training classes, and open monthly
discussions. Based in Bandung, West Java. Audience is threefold and it shapes everything here —
students and fresh geodesy graduates, working geospatial professionals, and government or
institutional clients.

Copy is **Bahasa Indonesia first**, English where an international reader is expected.

## Sources this system was built from

| Source | What it gave us | Access note |
|---|---|---|
| `BUMI KALA CHARTA DESIGN GUIDELINE.pdf` (17 pp, user upload) | Typeface (IBM Plex Sans), the six palette values, logo variation names (horizontal / vertical / primary), the "Patern" and "Application" sections (Instagram, stickers) | Text extracted successfully. **The page artwork could not be rendered or extracted** — vector rendering was unavailable in the build environment, so the logo, pattern artwork, and application layouts were never seen. Everything visual below was rebuilt from the extracted text plus the two logo files the user supplied separately. |
| `logo-tupai.png` (user upload) | The squirrel mark, flat `#EA9012` | Trimmed to `assets/logo-mark-squirrel.png` + four colourways |
| `BUMI KALA CHARTA LOGO.png` (user upload) | The full circular emblem | Trimmed to `assets/logo-emblem.png` |
| User brief | Primary `#358C67`, accent `#EA9012`; "minimalistic asset about earth — contours, globe, satellites"; community + company in geodesy/geomatics; projects, trainings, discussions | — |
| User direction choices | Visual mood: **warm & community-first**; brand pattern: **topographic contours** (primary) with **globe/orbit** as secondary; leading green `#358C67`; mark may stand alone as an icon | Chosen from built mockups, kept in `options/` |

No codebase, Figma file, or existing website was provided. There is no photography library — every
photographic slot in this system is an explicit labelled placeholder.

## What's here

| Path | What it is |
|---|---|
| `styles.css` | The one file consumers link. `@import`s only. |
| `tokens/` | `fonts.css` `colors.css` `typography.css` `spacing.css` `shape.css` `patterns.css` `contour-plates.css` `base.css` |
| `assets/` | Emblem, squirrel mark (4 colourways), 4 contour plates (SVG), self-hosted IBM Plex woff2 |
| `components/` | 23 React primitives in six groups — see below |
| `guidelines/` | 23 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `ui_kits/website/` | Community website — 5 click-through screens |
| `ui_kits/dashboard/` | Map & project dashboard — map view + project register |
| `slides/` | 7 slide-type specimens at 1280×720 |
| `social/` | 4 Instagram frame specimens at 1080×1350 |
| `templates/slide-deck/` | Working 7-slide deck template (`SlideDeck.dc.html`) |
| `templates/instagram-carousel/` | Working 5-frame carousel template (`InstagramCarousel.dc.html`) |
| `site/` | Team-facing documentation website (6 pages, embeds the real specimens). Root `index.html` redirects here so GitHub Pages works unconfigured. |
| `options/` | The mood and pattern mockups the direction was chosen from — reference, not production |
| `SKILL.md` | Agent Skills entry point |

## Components

Every component is `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, with one `@dsCard` per
directory. Read the `.prompt.md` for usage — it carries the rules, not just the signature.

**`components/brand/`** — `Logo` · `Icon` · `ContourField` · `CoordinateReadout`
**`components/core/`** — `Button` · `IconButton` · `Badge` · `Tag` · `Card` · `Stat` · `SectionHeading`
**`components/forms/`** — `Input` · `Select` · `Checkbox` · `Radio` · `Switch`
**`components/navigation/`** — `NavBar` · `Tabs`
**`components/feedback/`** — `Dialog` · `Toast` · `Tooltip`
**`components/patterns/`** — `EventCard` · `AvatarStack`

### Intentional additions

The guideline is a brand document, not a component library — it defines no UI inventory. The set
above is therefore an authored standard set. Four entries are BKC-specific rather than generic:

- **`Icon`** — a wrapper over the Lucide glyph set, because the guideline names no icon system.
- **`ContourField`** — the brand pattern as a component, so the contour and orbit motifs are applied
  consistently instead of hand-rolled per surface.
- **`CoordinateReadout`** — a mono label/value list. A geospatial brand needs a canonical way to
  present coordinates, datums, scales, and accuracies.
- **`EventCard`** / **`AvatarStack`** — the community's two recurring content shapes (a class listing,
  a group of members).

---

# CONTENT FUNDAMENTALS

## Voice

BKC writes like a competent senior who is glad you asked. Two audiences sit in the same sentence:
a student who does not yet know what a residual is, and a client who wants to know the accuracy
figure. So: **plain words for the concept, exact numbers for the fact.**

## Rules

**Language.** Bahasa Indonesia is primary. Technical terms stay in their working form — GNSS, CORS,
LiDAR, DEM, QGIS, PDOP, orthometric — never translated into awkward Indonesian. Sentences are short.

**Person.** "Kami" for BKC. "Kamu" for the reader — informal, singular, never "Anda". This is
deliberate: "Anda" makes a community sound like a bank. Institutional documents (proposals,
official letters) switch to "Bapak/Ibu"; nothing on the website or in social does.

> Ruang terbuka bagi mahasiswa dan praktisi geodesi–geomatika untuk berbagi ilmu, mengerjakan
> proyek nyata, dan saling menemukan.

> Ceritakan wilayah dan targetnya — kami susun metodenya bersama.

**Casing.** Sentence case for headings and buttons. Uppercase is reserved for two things only:
the wordmark and mono eyebrow labels. No Title Case Headlines Like This.

**Numbers.** Indonesian convention, always: `1.204` (dot = thousands), `±0,8 cm` (comma = decimal),
`1:1.000` for scale, `412 ha`, `12 km²`, `−6.9175, 107.6191` for coordinates. A tolerance always
carries its `±`. Dates are `19 September` or `Sabtu, 19 September` — never `19/09`.

**Honesty about error.** This is the brand's most distinctive content trait. BKC states what a
number is worth: *"Residu baseline dilaporkan apa adanya — termasuk yang gagal."* Marketing claims
without a figure behind them do not appear.

**Buttons and labels.** Verb-first, two to four words: `Jadi anggota` · `Lihat proyek` ·
`Daftar kelas terdekat` · `Kirim permintaan` · `Ekspor`. Never `Klik di sini`, never `Submit`.

**Eyebrows.** Mono, uppercase, under four words, factual not teasing: `Tiga lini kerja` ·
`Agenda` · `Portofolio` · `Diskusi bulanan` · `01 — 03`.

**Empty and error states** name the fix, in one sentence: *"Belum ada proyek dengan filter itu."*
*"3 titik tanpa tinggi ellipsoid."*

**Social copy** is looser than the website — the guideline's own application pages set the tone with
`SAVE / Biar Ga Lupa`. Casual contractions ("biar", "ga") belong on Instagram and nowhere else.

**Emoji: no.** Not in UI, not in headings, not in social. Icons carry that job. Two unicode
characters are in constant use as typography, not decoration: `±` and `·` (middle dot as a meta
separator: `09.00–16.00 · Bandung & daring · 12 kursi tersisa`). En-dashes for ranges, em-dashes
for asides.

**Never:** exclamation marks in UI copy · "revolutionary", "cutting-edge", "solusi terbaik" ·
rounded-up accuracy figures · a claim without a number when a number exists.

---

# VISUAL FOUNDATIONS

## Colour

`#358C67` — the muted **brand green** — leads: navigation, links, primary hover, active states,
soft tints. `#0D8C23` — **bright green** — is the emblem's canopy colour and a success signal, never
a large field. `#EA9012` — **orange** — is the squirrel's colour and the system's single accent: one
conversion action per view, the soonest event in a list, one emphasised figure in a readout. Orange
never carries a selection state (that is always green) and never fills more than a quarter of a
screen except in social frames.

Neutrals are **warm**, anchored on the guideline's `#EDECE9` paper. There is no blue-grey anywhere
in this system; a cool grey next to `#358C67` reads as an error. Backgrounds alternate white and
paper; a section is either white, paper, brand green, or ink `#1B221E` — never a fifth thing, and
never more than two background colours in one composition.

Gradients: **none.** Not in buttons, not in heroes, not behind text. The brand's depth comes from
line pattern and warm shadow, not from blends.

## Type

**IBM Plex Sans** does all the talking — display, headings, body, UI. **IBM Plex Mono** does all the
measuring — coordinates, datums, accuracies, scales, eyebrow labels, table figures, page numbers.
That split is the type system: if a number is a measurement, it is mono; if it is a marketing count,
it is sans. There is no third typeface and no serif.

Display sizes are tightly tracked (`-0.03em`) and set at 1.06 leading; body opens up to 1.6 and never
exceeds 38em measure. Weights used: 400, 500, 600, 700 — the wordmark is the only 700.

## Pattern & imagery

**Topographic contours** are the primary motif, and they are real contour geometry: a synthetic
heightfield traced with marching squares, so every line is an isoline. That means nested closed
loops, an index contour carrying double weight, and spacing that tightens on steep ground and opens
on flat ground — the behaviour of an actual map sheet, not a stack of evenly offset curves. The
default reading is deliberately a **close crop** of terrain: broad sweeping lines with open ground
between them, one or two landforms in frame — not a wide area packed with hills. Four plates ship in
`/assets`: `pattern-contour.svg` (default, 7 intervals at a 1200px tile), `pattern-contour-loose.svg`
(5 intervals at 1700px, for full-bleed bands), `pattern-contour-dense.svg` (12 intervals at 620px,
only for small surfaces that want texture), and `pattern-contour-summit.svg` (a composed 16:9 hero
terrain — dominant summit lower-left, secondary rise upper-right). The plates
are applied as CSS masks, so line colour is just `background-color`; `tokens/contour-plates.css`
carries the same three inlined as data URIs, since mask sources are CORS-restricted. Regenerate the
plates rather than hand-editing them. The pattern is always a background layer at low alpha, never a
foreground graphic. **Globe graticule + orbit arcs** are the secondary motif, reserved for hero and
cover moments. The two never share a surface. Neither ever sits directly under body copy at dense
spacing.

In markup both motifs are one absolutely-positioned empty element behind content:
`<span class="bkc-contour" data-pattern-tone="light" data-pattern-density="loose"></span>`, or
`<span class="bkc-orbit" data-pattern-tone="dark"><i></i>×6</span>`. Tone is `light` / `accent` /
`dark` (omit for on-brand green); density is `dense` (620px tile) / `loose` (1700px tile) against
the 1200px default, overridable per surface with `--tile`; `bkc-contour--ridge` switches to the summit
plate, which covers the frame and ignores `--tile`. In React use `<ContourField motif tone density>`.

Photography should be **warm, on-site, and unposed** — field measurement, instruments on tripods,
people at a whiteboard — with the paper tone in the frame rather than a cool blue cast. No stock
imagery, no grain filter, no black and white. None was supplied: every slot is a labelled
placeholder and must be filled before public use.

Illustration: **none.** The brand does not draw. Where an illustration would go, the contour field
goes instead.

## Shape, shadow, and depth

Radii climb with the element: 6/8px for chips and small tiles, 12px for form fields, 16px for list
rows, **20px for cards**, 24px for bands and dialogs, 28px for full-bleed hero blocks, and a full
pill for every button at every size. Buttons are never square-cornered.

Cards carry a **hairline border at rest** (`#EAE8E3`) and **no shadow**. The shadow is the hover state —
`0 14px 30px rgba(27,34,30,.09)` plus a 3px lift. Border and shadow never appear together at rest.
All shadows are warm ink (`rgba(27,34,30,…)`), never black, never coloured.

Transparency and blur appear in exactly two places: the sticky site header (white at 92% with an 8px
blur) and the dialog overlay (warm ink at 44% with a 3px blur). Nowhere else — no frosted cards, no
glass panels.

## Motion

Short, eased, no bounce. `cubic-bezier(.2,0,0,1)`; 120ms for colour, 180ms for transform, 280ms at
most. Cards lift −3px; buttons scale to .985 on press. Nothing springs, nothing wobbles, nothing
auto-plays, nothing loops. The one signature transition is the **primary button's ink→green hover**.

## States

- **Hover** — filled buttons shift hue (ink → green, green → darker green, orange → darker orange), never
  merely darken; ghost and secondary pick up the `#F4F3F0` wash; cards lift and gain their shadow;
  links go `#358C67` → `#2B7355`.
- **Press** — one step darker plus a .985 scale. No colour inversion.
- **Focus** — 2px green outline at 2px offset; form fields additionally get a 3px soft green ring.
  Focus is never removed.
- **Selected** — green: 2px underline on tabs, soft green fill plus green border on tags, green fill
  on checkboxes and radios, green track on switches.
- **Disabled** — 45% opacity, `not-allowed`. No greyscale swap.

## Layout

1280px content width for public pages with a 56px gutter (32px compact); the dashboard is a fixed
1440×820 app shell with no page scroll. Spacing is a strict 4px scale. Sibling groups are laid out
with flex/grid and `gap` — never margins between inline siblings.

Fixed elements are limited to: the sticky site header, the dashboard's 64px rail and its two side
panels, the map's floating tool/zoom clusters, and toasts at 24px bottom-right. Everything else
scrolls.

---

# ICONOGRAPHY

**The guideline defines no icon system.** BKC's own visual vocabulary contains exactly one drawn
mark — the squirrel — and the emblem it lives in.

- **Icons: Lucide, from CDN** (`lucide@0.451.0`), at **1.6px stroke** and 15/18/20–22px sizes.
  ⚠️ **This is a substitution, not the brand's own set.** It was chosen because its line weight and
  rounded caps sit closest to the emblem's outlined mark. If BKC has an icon set, replacing Lucide
  is a one-file change (`components/brand/Icon.jsx`).
  Icons in constant use: `map` `satellite` `satellite-dish` `crosshair` `layers` `ruler` `compass`
  `graduation-cap` `messages-square` `users` `calendar-days` `upload` `file-text` `search`.
- **No icon font.** No sprite sheet. No PNG icons.
- **Hand-rolled SVG icons: never.** Where a glyph is missing, use a Lucide near-match or plain type.
- **The squirrel mark** is the only bespoke graphic and may stand alone (avatar, favicon, sticker,
  watermark, quote-slide accent) in four colourways: orange, brand green, white, ink. Never
  outlined, rotated, flipped, or recoloured beyond those four.
- **The emblem** (`assets/logo-emblem.png`) is a fixed raster asset. Never recoloured, never
  reconstructed, minimum 28px. ⚠️ Only a PNG exists — **a vector (SVG/AI) master is needed** for print
  and large-format use.
- **Emoji: never.** Unicode as icon: only `±` and `·`, and both are typography.

---

## Known gaps

1. **Vector logo files.** Emblem and mark exist as PNG only. Ask BKC for SVG/AI masters.
2. **The guideline PDF's artwork was never seen** — pattern pages, logo lockups, and Instagram
   application layouts were rebuilt from text plus the user's direction, not copied. Worth a review
   against the real pages.
3. **Vision, mission, and introduction copy** are Lorem ipsum in the source PDF. The `Tentang` screen
   uses written-from-brief copy that BKC must replace.
4. **No photography.** Every image slot is a labelled placeholder.
5. **No basemap or vector data** for the dashboard — its map canvas is schematic.
6. **Fonts are Google Fonts IBM Plex** (SIL OFL 1.1), self-hosted latin subset. Matches the guideline
   exactly; no substitution was needed.
"# design-system" 
