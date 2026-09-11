import * as React from 'react';

export interface IconProps extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  /** Lucide icon name, kebab-case — e.g. "map", "satellite", "graduation-cap". */
  name: string;
  /** Rendered box in px. Default 18. */
  size?: number;
  /** Stroke weight. BKC uses 1.6 for UI, 1.4 for large decorative glyphs. Default 1.6. */
  strokeWidth?: number;
  /** Overrides currentColor. */
  color?: string;
}

/** Lucide glyph wrapper. Requires the Lucide UMD script on the page. */
export declare function Icon(props: IconProps): JSX.Element;
