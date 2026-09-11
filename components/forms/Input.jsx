import React from 'react';

const bkcFieldShell = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 'var(--radius-md)',
  border: '1px solid var(--border-default)',
  background: 'var(--surface-page)',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-body)',
  color: 'var(--text-strong)',
  outline: 'none',
  transition: 'border-color var(--duration-base) var(--ease-standard), box-shadow var(--duration-base) var(--ease-standard)',
};

/* Single-line text field with label, hint and error states. Set multiline for a textarea. */
export function Input({ label, hint, error, iconLeft, multiline = false, rows = 4, id, required = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || React.useId();
  const Tag = multiline ? 'textarea' : 'input';
  const borderColor = error ? 'var(--status-danger)' : focus ? 'var(--bkc-green)' : 'var(--border-default)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{ fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-medium)', color: 'var(--text-strong)' }}>
          {label}
          {required && <span style={{ color: 'var(--bkc-orange)', marginLeft: 3 }}>*</span>}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {iconLeft && <span style={{ position: 'absolute', left: 13, display: 'flex', color: 'var(--text-subtle)' }}>{iconLeft}</span>}
        <Tag
          id={fieldId}
          rows={multiline ? rows : undefined}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            ...bkcFieldShell,
            borderColor,
            boxShadow: focus && !error ? 'var(--ring-focus)' : 'none',
            paddingLeft: iconLeft ? 40 : bkcFieldShell.padding.split(' ')[1],
            resize: multiline ? 'vertical' : undefined,
            lineHeight: multiline ? 'var(--leading-body)' : undefined,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 'var(--text-caption)', color: error ? 'var(--status-danger)' : 'var(--text-subtle)' }}>{error || hint}</span>
      )}
    </div>
  );
}
