import React from 'react';

/* Instant on/off. Track goes green; the knob never changes colour. */
export function Switch({ label, description, checked, defaultChecked, onChange, disabled = false, id, style, ...rest }) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const fieldId = id || React.useId();
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange && onChange(!on);
  };
  return (
    <label htmlFor={fieldId} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: description ? 'flex-start' : 'center', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, ...style }}>
      <button
        id={fieldId}
        type="button"
        role="switch"
        aria-checked={on}
        onClick={toggle}
        disabled={disabled}
        style={{
          position: 'relative', width: 40, height: 23, flex: '0 0 auto', padding: 0, marginTop: description ? 1 : 0,
          border: 'none', borderRadius: 'var(--radius-pill)',
          background: on ? 'var(--bkc-green)' : 'var(--neutral-300)',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background var(--duration-base) var(--ease-standard)',
        }}
        {...rest}
      >
        <span
          style={{
            position: 'absolute', top: 3, left: on ? 20 : 3, width: 17, height: 17,
            borderRadius: 999, background: 'var(--bkc-white)', boxShadow: 'var(--shadow-xs)',
            transition: 'left var(--duration-base) var(--ease-standard)',
          }}
        />
      </button>
      {(label || description) && (
        <span>
          {label && <span style={{ display: 'block', fontSize: 'var(--text-body)', color: 'var(--text-strong)' }}>{label}</span>}
          {description && <span style={{ display: 'block', marginTop: 2, fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{description}</span>}
        </span>
      )}
    </label>
  );
}
