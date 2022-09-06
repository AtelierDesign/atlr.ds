import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger, ImageTrigger, Img } from '../components/HoverCard';
import { Flex } from '../components/Flex';
import { Text } from '../components/Text';

export const HoverCardExample = () => {
  return (
    <>
      <HoverCard openDelay={0}>
        <HoverCardTrigger asChild>
          <ImageTrigger href="/" target="_blank" rel="noreferrer noopener">
            <Img src="https://pbs.twimg.com/profile_images/1452849527111684099/tAIKpP7R_400x400.jpg" />
          </ImageTrigger>
        </HoverCardTrigger>

        <HoverCardContent sideOffset={5} collisionPadding={20}>
          <Flex css={{ flexDirection: 'column', gap: 7 }}>
            <Img size="large" src="https://pbs.twimg.com/profile_images/1452849527111684099/tAIKpP7R_400x400.jpg" />
            <Flex css={{ flexDirection: 'column', gap: 4 }}>
              <Text
                size="2"
                css={{
                  color: '$mauve12',
                  marginTop: 4,
                  lineHeight: '12px',
                  fontFamily: '$pragmatica',
                  fontWeight: '600',
                  fontSize: '13px',
                }}
              >
                Atelier Design
              </Text>
              <Text
                size="2"
                css={{
                  lineHeight: '12px',
                  fontFamily: '$inter',
                  fontWeight: '500',
                  fontSize: '12px',
                  marginBottom: 8,
                  color: '$mauve9',
                }}
              >
                @atlr.dsgn
              </Text>
              <Text
                size="2"
                css={{
                  color: '$mauve12',
                  lineHeight: '16px',
                  fontFamily: '$inter',
                  fontWeight: '500',
                  fontSize: '13px',
                  marginBottom: 12,
                }}
              >
                Essential design components for the new school. Free and open-source.
              </Text>

              <Flex css={{ gap: 15 }}>
                <Flex css={{ gap: 5 }}>
                  <Text
                    size="2"
                    css={{
                      lineHeight: '12px',
                      fontFamily: '$inter',
                      fontWeight: 'bold',
                      fontSize: '12px',
                      color: '$blue9',
                    }}
                  >
                    0
                  </Text>
                  <Text
                    size="2"
                    css={{
                      lineHeight: '12px',
                      fontFamily: '$inter',
                      fontWeight: 'normal',
                      fontSize: '12px',
                      color: '$mauve11',
                    }}
                  >
                    Following
                  </Text>
                </Flex>
                <Flex css={{ gap: 5 }}>
                  <Text
                    size="2"
                    css={{
                      lineHeight: '12px',
                      fontFamily: '$inter',
                      fontWeight: 'bold',
                      fontSize: '12px',
                      color: '$blue9',
                    }}
                  >
                    2,900
                  </Text>
                  <Text
                    size="2"
                    css={{
                      lineHeight: '12px',
                      fontFamily: '$inter',
                      fontWeight: 'normal',
                      fontSize: '12px',
                      color: '$mauve11',
                    }}
                  >
                    Followers
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};
