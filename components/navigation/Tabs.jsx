import React from 'react';

/* Horizontal tab strip. Underline for page-level sections, pill for filters inside panels. */
export function Tabs({ items = [], value, defaultValue, onChange, variant = 'underline', tone = 'default', style, ...rest }) {
  const first = items.length ? (typeof items[0] === 'string' ? items[0] : items[0].value) : undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? first);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const onDark = tone === 'on-dark';
  const pick = (v) => { if (!isControlled) setInternal(v); onChange && onChange(v); };
  const pill = variant === 'pill';
  return (
    <div
      role="tablist"
      style={{
        display: 'flex',
        gap: pill ? 'var(--space-2)' : 'var(--space-6)',
        borderBottom: pill ? 'none' : `1px solid ${onDark ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
        padding: pill ? 4 : 0,
        background: pill ? 'var(--neutral-100)' : 'transparent',
        borderRadius: pill ? 'var(--radius-pill)' : 0,
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const v = typeof it === 'string' ? it : it.value;
        const text = typeof it === 'string' ? it : it.label;
        const count = typeof it === 'string' ? null : it.count;
        const on = current === v;
        return (
          <button
            key={v}
            role="tab"
            aria-selected={on}
            onClick={() => pick(v)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              border: 'none', cursor: 'pointer', background: 'transparent',
              fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body-sm)',
              fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)',
              color: on ? (onDark ? 'var(--bkc-white)' : 'var(--text-strong)') : (onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'),
              transition: 'color var(--duration-base) var(--ease-standard), background var(--duration-base) var(--ease-standard)',
              ...(pill
                ? { padding: '8px 16px', borderRadius: 'var(--radius-pill)', background: on ? 'var(--surface-page)' : 'transparent', boxShadow: on ? 'var(--shadow-xs)' : 'none' }
                : { padding: '0 0 12px', borderBottom: `2px solid ${on ? 'var(--bkc-green)' : 'transparent'}`, marginBottom: -1 }),
            }}
          >
            {text}
            {count != null && (
              <span style={{ fontFamily: 'var(--font-data)', fontSize: 'var(--text-micro)', color: 'var(--text-subtle)' }}>{count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
