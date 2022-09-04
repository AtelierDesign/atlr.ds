import React, { ReactNode } from 'react';
import { styled } from '../../stitches.config';
import * as TabsPrimitive from '@radix-ui/react-tabs';

type ContentProps = {
  children?: ReactNode;
  value?: string;
};

const StyledTabs = styled(TabsPrimitive.Root, {
  display: 'flex',
  margin: 'auto',
  flexDirection: 'column',
  justifyContent: 'center',
  width: 'auto',
  minWidth: '100%',
  backgroundColor: '$mauve1',

  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
});

const StyledList = styled(TabsPrimitive.List, {
  flexShrink: 0,
  display: 'flex',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  border: '1px solid $mauve4',


  '&:focus': {
    outline: 'none',
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
  },
});

const StyledTrigger = styled(TabsPrimitive.Trigger, {
  all: 'unset',
  flexShrink: 0,
  fontFamily: 'inherit',
  backgroundColor: '$mauve1',
  padding: 0,
  height: '38px',
  flex: 1,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
  fontWeight: 'bold',
  lineHeight: 1,
  color: '$mauve10',

  outline: 'none',
  userSelect: 'none',

  '&:first-child': { borderTopLeftRadius: 8, borderRightWidth: 0 },
  '&:last-child': { borderTopRightRadius: 8, borderLeftWidth: 0 },
  '&:hover': { color: '$mauve11' },

  '&[data-state="active"]': {
    backgroundColor: '$mauve2',
    color: '$colors$atelier02',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px $colors$mauve12` },
});

const StyledContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  padding: 20,
  width: '100%',
  minHeight: 'max-content',
  height: '100%',

  backgroundColor: '$mauve1',
  border: '1px solid $mauve4',
  borderTopWidth: 0,
  color: '$mauve11',
  fontFamily: '$inter',
  fontSize: '13px',
  fontWeight: '500',
  lineHeight: '18px',
  letterSpacing: '-0.02rem',

  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
  outline: 'none',
});

// Exports
export const Tabs = StyledTabs;
export const TabsList = StyledList;
export const TabsTrigger = StyledTrigger;
export const TabsContent = StyledContent;

/*
export const TabS = () => (
  <Box css={{}}>
    <Tabs defaultValue="tab1">
      <TabsList aria-label="Manage your account">
        <TabsTrigger value="tab1">Your Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Your Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Your Tab 3</TabsTrigger>
      </TabsList>

      <TabsContent value="tab1">
        <Paragraph>Content One.</Paragraph>
      </TabsContent>

      <TabsContent value="tab2">
        <Paragraph>Content Two.</Paragraph>
      </TabsContent>

      <TabsContent value="tab3">
        <Paragraph>Content Three.</Paragraph>
      </TabsContent>
    </Tabs>
  </Box>
);
*/
