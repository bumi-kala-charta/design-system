The workhorse container — 20px radius, hairline border, optional pattern layer and hover lift.

```jsx
<Card interactive>
  <IconButton label="" variant="soft"><Icon name="map" size={21} /></IconButton>
  <h3>Proyek Geospasial</h3>
  <p>Survei dan pemetaan bersama tim lintas kampus.</p>
</Card>

<Card surface="brand" pattern={<ContourField />} radius="var(--radius-hero)" padding="var(--space-8)">…</Card>
```

BKC cards never combine a shadow with a visible border at rest — the border is the resting state, the shadow is the hover state.
