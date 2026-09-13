# UI Kit — Dashboard Peta &amp; Proyek

An internal working surface for BKC's survey team: map canvas with layer control, point
inspector, and a project register. Built from this design system's components.

Open `index.html`. Design size **1440×820px** (fixed-height app shell, no page scroll).

## Screens

| File | Region | What it shows |
|---|---|---|
| `Chrome.jsx` | `Rail`, `TopBar` | 64px ink rail with section icons; breadcrumb, CRS readout, export action |
| `LayerPanel.jsx` | Floating left, 288px | Layer switches grouped into Hasil ukur / Referensi, layer search, symbol legend |
| `MapCanvas.jsx` | Full view | Contour + graticule layers, plotted control points, tool strip, zoom, scale bar |
| `InspectorPanel.jsx` | Floating right, 340px | Selected point: metadata / residuals / photos tabs, approve action, compact empty-state hint |
| `ProjectTable.jsx` | Alternate view | Project register — stat row, status tabs, search, dense table |
| `Dashboard.jsx` | — | State, export dialog, toast |

The map fills the whole view. The layer panel, inspector, tool strip, zoom, and scale readout float
over it as `.bkc-glass` (light variant, 5px blur), 16px from the edges; `MapCanvas` takes
`insetLeft` / `insetRight` so its controls clear the panels.

## Interactions that work

- Rail switches between the map view (`Peta kerja`) and the project register (`Proyek`); other rail
  items are visual only.
- Layer switches toggle real map layers, including hillshade (off by default).
- Clicking a map point selects it and repopulates the inspector; closing it shows the empty state.
- Inspector tabs switch between metadata, residual bars, and photo slots.
- Project register: status tabs and the search field both filter; clicking a row opens that project
  on the map. Export opens a dialog that fires a toast.

## Known gaps

- **No basemap.** No tile source, vector data, or imagery came with the brand materials, so the map
  canvas is schematic — the brand's own contour and graticule layers with plotted points. Wire a
  real basemap (or the team's own GeoPackage) in production; the chrome around it is the deliverable
  here.
- Coordinates, residuals, and project records are plausible placeholders in Indonesian survey
  conventions (UTM 48S, comma decimals), not real measurements.
