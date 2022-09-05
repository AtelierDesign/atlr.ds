import React from 'react';
import { styled } from '../../stitches.config';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$lime9',
  borderRadius: 9999,
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },

  variants: {
    size: {
      '1': {
        '&[data-orientation=horizontal]': { height: 1, width: '100%' },
        '&[data-orientation=vertical]': { height: '100%', width: 1 },
      },
      '2': {
        '&[data-orientation=horizontal]': { height: 2, width: '100%' },
        '&[data-orientation=vertical]': { height: '100%', width: 2 },
      },
      '3': {
        '&[data-orientation=horizontal]': { height: 3, width: '100%' },
        '&[data-orientation=vertical]': { height: '100%', width: 3 },
      },
    },
    color: {
      lime: { backgroundColor: '$lime9' },
      mauve: { backgroundColor: '$mauve8' },
      slate: { backgroundColor: '$slate9' },
      gray: { backgroundColor: '$gray9' },
    },
  },
  defaultVariants: {
    size: '1',
    color: 'gray',
  },
});

// Exports
export const Separator = StyledSeparator;
