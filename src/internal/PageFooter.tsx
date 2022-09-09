import { Box } from '../components/Box';
import { Text } from '../components/Text';
import React from 'react';
import { styled } from '../../stitches.config';

const Highlighter = styled('div', {
  backgroundColor: '$suprLime6',
  height: 'auto',
  margin: 0,
  padding: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

export const PageFooter = () => {
  return (
    <>
      {/* <!-- BEGIN !  FOOTER --> */}
      <Box
        css={{
          backgroundColor: '$loContrast',
          position: 'relative',
          height: '100px',
          margin: 'auto',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Highlighter>
          <Text
            css={{
              textAlign: 'center',
              color: '$mauve3',
              fontFamily: '$pragmatica',
              fontWeight: 'bold',
              fontSize: '13px',
              textTransform: 'uppercase',
              lineHeight: 0.7,
            }}
          >
            Copyright © 2022 Atelier.
          </Text>
        </Highlighter>
        <Highlighter>
          <Text
            css={{
              textAlign: 'center',
              color: '$mauve3',
              fontFamily: '$pragmatica',
              fontWeight: 'normal',
              fontSize: '11px',
              lineHeight: 0.9,
            }}
          >
            All rights reserved.
          </Text>
        </Highlighter>
      </Box>
    </>
  );
};
