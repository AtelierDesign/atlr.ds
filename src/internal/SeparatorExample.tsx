import React from 'react';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { Flex } from '../components/Flex';
import { Separator } from '../components/Separator';

export const SeparatorExample = () => {
  return (
    <>
      <Box
        css={{ width: '100%', paddingTop: 20, paddingBottom: 20, paddingLeft: 0, paddingRight: 0, color: '$mauve12' }}
      >
        <Text css={{ fontFamily: '$pragmatica', fontSize: '16px', fontWeight: 600, lineHeight: '20px' }}>
          ATELIER® DS
        </Text>
        <Text css={{ fontFamily: '$inter', fontSize: '14px', fontWeight: 500, lineHeight: '20px' }}>
          An open-source UI component library.
        </Text>

        <Separator color="lime" css={{ margin: '10px 0' }} />

        <Flex css={{ height: 20, alignItems: 'center' }}>
          <Text css={{ fontFamily: '$inter', fontSize: '13px', fontWeight: 600, lineHeight: '20px' }}>Blog</Text>
          <Separator color="lime" decorative orientation="vertical" css={{ margin: '0 15px' }} />
          <Text css={{ fontFamily: '$inter', fontSize: '13px', fontWeight: 600, lineHeight: '20px' }}>Twitter</Text>
          <Separator color="lime" decorative orientation="vertical" css={{ margin: '0 15px' }} />
          <Text css={{ fontFamily: '$inter', fontSize: '13px', fontWeight: 600, lineHeight: '20px' }}>GitHub</Text>
          <Separator color="lime" decorative orientation="vertical" css={{ margin: '0 15px' }} />
          <Text css={{ fontFamily: '$inter', fontSize: '13px', fontWeight: 600, lineHeight: '20px' }}>View Source</Text>
        </Flex>
      </Box>

      <Box
        css={{ width: '100%', paddingTop: 40, paddingBottom: 20, paddingLeft: 0, paddingRight: 0, color: '$mauve12' }}
      >
        <Text css={{ fontFamily: '$inter', fontSize: '16px', fontWeight: 700, lineHeight: '12px' }}>
          Atelier® Design System
        </Text>
        <Separator color="mauve" css={{ margin: '10px 0' }} />
        <Text css={{ fontFamily: '$inter', fontSize: '14px', fontWeight: 500, lineHeight: '10px' }}>
          An open-source UI component library.
        </Text>
      </Box>

      <Box
        css={{ width: '100%', paddingTop: 40, paddingBottom: 20, paddingLeft: 0, paddingRight: 0, color: '$mauve12' }}
      >
        <Flex css={{ height: 20, alignItems: 'center' }}>
          <Text css={{ fontFamily: '$inter', fontSize: '13px', fontWeight: 600, lineHeight: '20px' }}>Blog</Text>
          <Separator decorative orientation="vertical" css={{ margin: '0 15px' }} />
          <Text css={{ fontFamily: '$inter', fontSize: '13px', fontWeight: 600, lineHeight: '20px' }}>Twitter</Text>
          <Separator decorative orientation="vertical" css={{ margin: '0 15px' }} />
          <Text css={{ fontFamily: '$inter', fontSize: '13px', fontWeight: 600, lineHeight: '20px' }}>GitHub</Text>
          <Separator decorative orientation="vertical" css={{ margin: '0 15px' }} />
          <Text css={{ fontFamily: '$inter', fontSize: '13px', fontWeight: 600, lineHeight: '20px' }}>View Source</Text>
        </Flex>
      </Box>
    </>
  );
};
