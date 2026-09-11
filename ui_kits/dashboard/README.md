# UI Kit — Dashboard Peta &amp; Proyek

An internal working surface for BKC's survey team: map canvas with layer control, point
inspector, and a project register. Built from this design system's components.

Open `index.html`. Design size **1440×820px** (fixed-height app shell, no page scroll).

## Screens

| File | Region | What it shows |
|---|---|---|
| `Chrome.jsx` | `Rail`, `TopBar` | 64px ink rail with section icons; breadcrumb, CRS readout, export action |
| `LayerPanel.jsx` | Left panel, 288px | Layer switches grouped into Hasil ukur / Referensi, layer search, symbol legend |
| `MapCanvas.jsx` | Centre | Contour + graticule layers, plotted control points, tool strip, zoom, scale bar |
| `InspectorPanel.jsx` | Right panel, 340px | Selected point: metadata / residuals / photos tabs, approve action, empty state |
| `ProjectTable.jsx` | Alternate view | Project register — stat row, status tabs, search, dense table |
| `Dashboard.jsx` | — | State, export dialog, toast |

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
