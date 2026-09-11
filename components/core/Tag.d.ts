import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  selected?: boolean;
  /** Renders a × affordance and fires on click. */
  onRemove?: (e: React.MouseEvent) => void;
  /** Adds hover feedback without needing onClick. */
  interactive?: boolean;
  iconLeft?: React.ReactNode;
}

export declare function Tag(props: TagProps): JSX.Element;
