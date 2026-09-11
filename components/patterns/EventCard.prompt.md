A training, discussion, or field-trip listing with a mono date block on the left.

```jsx
<EventCard
  day="19" month="SEP" tone="accent"
  title="Kelas Fotogrametri Drone — Batch 7"
  meta="09.00–16.00 · Bandung & daring · Mentor: Fikri S."
  format="Daring & tatap muka"
  seats="12 kursi tersisa"
  onClick={openDetail}
/>
```

Use `tone="accent"` on the soonest event only — at most one per list.
