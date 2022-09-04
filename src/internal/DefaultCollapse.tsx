import React from 'react';
// import { Cross2Icon, DoubleArrowDownIcon, RowSpacingIcon } from '@radix-ui/react-icons';
// import { IconButton } from '../components/IconButton';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/Collapse';
import { Text } from '../components/Text';
import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { styled } from '../../stitches.config';

const Repository = styled('div', {
  width: '100%',
  fontFamily: '$inter',
  fontSize: 12,
  fontWeight: 'normal',
  color: '$mauve12',
  backgroundColor: '$mauve3',
  border: '1px solid $colors$mauve7',
  borderRadius: 8,
  margin: '8px 0',
  padding: 10,
});

export const DefaultCollapse = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Flex css={{ alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Text css={{ color: '$mauve12', fontFamily: '$inter', fontSize: 13, fontWeight: 'bold' }}>
          @chvndler starred 5 repositories
        </Text>

        {/* <!--
        <CollapsibleTrigger asChild>
          <IconButton>{open ? <Cross2Icon /> : <DoubleArrowDownIcon />}</IconButton>
        </CollapsibleTrigger>
        --> */}

        <CollapsibleTrigger asChild>
          <Button>{open ? <span>Show less</span> : <span>Show all</span>}</Button>
        </CollapsibleTrigger>
      </Flex>

      <Repository>@AtelierDesign/atlr.ds</Repository>
      <CollapsibleContent>
        <Repository>@radix-ui/colors</Repository>
        <Repository>@stitches/react</Repository>
        <Repository>@AtelierDesign/atlr.ds</Repository>
        <Repository>@rollup/rollup</Repository>
      </CollapsibleContent>
    </Collapsible>
  );
};
