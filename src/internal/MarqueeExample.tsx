import React from 'react';
import { Text } from '../components/Text';
import { MarqueeContainer, MarqueeContent } from '../components/TextScroll';

export const MarqueeExample = () => {
  return (
    <>
      <MarqueeContent pauseOnHover={true} speed={200} gradient={false} style={{ color: '$mauve12' }}>
        <MarqueeContainer>
          <Text css={{ fontSize: 42, fontFamily: '$pragmatica' }}>Lorem ipsum. LOREM IPSUM.</Text>
        </MarqueeContainer>
      </MarqueeContent>
    </>
  );
};
