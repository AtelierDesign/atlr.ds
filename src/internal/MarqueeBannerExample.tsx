import React from 'react';
import { Banner } from '../components/Banner';
import { Space } from '../components/Space';
import { MarqueeContainer, MarqueeContent } from '../components/Marquee';

export const MarqueeBannerExample = () => {
  return (
    <>
      <MarqueeContent pauseOnHover={true} speed={100} gradient={false} style={{}}>
        <MarqueeContainer>
          <Banner size={1} variant="blue" marquee={true}>
            Atelier® Design System. This is a Marquee® inside of a Banner®.
          </Banner>
        </MarqueeContainer>
      </MarqueeContent>
      <Space size={1} />
      <MarqueeContent pauseOnHover={false} speed={120} gradient={false} style={{}}>
        <MarqueeContainer>
          <Banner size={1} variant="gray" marquee={true}>
            Atelier® Design System. This is a Marquee® inside of a Banner®.
          </Banner>
        </MarqueeContainer>
      </MarqueeContent>
    </>
  );
};
