import React from 'react';

/* Modal sheet. 24px radius, warm overlay, no entrance bounce. Controlled by `open`. */
export function Dialog({ open = false, title, description, children, actions, onClose, width = 480, style, ...rest }) {
  if (!open) return null;
  return (
    <div
      role="presentation"
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 60,
        display: 'grid', placeItems: 'center', padding: 'var(--space-7)',
        background: 'var(--surface-overlay)',
        backdropFilter: 'blur(3px)',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          width, maxWidth: '100%',
          background: 'var(--surface-card)',
          borderRadius: 'var(--radius-band)',
          boxShadow: 'var(--shadow-overlay)',
          padding: 'var(--pad-card-lg)',
          ...style,
        }}
        {...rest}
      >
        {title && <h3 style={{ fontSize: 'var(--text-title-2)' }}>{title}</h3>}
        {description && <p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-body-sm)', color: 'var(--text-muted)' }}>{description}</p>}
        {children && <div style={{ marginTop: 'var(--space-5)' }}>{children}</div>}
        {actions && <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-2)', marginTop: 'var(--space-6)' }}>{actions}</div>}
      </div>
    </div>
  );
}
