declare module 'react-vertical-timeline-component' {
  import * as React from 'react';

  export interface VerticalTimelineElementProps {
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string | React.ReactNode;
    iconStyle?: React.CSSProperties;
    icon?: React.ReactNode;
    position?: 'left' | 'right';
    style?: React.CSSProperties;
    visible?: boolean;
    children?: React.ReactNode;
  }

  export const VerticalTimeline: React.FC<{ children?: React.ReactNode }>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
