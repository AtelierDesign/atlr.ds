import React from 'react';
import { Toast, ToastAction, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from '../components/Toast';
import { Button } from '../components/Button';

export const BasicAtelierToast = () => {
  const [open, setOpen] = React.useState(false);
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <ToastProvider swipeDirection='right'>
      <Button
        size='2'
        variant='atelier'
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            setOpen(true);
          }, 100);
        }}
      >
        Basic toast
      </Button>

      <Toast open={open} onOpenChange={setOpen}>
        <ToastTitle>Atelier® Toast Title</ToastTitle>
        <ToastDescription asChild>
          <span>Small toast description goes here.</span>
        </ToastDescription>
        <ToastAction asChild altText='Goto schedule to undo'>
          <Button variant='atelier' size='1'>
            Small button
          </Button>
        </ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
};
