const { Icon, IconButton, Tooltip, Badge, Tabs } = window.BumiKalaChartaDesignSystem_5e0b40;

/* Schematic map canvas. No basemap imagery or vector data was supplied with the brand
   materials, so the canvas renders the brand's own contour + graticule layers with
   plotted control points. Swap in a real tile/vector source in production. */
function MapCanvas({ layers, points, selected, onSelect, insetLeft = 0, insetRight = 0 }) {
  // Controls sit just inside the floating panels so they never slide under the glass.
  const left = insetLeft ? PANEL_GAP + insetLeft + 12 : 16;
  const right = insetRight ? PANEL_GAP + insetRight + 12 : 16;
  const [tool, setTool] = React.useState('pan');
  const tools = [
    ['pan', 'move', 'Geser'],
    ['select', 'mouse-pointer-2', 'Pilih'],
    ['measure', 'ruler', 'Ukur jarak'],
    ['area', 'shapes', 'Ukur luas'],
    ['point', 'map-pin', 'Tambah titik'],
  ];
  return (
    <div style={{ position: 'relative', flex: 1, overflow: 'hidden', background: '#E7E9E4' }}>
      {layers.hillshade && <span className="bkc-contour" data-pattern-tone="light" data-pattern-density="loose" style={{ opacity: 0.9 }} />}
      {layers.kontur && <span className="bkc-contour" data-pattern-tone="light" data-pattern-density="dense" style={{ opacity: 0.85 }} />}
      {layers.graticule && (
        <span style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(to right,rgba(35,40,38,.10) 0 1px,transparent 1px),linear-gradient(to bottom,rgba(35,40,38,.10) 0 1px,transparent 1px),linear-gradient(to right,rgba(35,40,38,.18) 0 1.2px,transparent 1.2px),linear-gradient(to bottom,rgba(35,40,38,.18) 0 1.2px,transparent 1.2px)', backgroundSize: '32px 32px,32px 32px,160px 160px,160px 160px' }} />
      )}
      {layers.batas && (
        <span style={{ position: 'absolute', left: '18%', top: '16%', right: '22%', bottom: '20%', border: '1.6px dashed rgba(234,144,18,.75)', borderRadius: 6 }} />
      )}
      {layers.area && (
        <span style={{ position: 'absolute', left: '30%', top: '32%', width: 280, height: 190, background: 'rgba(53,140,103,.16)', border: '1.6px solid var(--bkc-green)', borderRadius: 4 }} />
      )}

      {layers.titik && points.map((p) => {
        const on = selected === p.id;
        return (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            title={p.id}
            style={{ position: 'absolute', left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%,-100%)', border: 'none', background: 'none', padding: 0, cursor: 'pointer', display: 'grid', justifyItems: 'center' }}
          >
            <span style={{ display: 'grid', placeItems: 'center', width: on ? 30 : 24, height: on ? 30 : 24, borderRadius: 999, background: on ? 'var(--bkc-orange)' : 'var(--bkc-green)', border: '2.5px solid #fff', boxShadow: 'var(--shadow-sm)', transition: 'all var(--duration-base) var(--ease-standard)' }}>
              <Icon name={p.type === 'cors' ? 'satellite-dish' : 'crosshair'} size={on ? 15 : 12} color="#fff" />
            </span>
            <span style={{ marginTop: 4, fontFamily: 'var(--font-data)', fontSize: 9.5, letterSpacing: '.04em', color: 'var(--neutral-800)', background: 'rgba(255,255,255,.82)', padding: '1px 5px', borderRadius: 3, whiteSpace: 'nowrap' }}>{p.id}</span>
          </button>
        );
      })}

      {/* toolbar */}
      <div className="bkc-glass" style={{ position: 'absolute', left, top: 16, display: 'flex', flexDirection: 'column', gap: 4, padding: 5, borderRadius: 'var(--radius-md)' }}>
        {tools.map(([id, icon, label]) => (
          <Tooltip key={id} label={label} side="right">
            <button
              onClick={() => setTool(id)}
              style={{ width: 34, height: 34, display: 'grid', placeItems: 'center', border: 'none', borderRadius: 'var(--radius-sm)', cursor: 'pointer', background: tool === id ? 'var(--surface-brand-soft)' : 'transparent', color: tool === id ? 'var(--bkc-green)' : 'var(--text-muted)' }}
            >
              <Icon name={icon} size={17} />
            </button>
          </Tooltip>
        ))}
      </div>

      {/* zoom */}
      <div className="bkc-glass" style={{ position: 'absolute', right, top: 16, display: 'flex', flexDirection: 'column', gap: 4, padding: 5, borderRadius: 'var(--radius-md)' }}>
        <IconButton label="Perbesar" variant="ghost" size="sm"><Icon name="plus" size={16} /></IconButton>
        <IconButton label="Perkecil" variant="ghost" size="sm"><Icon name="minus" size={16} /></IconButton>
        <IconButton label="Kompas" variant="ghost" size="sm"><Icon name="compass" size={16} /></IconButton>
      </div>

      {/* scale bar + coordinate readout */}
      <div className="bkc-glass" style={{ position: 'absolute', left, bottom: 16, display: 'flex', alignItems: 'flex-end', gap: 'var(--space-5)', padding: 'var(--space-2) var(--space-4)', borderRadius: 'var(--radius-md)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'flex-end', height: 9 }}>
            <span style={{ width: 60, height: 7, background: 'var(--neutral-900)' }} />
            <span style={{ width: 60, height: 7, background: 'var(--bkc-white)', border: '1px solid var(--neutral-900)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: 122, fontFamily: 'var(--font-data)', fontSize: 9, color: 'var(--neutral-800)', marginTop: 3 }}>
            <span>0</span><span>250</span><span>500 m</span>
          </div>
        </div>
        <span style={{ fontFamily: 'var(--font-data)', fontSize: 10.5, color: 'var(--neutral-800)', paddingBottom: 2 }}>
          −6.91750, 107.61910 · 712 m
        </span>
      </div>

      <div style={{ position: 'absolute', right, bottom: 16, display: 'flex', gap: 6 }}>
        <Badge tone="neutral" size="sm">Skala 1:1.000</Badge>
        <Badge tone="neutral" size="sm">Interval kontur 12,5 m</Badge>
      </div>
    </div>
  );
}

Object.assign(window, { MapCanvas });
