import React from 'react';
import { Text } from '../components/Text';
import { MarqueeContainer, MarqueeContent } from '../components/Marquee';

export const MarqueeExample = () => {
  return (
    <>
      <MarqueeContent pauseOnHover={true} speed={100} gradient={false} style={{}}>
        <MarqueeContainer>
          <Text
            css={{
              fontSize: 42,
              fontFamily: '$pragmatica',
              fontWeight: 'bold',
              paddingRight: 20,
              paddingLeft: 20,
              color: '$mauve6',
            }}
          >
            WE ARE ATELIER® DESIGN YIELD. THIS IS A SIMPLE MARQUEE COMPONENT.
          </Text>
        </MarqueeContainer>
      </MarqueeContent>
    </>
  );
};
