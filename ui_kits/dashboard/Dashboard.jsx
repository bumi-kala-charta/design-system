const { Toast, Dialog, Button, Select, Checkbox, Input } = window.BumiKalaChartaDesignSystem_5e0b40;

const POINTS = [
  { id: 'BM-01', x: 34, y: 41, type: 'bm', quality: 'Fix', order: '2', e: '791.482,318 m', n: '9.235.106,942 m', h: '714,206 m', ho: '712,088 m', sh: '±6 mm', sv: '±11 mm' },
  { id: 'BM-02', x: 52, y: 33, type: 'bm', quality: 'Fix', order: '2', e: '792.114,806 m', n: '9.235.588,120 m', h: '706,441 m', ho: '704,318 m', sh: '±7 mm', sv: '±13 mm' },
  { id: 'BM-05', x: 44, y: 62, type: 'bm', quality: 'Float', order: '3', e: '791.860,552 m', n: '9.234.402,714 m', h: '698,902 m', ho: '696,780 m', sh: '±14 mm', sv: '±26 mm' },
  { id: 'CORS-SLM', x: 69, y: 52, type: 'cors', quality: 'Fix', order: '1', e: '793.402,118 m', n: '9.235.012,338 m', h: '742,014 m', ho: '739,896 m', sh: '±3 mm', sv: '±6 mm' },
  { id: 'BM-07', x: 26, y: 70, type: 'bm', quality: 'Fix', order: '3', e: '790.982,244 m', n: '9.234.118,506 m', h: '689,558 m', ho: '687,438 m', sh: '±9 mm', sv: '±17 mm' },
];

// Floating panel geometry, shared so the map controls clear the panels.
const PANEL_GAP = 16;
const PANEL_LAYER = 288;
const PANEL_INSPECTOR = 340;
const floatingPanel = (side, width) => ({
  position: 'absolute', top: PANEL_GAP, bottom: PANEL_GAP, [side]: PANEL_GAP, width, zIndex: 5,
  borderRadius: 'var(--radius-card)', overflow: 'hidden', display: 'flex', flexDirection: 'column',
});
Object.assign(window, { PANEL_GAP, floatingPanel });

function Dashboard() {
  const [section, setSection] = React.useState('peta');
  const [project, setProject] = React.useState('Topografi Waduk Jatigede');
  const [selected, setSelected] = React.useState('BM-01');
  const [exportOpen, setExportOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [layers, setLayers] = React.useState({ titik: true, kontur: true, area: true, batas: true, graticule: true, hillshade: false });
  const toggle = (id) => setLayers((s) => ({ ...s, [id]: !s[id] }));
  const point = POINTS.find((p) => p.id === selected);

  const notify = (title, description) => {
    setToast({ title, description });
    window.setTimeout(() => setToast(null), 4000);
  };

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Rail section={section} onSection={setSection} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <TopBar project={project} onExport={() => setExportOpen(true)} />
        {section === 'peta' ? (
          /* Map fills the view; layer and inspector panels float over it as frosted glass. */
          <div style={{ flex: 1, display: 'flex', minHeight: 0, position: 'relative' }}>
            <MapCanvas layers={layers} points={POINTS} selected={selected} onSelect={setSelected} insetLeft={PANEL_LAYER} insetRight={PANEL_INSPECTOR} />
            <LayerPanel layers={layers} toggle={toggle} />
            <InspectorPanel point={point} onClose={() => setSelected(null)} />
          </div>
        ) : (
          <ProjectTable onOpen={(name) => { setProject(name); setSection('peta'); }} />
        )}
      </div>

      <Dialog
        open={exportOpen}
        onClose={() => setExportOpen(false)}
        width={440}
        title="Ekspor data proyek"
        description={project}
        actions={
          <>
            <Button variant="ghost" onClick={() => setExportOpen(false)}>Batal</Button>
            <Button variant="brand" onClick={() => { setExportOpen(false); notify('Ekspor sedang disiapkan', 'Tautan unduh dikirim ke email kamu.'); }}>Ekspor</Button>
          </>
        }
      >
        <div style={{ display: 'grid', gap: 'var(--space-4)' }}>
          <Select label="Format" options={['GeoPackage (.gpkg)', 'Shapefile (.shp)', 'CSV titik kontrol', 'DXF', 'PDF lembar peta']} />
          <Select label="Sistem koordinat" options={['WGS 84 / UTM 48S — EPSG:32748', 'WGS 84 geografis — EPSG:4326', 'SRGI 2013']} />
          <Checkbox label="Sertakan metadata pengukuran" defaultChecked />
          <Checkbox label="Sertakan foto dokumentasi titik" />
        </div>
      </Dialog>

      {toast && (
        <div style={{ position: 'fixed', right: 24, bottom: 24, zIndex: 70 }}>
          <Toast title={toast.title} description={toast.description} onClose={() => setToast(null)} />
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Dashboard });
