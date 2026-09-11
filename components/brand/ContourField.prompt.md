The brand's topographic pattern as an absolutely-positioned background layer — put it behind content in any position:relative container.

```jsx
<Card surface="brand" pattern={<ContourField />}>…</Card>
<div style={{position:'relative'}}>
  <ContourField motif="orbit" tone="on-light" globeSize={420} />
</div>
```

Contour is the primary motif; orbit is the secondary one, reserved for hero and cover moments. Never put both on the same surface. Never place body copy directly over lines at density="dense".
