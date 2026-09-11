import React from 'react';

const bkcReadoutRow = {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: 'var(--space-3)',
  padding: 'var(--space-2) 0',
  borderBottom: '1px dotted var(--border-default)',
  fontSize: 'var(--text-caption)',
};

/* Machine facts, set in IBM Plex Mono: coordinates, datum, scale, accuracy.
   Use wherever the design should feel measured rather than marketed. */
export function CoordinateReadout({ items = [], label, dense = false, tone = 'default', style, ...rest }) {
  const onDark = tone === 'on-dark';
  const rowColor = onDark ? 'var(--text-on-dark)' : 'var(--text-body)';
  const keyColor = onDark ? 'var(--text-on-dark-muted)' : 'var(--text-subtle)';
  return (
    <div style={{ fontFamily: 'var(--font-data)', ...style }} {...rest}>
      {label && (
        <div className="bkc-eyebrow" style={{ color: keyColor, marginBottom: 'var(--space-2)' }}>{label}</div>
      )}
      {items.map((it, i) => (
        <div
          key={i}
          style={{
            ...bkcReadoutRow,
            padding: dense ? '5px 0' : bkcReadoutRow.padding,
            borderBottomColor: onDark ? 'var(--border-on-dark)' : 'var(--border-default)',
            borderBottom: i === items.length - 1 ? 'none' : `1px dotted ${onDark ? 'rgba(255,255,255,.22)' : 'var(--border-default)'}`,
            color: rowColor,
          }}
        >
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)', color: onDark ? 'var(--bkc-white)' : 'var(--text-strong)' }}>{it.label}</span>
          <span style={{ color: it.emphasis ? 'var(--text-accent)' : keyColor, letterSpacing: '.02em' }}>{it.value}</span>
        </div>
      ))}
    </div>
  );
}
