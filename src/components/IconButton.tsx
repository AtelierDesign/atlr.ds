import { styled } from '../../stitches.config';

export const IconButton = styled('button', {
  alignItems: 'center',
  border: '1px solid',
  borderColor: '$slate7',
  borderWidth: 1,
  backgroundColor: '$mauve3',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontSize: '14px',
  justifyContent: 'center',
  lineHeight: '1',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  color: '$air6',

  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  '@hover': {
    '&:hover': {
      borderColor: '$slate8',
    },
  },

  '&:active': {
    backgroundColor: '$slate2',
  },

  '&:focus': {
    borderColor: '$slate8',
    boxShadow: '0 0 0 1px $colors$slate8',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: 'transparent',
    color: '$slate6',
  },

  variants: {
    size: {
      '1': {
        borderRadius: 7,
        height: 26,
        width: 26,
      },
      '2': {
        borderRadius: 8,
        height: 32,
        width: 32,
      },
      '3': {
        borderRadius: 10,
        height: 40,
        width: 40,
      },
      '4': {
        borderRadius: '$3',
        height: '$8',
        width: '$8',
      },
    },
    variant: {
      atelier: {
        backgroundColor: '$sky3',
        borderColor: '$sky5',
        color: '$mauve12',
        '@hover': {
          '&:hover': {
            backgroundColor: '$skyA3',
            borderColor: '$sky6',
          },
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$skyA8, 0 0 0 1px $colors$skyA8',
        },
        '&:active': {
          backgroundColor: '$skyA4',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$skyA4',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        borderWidth: '0',
        color: '$lime9',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slateA3',
          },
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
        },
        '&:active': {
          backgroundColor: '$slateA4',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$slateA4',
        },
      },
      raised: {
        color: '$blue8',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        '@hover': {
          '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 3px',
          },
        },
        '&:focus': {
          borderColor: '$slate8',
          boxShadow: '0 0 0 1px $colors$slate8, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        },
        '&:active': {
          backgroundColor: '$slate4',
        },
      },
    },
    state: {
      active: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        '&:active': {
          backgroundColor: '$slate4',
        },
      },
      waiting: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        '&:active': {
          backgroundColor: '$slate4',
        },
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});
