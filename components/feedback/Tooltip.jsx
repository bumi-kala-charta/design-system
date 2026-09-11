import React from 'react';

/* Hover label on the dark slab. Wraps its trigger; position is fixed per side. */
export function Tooltip({ label, side = 'top', children, style, ...rest }) {
  const [show, setShow] = React.useState(false);
  const offsets = {
    top: { bottom: '100%', left: '50%', transform: 'translate(-50%,-8px)' },
    bottom: { top: '100%', left: '50%', transform: 'translate(-50%,8px)' },
    left: { right: '100%', top: '50%', transform: 'translate(-8px,-50%)' },
    right: { left: '100%', top: '50%', transform: 'translate(8px,-50%)' },
  };
  return (
    <span
      style={{ position: 'relative', display: 'inline-flex', ...style }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      {...rest}
    >
      {children}
      {show && (
        <span
          role="tooltip"
          style={{
            position: 'absolute', zIndex: 40, whiteSpace: 'nowrap', pointerEvents: 'none',
            padding: '6px 10px', borderRadius: 'var(--radius-sm)',
            background: 'var(--surface-dark)', color: 'var(--bkc-white)',
            fontSize: 'var(--text-caption)', boxShadow: 'var(--shadow-float)',
            ...offsets[side],
          }}
        >
          {label}
        </span>
      )}
    </span>
  );
}
