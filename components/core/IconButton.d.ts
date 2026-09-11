import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'soft' | 'soft-accent' | 'solid' | 'outline' | 'ghost' | 'on-dark';
  size?: 'sm' | 'md' | 'lg';
  /** 'rounded' (default, 8-12px) or 'circle'. */
  shape?: 'rounded' | 'circle';
  /** Accessible name — required, since the button has no text. */
  label: string;
  disabled?: boolean;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
