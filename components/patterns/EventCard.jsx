import React from 'react';

/* A training, discussion, or field-trip listing. Date sits in a mono block on the left. */
export function EventCard({ day, month, title, meta, format, seats, tone = 'default', onClick, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', gap: 'var(--space-5)', alignItems: 'center',
        padding: 'var(--space-5)',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-subtle)',
        background: 'var(--surface-card)',
        cursor: onClick ? 'pointer' : 'default',
        boxShadow: hover && onClick ? 'var(--shadow-card)' : 'none',
        transform: hover && onClick ? 'translateY(-2px)' : undefined,
        transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          width: 62, flex: '0 0 auto', textAlign: 'center', padding: '10px 0',
          borderRadius: 'var(--radius-md)',
          background: tone === 'accent' ? 'var(--surface-accent-soft)' : 'var(--surface-brand-soft)',
          fontFamily: 'var(--font-data)',
        }}
      >
        <span style={{ display: 'block', fontSize: 24, fontWeight: 'var(--weight-semibold)', lineHeight: 1, color: tone === 'accent' ? 'var(--orange-600)' : 'var(--green-700)' }}>{day}</span>
        <span style={{ display: 'block', marginTop: 3, fontSize: 'var(--text-micro)', letterSpacing: '.14em', textTransform: 'uppercase', color: tone === 'accent' ? 'var(--orange-600)' : 'var(--green-700)' }}>{month}</span>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3 style={{ fontSize: 'var(--text-title-3)' }}>{title}</h3>
        {meta && <p style={{ marginTop: 4, fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{meta}</p>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flex: '0 0 auto' }}>
        {format && <span className="bkc-eyebrow">{format}</span>}
        {seats && <span style={{ fontSize: 'var(--text-caption)', color: seats.startsWith('Penuh') ? 'var(--status-danger)' : 'var(--text-accent)' }}>{seats}</span>}
      </div>
    </div>
  );
}
