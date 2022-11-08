import React from 'react';
import { Box } from '../components/Box';
import { Canvas } from '../components/Canvas';
import { Card } from '../components/Card';
import { Container } from '../components/Container';

function SandBox() {
  return (
    <>
      <Box css={{ backgroundColor: '$loContrast' }}>
        <Canvas>
          <Container size={'2'}>
            <Card variant={'interactive'} css={{ minHeight: 300 }}>
              CARD
            </Card>
          </Container>
        </Canvas>
      </Box>
    </>
  );
}

export default SandBox;
