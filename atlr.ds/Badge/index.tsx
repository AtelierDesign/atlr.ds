import React from 'react';
import { css, styled } from '@stitches/react';
import { gray, slate } from '@radix-ui/colors';
export const Badge = styled('span', {
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontWeight: '600',
  justifyContent: 'center',
  lineHeight: '1',
  verticalAlign: 'middle',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&:disabled': {
    backgroundColor: slate.slate3,
    pointerEvents: 'none',
    color: slate.slate8
  },
  '&::before': {
    boxSizing: 'border-box',
    content: '""'
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""'
  },

  backgroundColor: slate.slate3,
  color: slate.slate11,
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',

  variants: {
    size: {
      '1': {
        borderRadius: 6,
        height: 20,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 12
      },
      '2': {
        borderRadius: 8,
        height: 25,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 13
      }
    },
    variant: {
      gray: {
        backgroundColor: gray.gray3,
        border: `1px solid ${gray.gray5}`,
        color: slate.slate11,
        '&:focus': {
          boxShadow: `inset 0 0 0 1px ${gray.gray8}, 0 0 0 1px ${gray.gray8}`
        }
      }
    },
    interactive: {
      true: {}
    }
  },
  defaultVariants: {
    size: '1',
    variant: 'gray'
  }
});
