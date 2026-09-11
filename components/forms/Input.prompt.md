Text field with label, hint, error and optional leading icon.

```jsx
<Input label="Nama lengkap" placeholder="Nama sesuai KTP" required />
<Input label="Cari proyek" iconLeft={<Icon name="search" size={16} />} />
<Input label="Catatan lapangan" multiline rows={5} />
<Input label="Email" error="Format email belum benar" />
```

Focus is a green border plus a 3px soft green ring — no colour change on the label. 12px radius, not pill.
