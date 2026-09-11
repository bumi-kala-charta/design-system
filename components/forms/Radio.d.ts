import * as React from 'react';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  options: Array<string | RadioOption>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  direction?: 'column' | 'row';
  disabled?: boolean;
}

export declare function Radio(props: RadioProps): JSX.Element;
