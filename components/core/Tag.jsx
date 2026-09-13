import React from 'react';

/* A selectable/removable pill for topics, filters, and skills.
   Sentence-case sans — the softer sibling of Badge. */
export function Tag({ children, selected = false, onRemove, interactive = false, iconLeft, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const clickable = interactive || !!rest.onClick;
  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        padding: '7px 14px',
        borderRadius: 'var(--radius-pill)',
        border: `1px solid ${selected ? 'var(--bkc-green)' : 'var(--border-subtle)'}`,
        background: selected ? 'var(--surface-brand-soft)' : hover && clickable ? 'var(--action-ghost-hover)' : 'var(--neutral-100)',
        color: selected ? 'var(--green-700)' : 'var(--text-default)',
        fontSize: 'var(--text-body-sm)',
        fontWeight: selected ? 'var(--weight-medium)' : 'var(--weight-regular)',
        cursor: clickable ? 'pointer' : 'default',
        transition: 'background var(--duration-base) var(--ease-standard), border-color var(--duration-base) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {onRemove && (
        <button
          type="button"
          aria-label="Hapus"
          onClick={(e) => { e.stopPropagation(); onRemove(e); }}
          style={{ border: 'none', background: 'none', padding: 0, marginLeft: 2, cursor: 'pointer', color: 'var(--text-subtle)', fontSize: 14, lineHeight: 1 }}
        >
          ×
        </button>
      )}
    </span>
  );
}
