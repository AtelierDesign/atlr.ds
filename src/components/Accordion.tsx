import React from 'react';
import { CSS, keyframes, styled } from '../../stitches.config';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import * as AccordionPrimitive from '@radix-ui/react-accordion';





/*
* <!--
* Accordion.ROOT
* -->
 */
const StyledAccordion = styled(AccordionPrimitive.Root, {
  border: '2px solid $gray4',
  borderRadius: '10px',
  width: '100%',
  backgroundColor: '$translucent',
});


// begin styled....
const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});
const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});


type AccordionPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Root>;
type AccordionProps = AccordionPrimitiveProps & { css?: CSS };

export const Accordion = React.forwardRef<React.ElementRef<typeof StyledAccordion>, AccordionProps>(
  ({ children, ...props }, forwardedRef) => (
    <StyledAccordion
      ref={forwardedRef}
      {...props}
      {...(props.type === 'single' ? { collapsible: true } : {})}
    >
      {children}
    </StyledAccordion>
  ),
);


/*
* <!--
* Accordion.ITEM
* -->
 */
type AccordionItemPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Item>;
type AccordionItemProps = AccordionItemPrimitiveProps & { css?: CSS };


const StyledItem = styled(AccordionPrimitive.Item, {
  overflow: 'hidden',
  backgroundColor: '$mauve1',

  '&:first-child': {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  '&:last-child': {
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
    boxShadow: '0 0 0 2px $mauve12',
  },
  '&:last-of-type': {
    borderBottom: '0px solid $colors$slate6',
  },
});

// export const AccordionItem = StyledItem;
export const AccordionItem = React.forwardRef<React.ElementRef<typeof StyledItem>,
  AccordionItemProps>(({ children, ...props }, forwardedRef) => (
  <StyledItem {...props} ref={forwardedRef}>
    {children}
  </StyledItem>
));


/*
* <!--
* Accordion.TRIGGER
* -->
 */
const StyledHeader = styled(AccordionPrimitive.Header, {
  paddingTop: '3px',
  borderRadius: '8px',
  all: 'unset',
  display: 'flex',
});

const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  fontFamily: '$inter',
  fontSize: '13px',
  fontWeight: '600',
  letterSpacing: '-0.02rem',
  paddingTop: '0px',
  paddingBottom: '0px',
  paddingLeft: '20px',
  paddingRight: '20px',
  height: '45px',
  flex: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  lineHeight: '1',
  color: '$mauve12',
  width: '100%',
  borderRadius: '8px',


  '&[data-state="closed"]': {
    backgroundColor: '$slate1',
  },
  '&[data-state="open"]': {
    backgroundColor: '$slate3',
    '&:first-child': {
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
    },
    '&:last-child': {
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px',
    },
    svg: {
      transform: 'rotate(180deg)',
    },
  },

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
  },
  svg: {
    transition: 'transform 175ms cubic-bezier(0.65, 0, 0.35, 1)',
  },

  // hoverStyles..
  '&:hover': {
    backgroundColor: '$gray4',
    '&:first-child': {
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
    },
    '&:last-child': {
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px',
    },
    '&:focus-within': {
      position: 'relative',
      zIndex: 1,
      boxShadow: '0 0 0 2px $mauve12',
    },
    '&:last-of-type': {},
  },
});


const StyledChevron = styled(ChevronDownIcon, {
  color: '$mauve12',
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});


// @types....
type AccordionTriggerPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Trigger>;
type AccordionTriggerProps = AccordionTriggerPrimitiveProps & { css?: CSS };


export const AccordionTrigger = React.forwardRef<React.ElementRef<typeof StyledTrigger>,
  AccordionTriggerProps>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledChevron />
    </StyledTrigger>
  </StyledHeader>
));


/*
* <!--
* Accordion.CONTENT
* -->
 */
type AccordionContentPrimitiveProps = React.ComponentProps<typeof AccordionPrimitive.Content>;
type AccordionContentProps = AccordionContentPrimitiveProps & { css?: CSS };

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  color: '$mauve10',
  backgroundColor: '$mauve1',
  fontFamily: '$inter',
  fontSize: '14px',
  fontWeight: '500',
  lineHeight: '18px',
  padding: 0,
  letterSpacing: '-0.02rem',

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },

  // '&:last-of-type': { borderBottom: '0px' },
});

const StyledContentText = styled('div', {
  padding: '15px 20px',
});


export const AccordionContent = React.forwardRef<React.ElementRef<typeof StyledContent>,
  AccordionContentProps>(({ children, ...props }, forwardedRef) => (
  <StyledHeader>
    <StyledContent {...props} ref={forwardedRef}>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  </StyledHeader>
));


/*
!! All exports...
* Accordion
* AccordionTrigger
* AccordionItem
* AccordionContent
*/

/*
!! Render as follows...

import React from 'react'
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent
} from '@atelier.design'


export const AccordionComponent = () => {
  return(
    <>
      <Accordion type="single" collapsible>

        <AccordionItem value="item-1">
          <AccordionTrigger>...</AccordionTrigger>
          <AccordionContent>....</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>...</AccordionTrigger>
          <AccordionContent>....</AccordionContent>
        </AccordionItem>

      </Accordion>
    </>
  );
};
*/
