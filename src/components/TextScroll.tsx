import React from 'react';
import { keyframes, styled } from '../../stitches.config';
import Marquee from 'react-fast-marquee';

const scroll = keyframes({
    from: {
      '0%': {
        transform: 'translateX(0%)',
      },
    },
    to: {
      '100%': {
        transform: 'translateX(-100%)',
      },
    },
  }),
  StyledMarqueeContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    minWidth: '100vw',
    position: 'relative',
    padding: 0,
    margin: 'auto',
    overflowX: 'hidden',
    flexDirection: 'row',

    '&:hover': {
      animation: 'var(--pause-on-hover)',
    },

    '&:active': {
      animation: 'var(--pause-on-click)',
    },
  }),
  StyledContent: any = styled(Marquee, {});
type MarqueeContentPrimitiveProps = React.ComponentProps<typeof Marquee>;
export const MarqueeContainer = StyledMarqueeContainer;
export const MarqueeContent: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<MarqueeContentPrimitiveProps> & React.RefAttributes<React.ElementRef<typeof StyledContent>>
> = React.forwardRef<React.ElementRef<typeof StyledContent>, MarqueeContentPrimitiveProps>(({ children, ...props }) => (
  <StyledMarqueeContainer>
    <StyledContent {...props}>{children}</StyledContent>
  </StyledMarqueeContainer>
));
