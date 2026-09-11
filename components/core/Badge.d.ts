import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'brand' | 'accent' | 'success' | 'warning' | 'danger' | 'neutral' | 'solid' | 'on-dark';
  size?: 'sm' | 'md';
  /** Prefixes a 5px dot in the current colour. */
  dot?: boolean;
}

export declare function Badge(props: BadgeProps): JSX.Element;
