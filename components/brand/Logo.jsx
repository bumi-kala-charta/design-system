import React from 'react';

const bkcLogoBox = { display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none' };

/* The BKC identity lockup: circular emblem (squirrel over three earth strata) + wordmark.
   variant: 'horizontal' | 'vertical' | 'emblem' | 'wordmark'
   tone:    'default' | 'on-dark'  — wordmark colour only; the emblem is never recoloured. */
export function Logo({ variant = 'horizontal', size = 40, tone = 'default', assetBase = '../../assets', showTagline = false, style, ...rest }) {
  const onDark = tone === 'on-dark';
  const wordColor = onDark ? 'var(--bkc-white)' : 'var(--text-strong)';
  const emblem = (
    <img
      src={`${assetBase}/logo-emblem.png`}
      alt="Bumi Kala Charta"
      style={{ width: size, height: size, flex: '0 0 auto' }}
    />
  );
  const wordSize = Math.max(11, Math.round(size * 0.33));
  const word = (
    <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span
        className="bkc-wordmark"
        style={{
          color: wordColor,
          fontSize: wordSize,
          lineHeight: 1.15,
          letterSpacing: 'var(--tracking-wordmark)',
          whiteSpace: variant === 'vertical' ? 'pre-line' : 'nowrap',
        }}
      >
        {variant === 'vertical' ? 'Bumi\nKala\nCharta' : 'Bumi Kala Charta'}
      </span>
      {showTagline && (
        <span className="bkc-eyebrow" style={{ color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-subtle)' }}>
          Geospatial Community
        </span>
      )}
    </span>
  );

  if (variant === 'emblem') return <span style={{ ...bkcLogoBox, ...style }} {...rest}>{emblem}</span>;
  if (variant === 'wordmark') return <span style={{ ...bkcLogoBox, ...style }} {...rest}>{word}</span>;
  if (variant === 'vertical')
    return (
      <span style={{ ...bkcLogoBox, flexDirection: 'column', gap: 'var(--space-3)', textAlign: 'center', ...style }} {...rest}>
        {emblem}
        {word}
      </span>
    );
  return <span style={{ ...bkcLogoBox, ...style }} {...rest}>{emblem}{word}</span>;
}
