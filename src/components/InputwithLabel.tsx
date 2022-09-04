import React from 'react';
import { styled } from '../../stitches.config';
import { Input } from './Input';
import { Flex } from './Flex';
import * as LabelPrimitive from '@radix-ui/react-label';

const StyledLabel = styled(LabelPrimitive.Root, {
  fontFamily: '$pragmatica',
  fontSize: '11px',
  fontWeight: '600',
  textTransform: 'uppercase',
  color: '$mauve8',
  userSelect: 'none',
});

// export..
const Label = StyledLabel;

export const InputwithLabel = () => (
  <Flex direction='column' css={{ padding: '0', alignItems: 'left' }}>
    <Label htmlFor='firstName' css={{ lineHeight: '35px', marginLeft: '5px' }}>
      first name
    </Label>
    <Input size='2' type='text' id='firstName' defaultValue='' placeholder='Atelier Design®' css={{ width: 'auto' }} />
  </Flex>
);
