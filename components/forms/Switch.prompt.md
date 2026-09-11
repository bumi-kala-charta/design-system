Instant on/off — layer visibility, notification preferences. Not for form submission.

```jsx
<Switch label="Tampilkan kontur" defaultChecked />
<Switch label="Titik kontrol" description="GCP hasil pengukuran GNSS" checked={on} onChange={setOn} />
```

Track goes green when on; the knob stays white. Use Checkbox when the change needs a Save.
