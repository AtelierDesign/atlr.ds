import { styled } from '../../stitches.config';

export const Input = styled('input', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: '$inter',
  fontSize: '13px',
  fontWeight: '600',

  margin: '0',
  outline: 'none',
  paddingRight: '4px',
  paddingLeft: '4px',
  paddingTop: '0',
  paddingBottom: '0',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 2px $colors$mauve7',
  color: '$hiContrast',
  marginBottom: '5px',
  // fontVariantNumeric: 'tabular-nums',

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3',
  },

  '&:-webkit-autofill::first-line': {
    fontFamily: '$inter',
    color: '$hiContrast',
  },

  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
    '&:-webkit-autofill': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$lime8, 0px 0px 0px 1px $colors$lime8, inset 0 0 0 100px $colors$lime3',
    },
  },

  '&::placeholder': {
    color: '$mauve7',
    fontFamily: '$inter',
    fontSize: '13px',
    fontWeight: '500',
    letterSpacing: '-0.01rem',
    paddingLeft: '4px',
  },

  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$slate2',
    color: '$slate8',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$slate7',
    },
  },

  '&:read-only': {
    backgroundColor: '$slate2',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$slate7',
    },
  },

  variants: {
    size: {
      '1': {
        borderRadius: '8px',
        height: '30px',
        fontSize: '$1',
        px: '$2',
        width: '100%',
        lineHeight: '$sizes$5',
        '&:-webkit-autofill::first-line': {
          fontSize: '$1',
        },
      },
      '2': {
        borderRadius: '10px',
        height: '38px',
        fontSize: '13px',
        px: '$2',
        width: '100%',
        lineHeight: '$sizes$6',

        '&:-webkit-autofill::first-line': {
          fontSize: '13px',
        },

        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow: 'inset 0px 0px 0px 1px $colors$lime10, 0px 0px 0px 1px $colors$limeA9',
        },
      },
      '3': {
        borderRadius: '12px',
        height: '48px',
        fontSize: '13px',
        px: '$3',
        width: '100%',
        lineHeight: '$sizes$5',
        '&:-webkit-autofill::first-line': {
          fontSize: '13px',
        },

        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow: 'inset 0px 0px 0px 2px $colors$lime9, 0px 0px 0px 1px $colors$lime9',
        },
      },
    },

    variant: {
      ghost: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slateA7',
          },
        },
        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
      },
    },
    state: {
      invalid: {
        boxShadow: 'inset 0 0 0 1px $colors$red7',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8',
        },
      },
      valid: {
        boxShadow: 'inset 0 0 0 1px $colors$green7',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});
