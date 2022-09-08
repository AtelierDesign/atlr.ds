import React from 'react';
import Marquee from 'react-fast-marquee';
import { Text } from '../components/Text';
import { MarqueeContainer } from '../components/TextScroll';

export const MarqueeExample = () => {
  return (
    <>
      <MarqueeContainer>
        <Marquee style={{ backgroundColor: 'transparent' }} pauseOnHover={true} gradient={false}>
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </MarqueeContainer>
    </>
  );
};
