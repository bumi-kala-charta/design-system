import * as React from 'react';

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  title: React.ReactNode;
  description?: React.ReactNode;
  tone?: 'success' | 'info' | 'warning' | 'danger';
  action?: React.ReactNode;
  onClose?: () => void;
}

export declare function Toast(props: ToastProps): JSX.Element;
