import React from 'react';
import { styled } from '../../stitches.config';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 38,
  height: 20,
  backgroundColor: '$mauve12',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 4px $colors$mauveA2`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px $colors$mauve12` },
  '&[data-state="checked"]': { backgroundColor: '$mauve12' },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 16,
  height: 16,
  backgroundColor: '$mauve7',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px $mauveA7`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(20px)', backgroundColor: '$mauve2' },
});

// Exports
export const Switch = StyledSwitch;
export const SwitchThumb = StyledThumb;

// Your app...
const Flex = styled('div', { display: 'flex' });

export const AtelierSwitch = ({ ...props }) => (
  <form>
    <Flex css={{ alignItems: 'center' }}>
      <Switch defaultChecked id="s1" {...props}>
        <SwitchThumb />
      </Switch>
    </Flex>
  </form>
);
