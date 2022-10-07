import React from 'react';
import { Box } from '../components/Box';
import { QuickNavigation } from '../internal/QuickNavigation';

function Releases() {
  return (
    <>
      <Box css={{ backgroundColor: '$loContrast', height: '100vh', width: '100vw' }}>
        <QuickNavigation />
      </Box>
    </>
  );
}

export default Releases;
