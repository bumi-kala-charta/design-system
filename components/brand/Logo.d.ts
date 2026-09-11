import * as React from 'react';

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 'horizontal' (default) · 'vertical' · 'emblem' (mark only) · 'wordmark' (type only). */
  variant?: 'horizontal' | 'vertical' | 'emblem' | 'wordmark';
  /** Emblem diameter in px; the wordmark scales from it. Default 40. Never below 28. */
  size?: number;
  /** 'on-dark' switches the wordmark to white. The emblem itself is never recoloured. */
  tone?: 'default' | 'on-dark';
  /** Relative path to the assets directory holding logo-emblem.png. */
  assetBase?: string;
  /** Adds the "Geospatial Community" descriptor under the wordmark. */
  showTagline?: boolean;
}

export declare function Logo(props: LogoProps): JSX.Element;
