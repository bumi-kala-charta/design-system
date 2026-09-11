import React from 'react';

const bkcTickBase = {
  display: 'grid',
  placeItems: 'center',
  width: 20,
  height: 20,
  flex: '0 0 auto',
  border: '1.5px solid var(--border-default)',
  background: 'var(--surface-page)',
  transition: 'background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard)',
};

/* Square tick box. Green when checked — never orange (orange is reserved for accents). */
export function Checkbox({ label, description, checked, defaultChecked, onChange, disabled = false, id, style, ...rest }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const fieldId = id || React.useId();
  const toggle = (e) => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  return (
    <label
      htmlFor={fieldId}
      style={{ display: 'flex', gap: 'var(--space-3)', alignItems: description ? 'flex-start' : 'center', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}
    >
      <input id={fieldId} type="checkbox" checked={on} onChange={toggle} disabled={disabled} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span
        aria-hidden="true"
        style={{
          ...bkcTickBase,
          borderRadius: 'var(--radius-xs)',
          borderColor: on ? 'var(--bkc-green)' : 'var(--border-default)',
          background: on ? 'var(--bkc-green)' : 'var(--surface-page)',
          marginTop: description ? 2 : 0,
        }}
      >
        {on && <span style={{ width: 10, height: 6, borderLeft: '2px solid #fff', borderBottom: '2px solid #fff', transform: 'rotate(-45deg) translate(1px,-1px)' }} />}
      </span>
      <span>
        <span style={{ display: 'block', fontSize: 'var(--text-body)', color: 'var(--text-strong)' }}>{label}</span>
        {description && <span style={{ display: 'block', marginTop: 2, fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{description}</span>}
      </span>
    </label>
  );
}
