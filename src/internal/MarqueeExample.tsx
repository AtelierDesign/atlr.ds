import React from 'react';
import { Text } from '../components/Text';
import { TextScroll, MarqueeContainer } from '../components/TextScroll';

export const MarqueeExample = () => {
  return (
    <>
      <MarqueeContainer>
        <TextScroll style={{ backgroundColor: 'transparent' }} pauseOnHover={true} gradient={false}>
          <Text size={3} css={{ fontFamily: '$pragmatica', color: '$mauve12' }}>
            I can be a React component, multiple React components, or just some text.
          </Text>
        </TextScroll>
      </MarqueeContainer>
    </>
  );
};
