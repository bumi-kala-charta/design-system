const { Button, Icon, Card, Badge, Tag, SectionHeading, CoordinateReadout, ContourField } = window.BumiKalaChartaDesignSystem_5e0b40;

const BKC_THREADS = [
  { title: 'Kalibrasi total station: kesalahan yang paling sering terlewat', author: 'Anggota · Chapter Bandung', replies: 34, tag: 'Instrumen', hot: true },
  { title: 'Membaca residu GNSS pasca-pengolahan baseline', author: 'Anggota · Chapter Yogyakarta', replies: 51, tag: 'GNSS', hot: true },
  { title: 'Bagaimana menentukan interval kontur untuk lahan datar?', author: 'Mahasiswa — Geodesi Undip', replies: 18, tag: 'Kartografi' },
  { title: 'Pengalaman sertifikasi kompetensi surveyor 2026', author: 'Anggota · Chapter Surabaya', replies: 27, tag: 'Karier' },
  { title: 'Rekomendasi GCP untuk pemetaan drone di kawasan hutan', author: 'Anggota · Chapter Semarang', replies: 12, tag: 'Fotogrametri' },
  { title: 'Transformasi datum lokal ke SRGI 2013 — pengalaman kalian?', author: 'Pengurus BKC', replies: 40, tag: 'Datum' },
];

function DiscussionScreen({ go }) {
  return (
    <>
      <section style={{ padding: '40px var(--gutter-page) 0' }}>
        <div className="bkc-eyebrow" style={{ color: 'var(--text-brand)' }}>Diskusi</div>
        <h1 style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-display-2)', maxWidth: '22em' }}>Forum bulanan dan arsip catatan teknis.</h1>
        <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-lg)', color: 'var(--text-muted)', maxWidth: 'var(--width-prose)' }}>
          Sebulan sekali kami membedah satu studi kasus. Risalahnya diterbitkan sebagai catatan teknis singkat, terbuka untuk semua anggota.
        </p>
      </section>

      <section style={{ padding: 'var(--space-9) var(--gutter-page) 0', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 'var(--space-9)', alignItems: 'start' }}>
        <div>
          <SectionHeading eyebrow="Utas terbaru" title="Sedang dibicarakan" action={<Button variant="secondary" size="sm" iconLeft={<Icon name="plus" size={15} />}>Buat utas</Button>} />
          <div style={{ display: 'grid', gap: 'var(--space-2)', marginTop: 'var(--space-6)' }}>
            {BKC_THREADS.map((t) => (
              <div key={t.title} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4) var(--space-5)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-card)' }}>
                <span style={{ width: 38, height: 38, borderRadius: 'var(--radius-md)', background: t.hot ? 'var(--surface-accent-soft)' : 'var(--surface-brand-soft)', display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
                  <Icon name={t.hot ? 'flame' : 'message-circle'} size={17} color={t.hot ? 'var(--bkc-orange)' : 'var(--bkc-green)'} />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <b style={{ display: 'block', fontSize: 'var(--text-body)', color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' }}>{t.title}</b>
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{t.author}</span>
                </div>
                <Tag style={{ padding: '4px 10px', fontSize: 'var(--text-caption)', flex: '0 0 auto' }}>{t.tag}</Tag>
                <span style={{ fontFamily: 'var(--font-data)', fontSize: 'var(--text-caption)', color: 'var(--text-subtle)', width: 58, textAlign: 'right', flex: '0 0 auto' }}>{t.replies} balas</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gap: 'var(--gap-card)' }}>
          <Card surface="brand" pattern={<ContourField />} padding="var(--pad-card-lg)">
            <div className="bkc-eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Diskusi #12</div>
            <h3 style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-title-2)', color: 'var(--bkc-white)' }}>Residu GNSS: apa artinya?</h3>
            <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-body-sm)', color: 'var(--text-on-dark)' }}>Sabtu, 4 Oktober · 19.30 WIB · Daring</p>
            <Button variant="accent" size="sm" style={{ marginTop: 'var(--space-5)' }} onClick={() => go('Pelatihan')}>Daftar ikut</Button>
          </Card>
          <Card>
            <div className="bkc-eyebrow">Arsip catatan teknis</div>
            <CoordinateReadout
              style={{ marginTop: 'var(--space-3)' }}
              dense
              items={[
                { label: 'Catatan diterbitkan', value: '38' },
                { label: 'Diskusi berjalan', value: '12 edisi' },
                { label: 'Rata-rata hadir', value: '84 orang', emphasis: true },
              ]}
            />
          </Card>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { DiscussionScreen, BKC_THREADS });
