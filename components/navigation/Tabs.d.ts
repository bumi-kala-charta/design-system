import * as React from 'react';

export interface TabItem {
  value: string;
  label: string;
  /** Mono count rendered after the label. */
  count?: number | string;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<string | TabItem>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** 'underline' for page sections (default) · 'pill' for filters inside panels. */
  variant?: 'underline' | 'pill';
  tone?: 'default' | 'on-dark';
}

export declare function Tabs(props: TabsProps): JSX.Element;
