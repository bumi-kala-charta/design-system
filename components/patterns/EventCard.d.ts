import * as React from 'react';

export interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Day number, e.g. "19". */
  day: string;
  /** Three-letter month, e.g. "SEP". */
  month: string;
  title: React.ReactNode;
  /** Time, place, and mentor on one line. */
  meta?: string;
  /** Mono eyebrow, e.g. "Daring & tatap muka". */
  format?: string;
  /** Seat line; strings starting with "Penuh" render red. */
  seats?: string;
  /** 'accent' switches the date block to orange — use for the next upcoming event only. */
  tone?: 'default' | 'accent';
}

export declare function EventCard(props: EventCardProps): JSX.Element;
