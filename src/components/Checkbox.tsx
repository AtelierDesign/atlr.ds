import React from 'react';
import { styled } from '../../stitches.config';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: '$mauve2',
  width: 23,
  height: 23,
  borderRadius: 6,
  border: '1px solid $lime8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `1px 2px 10px $blackA7`,
  transition: 'ease-in 200ms',
  '&:hover': { backgroundColor: '$mauve3' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$lime8',
});

const StyledLabel = styled('label', {
  fontFamily: '$pragmatica',
  color: '$mauve12',
  fontSize: 13,
  lineHeight: 1,
  userSelect: 'none',
});

// Exports
export const Checkbox = StyledCheckbox;
export const CheckboxIndicator = StyledIndicator;
export const CheckboxLabel = StyledLabel;
