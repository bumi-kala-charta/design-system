import * as React from 'react';

export interface Person {
  name?: string;
  initials?: string;
  /** Photo URL; replaces the initials. */
  src?: string;
}

export interface AvatarStackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Initials strings, or Person objects. */
  people: Array<string | Person>;
  /** Avatar diameter in px. Default 34. */
  size?: number;
  /** Avatars shown before the +N chip. Default 5. */
  max?: number;
  /** Sentence to the right of the stack. */
  caption?: string;
}

export declare function AvatarStack(props: AvatarStackProps): JSX.Element;
