Horizontal tab strip — underline for page-level sections, pill for filters inside a panel.

```jsx
<Tabs items={[{value:'semua',label:'Semua',count:48},{value:'aktif',label:'Berjalan',count:18}]} defaultValue="semua" onChange={setTab} />
<Tabs variant="pill" items={['Peta','Tabel','Metadata']} defaultValue="Peta" />
```

Active underline is 2px brand green; active pill is a white chip with an xs shadow.
