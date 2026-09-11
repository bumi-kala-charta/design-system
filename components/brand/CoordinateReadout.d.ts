import * as React from 'react';

export interface ReadoutItem {
  label: string;
  value: string;
  /** Renders the value in accent orange — use for one row at most. */
  emphasis?: boolean;
}

export interface CoordinateReadoutProps extends React.HTMLAttributes<HTMLDivElement> {
  items: ReadoutItem[];
  /** Mono eyebrow above the list. */
  label?: string;
  dense?: boolean;
  tone?: 'default' | 'on-dark';
}

export declare function CoordinateReadout(props: CoordinateReadoutProps): JSX.Element;
