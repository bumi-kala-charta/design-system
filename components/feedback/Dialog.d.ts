import * as React from 'react';

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Footer row, normally two Buttons. */
  actions?: React.ReactNode;
  onClose?: () => void;
  /** Sheet width in px. Default 480. */
  width?: number;
}

export declare function Dialog(props: DialogProps): JSX.Element;
