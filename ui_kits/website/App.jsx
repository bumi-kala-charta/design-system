const { Button, Icon, Input, Select, Checkbox, Dialog, Toast } = window.BumiKalaChartaDesignSystem_5e0b40;

function App() {
  const [page, setPage] = React.useState('Beranda');
  const [join, setJoin] = React.useState(false);
  const [toast, setToast] = React.useState(null);

  const go = (p) => {
    if (p === 'Gabung') { setJoin(true); return; }
    setPage(p);
    window.scrollTo({ top: 0 });
  };
  const notify = (title, description) => {
    setToast({ title, description });
    window.setTimeout(() => setToast(null), 4200);
  };

  const screens = {
    Beranda: <HomeScreen go={go} onJoin={() => setJoin(true)} />,
    Tentang: <AboutScreen go={go} onSubmit={() => notify('Permintaan terkirim', 'Kami balas lewat email dalam 2 hari kerja.')} />,
    Proyek: <ProjectsScreen go={go} />,
    Pelatihan: <TrainingScreen go={go} onEnroll={() => setJoin(true)} />,
    Diskusi: <DiscussionScreen go={go} />,
  };

  return (
    <>
      <SiteHeader page={page === 'Beranda' ? null : page} go={go} />
      {screens[page]}
      <SiteFooter />

      <Dialog
        open={join}
        onClose={() => setJoin(false)}
        width={460}
        title="Gabung komunitas"
        description="Gratis. Kamu dapat akses forum, arsip catatan teknis, dan pengumuman kelas lebih awal."
        actions={
          <>
            <Button variant="ghost" onClick={() => setJoin(false)}>Nanti</Button>
            <Button variant="brand" onClick={() => { setJoin(false); notify('Pendaftaran terkirim', 'Cek email untuk tautan konfirmasi.'); }}>Kirim pendaftaran</Button>
          </>
        }
      >
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <Input label="Nama lengkap" placeholder="Nama sesuai KTP" required />
          <Input label="Email" placeholder="nama@kampus.ac.id" required />
          <Select label="Status" placeholder="Pilih status" options={['Mahasiswa', 'Fresh graduate', 'Praktisi', 'Instansi pemerintah', 'Dosen / peneliti']} />
          <Checkbox label="Kirimi saya jadwal pelatihan" defaultChecked />
        </div>
      </Dialog>

      {toast && (
        <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 70 }}>
          <Toast title={toast.title} description={toast.description} onClose={() => setToast(null)} />
        </div>
      )}
    </>
  );
}

Object.assign(window, { App });
