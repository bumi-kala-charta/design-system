import * as React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 'default' white + hairline · 'muted' paper · 'brand' green · 'dark' ink · 'outline'. */
  surface?: 'default' | 'muted' | 'brand' | 'dark' | 'outline';
  /** Enables the -3px lift and card shadow on hover. */
  interactive?: boolean;
  /** Pass a <ContourField /> to lay the brand pattern behind the content. */
  pattern?: React.ReactNode;
  padding?: string;
  radius?: string;
}

export declare function Card(props: CardProps): JSX.Element;
