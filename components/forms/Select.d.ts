import * as React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** Strings, or {value,label} objects. */
  options: Array<string | { value: string; label: string }>;
  /** Empty first option. */
  placeholder?: string;
}

export declare function Select(props: SelectProps): JSX.Element;
