const { Button, Icon, Card, Badge, Tag, Tabs, SectionHeading, CoordinateReadout, Stat } = window.BumiKalaChartaDesignSystem_5e0b40;

const BKC_PROJECTS = [
  { title: 'Topografi Waduk Jatigede', client: 'Balai Besar Wilayah Sungai Cimanuk', year: '2026', scale: '1:1.000', area: '412 ha', status: 'Berjalan', tone: 'accent', tags: ['Topografi', 'GNSS RTK'] },
  { title: 'GNSS CORS Kabupaten Sleman', client: 'Dinas Pertanahan & Tata Ruang Sleman', year: '2026', scale: '±8 mm', area: '6 stasiun', status: 'Berjalan', tone: 'accent', tags: ['CORS', 'Jaring kontrol'] },
  { title: 'LiDAR Koridor Tol Cisumdawu', client: 'PT Waskita Karya', year: '2025', scale: '1:2.500', area: '12 km²', status: 'Selesai', tone: 'success', tags: ['LiDAR', 'Fotogrametri'] },
  { title: 'Batas Desa Partisipatif Garut', client: 'Pemkab Garut & 14 desa', year: '2025', scale: '1:5.000', area: '14 desa', status: 'Selesai', tone: 'success', tags: ['Kadaster', 'Partisipatif'] },
  { title: 'Batimetri Pelabuhan Cirebon', client: 'Pelindo Regional 2', year: '2025', scale: '1:1.000', area: '86 ha', status: 'Selesai', tone: 'success', tags: ['Batimetri', 'Singlebeam'] },
  { title: 'Peta Rawan Longsor Garut Selatan', client: 'BPBD Kabupaten Garut', year: '2024', scale: '1:25.000', area: '1.140 km²', status: 'Arsip', tone: 'neutral', tags: ['Kebencanaan', 'Analisis spasial'] },
];

function ProjectsScreen({ go }) {
  const [tab, setTab] = React.useState('semua');
  const [filter, setFilter] = React.useState('Semua');
  const filters = ['Semua', 'Topografi', 'GNSS RTK', 'LiDAR', 'Batimetri', 'Kadaster'];
  const rows = BKC_PROJECTS.filter((p) => {
    const byTab = tab === 'semua' || (tab === 'aktif' ? p.status === 'Berjalan' : p.status === 'Arsip' || p.status === 'Selesai');
    const byTag = filter === 'Semua' || p.tags.includes(filter);
    return byTab && byTag;
  });
  return (
    <>
      <section style={{ padding: '40px var(--gutter-page) 0' }}>
        <div className="bkc-eyebrow" style={{ color: 'var(--text-brand)' }}>Portofolio</div>
        <h1 style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-display-2)', maxWidth: '20em' }}>Proyek yang sudah kami ukur.</h1>
        <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-lg)', color: 'var(--text-muted)', maxWidth: 'var(--width-prose)' }}>
          48 pekerjaan survei dan pemetaan sejak 2022, dikerjakan bersama anggota komunitas.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-11)', marginTop: 'var(--space-8)' }}>
          <Stat value="48" label="Proyek" />
          <Stat value="9" label="Provinsi" />
          <Stat value="1.140 km²" label="Cakupan terbesar" mono />
        </div>
      </section>

      <section style={{ padding: 'var(--space-9) var(--gutter-page) 0' }}>
        <Tabs
          value={tab}
          onChange={setTab}
          items={[{ value: 'semua', label: 'Semua', count: 48 }, { value: 'aktif', label: 'Berjalan', count: 18 }, { value: 'arsip', label: 'Selesai & arsip', count: 30 }]}
        />
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginTop: 'var(--space-5)' }}>
          {filters.map((f) => (
            <Tag key={f} interactive selected={filter === f} onClick={() => setFilter(f)}>{f}</Tag>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--gap-card)', marginTop: 'var(--space-7)' }}>
          {rows.map((p) => (
            <Card key={p.title} interactive padding="0">
              <Photo note="Peta hasil — cuplikan lembar peta" height={148} radius="0" />
              <div style={{ padding: 'var(--pad-card)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-3)' }}>
                  <Badge tone={p.tone} dot={p.status === 'Berjalan'}>{p.status}</Badge>
                  <span className="bkc-eyebrow">{p.year}</span>
                </div>
                <h3 style={{ marginTop: 'var(--space-4)' }}>{p.title}</h3>
                <p style={{ marginTop: 4, fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{p.client}</p>
                <CoordinateReadout
                  style={{ marginTop: 'var(--space-4)' }}
                  dense
                  items={[{ label: 'Skala', value: p.scale }, { label: 'Cakupan', value: p.area }]}
                />
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'var(--space-4)' }}>
                  {p.tags.map((t) => <Tag key={t} style={{ padding: '4px 10px', fontSize: 'var(--text-caption)' }}>{t}</Tag>)}
                </div>
              </div>
            </Card>
          ))}
        </div>
        {rows.length === 0 && (
          <div style={{ padding: 'var(--space-12)', textAlign: 'center', color: 'var(--text-subtle)' }}>
            <Icon name="search-x" size={30} style={{ margin: '0 auto 12px' }} />
            <p style={{ fontSize: 'var(--text-body-sm)' }}>Belum ada proyek dengan filter itu.</p>
          </div>
        )}
      </section>
    </>
  );
}

Object.assign(window, { ProjectsScreen, BKC_PROJECTS });
