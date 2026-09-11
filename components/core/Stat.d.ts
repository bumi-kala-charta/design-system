import * as React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: React.ReactNode;
  tone?: 'default' | 'accent' | 'on-dark';
  /** Sets the numeral in Plex Mono — use when the number is a measurement. */
  mono?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export declare function Stat(props: StatProps): JSX.Element;
