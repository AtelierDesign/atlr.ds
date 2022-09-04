import { styled } from '../../stitches.config';

export const Banner = styled('div', {
  zIndex: '999',
  boxSizing: 'border-box',
  position: 'relative',
  height: 'auto',
  fontWeight: '600',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',


  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },


  variants: {
    size: {
      '1': {
        marginTop: '42px',
        maxHeight: '40px',
        minHeight: '40px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '4px',
        paddingBottom: '4px',
      },
      '2': {
        marginTop: '40px',
        maxHeight: '54px',
        minHeight: '54px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '4px',
        paddingBottom: '4px',
      },
    },


    variant: {
      loContrast: {
        backgroundColor: '$loContrast',
      },
      gray: {
        backgroundColor: '$slate3',
      },
      suprLime: {
        backgroundColor: '$suprLime6',
        border: '2px solid $mauve8',
        color: '$mauve8',
      },
      lime: {
        backgroundColor: '$limeA9',
      },
      blue: {
        backgroundColor: '$blue3',
        border: '2px solid $blue4',
      },
      green: {
        backgroundColor: '$green3',
      },
      red: {
        backgroundColor: '$red9',
        border: '2px solid $red10',
      },
    },
    rounded: {
      true: {
        borderRadius: '12px',
      },
    },
    border: {
      true: {
        borderRadius: '$pill',
      },
    },
  },
  compoundVariants: [
    {
      border: 'true',
      variant: 'gray',
      css: {
        borderColor: '$slate6',
      },
    },
    {
      border: 'true',
      variant: 'blue',
      css: {
        borderColor: '$blue11',
      },
    },
    {
      border: 'true',
      variant: 'loContrast',
      css: {
        borderColor: '$slate6',
      },
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'gray',
  },
});
