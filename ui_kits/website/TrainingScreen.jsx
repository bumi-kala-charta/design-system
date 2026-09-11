const { Button, Icon, Card, Badge, Tabs, EventCard, SectionHeading, Checkbox, Switch, ContourField } = window.BumiKalaChartaDesignSystem_5e0b40;

const BKC_CLASSES = [
  { day: '19', month: 'SEP', title: 'Kelas Fotogrametri Drone — Batch 7', meta: '09.00–16.00 · Bandung & daring · Mentor: tim fotogrametri', format: 'Daring & tatap muka', seats: '12 kursi tersisa', tone: 'accent', level: 'Menengah' },
  { day: '28', month: 'SEP', title: 'Pengolahan Data GNSS dengan RTKLIB', meta: '19.30–21.30 · Daring · Mentor: tim GNSS', format: 'Daring', seats: '24 kursi tersisa', level: 'Lanjut' },
  { day: '18', month: 'OKT', title: 'QGIS untuk Pemetaan Partisipatif', meta: '09.00–15.00 · Yogyakarta · Mentor: tim kartografi', format: 'Tatap muka', seats: 'Penuh — daftar tunggu', level: 'Dasar' },
  { day: '02', month: 'NOV', title: 'Kalibrasi & Perawatan Total Station', meta: '13.00–17.00 · Bandung', format: 'Tatap muka', seats: '8 kursi tersisa', level: 'Dasar' },
  { day: '15', month: 'NOV', title: 'Analisis Spasial Kebencanaan', meta: '19.30–21.30 · Daring · Mentor: tim analisis spasial', format: 'Daring', seats: '31 kursi tersisa', level: 'Menengah' },
];

function TrainingScreen({ go, onEnroll }) {
  const [level, setLevel] = React.useState('semua');
  const list = BKC_CLASSES.filter((c) => level === 'semua' || c.level.toLowerCase() === level);
  return (
    <>
      <section style={{ padding: '34px var(--gutter-page) 0' }}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-hero)', background: 'var(--surface-brand)', padding: '44px 48px' }}>
          <ContourField motif="orbit" globeSize={420} style={{ left: 'auto', right: 0, width: 620 }} />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '30em' }}>
            <div className="bkc-eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Pelatihan &amp; sertifikasi</div>
            <h1 style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-display-2)', color: 'var(--bkc-white)' }}>Kelas yang bermula dari pertanyaan di lapangan.</h1>
            <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-lg)', color: 'var(--text-on-dark)' }}>
              26 kelas berjalan tahun ini. Materi arsip tetap terbuka untuk anggota.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-7)' }}>
              <Button variant="accent" iconLeft={<Icon name="calendar-check" size={17} />} onClick={onEnroll}>Daftar kelas terdekat</Button>
              <Button variant="on-dark" onClick={() => go('Diskusi')}>Lihat silabus</Button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--pad-section) var(--gutter-page) 0', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 'var(--space-9)', alignItems: 'start' }}>
        <div>
          <SectionHeading eyebrow="Jadwal" title="Kelas terbuka" />
          <Tabs
            style={{ marginTop: 'var(--space-5)' }}
            variant="pill"
            value={level}
            onChange={setLevel}
            items={[{ value: 'semua', label: 'Semua tingkat' }, { value: 'dasar', label: 'Dasar' }, { value: 'menengah', label: 'Menengah' }, { value: 'lanjut', label: 'Lanjut' }]}
          />
          <div style={{ display: 'grid', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
            {list.map((c) => (
              <EventCard key={c.title} {...c} onClick={onEnroll} />
            ))}
          </div>
        </div>

        <Card surface="muted" style={{ position: 'sticky', top: 96 }}>
          <div className="bkc-eyebrow">Beri tahu saya</div>
          <h3 style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-title-3)' }}>Kelas apa yang kamu tunggu?</h3>
          <div style={{ display: 'grid', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>
            <Checkbox label="Fotogrametri drone" defaultChecked />
            <Checkbox label="Pengolahan GNSS" />
            <Checkbox label="QGIS &amp; analisis spasial" defaultChecked />
            <Checkbox label="Batimetri" />
            <Checkbox label="Kartografi &amp; layout peta" />
          </div>
          <div style={{ borderTop: '1px solid var(--border-subtle)', margin: 'var(--space-5) 0', paddingTop: 'var(--space-4)' }}>
            <Switch label="Kirim pengingat H-3" description="Lewat email dan WhatsApp" defaultChecked />
          </div>
          <Button variant="brand" fullWidth onClick={onEnroll}>Simpan preferensi</Button>
        </Card>
      </section>
    </>
  );
}

Object.assign(window, { TrainingScreen, BKC_CLASSES });
