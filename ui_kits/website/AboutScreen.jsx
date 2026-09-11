const { Button, Icon, Card, Stat, Badge, SectionHeading, CoordinateReadout, AvatarStack, ContourField, Input, Select } = window.BumiKalaChartaDesignSystem_5e0b40;

function AboutScreen({ go, onSubmit }) {
  const values = [
    { icon: 'ruler', title: 'Presisi lebih dulu', body: 'Angka yang kami serahkan bisa ditelaah ulang: metode, alat, dan residunya ikut dilaporkan.' },
    { icon: 'users', title: 'Belajar di depan orang', body: 'Kesalahan dibahas terbuka di forum bulanan. Tidak ada pertanyaan yang terlalu dasar.' },
    { icon: 'git-branch', title: 'Arsip yang hidup', body: 'Setiap proyek meninggalkan catatan teknis yang bisa dipakai anggota berikutnya.' },
  ];
  return (
    <>
      <section style={{ padding: '40px var(--gutter-page) 0', display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 'var(--space-9)', alignItems: 'center' }}>
        <div>
          <div className="bkc-eyebrow" style={{ color: 'var(--text-brand)' }}>Tentang kami</div>
          <h1 style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-display-2)' }}>Peta bukan sekadar gambar — ia catatan tentang ruang dan waktu.</h1>
          <p style={{ marginTop: 'var(--space-5)', fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', maxWidth: 'var(--width-prose)' }}>
            Bumi Kala Charta berdiri di Bandung pada 2022, dimulai dari lima orang yang tukar cerita soal pengukuran. Sekarang kami komunitas sekaligus konsultan: mengerjakan proyek geospasial, membuka kelas, dan menjaga arsip pengetahuannya tetap terbuka.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-11)', marginTop: 'var(--space-8)' }}>
            <Stat value="2022" label="Tahun berdiri" />
            <Stat value="1.204" label="Anggota" />
            <Stat value="9" label="Provinsi" />
          </div>
        </div>
        <Photo note="Foto tim — dokumentasi diskusi bulanan di Bandung" height={380} />
      </section>

      <section style={{ padding: 'var(--pad-section) var(--gutter-page) 0' }}>
        <SectionHeading eyebrow="Cara kami bekerja" title="Tiga hal yang kami pegang" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--gap-card)', marginTop: 'var(--space-7)' }}>
          {values.map((v) => (
            <Card key={v.title} surface="muted">
              <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: 'var(--surface-page)', display: 'grid', placeItems: 'center' }}>
                <Icon name={v.icon} size={20} color="var(--bkc-green)" />
              </span>
              <h3 style={{ marginTop: 'var(--space-5)' }}>{v.title}</h3>
              <p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{v.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ padding: 'var(--pad-section) var(--gutter-page) 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-9)', alignItems: 'start' }}>
        <div>
          <SectionHeading eyebrow="Pengurus" title="Orang di baliknya" />
          <div style={{ display: 'grid', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
            {[
              ['Ketua', 'Nama pengurus — belum diisi', 'K'],
              ['Koordinator pelatihan', 'Nama pengurus — belum diisi', 'P'],
              ['Koordinator proyek', 'Nama pengurus — belum diisi', 'Y'],
              ['Pengelola arsip & data', 'Nama pengurus — belum diisi', 'A'],
            ].map(([name, role, ini]) => (
              <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', padding: 'var(--space-4)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)' }}>
                <span style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--surface-brand-soft)', display: 'grid', placeItems: 'center', color: 'var(--green-700)', fontWeight: 'var(--weight-medium)', fontSize: 'var(--text-body-sm)', flex: '0 0 auto' }}>{ini}</span>
                <div>
                  <b style={{ display: 'block', fontSize: 'var(--text-body)', color: 'var(--text-strong)' }}>{name}</b>
                  <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>{role}</span>
                </div>
              </div>
            ))}
          </div>
          <AvatarStack style={{ marginTop: 'var(--space-6)' }} people={['MI', 'HP', 'YS', 'BW', 'TA', 'LK']} caption="dan 1.200 anggota lain di 34 kampus" />
        </div>

        <Card style={{ position: 'relative', overflow: 'hidden' }} padding="var(--pad-card-lg)">
          <div className="bkc-eyebrow" style={{ color: 'var(--text-brand)' }}>Hubungi tim</div>
          <h3 style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-title-2)' }}>Ceritakan kebutuhan pemetaanmu</h3>
          <p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>
            Kami balas dalam dua hari kerja dengan usulan metode dan perkiraan waktu.
          </p>
          <div style={{ display: 'grid', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
            <Input label="Nama & instansi" placeholder="Nama, instansi atau kampus" required />
            <Input label="Email" placeholder="nama@instansi.go.id" required />
            <Select label="Jenis pekerjaan" placeholder="Pilih jenis pekerjaan" options={['Survei topografi', 'Jaring kontrol GNSS / CORS', 'Fotogrametri drone', 'Batimetri', 'Analisis spasial', 'Pelatihan internal']} />
            <Input label="Lokasi & luas perkiraan" placeholder="Contoh: Kab. Garut, ±400 ha" />
            <Input label="Ceritakan singkat" multiline rows={3} placeholder="Target, tenggat, dan data yang sudah ada" />
          </div>
          <Button variant="brand" fullWidth style={{ marginTop: 'var(--space-6)' }} onClick={onSubmit} iconRight={<Icon name="send" size={16} />}>Kirim permintaan</Button>
          <CoordinateReadout
            style={{ marginTop: 'var(--space-6)' }}
            label="Kantor"
            dense
            items={[{ label: 'Bandung, Jawa Barat', value: '−6.9175, 107.6191' }, { label: 'Jam kerja', value: '09.00–17.00 WIB' }]}
          />
        </Card>
      </section>
    </>
  );
}

Object.assign(window, { AboutScreen });
