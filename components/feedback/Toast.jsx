import React from 'react';

const bkcToastTones = {
  success: { accent: 'var(--bkc-green-bright)', bg: 'var(--surface-dark)' },
  info: { accent: 'var(--bkc-stratum)', bg: 'var(--surface-dark)' },
  warning: { accent: 'var(--bkc-orange)', bg: 'var(--surface-dark)' },
  danger: { accent: 'var(--status-danger)', bg: 'var(--surface-dark)' },
};

/* Transient confirmation on a dark slab, with a single accent dot. No icons, no colour flood. */
export function Toast({ title, description, tone = 'success', action, onClose, style, ...rest }) {
  const t = bkcToastTones[tone] || bkcToastTones.success;
  return (
    <div
      role="status"
      style={{
        display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)',
        padding: '14px 16px', minWidth: 300, maxWidth: 420,
        background: t.bg, borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-float)',
        ...style,
      }}
      {...rest}
    >
      <span style={{ width: 7, height: 7, borderRadius: 999, background: t.accent, marginTop: 6, flex: '0 0 auto' }} />
      <div style={{ flex: 1 }}>
        <b style={{ display: 'block', fontSize: 'var(--text-body-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--bkc-white)' }}>{title}</b>
        {description && <span style={{ display: 'block', marginTop: 3, fontSize: 'var(--text-caption)', color: 'var(--text-on-dark-muted)' }}>{description}</span>}
      </div>
      {action}
      {onClose && (
        <button type="button" aria-label="Tutup" onClick={onClose} style={{ border: 'none', background: 'none', color: 'var(--text-on-dark-muted)', cursor: 'pointer', padding: 0, fontSize: 15, lineHeight: 1 }}>×</button>
      )}
    </div>
  );
}
