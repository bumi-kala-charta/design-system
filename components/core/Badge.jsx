import React from 'react';

const bkcBadgeTones = {
  brand: { background: 'var(--surface-brand-soft)', color: 'var(--green-700)' },
  accent: { background: 'var(--surface-accent-soft)', color: 'var(--orange-600)' },
  success: { background: 'var(--status-success-soft)', color: '#0A6B1B' },
  warning: { background: 'var(--status-warning-soft)', color: 'var(--orange-700)' },
  danger: { background: 'var(--status-danger-soft)', color: 'var(--status-danger)' },
  neutral: { background: 'var(--neutral-150)', color: 'var(--text-body)' },
  solid: { background: 'var(--bkc-orange)', color: 'var(--bkc-white)' },
  'on-dark': { background: 'rgba(255,255,255,.14)', color: 'var(--bkc-white)' },
};

/* A status marker. Short, uppercase, mono — reads as a data label, not a sticker. */
export function Badge({ children, tone = 'brand', size = 'md', dot = false, style, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: size === 'sm' ? '3px 8px' : '5px 11px',
        borderRadius: 'var(--radius-xs)',
        fontFamily: 'var(--font-data)',
        fontSize: size === 'sm' ? 'var(--text-micro)' : 'var(--text-eyebrow)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        lineHeight: 1.4,
        ...(bkcBadgeTones[tone] || bkcBadgeTones.brand),
        ...style,
      }}
      {...rest}
    >
      {dot && <span style={{ width: 5, height: 5, borderRadius: 999, background: 'currentColor' }} />}
      {children}
    </span>
  );
}
