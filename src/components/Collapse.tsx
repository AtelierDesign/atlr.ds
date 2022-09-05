import React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { styled } from '../../stitches.config';

/*
const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' },
});
const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 },
});
 */

const StyledCollapsible = styled(CollapsiblePrimitive.Root, {
  width: '100%',
});

const StyledContent = styled(CollapsiblePrimitive.Content, {
  // overflow: 'hidden',
  height: 'auto',
  margin: 0,
  padding: 0,
  // '&[data-state="open"]': { animation: `${open} 400ms ease-out` },
  // '&[data-state="closed"]': { animation: `${close} 400ms ease-out` },
});

// Exports
export const Collapsible = StyledCollapsible;
export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
export const CollapsibleContent = StyledContent;
