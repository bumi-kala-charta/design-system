const { Icon, IconButton, Tooltip, Badge, Button } = window.BumiKalaChartaDesignSystem_5e0b40;

const DASH_ASSETS = '../../assets';

/* Left rail: emblem, section icons, account. 64px wide, ink surface. */
function Rail({ section, onSection }) {
  const items = [
    { id: 'peta', icon: 'map', label: 'Peta kerja' },
    { id: 'proyek', icon: 'folder-open', label: 'Proyek' },
    { id: 'titik', icon: 'crosshair', label: 'Titik kontrol' },
    { id: 'unggah', icon: 'upload', label: 'Unggah data' },
    { id: 'laporan', icon: 'file-text', label: 'Laporan' },
  ];
  return (
    <aside style={{ width: 64, flex: '0 0 auto', background: 'var(--surface-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '14px 0', gap: 'var(--space-2)' }}>
      <img src={`${DASH_ASSETS}/logo-emblem.png`} alt="BKC" style={{ width: 36, height: 36, marginBottom: 'var(--space-4)' }} />
      {items.map((it) => {
        const on = section === it.id;
        return (
          <Tooltip key={it.id} label={it.label} side="right">
            <button
              onClick={() => onSection(it.id)}
              style={{ width: 42, height: 42, display: 'grid', placeItems: 'center', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', background: on ? 'var(--bkc-green)' : 'transparent', color: on ? '#fff' : 'rgba(255,255,255,.6)' }}
            >
              <Icon name={it.icon} size={19} />
            </button>
          </Tooltip>
        );
      })}
      <div style={{ marginTop: 'auto', display: 'grid', gap: 'var(--space-2)', justifyItems: 'center' }}>
        <Tooltip label="Pengaturan" side="right">
          <button style={{ width: 42, height: 42, display: 'grid', placeItems: 'center', border: 'none', borderRadius: 'var(--radius-md)', background: 'transparent', color: 'rgba(255,255,255,.6)', cursor: 'pointer' }}>
            <Icon name="settings" size={19} />
          </button>
        </Tooltip>
        <span style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--surface-brand-soft)', color: 'var(--green-200)', display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 500 }}>FS</span>
      </div>
    </aside>
  );
}

/* Top bar: project breadcrumb, CRS readout, actions. */
function TopBar({ project, onExport }) {
  return (
    <header style={{ height: 56, flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 var(--space-5)', background: 'var(--surface-page)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <span className="bkc-eyebrow">Proyek</span>
        <Icon name="chevron-right" size={13} color="var(--text-subtle)" />
        <b style={{ fontSize: 'var(--text-body)', fontWeight: 'var(--weight-semibold)', color: 'var(--text-strong)' }}>{project}</b>
        <Badge tone="accent" dot>Berjalan</Badge>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <span style={{ fontFamily: 'var(--font-data)', fontSize: 'var(--text-caption)', color: 'var(--text-subtle)' }}>WGS 84 / UTM 48S · EPSG:32748</span>
        <div style={{ width: 1, height: 22, background: 'var(--border-subtle)' }} />
        <IconButton label="Bagikan" variant="ghost"><Icon name="share-2" size={18} /></IconButton>
        <IconButton label="Riwayat" variant="ghost"><Icon name="history" size={18} /></IconButton>
        <Button size="sm" variant="brand" iconLeft={<Icon name="download" size={15} />} onClick={onExport}>Ekspor</Button>
      </div>
    </header>
  );
}

Object.assign(window, { Rail, TopBar, DASH_ASSETS });
