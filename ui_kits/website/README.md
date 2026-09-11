# UI Kit — Website Komunitas

A click-through recreation of the BKC public site, built entirely from this design system's
components (`window.BumiKalaChartaDesignSystem_5e0b40`).

Open `index.html`. Design width **1280px**.

## Screens

| File | Screen | What it shows |
|---|---|---|
| `HomeScreen.jsx` | Beranda | Hero, stat band, three service cards, agenda list, contour CTA band |
| `ProjectsScreen.jsx` | Proyek | Portfolio grid with tab + tag filtering, mono metadata per project |
| `TrainingScreen.jsx` | Pelatihan | Orbit-motif hero, class list filtered by level, sticky preference panel |
| `DiscussionScreen.jsx` | Diskusi | Forum thread list, next-session brand card, archive readout |
| `AboutScreen.jsx` | Tentang | Story, values, committee list, contact form |
| `Shared.jsx` | — | `SiteHeader`, `SiteFooter`, `Photo` placeholder |
| `App.jsx` | — | Page state, join dialog, toast |

## Interactions that work

- Header and in-page links switch screens.
- "Gabung komunitas" / "Jadi anggota" / any class row opens the membership dialog; submitting fires a toast.
- Project page: tabs (Semua / Berjalan / Selesai) and tag chips both filter the grid, including an empty state.
- Training page: level pills filter the class list.
- Contact form submit fires a toast.

## Known gaps

- **Photography.** No image library was supplied with the brand materials. Every photographic slot
  renders `<Photo note="…" />` — a paper-coloured placeholder naming the shot it needs. Replace these
  with real files before any of this is used publicly.
- **Copy** is representative, written to the tone rules in the root `readme.md`. Project names,
  clients, figures, and people are plausible placeholders, not real records.
