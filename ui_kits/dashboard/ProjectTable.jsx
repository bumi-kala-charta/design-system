const { Icon, Button, Badge, Tag, Tabs, Input, Select, Stat, Card, IconButton, Checkbox } = window.BumiKalaChartaDesignSystem_5e0b40;

const DASH_ROWS = [
  ['BKC-2026-014', 'Topografi Waduk Jatigede', 'BBWS Cimanuk', 'Berjalan', 'accent', '412 ha', '1:1.000', '86 / 86', 'Tim Topografi'],
  ['BKC-2026-011', 'GNSS CORS Kab. Sleman', 'Dinas Pertanahan Sleman', 'Berjalan', 'accent', '6 stasiun', '±8 mm', '6 / 6', 'Tim GNSS'],
  ['BKC-2026-009', 'Pemetaan Drone Kampus UPI', 'Universitas Pendidikan Indonesia', 'Revisi', 'warning', '38 ha', '1:500', '24 / 26', 'Tim Drone'],
  ['BKC-2025-042', 'LiDAR Koridor Tol Cisumdawu', 'PT Waskita Karya', 'Selesai', 'success', '12 km²', '1:2.500', '148 / 148', 'Tim LiDAR'],
  ['BKC-2025-038', 'Batas Desa Partisipatif Garut', 'Pemkab Garut', 'Selesai', 'success', '14 desa', '1:5.000', '212 / 212', 'Tim Kadaster'],
  ['BKC-2025-031', 'Batimetri Pelabuhan Cirebon', 'Pelindo Regional 2', 'Selesai', 'success', '86 ha', '1:1.000', '64 / 64', 'Tim Hidrografi'],
];

const TH = { textAlign: 'left', padding: '0 var(--space-4) var(--space-3)', fontFamily: 'var(--font-data)', fontSize: 'var(--text-micro)', letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--text-subtle)', fontWeight: 'var(--weight-regular)', whiteSpace: 'nowrap' };
const TD = { padding: 'var(--space-4)', fontSize: 'var(--text-body-sm)', color: 'var(--text-default)', borderTop: '1px solid var(--border-subtle)', whiteSpace: 'nowrap' };

function ProjectTable({ onOpen }) {
  const [status, setStatus] = React.useState('semua');
  const [q, setQ] = React.useState('');
  const rows = DASH_ROWS.filter((r) => (status === 'semua' || r[3].toLowerCase() === status) && (r[1] + r[2] + r[0]).toLowerCase().includes(q.toLowerCase()));
  return (
    <div style={{ flex: 1, overflow: 'auto', padding: 'var(--space-6)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-7)', marginBottom: 'var(--space-6)' }}>
        <Stat value="18" label="Proyek berjalan" size="sm" />
        <Stat value="30" label="Selesai" size="sm" />
        <Stat value="1.204" label="Titik kontrol terukur" size="sm" mono />
        <Stat value="±0,8 cm" label="Akurasi rata-rata" size="sm" mono tone="accent" />
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
        <Tabs
          value={status}
          onChange={setStatus}
          items={[{ value: 'semua', label: 'Semua', count: 48 }, { value: 'berjalan', label: 'Berjalan', count: 18 }, { value: 'revisi', label: 'Revisi', count: 3 }, { value: 'selesai', label: 'Selesai', count: 30 }]}
        />
        <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'center' }}>
          <Input placeholder="Cari proyek atau klien" iconLeft={<Icon name="search" size={15} />} value={q} onChange={(e) => setQ(e.target.value)} style={{ width: 260 }} />
          <IconButton label="Filter" variant="outline"><Icon name="sliders-horizontal" size={17} /></IconButton>
          <Button size="sm" variant="brand" iconLeft={<Icon name="plus" size={15} />}>Proyek baru</Button>
        </div>
      </div>

      <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface-page)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr style={{ background: 'var(--neutral-50)' }}>
            <th style={{ ...TH, paddingTop: 'var(--space-4)', width: 40 }}></th>
            <th style={{ ...TH, paddingTop: 'var(--space-4)' }}>Kode</th>
            <th style={{ ...TH, paddingTop: 'var(--space-4)' }}>Proyek</th>
            <th style={{ ...TH, paddingTop: 'var(--space-4)' }}>Klien</th>
            <th style={{ ...TH, paddingTop: 'var(--space-4)' }}>Status</th>
            <th style={{ ...TH, paddingTop: 'var(--space-4)' }}>Cakupan</th>
            <th style={{ ...TH, paddingTop: 'var(--space-4)' }}>Skala / akurasi</th>
            <th style={{ ...TH, paddingTop: 'var(--space-4)' }}>Titik</th>
            <th style={{ ...TH, paddingTop: 'var(--space-4)' }}>PIC</th>
            <th style={{ ...TH, paddingTop: 'var(--space-4)' }}></th>
          </tr></thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} style={{ cursor: 'pointer' }} onClick={() => onOpen(r[1])}>
                <td style={{ ...TD, paddingRight: 0 }}><Checkbox label="" /></td>
                <td style={{ ...TD, fontFamily: 'var(--font-data)', fontSize: 'var(--text-caption)', color: 'var(--text-subtle)' }}>{r[0]}</td>
                <td style={{ ...TD, color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' }}>{r[1]}</td>
                <td style={TD}>{r[2]}</td>
                <td style={TD}><Badge tone={r[4]} dot={r[3] === 'Berjalan'}>{r[3]}</Badge></td>
                <td style={{ ...TD, fontFamily: 'var(--font-data)', fontSize: 'var(--text-caption)' }}>{r[5]}</td>
                <td style={{ ...TD, fontFamily: 'var(--font-data)', fontSize: 'var(--text-caption)' }}>{r[6]}</td>
                <td style={{ ...TD, fontFamily: 'var(--font-data)', fontSize: 'var(--text-caption)' }}>{r[7]}</td>
                <td style={TD}>{r[8]}</td>
                <td style={{ ...TD, textAlign: 'right' }}><Icon name="chevron-right" size={16} color="var(--text-subtle)" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {rows.length === 0 && (
        <div style={{ padding: 'var(--space-11)', textAlign: 'center', color: 'var(--text-subtle)' }}>
          <Icon name="search-x" size={28} style={{ margin: '0 auto 10px' }} />
          <p style={{ fontSize: 'var(--text-body-sm)' }}>Tidak ada proyek yang cocok.</p>
        </div>
      )}
    </div>
  );
}

Object.assign(window, { ProjectTable, DASH_ROWS });
