import React from 'react';

const bkcBtnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-pill)',
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-medium)',
  cursor: 'pointer',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  transition: 'background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)',
};

const bkcBtnSizes = {
  sm: { padding: '8px 16px', fontSize: 'var(--text-body-sm)' },
  md: { padding: '14px 24px', fontSize: 'var(--text-body)' },
  lg: { padding: '16px 30px', fontSize: 'var(--text-body-lg)' },
};

const bkcBtnVariants = {
  primary: { rest: { background: 'var(--action-primary)', color: 'var(--bkc-white)' }, hover: { background: 'var(--action-primary-hover)' }, press: { background: 'var(--action-primary-press)' } },
  brand: { rest: { background: 'var(--action-brand)', color: 'var(--bkc-white)' }, hover: { background: 'var(--action-brand-hover)' }, press: { background: 'var(--action-brand-press)' } },
  accent: { rest: { background: 'var(--action-accent)', color: 'var(--bkc-white)' }, hover: { background: 'var(--action-accent-hover)' }, press: { background: 'var(--action-accent-press)' } },
  secondary: { rest: { background: 'transparent', color: 'var(--text-strong)', borderColor: 'var(--border-default)' }, hover: { background: 'var(--action-ghost-hover)' }, press: { background: 'var(--neutral-200)' } },
  ghost: { rest: { background: 'transparent', color: 'var(--text-strong)' }, hover: { background: 'var(--action-ghost-hover)' }, press: { background: 'var(--neutral-200)' } },
  'on-dark': { rest: { background: 'transparent', color: 'var(--bkc-white)', borderColor: 'var(--border-on-dark)' }, hover: { background: 'rgba(255,255,255,.12)' }, press: { background: 'rgba(255,255,255,.18)' } },
};

/* The primary action. Pill-shaped at every size — BKC never uses square buttons. */
export function Button({ children, variant = 'primary', size = 'md', href, iconLeft, iconRight, fullWidth = false, disabled = false, type = 'button', style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = bkcBtnVariants[variant] || bkcBtnVariants.primary;
  const composed = {
    ...bkcBtnBase,
    ...bkcBtnSizes[size],
    ...v.rest,
    ...(hover && !disabled ? v.hover : null),
    ...(press && !disabled ? v.press : null),
    width: fullWidth ? '100%' : undefined,
    transform: press && !disabled ? 'scale(.985)' : undefined,
    opacity: disabled ? 0.45 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    ...style,
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return (
    <Tag
      href={href}
      type={Tag === 'button' ? type : undefined}
      disabled={Tag === 'button' ? disabled : undefined}
      aria-disabled={disabled || undefined}
      style={composed}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Tag>
  );
}
