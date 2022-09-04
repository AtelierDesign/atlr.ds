import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../components/Dialog';
import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { IconButton } from '../components/IconButton';
import { Cross2Icon } from '@radix-ui/react-icons';

export const DefaultDialog = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="2">Open dialog</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle>Default Dialog</DialogTitle>
          <DialogDescription>Make changes to your profile here. [ Description ]</DialogDescription>

          <Flex css={{ marginTop: 25, justifyContent: 'space-between' }}>
            <DialogClose asChild>
              <IconButton aria-label="Close">
                <Cross2Icon />
              </IconButton>
            </DialogClose>
            <DialogClose asChild>
              <Button>Save changes</Button>
            </DialogClose>
          </Flex>
        </DialogContent>
      </Dialog>
    </>
  );
};
