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
        fontSize: '14px',
        marginTop: '42px',
        maxHeight: '40px',
        minHeight: '40px',
        height: '40px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '4px',
        paddingBottom: '4px',
      },
      '2': {
        marginTop: '40px',
        maxHeight: '52px',
        minHeight: '52px',
        height: '52px',
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
        color: '$mauve12',
      },
      suprLime: {
        backgroundColor: '$suprLime6',
        border: '2px solid $mauve8',
        color: '$mauve8',
      },
      lime: {
        backgroundColor: '$lime8',
        border: '1px solid $mauve8',
      },
      blue: {
        backgroundColor: '$blue4',
        border: '2px solid $blue5',
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
    marquee: {
      true: {
        color: '$gray12',
        border: '1px solid $mauve8',
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderRadius: 0,
        overflowX: 'hidden',
        marginTop: '40px',
        height: 'auto',
        width: '100%',
        margin: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: '4px',
        paddingBottom: '4px',

        '&:hover': {
          color: '$gray11',
        },
      },
    },
  },
  compoundVariants: [
    {
      variant: 'gray',
      css: {
        borderColor: '$slate6',
      },
    },
    {
      variant: 'blue',
      css: {
        borderColor: '$blue11',
      },
    },
    {
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
