const { Button, Icon, Card, Stat, Badge, Tag, SectionHeading, ContourField, AvatarStack, EventCard } = window.BumiKalaChartaDesignSystem_5e0b40;

function HomeScreen({ go, onJoin }) {
  const services = [
    { icon: 'map', title: 'Proyek Geospasial', body: 'Survei dan pemetaan bersama tim lintas kampus — pengalaman lapangan sebelum lulus.', cta: 'Lihat proyek', page: 'Proyek' },
    { icon: 'graduation-cap', title: 'Pelatihan', body: 'QGIS, pengolahan GNSS, dan fotogrametri. Materi arsip tetap bisa diakses anggota.', cta: 'Lihat jadwal', page: 'Pelatihan' },
    { icon: 'messages-square', title: 'Diskusi', body: 'Ngobrol santai tiap bulan: studi kasus, cerita proyek, dan tanya jawab tanpa sungkan.', cta: 'Ikut diskusi', page: 'Diskusi' },
  ];
  return (
    <>
      <section style={{ padding: '34px var(--gutter-page) 0', display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 'var(--space-9)', alignItems: 'center' }}>
        <div>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', background: 'var(--bkc-paper)', padding: '7px 14px', borderRadius: 'var(--radius-pill)', marginBottom: 'var(--space-6)' }}>
            <Icon name="users" size={14} color="var(--bkc-green)" />
            <span className="bkc-eyebrow" style={{ color: 'var(--text-default)' }}>Komunitas geospasial Indonesia</span>
          </span>
          <h1 style={{ fontSize: 'var(--text-display-1)' }}>
            Belajar, memetakan, dan <span style={{ color: 'var(--bkc-green)' }}>tumbuh bersama.</span>
          </h1>
          <p style={{ marginTop: 'var(--space-5)', fontSize: 'var(--text-body-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-muted)', maxWidth: '30em' }}>
            Ruang terbuka bagi mahasiswa dan praktisi geodesi–geomatika untuk berbagi ilmu, mengerjakan proyek nyata, dan saling menemukan.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-7)' }}>
            <Button iconLeft={<Icon name="user-plus" size={17} />} onClick={onJoin}>Jadi anggota</Button>
            <Button variant="secondary" iconLeft={<Icon name="calendar" size={17} />} onClick={() => go('Pelatihan')}>Agenda terdekat</Button>
          </div>
          <AvatarStack
            style={{ marginTop: 'var(--space-8)' }}
            people={['FS', 'AR', 'DW', 'NR', 'MI', 'HP', 'YS', 'BW']}
            caption="1.204 anggota dari 34 kampus & 62 instansi"
          />
        </div>
        <div style={{ position: 'relative' }}>
          <Photo note="Foto kegiatan lapangan — pengukuran GNSS bersama anggota" height={420} />
          <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24, background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', padding: '16px 18px', boxShadow: 'var(--shadow-float)', display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--surface-accent-soft)', display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
              <Icon name="calendar-days" size={19} color="var(--bkc-orange)" />
            </span>
            <div>
              <b style={{ display: 'block', fontSize: 'var(--text-body-sm)', color: 'var(--text-strong)' }}>Kelas Fotogrametri Drone — Batch 7</b>
              <span style={{ fontSize: 'var(--text-caption)', color: 'var(--text-muted)' }}>Sabtu, 19 September · Bandung &amp; daring · 12 kursi tersisa</span>
            </div>
          </div>
        </div>
      </section>

      <section style={{ margin: 'var(--space-11) var(--gutter-page) 0', background: 'var(--neutral-50)', borderRadius: 'var(--radius-hero)', padding: '36px 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 'var(--space-7)' }}>
        <Stat value="1.204" label="Anggota aktif" />
        <Stat value="48" label="Proyek dikerjakan bersama" />
        <Stat value="26" label="Kelas & pelatihan" />
        <Stat value="±0,8 cm" label="Akurasi horizontal rata-rata" mono />
      </section>

      <section style={{ padding: 'var(--pad-section) var(--gutter-page) 0' }}>
        <SectionHeading
          eyebrow="Tiga lini kerja"
          title="Apa yang kami lakukan"
          lead="Tiga hal, dikerjakan dengan orang-orang yang benar-benar peduli pada peta."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--gap-card)', marginTop: 'var(--space-7)' }}>
          {services.map((s) => (
            <Card key={s.title} interactive onClick={() => go(s.page)}>
              <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-lg)', background: 'var(--surface-brand-soft)', display: 'grid', placeItems: 'center' }}>
                <Icon name={s.icon} size={21} color="var(--bkc-green)" strokeWidth={1.6} />
              </span>
              <h3 style={{ marginTop: 'var(--space-5)' }}>{s.title}</h3>
              <p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{s.body}</p>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 'var(--space-4)', fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-brand)' }}>
                {s.cta} <Icon name="arrow-right" size={15} />
              </span>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ padding: 'var(--pad-section) var(--gutter-page) 0' }}>
        <SectionHeading
          eyebrow="Agenda"
          title="Yang akan datang"
          action={<Button variant="secondary" size="sm" onClick={() => go('Pelatihan')}>Semua agenda</Button>}
        />
        <div style={{ display: 'grid', gap: 'var(--space-3)', marginTop: 'var(--space-6)' }}>
          <EventCard day="19" month="SEP" tone="accent" title="Kelas Fotogrametri Drone — Batch 7" meta="09.00–16.00 · Bandung & daring · Mentor: tim fotogrametri" format="Daring & tatap muka" seats="12 kursi tersisa" onClick={() => go('Pelatihan')} />
          <EventCard day="04" month="OKT" title="Diskusi Bulanan: Membaca Residu GNSS" meta="19.30–21.00 · Daring" format="Gratis" seats="86 terdaftar" onClick={() => go('Diskusi')} />
          <EventCard day="18" month="OKT" title="Workshop QGIS untuk Pemetaan Partisipatif" meta="09.00–15.00 · Yogyakarta" format="Tatap muka" seats="Penuh — daftar tunggu" onClick={() => go('Pelatihan')} />
        </div>
      </section>

      <section style={{ padding: 'var(--pad-section) var(--gutter-page) 0' }}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 'var(--radius-hero)', background: 'var(--surface-brand)', padding: '46px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-9)' }}>
          <ContourField />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="bkc-eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Punya kebutuhan pemetaan?</div>
            <h2 style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-display-3)', color: 'var(--bkc-white)', maxWidth: '20em' }}>
              Ceritakan wilayah dan targetnya — kami susun metodenya bersama.
            </h2>
          </div>
          <div style={{ position: 'relative', zIndex: 1, flex: '0 0 auto' }}>
            <Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={18} />} onClick={() => go('Tentang')}>Hubungi tim</Button>
          </div>
        </div>
      </section>
    </>
  );
}

Object.assign(window, { HomeScreen });
