Modal sheet for registration, confirmation, and detail panels.

```jsx
<Dialog
  open={open}
  onClose={close}
  title="Daftar kelas fotogrametri"
  description="Batch 7 · Sabtu, 19 September · Bandung & daring"
  actions={<><Button variant="ghost" onClick={close}>Nanti</Button><Button variant="brand">Kirim pendaftaran</Button></>}
>
  <Input label="Nama lengkap" />
</Dialog>
```

Overlay is warm ink at 44% with a 3px blur. No entrance bounce — the sheet appears, it does not spring.
