import { Box } from '../components/Box';
import { IconButton } from '../components/IconButton';
import { Button } from '../components/Button';
import { Flex } from '../components/Flex';
import { Cross2Icon } from '@radix-ui/react-icons';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '../components/Dialog';

function Test() {
  return (
    <>
      <Box css={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="2">Edit profile</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>

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
      </Box>
    </>
  );
}

export default Test;
