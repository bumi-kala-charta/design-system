const { Icon, Switch, Input, Tabs, Badge, Tag } = window.BumiKalaChartaDesignSystem_5e0b40;

const LAYER_GROUPS = [
  {
    head: 'Hasil ukur', items: [
      { id: 'titik', label: 'Titik kontrol', meta: '86 titik' },
      { id: 'kontur', label: 'Kontur', meta: 'Interval 12,5 m' },
      { id: 'area', label: 'Area studi', meta: '412 ha' },
    ],
  },
  {
    head: 'Referensi', items: [
      { id: 'batas', label: 'Batas administrasi', meta: 'BIG 2025' },
      { id: 'graticule', label: 'Grid koordinat', meta: 'UTM 48S' },
      { id: 'hillshade', label: 'Hillshade DEM', meta: 'DEMNAS 8 m' },
    ],
  },
];

function LayerPanel({ layers, toggle }) {
  const [q, setQ] = React.useState('');
  return (
    <aside className="bkc-glass" style={floatingPanel('left', 288)}>
      <div style={{ padding: 'var(--space-4)', borderBottom: '1px solid var(--border-subtle)' }}>
        <Input placeholder="Cari lapisan" iconLeft={<Icon name="search" size={15} />} value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: 'var(--space-4)' }}>
        {LAYER_GROUPS.map((g) => {
          const items = g.items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));
          if (!items.length) return null;
          return (
            <div key={g.head} style={{ marginBottom: 'var(--space-6)' }}>
              <div className="bkc-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>{g.head}</div>
              <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
                {items.map((i) => (
                  <div key={i.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
                    <div style={{ minWidth: 0 }}>
                      <span style={{ display: 'block', fontSize: 'var(--text-body-sm)', color: 'var(--text-strong)' }}>{i.label}</span>
                      <span style={{ fontFamily: 'var(--font-data)', fontSize: 'var(--text-micro)', letterSpacing: '.06em', color: 'var(--text-subtle)' }}>{i.meta}</span>
                    </div>
                    <Switch checked={!!layers[i.id]} onChange={() => toggle(i.id)} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-4)' }}>
          <div className="bkc-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Simbol</div>
          <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
            {[['Titik kontrol GNSS', 'var(--bkc-green)'], ['Titik terpilih', 'var(--bkc-orange)'], ['Batas area studi', 'var(--bkc-green)']].map(([l, c]) => (
              <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <span style={{ width: 12, height: 12, borderRadius: 999, background: c, border: '2px solid #fff', boxShadow: '0 0 0 1px rgba(0,0,0,.1)' }} />
                <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

Object.assign(window, { LayerPanel, LAYER_GROUPS });
