import { styled } from '../../stitches.config';
export const Container = styled('div', {
  boxSizing: 'border-box',
  flexShrink: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '$5',
  paddingRight: '$5',
  '@sm': {
    paddingLeft: '$4',
    paddingRight: '$4',
  },
  variants: {
    size: {
      '1': {
        maxWidth: '430px',
      },
      '2': {
        maxWidth: '715px',
      },
      '3': {
        maxWidth: '1145px',
      },
      '4': {
        maxWidth: 'none',
      },
    },
  },
  defaultVariants: {
    size: '4',
  },
});
