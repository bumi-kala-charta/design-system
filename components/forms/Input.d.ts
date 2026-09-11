import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  /** Replaces hint and turns the field red. */
  error?: string;
  iconLeft?: React.ReactNode;
  /** Renders a <textarea>. */
  multiline?: boolean;
  rows?: number;
  required?: boolean;
}

export declare function Input(props: InputProps): JSX.Element;
