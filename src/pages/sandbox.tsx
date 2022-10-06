import React from 'react';
import { Box } from '../components/Box';
import { Canvas } from '../components/Canvas';

function SandBox() {
  return (
    <>
      <Box css={{ backgroundColor: '$loContrast' }}>
        <Canvas></Canvas>
      </Box>
    </>
  );
}

export default SandBox;
