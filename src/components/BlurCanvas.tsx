import { styled } from '../../stitches.config';

export const BlurCanvas = styled('div', {
  zIndex: '18',
  backgroundColor: '$blur',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  saturate: '220%',
  boxSizing: 'border-box',
  position: 'fixed',
  top: '0',
  width: '100vw',
  height: '100vh',
  margin: 'auto',
  padding: '0',
});
