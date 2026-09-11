import React from 'react';

const bkcIconBtnSizes = { sm: 32, md: 38, lg: 44 };

const bkcIconBtnVariants = {
  soft: { rest: { background: 'var(--surface-brand-soft)', color: 'var(--bkc-green)' }, hover: { background: 'rgba(53,140,103,.18)' } },
  'soft-accent': { rest: { background: 'var(--surface-accent-soft)', color: 'var(--bkc-orange)' }, hover: { background: 'rgba(234,144,18,.2)' } },
  solid: { rest: { background: 'var(--action-brand)', color: 'var(--bkc-white)' }, hover: { background: 'var(--action-brand-hover)' } },
  outline: { rest: { background: 'transparent', color: 'var(--text-strong)', border: '1px solid var(--border-default)' }, hover: { background: 'var(--action-ghost-hover)' } },
  ghost: { rest: { background: 'transparent', color: 'var(--text-muted)' }, hover: { background: 'var(--action-ghost-hover)', color: 'var(--text-strong)' } },
  'on-dark': { rest: { background: 'rgba(255,255,255,.12)', color: 'var(--bkc-white)' }, hover: { background: 'rgba(255,255,255,.2)' } },
};

/* A square-ish action carrying only an icon. Radius follows the container scale, not the pill. */
export function IconButton({ children, variant = 'soft', size = 'md', shape = 'rounded', label, disabled = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const v = bkcIconBtnVariants[variant] || bkcIconBtnVariants.soft;
  const px = bkcIconBtnSizes[size] || bkcIconBtnSizes.md;
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-grid',
        placeItems: 'center',
        width: px,
        height: px,
        border: 'none',
        borderRadius: shape === 'circle' ? 'var(--radius-pill)' : size === 'sm' ? 'var(--radius-sm)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        transition: 'background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard)',
        ...v.rest,
        ...(hover && !disabled ? v.hover : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
