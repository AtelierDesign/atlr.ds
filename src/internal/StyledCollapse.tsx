import React from 'react';
// import { Cross2Icon, DoubleArrowDownIcon, RowSpacingIcon } from '@radix-ui/react-icons';
// import { IconButton } from '../components/IconButton';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/Collapse';
import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { styled } from '../../stitches.config';
import { Badge } from '../components/Badge';

const StyledCollapseContent = styled('div', {
  width: '100%',
  fontFamily: '$inter',
  fontSize: 11,
  fontWeight: '600',
  color: '$mauve12',
  border: '1px solid $colors$mauve7',
  borderRadius: 9999,
  margin: '3px 0',
  padding: 12,
});

export const StyledCollapse = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Flex css={{ alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Badge size="1" variant="orange" css={{ borderRadius: '6px' }}>
          @chvndler starred 5 repositories
        </Badge>
        <CollapsibleTrigger asChild>
          <Button variant="transparent">{open ? <span>hide</span> : <span>view all</span>}</Button>
        </CollapsibleTrigger>
      </Flex>

      <StyledCollapseContent>@AtelierDesign/atlr.ds</StyledCollapseContent>
      <StyledCollapseContent>@atlr-dsgn/rhythm</StyledCollapseContent>
      <CollapsibleContent>
        <StyledCollapseContent>@radix-ui/colors</StyledCollapseContent>
        <StyledCollapseContent>@stitches/react</StyledCollapseContent>
        <StyledCollapseContent>@AtelierDesign/atlr.ds</StyledCollapseContent>
        <StyledCollapseContent>@rollup/rollup</StyledCollapseContent>
      </CollapsibleContent>
    </Collapsible>
  );
};
