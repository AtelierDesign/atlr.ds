import React from 'react';
import { Space } from '../components/Space';
import { HeroSection } from '../components/HeroSection';
import { HeadingText } from '../components/HeadingText';
import { Text } from '../components/Text';
import { Paragraph } from '../components/Paragraph';

export const HeroDisplay = () => {
  return (
    <>
      <HeroSection size='1' alignment='center' color='loContrast'>
        <HeadingText size='2' css={{ color: '$blue10' }}>
          Hero Section
        </HeadingText>
        <Text size='2' css={{ color: '$blue10' }}>
          Size 1
        </Text>

        <Space size='1' />

        <Paragraph size='1'>
          This is a Paragraph size 2. Design in the target medium. Prototype with real components. Handoff production
          code.
        </Paragraph>
      </HeroSection>

      <HeroSection size='2' alignment='responsiveLeft' color='gray'>
        <HeadingText size='2'>Hero Section</HeadingText>
        <Text size='2' css={{ color: '$blue10' }}>
          Size 2
        </Text>

        <Space size='1' />

        <Paragraph size='1'>
          This is a Paragraph size 2. Design in the target medium. Prototype with real components. Handoff production
          code.
        </Paragraph>
      </HeroSection>

      <HeroSection size='3' alignment='responsiveRight' color='loContrast'>
        <HeadingText size='3'>Hero Section</HeadingText>
        <Text size='2'>Size 3</Text>

        <Space size='1' />

        <Paragraph size='1'>
          This is a Paragraph size 2. Design in the target medium. Prototype with real components. Handoff production
          code.
        </Paragraph>
      </HeroSection>
    </>
  );
};
