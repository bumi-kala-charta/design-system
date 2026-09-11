const { Button, Icon, Logo, ContourField, Badge } = window.BumiKalaChartaDesignSystem_5e0b40;

const ASSETS = '../../assets';

/* A stand-in for photography. BKC supplied no image library, so every photographic
   slot in this kit is an explicit placeholder rather than a stock substitute. */
function Photo({ note, height = 320, radius = 'var(--radius-band)', style }) {
  return (
    <div className="ph" style={{ height, borderRadius: radius, ...style }}>
      <div>
        <Icon name="image" size={26} style={{ margin: '0 auto 8px', color: 'var(--neutral-400)' }} />
        {note}
      </div>
    </div>
  );
}

function SiteHeader({ page, go }) {
  const items = ['Tentang', 'Proyek', 'Pelatihan', 'Diskusi'];
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px var(--gutter-page)', position: 'sticky', top: 0, zIndex: 30, background: 'rgba(255,255,255,.92)', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border-subtle)' }}>
      <a href="#" onClick={(e) => { e.preventDefault(); go('Beranda'); }} style={{ display: 'inline-flex' }}>
        <Logo size={38} assetBase={ASSETS} />
      </a>
      <ul style={{ display: 'flex', gap: 'var(--space-7)', alignItems: 'center' }}>
        {items.map((it) => (
          <li key={it}>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); go(it); }}
              style={{ fontSize: 'var(--text-body-sm)', fontWeight: page === it ? 'var(--weight-semibold)' : 'var(--weight-regular)', color: page === it ? 'var(--text-brand)' : 'var(--text-body)' }}
            >
              {it}
            </a>
          </li>
        ))}
        <li><Button variant="brand" size="sm" onClick={() => go('Gabung')}>Gabung komunitas</Button></li>
      </ul>
    </nav>
  );
}

function SiteFooter() {
  const cols = [
    { head: 'Komunitas', links: ['Tentang kami', 'Anggota', 'Diskusi bulanan', 'Arsip catatan teknis'] },
    { head: 'Layanan', links: ['Survei GNSS', 'Pemetaan topografi', 'Fotogrametri drone', 'Batimetri'] },
    { head: 'Pelatihan', links: ['Jadwal kelas', 'Silabus', 'Sertifikasi', 'Mentor'] },
  ];
  return (
    <footer style={{ position: 'relative', overflow: 'hidden', background: 'var(--surface-dark)', color: 'var(--text-on-dark)', padding: '52px var(--gutter-page) 26px', marginTop: 'var(--space-12)' }}>
      <ContourField tone="on-dark" density="loose" />
      <div style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 'var(--space-9)' }}>
        <div>
          <Logo size={40} tone="on-dark" assetBase={ASSETS} showTagline />
          <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-body-sm)', color: 'var(--text-on-dark-muted)', maxWidth: '24em' }}>
            Komunitas dan konsultan geospasial — geodesi, geomatika, dan kartografi. Bandung, Indonesia.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-5)' }}>
            {['instagram', 'linkedin', 'youtube', 'mail'].map((n) => (
              <span key={n} style={{ width: 34, height: 34, borderRadius: 'var(--radius-sm)', background: 'rgba(255,255,255,.1)', display: 'grid', placeItems: 'center' }}>
                <Icon name={n} size={16} color="rgba(255,255,255,.8)" />
              </span>
            ))}
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.head}>
            <div className="bkc-eyebrow" style={{ color: 'var(--text-on-dark-muted)' }}>{c.head}</div>
            <ul style={{ display: 'grid', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
              {c.links.map((l) => (
                <li key={l}><a href="#" style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-on-dark)' }}>{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', marginTop: 'var(--space-9)', paddingTop: 'var(--space-5)', borderTop: '1px solid var(--border-on-dark)' }}>
        <span className="bkc-eyebrow" style={{ color: 'var(--text-on-dark-muted)' }}>© 2026 Bumi Kala Charta</span>
        <span className="bkc-eyebrow" style={{ color: 'var(--text-on-dark-muted)' }}>Bandung · Indonesia</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Photo, SiteHeader, SiteFooter, ASSETS });
