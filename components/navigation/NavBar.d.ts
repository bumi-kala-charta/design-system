import * as React from 'react';

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  items: Array<string | { label: string; href?: string }>;
  /** Label of the current page. */
  active?: string;
  /** Trailing element, normally a pill Button. */
  action?: React.ReactNode;
  /** 'on-brand' puts the bar on green with white type. */
  tone?: 'default' | 'on-brand';
  assetBase?: string;
  onNavigate?: (label: string) => void;
}

export declare function NavBar(props: NavBarProps): JSX.Element;
