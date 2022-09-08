import React from 'react';
import Marquee from 'react-fast-marquee';
import { styled, CSS } from '../../stitches.config';

const StyledMarqueeContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: 'auto',
  width: '100%',
  minWidth: '100vw',
  position: 'relative',
  padding: 0,
  margin: 0,
});

const StyledMarquee = styled('div', {
  display: 'flex',
  fontSize: '30px',
});

type TextScrollOriginProps = React.FC<typeof Marquee>;
type TextScrollProps = TextScrollOriginProps & {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  css?: CSS;
  pauseOnHover?: boolean;
  pauseOnClick?: boolean;
  direction?: 'left' | 'right';
  speed?: number;
  loop?: number;
  gradient?: boolean;
  gradientColor?: [number, number, number];
  /**
   * The width of the gradient on either side
   * Type: string
   * Default: 200
   */
  gradientWidth?: number | string;
  onFinish?: () => void;
  /**
   * A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).
   * Type: Function
   * Default: null
   */
  onCycleComplete?: () => void;
};
export const TextScroll = React.forwardRef<React.FC<typeof StyledMarquee>, TextScrollProps>(
  ({ children, ...props }) => <StyledMarquee {...props}>{children}</StyledMarquee>,
);

export const MarqueeContainer = StyledMarqueeContainer;
