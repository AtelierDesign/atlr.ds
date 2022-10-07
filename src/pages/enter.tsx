import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '../components/Box';
import { Container } from '../components/Container';
import { Canvas } from '../components/Canvas';
import { BlurCanvas } from '../components/BlurCanvas';
import { Text } from '../components/Text';
import { HeadingText } from '../components/HeadingText';
import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { AppBar } from '../components/AppBar';
import { ThemeSwitch, TimeCode } from '../internal';
import mainBackdrop from '../../public/images/main.png';

function Enter() {
  return (
    <>
      <Box css={{ backgroundColor: '$mauve1' }}>
        <Canvas>
          <Container
            size="3"
            css={{
              alignItems: 'center',
              margin: 'auto',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Text
              css={{
                fontSize: 24,
                fontFamily: '$pragmatica',
                fontWeight: 'bold',
                color: '$mauve12',
                textAlign: 'center',
                paddingBottom: '10px',
                '@sm': {
                  fontSize: 16,
                },
              }}
            >
              developer.atlrdsgn.com
            </Text>

            <Link href="/system" passHref>
              <Button as="a" size="1" variant="atelier" css={{ fontFamily: '$pragmatica' }}>
                enter
              </Button>
            </Link>
          </Container>
        </Canvas>

        <BlurCanvas />
        <Image src={mainBackdrop} alt="src" objectFit="cover" layout="fill" />
        <AppBar
          size="2"
          css={{
            display: 'flex',
            flexDirection: 'row',
            margin: 'auto',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            zIndex: '9999',
            backgroundColor: 'transparent',
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          <Flex gap="1" css={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
            <Box
              css={{
                width: '200px',
                paddingLeft: '20px',
                paddingRight: '10px',
                margin: '0',
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <HeadingText
                size="1"
                css={{
                  fontSize: '12px',
                  fontFamily: '$pragmatica',
                  fontWeight: 'bold',
                  lineHeight: '34px',
                  color: '$mauveA9',
                  '&:hover': {
                    color: '$mauveA8',
                  },
                }}
              >
                ATELIER®
              </HeadingText>
            </Box>
            {/* <!-- ENTER SYSTEM --> */}
            <Box
              css={{
                width: '200px',
                padding: '0',
                margin: '0',
                '@sm': {
                  display: 'none',
                },
              }}
            >
              <TimeCode />
            </Box>
            {/* <!-- END ! SYSTEM --> */}

            {/* <!-- THEME SWITCH --> */}
            <Box
              css={{
                paddingRight: '20px',
                paddingLeft: '10px',
                paddingTop: '0',
                paddingBottom: '0',
                lineHeight: '34px',
                display: 'flex',
                justifyContent: 'flex-end',
                width: '200px',
                margin: '0',
                alignItems: 'right',
              }}
            >
              <ThemeSwitch />
            </Box>
            {/* <!-- END ! THEME SWITCH --> */}
          </Flex>
        </AppBar>
      </Box>
    </>
  );
}

export default Enter;
