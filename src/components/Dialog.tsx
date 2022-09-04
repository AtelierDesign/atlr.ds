import React from 'react';
import { CSS, keyframes, styled } from '../../stitches.config';
import { blackA, mauve } from '@radix-ui/colors';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$mauve2',
  borderRadius: 16,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '430px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
});

type DialogPrimitiveProps = React.ComponentProps<typeof DialogPrimitive.Root>;
type DialogProps = DialogPrimitiveProps & { css?: CSS };

export const Content = React.forwardRef<React.ElementRef<typeof StyledContent>, DialogProps>(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent ref={forwardedRef} {...props}>
        {children}
      </StyledContent>
    </DialogPrimitive.Portal>
  ),
);

const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontFamily: '$pragmatica',
  fontWeight: 500,
  color: '$mauve12',
  fontSize: 17,
});

const StyledDescription = styled(DialogPrimitive.Description, {
  fontFamily: '$inter',
  fontWeight: 400,
  fontSize: 14,
  margin: '10px 0 20px',
  color: mauve.mauve11,
  lineHeight: 1.5,
});

// Exports
export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;

/*
const DialogDemo = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button size="large">Edit profile</Button>
    </DialogTrigger>
    <DialogContent >
      <DialogTitle>Edit profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here. Click save when you're done.
      </DialogDescription>
      <Fieldset>
        <Label htmlFor="name">Name</Label>
        <Input id="name" defaultValue="Pedro Duarte" />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@peduarte" />
      </Fieldset>
      <Flex css={{ marginTop: 25, justifyContent: 'flex-end' }}>
        <DialogClose asChild>
          <Button variant="green">Save changes</Button>
        </DialogClose>
      </Flex>
      <DialogClose asChild>
        <IconButton aria-label="Close">
          <Cross2Icon />
        </IconButton>
      </DialogClose>
    </DialogContent>
  </Dialog>
);

 */
