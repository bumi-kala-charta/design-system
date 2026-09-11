import React from 'react';

/* Section opener: eyebrow, heading, optional lead paragraph and trailing action. */
export function SectionHeading({ eyebrow, title, lead, action, align = 'left', tone = 'default', style, ...rest }) {
  const onDark = tone === 'on-dark';
  const centered = align === 'center';
  return (
    <div
      style={{
        display: 'flex',
        alignItems: centered ? 'center' : 'flex-end',
        justifyContent: centered ? 'center' : 'space-between',
        flexDirection: centered ? 'column' : 'row',
        gap: 'var(--space-4)',
        textAlign: centered ? 'center' : 'left',
        ...style,
      }}
      {...rest}
    >
      <div>
        {eyebrow && <div className="bkc-eyebrow" style={{ marginBottom: 'var(--space-3)', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-brand)' }}>{eyebrow}</div>}
        <h2 style={{ fontSize: 'var(--text-title-1)', color: onDark ? 'var(--bkc-white)' : 'var(--text-strong)' }}>{title}</h2>
        {lead && (
          <p style={{ marginTop: 'var(--space-3)', maxWidth: 'var(--width-prose)', fontSize: 'var(--text-body)', color: onDark ? 'var(--text-on-dark)' : 'var(--text-muted)', marginInline: centered ? 'auto' : undefined }}>
            {lead}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
