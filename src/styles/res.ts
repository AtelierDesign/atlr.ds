export const res = {
  html: {
    lineHeight: 1.15,
    '-webkit-text-size-adjust': '100%',
  },
  body: {
    margin: 0,
    fontFamily: '$chGrotesk, sans-serif',
  },
  main: {
    display: 'block',
  },
  h1: {
    fontSize: '2em',
    margin: '0.67em 0',
  },
  hr: {
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible',
  },
  pre: {
    // fontFamily: '$jetbrain, monospace',
    fontSize: '1em',
  },
  a: {
    backgroundColor: 'transparent',
  },
  svg: {
    display: 'block',
    verticalAlign: 'middle',
  },
  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: 'underline dotted',
  },
  'b, strong': {
    fontWeight: 'bolder',
  },
  'code, kbd, samp': {
    // fontFamily: '$aeroportMono, monospace',
    fontSize: '1em',
  },
  small: {
    fontSize: '80%',
  },
  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },
  sub: {
    bottom: '-0.25em',
  },
  sup: {
    top: '-0.5em',
  },
  img: {
    borderStyle: 'none',
  },
  'button, input, optgroup, select, textarea': {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 1.15,
    margin: 0,
  },
  'button, input': {
    overflow: 'visible',
  },
  'button, select': {
    textTransform: 'none',
  },
  'button, [type="button"], [type="reset"], [type="submit"]': {
    '-webkit-appearance': 'button',
  },
  'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner':
    {
      borderStyle: 'none',
      padding: 0,
    },
  'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring':
    {
      outline: '1px dotted ButtonText',
    },
  fieldset: {
    padding: '0.35em 0.75em 0.625em',
  },
  legend: {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: 0,
    whiteSpace: 'normal',
  },
  progress: {
    verticalAlign: 'baseline',
  },
  textarea: {
    overflow: 'auto',
  },
  '[type="checkbox"], [type="radio"]': {
    boxSizing: 'border-box',
    padding: 0,
  },
  '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button': {
    height: 'auto',
  },
  '[type="search"]': {
    '-webkit-appearance': 'textfield',
    outlineOffset: -2,
  },
  '[type="search"]::-webkit-search-decoration': {
    '-webkit-appearance': 'none',
  },
  '::-webkit-file-upload-button': {
    '-webkit-appearance': 'button',
    font: 'inherit',
  },
  details: {
    display: 'block',
  },
  summary: {
    display: 'list-item',
  },
  template: {
    display: 'none',
  },
  '[hidden]': {
    display: 'none',
  },
  'pre, code': { margin: 0, fontFamily: '$jetbrain' },

  '::selection': {
    backgroundColor: '$violetA5',
    color: '$violet12',
  },
  '#__next': {
    position: 'relative',
    zIndex: 0,
  },
  '[cmdk-root]': {
    zIndex: '9999',
    maxWidth: '600px',
    overflow: 'hidden',
  },
  '[cmdk-overlay]': {
    backgroundColor: 'black',
    opacity: '0.5',
    zIndex: 'auto',
  },
  '[cmdk-item]': {
    color: 'hsl(252, 4.0%, 57.3%)',
    backgroundColor: 'transparent',
    borderRadius: 6,
    paddingLeft: 8,
    paddingRight: 8,
    userSelect: 'none',
    willChange: 'background, color',
    transition: 'all 150ms ease',
    transitionProperty: 'none',
  },

  root: {},
};
