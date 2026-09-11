import React from 'react';

/* Wrapper around the Lucide icon set (CDN). BKC's guideline defines no icon system,
   so Lucide is an intentional, documented substitution: 1.6px stroke, rounded caps. */
export function Icon({ name, size = 18, strokeWidth = 1.6, color, className, style, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const host = ref.current;
    if (!host || !window.lucide) return;
    host.innerHTML = '';
    const glyph = document.createElement('i');
    glyph.setAttribute('data-lucide', name);
    host.appendChild(glyph);
    window.lucide.createIcons({
      attrs: { width: size, height: size, 'stroke-width': strokeWidth },
      nameAttr: 'data-lucide',
    });
  }, [name, size, strokeWidth]);
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={className}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, flex: '0 0 auto', color: color || 'currentColor', ...style }}
      {...rest}
    />
  );
}
