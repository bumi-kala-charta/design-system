import React from 'react';

/* Radio group. Options are {value,label,description} or plain strings. */
export function Radio({ name, options = [], value, defaultValue, onChange, direction = 'column', disabled = false, style, ...rest }) {
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const current = isControlled ? value : internal;
  const groupName = name || React.useId();
  const pick = (v) => {
    if (disabled) return;
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return (
    <div role="radiogroup" style={{ display: 'flex', flexDirection: direction, gap: direction === 'row' ? 'var(--space-5)' : 'var(--space-3)', ...style }} {...rest}>
      {options.map((o) => {
        const v = typeof o === 'string' ? o : o.value;
        const text = typeof o === 'string' ? o : o.label;
        const desc = typeof o === 'string' ? null : o.description;
        const on = current === v;
        return (
          <label key={v} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: desc ? 'flex-start' : 'center', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}>
            <input type="radio" name={groupName} checked={on} onChange={() => pick(v)} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
            <span
              aria-hidden="true"
              style={{
                display: 'grid', placeItems: 'center', width: 20, height: 20, flex: '0 0 auto', marginTop: desc ? 2 : 0,
                borderRadius: 'var(--radius-pill)',
                border: `1.5px solid ${on ? 'var(--bkc-green)' : 'var(--border-default)'}`,
                background: 'var(--surface-page)',
                transition: 'border-color var(--duration-fast) var(--ease-standard)',
              }}
            >
              {on && <span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--bkc-green)' }} />}
            </span>
            <span>
              <span style={{ display: 'block', fontSize: 'var(--text-body)', color: 'var(--text-strong)' }}>{text}</span>
              {desc && <span style={{ display: 'block', marginTop: 2, fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{desc}</span>}
            </span>
          </label>
        );
      })}
    </div>
  );
}
