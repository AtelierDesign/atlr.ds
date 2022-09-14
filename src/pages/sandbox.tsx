import React from 'react';
import { BasicCommand } from '../internal';
import { Box } from '../components/Box';
import { Canvas } from '../components/Canvas';

function SandBox() {
  return (
    <>
      <Box css={{ backgroundColor: '$loContrast' }}>
        <Canvas>
          <BasicCommand />
        </Canvas>
      </Box>
    </>
  );
}

export default SandBox;
