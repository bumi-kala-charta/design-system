import * as React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 'primary' ink (default) · 'brand' green · 'accent' orange · 'secondary' outline · 'ghost' · 'on-dark'. */
  variant?: 'primary' | 'brand' | 'accent' | 'secondary' | 'ghost' | 'on-dark';
  size?: 'sm' | 'md' | 'lg';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
}

export declare function Button(props: ButtonProps): JSX.Element;
