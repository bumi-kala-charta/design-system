import React from 'react';

/* Site header used on every BKC public surface: emblem lockup, links, one pill action. */
export function NavBar({ items = [], active, action, tone = 'default', assetBase = '../../assets', onNavigate, style, ...rest }) {
  const onBrand = tone === 'on-brand';
  return (
    <nav
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '18px var(--gutter-page)',
        background: onBrand ? 'var(--surface-brand)' : 'var(--surface-page)',
        borderBottom: onBrand ? 'none' : '1px solid var(--border-subtle)',
        ...style,
      }}
      {...rest}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-3)' }}>
        <img src={`${assetBase}/logo-emblem.png`} alt="Bumi Kala Charta" style={{ width: 38, height: 38 }} />
        <span className="bkc-wordmark" style={{ fontSize: 14, color: onBrand ? 'var(--bkc-white)' : 'var(--text-strong)', whiteSpace: 'nowrap' }}>Bumi Kala Charta</span>
      </span>
      <ul style={{ display: 'flex', gap: 'var(--space-7)', alignItems: 'center' }}>
        {items.map((it) => {
          const label = typeof it === 'string' ? it : it.label;
          const on = active === label;
          return (
            <li key={label}>
              <a
                href={typeof it === 'string' ? '#' : it.href || '#'}
                onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(label); } }}
                style={{
                  fontSize: 'var(--text-body-sm)',
                  fontWeight: on ? 'var(--weight-semibold)' : 'var(--weight-regular)',
                  color: onBrand ? (on ? 'var(--bkc-white)' : 'rgba(255,255,255,.78)') : on ? 'var(--text-brand)' : 'var(--text-body)',
                }}
              >
                {label}
              </a>
            </li>
          );
        })}
        {action && <li style={{ marginLeft: 'var(--space-2)' }}>{action}</li>}
      </ul>
    </nav>
  );
}
