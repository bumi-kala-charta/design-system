import React from 'react';

/* Overlapping member initials — the community's shorthand for "people are here".
   Real photos replace initials when available; keep the 2px white ring either way. */
export function AvatarStack({ people = [], size = 34, max = 5, caption, style, ...rest }) {
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', ...style }} {...rest}>
      <div style={{ display: 'flex' }}>
        {shown.map((p, i) => {
          const initials = typeof p === 'string' ? p : p.initials;
          const src = typeof p === 'string' ? null : p.src;
          return (
            <div
              key={i}
              title={typeof p === 'string' ? p : p.name}
              style={{
                width: size, height: size, borderRadius: 999, marginLeft: i === 0 ? 0 : -10,
                border: '2px solid var(--surface-page)', background: 'var(--neutral-150)',
                display: 'grid', placeItems: 'center', overflow: 'hidden',
                fontSize: Math.round(size * 0.3), color: 'var(--text-subtle)', fontWeight: 'var(--weight-medium)',
              }}
            >
              {src ? <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
            </div>
          );
        })}
        {extra > 0 && (
          <div style={{ width: size, height: size, borderRadius: 999, marginLeft: -10, border: '2px solid var(--surface-page)', background: 'var(--surface-brand-soft)', display: 'grid', placeItems: 'center', fontSize: Math.round(size * 0.28), color: 'var(--green-700)', fontWeight: 'var(--weight-medium)' }}>
            +{extra}
          </div>
        )}
      </div>
      {caption && <p style={{ fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{caption}</p>}
    </div>
  );
}
