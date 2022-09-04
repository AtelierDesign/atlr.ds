import React from 'react';
import { Box } from '../components/Box';
import { Badge } from '../components/Badge';
import { Section } from '../components/Section';
import { Container } from '../components/Container';
import { Text } from '../components/Text';

export const ColorSystem = () => {
  return (
    <>
      {/* <!-- BEGIN COLOR SECTION --> */}
      <Box css={{ bc: '$loContrast' }}>
        <Section size='3'>
          <Container size='2' css={{ paddingRight: '0', paddingTop: '15px', paddingBottom: '15px' }}>
            <Badge size='2' variant='gray'>
              Color System
            </Badge>
          </Container>

          <Container size='2' css={{ marginBottom: '10px' }}>
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve12', margin: 'auto' }}>
              <Text size='1' css={{ color: '$gray1', textAlign: 'center', lineHeight: '$4', paddingTop: '4px' }}>
                ( mauve® )
              </Text>
            </Box>
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve11' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve10' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve9' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve8' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve7' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve6' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve5' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve4' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve3' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve2' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$mauve1' }} />
          </Container>

          <Container size='2' css={{ marginTop: '10px' }}>
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$slate12', margin: 'auto' }}>
              <Text size='1' css={{ color: '$gray1', textAlign: 'center', lineHeight: '$4', paddingTop: '4px' }}>
                ( slate® )
              </Text>
            </Box>
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$slate11' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$slate10' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$slate9' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$slate8' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$slate7' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$slate6' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$slate5' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$slate4' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$slate3' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$slate2' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$slate1' }} />
          </Container>

          <Container size='2' css={{ marginTop: '10px' }}>
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$gold12', margin: 'auto' }}>
              <Text size='1' css={{ color: '$gray1', textAlign: 'center', lineHeight: '$4', paddingTop: '4px' }}>
                ( gold® )
              </Text>
            </Box>
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$gold11' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$gold10' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$gold9' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$gold8' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$gold7' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$gold6' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$gold5' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$gold4' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$gold3' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$gold2' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$gold1' }} />
          </Container>

          <Container size='2' css={{ marginTop: '10px' }}>
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime12', margin: 'auto' }}>
              <Text size='1' css={{ color: '$gray1', textAlign: 'center', lineHeight: '$4', paddingTop: '4px' }}>
                ( lime® )
              </Text>
            </Box>
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime11' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime10' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime9' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime8' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime7' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime6' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime5' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime4' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime3' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime2' }} />
            <Box css={{ width: '100%', height: '$4', backgroundColor: '$lime1' }} />
          </Container>
        </Section>
      </Box>
    </>
  );
};

export default ColorSystem;
