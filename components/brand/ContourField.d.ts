import * as React from 'react';

export interface ContourFieldProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 'contour' (two ring systems, default) · 'ridge' (one hillside) · 'orbit' (globe graticule + arcs). */
  motif?: 'contour' | 'ridge' | 'orbit';
  /** Line colour context. Default 'on-brand' (white lines over green). */
  tone?: 'on-brand' | 'on-light' | 'on-accent' | 'on-dark';
  /** Contour ring spacing. Default 42px; 'dense' 26px; 'loose' 64px. */
  density?: 'default' | 'dense' | 'loose';
  /** Globe diameter for motif="orbit". Default 340. */
  globeSize?: number;
  /** Multiplies the tone's built-in alpha. */
  opacity?: number;
}

export declare function ContourField(props: ContourFieldProps): JSX.Element;
