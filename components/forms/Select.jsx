import React from 'react';

/* Native select styled to match Input. Options are {value,label} or plain strings. */
export function Select({ label, hint, error, options = [], placeholder, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)' }}>{label}</label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={fieldId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%',
            appearance: 'none',
            padding: '12px 38px 12px 14px',
            borderRadius: 'var(--radius-md)',
            border: `1px solid ${error ? 'var(--status-danger)' : focus ? 'var(--bkc-green)' : 'var(--border-default)'}`,
            background: 'var(--surface-page)',
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-body)',
            color: 'var(--text-strong)',
            outline: 'none',
            cursor: 'pointer',
            boxShadow: focus && !error ? 'var(--ring-focus)' : 'none',
            transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
          }}
          {...rest}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => {
            const value = typeof o === 'string' ? o : o.value;
            const text = typeof o === 'string' ? o : o.label;
            return <option key={value} value={value}>{text}</option>;
          })}
        </select>
        <span aria-hidden="true" style={{ position: 'absolute', right: 15, top: '50%', marginTop: -2, width: 8, height: 8, borderRight: '1.5px solid var(--text-subtle)', borderBottom: '1.5px solid var(--text-subtle)', transform: 'translateY(-50%) rotate(45deg)', pointerEvents: 'none' }} />
      </div>
      {(hint || error) && <span style={{ fontSize: 'var(--text-caption)', color: error ? 'var(--status-danger)' : 'var(--text-subtle)' }}>{error || hint}</span>}
    </div>
  );
}
