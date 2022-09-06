import React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { CSS, keyframes, styled } from '../../stitches.config';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(HoverCardPrimitive.Content, {
  zIndex: '999',
  borderRadius: 16,
  border: '1px solid $slate6',
  padding: 20,
  width: 260,
  backgroundColor: '$mauve1',
  boxShadow: '0px 3px 12px -4px rgba(0,0,0,0.56)',
  WebkitBoxShadow: '0px 3px 12px -4px rgba(0,0,0,0.56)',

  marginBottom: 6,
  marginTop: 6,
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

type HoverCardPrimitiveProps = React.ComponentProps<typeof HoverCardPrimitive.Content>;
type HoverCardProps = HoverCardPrimitiveProps & { css?: CSS };
const Content = React.forwardRef<React.ElementRef<typeof StyledContent>, HoverCardProps>(
  ({ children, ...props }, forwardedRef) => (
    <HoverCardPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </HoverCardPrimitive.Portal>
  ),
);

const StyledImageTrigger = styled('a', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  border: '1px solid $lime9',
  display: 'inline-block',
  '&:focus': { boxShadow: `0 0 0 2px white` },
});

const StyledImg = styled('img', {
  display: 'block',
  borderRadius: '100%',
  // border: '1px solid $lime9',
  variants: {
    size: {
      normal: { width: 45, height: 45 },
      large: { width: 60, height: 60 },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

// exports...
export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContent = Content;
export const ImageTrigger = StyledImageTrigger;
export const Img = StyledImg;
