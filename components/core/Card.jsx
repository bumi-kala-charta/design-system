import React from 'react';

const bkcCardSurfaces = {
  default: { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)' },
  muted: { background: 'var(--surface-card-muted)', border: '1px solid transparent' },
  brand: { background: 'var(--surface-brand)', border: '1px solid transparent', color: 'var(--text-on-brand)' },
  dark: { background: 'var(--surface-dark)', border: '1px solid transparent', color: 'var(--text-on-dark)' },
  outline: { background: 'transparent', border: '1px solid var(--border-default)' },
};

/* The workhorse container: 20px radius, hairline border, lift on hover.
   Set pattern to lay the contour motif behind the content. */
export function Card({ children, surface = 'default', interactive = false, pattern = null, padding = 'var(--pad-card)', radius = 'var(--radius-card)', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: radius,
        padding,
        transition: 'box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)',
        boxShadow: lift ? 'var(--shadow-card)' : 'none',
        transform: lift ? 'translateY(-3px)' : undefined,
        cursor: interactive ? 'pointer' : undefined,
        ...(bkcCardSurfaces[surface] || bkcCardSurfaces.default),
        ...style,
      }}
      {...rest}
    >
      {pattern}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
}
