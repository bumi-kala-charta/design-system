import React from 'react';

/* A single headline figure. Numerals sit in Plex Sans for marketing surfaces,
   Plex Mono when the number is a measurement (set mono). */
export function Stat({ value, label, tone = 'default', mono = false, size = 'md', style, ...rest }) {
  const onDark = tone === 'on-dark';
  const sizes = { sm: 'var(--text-title-2)', md: 'var(--text-display-3)', lg: 'var(--text-display-2)' };
  return (
    <div style={style} {...rest}>
      <b
        style={{
          display: 'block',
          fontFamily: mono ? 'var(--font-data)' : 'var(--font-sans)',
          fontSize: sizes[size] || sizes.md,
          fontWeight: 'var(--weight-semibold)',
          letterSpacing: 'var(--tracking-title)',
          lineHeight: 1.1,
          color: tone === 'accent' ? 'var(--bkc-orange)' : onDark ? 'var(--bkc-white)' : 'var(--text-strong)',
        }}
      >
        {value}
      </b>
      <span
        style={{
          display: 'block',
          marginTop: 4,
          fontSize: 'var(--text-body-sm)',
          color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        }}
      >
        {label}
      </span>
    </div>
  );
}
