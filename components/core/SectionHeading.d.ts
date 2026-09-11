import * as React from 'react';

export interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono uppercase kicker above the title. */
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  /** Trailing element, usually a Button — ignored visually when align="center". */
  action?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'default' | 'on-dark';
}

export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
