import React from 'react';

/* The brand's topographic pattern as a positioned background layer.
   Drop inside any position:relative container, behind content.
   motif: 'contour' | 'ridge' | 'orbit'
   tone:  'on-brand' | 'on-light' | 'on-accent' | 'on-dark' */
export function ContourField({ motif = 'contour', tone = 'on-brand', density = 'default', globeSize = 340, opacity, style, ...rest }) {
  const toneAttr = tone === 'on-brand' ? undefined : tone.replace('on-', '');
  const densityAttr = density === 'default' ? undefined : density;
  if (motif === 'orbit') {
    return (
      <span className="bkc-orbit" data-pattern-tone={toneAttr} style={{ '--globe': `${globeSize}px`, opacity, ...style }} {...rest}>
        <i /><i /><i /><i /><i /><i />
      </span>
    );
  }
  return (
    <span
      className={motif === 'ridge' ? 'bkc-contour bkc-contour--ridge' : 'bkc-contour'}
      data-pattern-tone={toneAttr}
      data-pattern-density={densityAttr}
      style={{ opacity, ...style }}
      {...rest}
    />
  );
}
