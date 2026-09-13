const { Icon, Button, Badge, Tabs, CoordinateReadout, Stat, Card, IconButton } = window.BumiKalaChartaDesignSystem_5e0b40;

function InspectorPanel({ point, onClose }) {
  const [tab, setTab] = React.useState('Metadata');
  if (!point) {
    return (
      <aside className="bkc-glass" style={{ ...floatingPanel('right', 340), bottom: 'auto', flexDirection: 'row', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4) var(--space-5)' }}>
        <Icon name="mouse-pointer-click" size={20} color="var(--text-muted)" />
        <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>Pilih satu titik kontrol di peta untuk melihat metadatanya.</p>
      </aside>
    );
  }
  return (
    <aside className="bkc-glass" style={floatingPanel('right', 340)}>
      <div style={{ padding: 'var(--space-5)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 'var(--space-3)' }}>
          <div>
            <div className="bkc-eyebrow">{point.type === 'cors' ? 'Stasiun CORS' : 'Titik kontrol'}</div>
            <h3 style={{ marginTop: 6, fontSize: 'var(--text-title-2)', fontFamily: 'var(--font-data)', letterSpacing: '.02em' }}>{point.id}</h3>
          </div>
          <IconButton label="Tutup" variant="ghost" size="sm" onClick={onClose}><Icon name="x" size={16} /></IconButton>
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 'var(--space-4)' }}>
          <Badge tone={point.quality === 'Fix' ? 'success' : 'warning'} dot>{point.quality}</Badge>
          <Badge tone="neutral" size="sm">Orde {point.order}</Badge>
        </div>
      </div>

      <div style={{ padding: '0 var(--space-5)', borderBottom: '1px solid var(--border-subtle)' }}>
        <Tabs items={['Metadata', 'Residu', 'Foto']} value={tab} onChange={setTab} />
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: 'var(--space-5)' }}>
        {tab === 'Metadata' && (
          <>
            <CoordinateReadout
              label="Koordinat"
              items={[
                { label: 'Easting', value: point.e },
                { label: 'Northing', value: point.n },
                { label: 'Tinggi ellipsoid', value: point.h },
                { label: 'Tinggi orthometrik', value: point.ho },
              ]}
            />
            <CoordinateReadout
              style={{ marginTop: 'var(--space-6)' }}
              label="Pengukuran"
              items={[
                { label: 'Metode', value: 'GNSS statik' },
                { label: 'Durasi', value: '2 j 15 m' },
                { label: 'Alat', value: 'Trimble R10' },
                { label: 'Diukur', value: '14 Agu 2026' },
                { label: 'Surveyor', value: 'Dwi W.' },
              ]}
            />
            <CoordinateReadout
              style={{ marginTop: 'var(--space-6)' }}
              label="Ketelitian"
              items={[
                { label: 'σ horizontal', value: point.sh, emphasis: true },
                { label: 'σ vertikal', value: point.sv },
                { label: 'PDOP', value: '1,4' },
              ]}
            />
          </>
        )}
        {tab === 'Residu' && (
          <div>
            <div style={{ display: 'flex', gap: 'var(--space-7)', marginBottom: 'var(--space-5)' }}>
              <Stat value={point.sh} label="σ horizontal" mono size="sm" />
              <Stat value={point.sv} label="σ vertikal" mono size="sm" />
            </div>
            <div className="bkc-eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Residu per baseline (mm)</div>
            <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
              {[['BM-01 → CORS-SLM', 4.2, 0.42], ['BM-01 → BM-02', 6.8, 0.68], ['BM-01 → BM-05', 3.1, 0.31], ['BM-01 → BM-07', 9.4, 0.94]].map(([l, v, w]) => (
                <div key={l}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-data)', fontSize: 'var(--text-caption)', color: 'var(--text-default)' }}>
                    <span>{l}</span><span style={{ color: v > 8 ? 'var(--bkc-orange)' : 'var(--text-subtle)' }}>{String(v).replace('.', ',')}</span>
                  </div>
                  <div style={{ height: 5, background: 'var(--neutral-150)', borderRadius: 999, marginTop: 5, overflow: 'hidden' }}>
                    <div style={{ width: `${w * 100}%`, height: '100%', background: v > 8 ? 'var(--bkc-orange)' : 'var(--bkc-green)', borderRadius: 999 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab === 'Foto' && (
          <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
            <div className="ph" style={{ height: 150, borderRadius: 'var(--radius-md)', background: 'var(--bkc-paper)', display: 'grid', placeItems: 'center', textAlign: 'center', color: 'var(--text-subtle)', fontSize: 'var(--text-caption)', padding: '0 20px' }}>
              Foto dokumentasi titik — tampak dekat
            </div>
            <div className="ph" style={{ height: 150, borderRadius: 'var(--radius-md)', background: 'var(--bkc-paper)', display: 'grid', placeItems: 'center', textAlign: 'center', color: 'var(--text-subtle)', fontSize: 'var(--text-caption)', padding: '0 20px' }}>
              Foto dokumentasi titik — tampak sekitar
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: 'var(--space-4) var(--space-5)', borderTop: '1px solid var(--border-subtle)', display: 'flex', gap: 'var(--space-2)' }}>
        <Button variant="secondary" size="sm" fullWidth iconLeft={<Icon name="pencil" size={15} />}>Ubah</Button>
        <Button variant="brand" size="sm" fullWidth iconLeft={<Icon name="check" size={15} />}>Setujui</Button>
      </div>
    </aside>
  );
}

Object.assign(window, { InspectorPanel });
