import { styled } from '../../stitches.config';

export const BlurCanvas = styled('div', {
  zIndex: '18',
  backgroundColor: '$blur',
  backdropFilter: 'blur(2rem)',
  WebkitBackdropFilter: 'blur(2rem)',
  saturate: '180%',
  boxSizing: 'border-box',
  position: 'fixed',
  top: '0',
  width: '100vw',
  height: '100vh',
  margin: 'auto',
  padding: '0',
});
