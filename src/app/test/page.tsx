import { ServerComponent } from '~/components/ServerComponent';
import React from 'react';
import { Toaster } from '~/components/ui/sonner';
import { ToastTrigger } from '~/components/ToastTrigger';

export default function TestPage() {
  return (
    <div>
      <Toaster richColors />
      <ToastTrigger
        message="Something went wrong while adding the birthday."
        description="Please try again later."
        type="error"
      />
      <ServerComponent />
    </div>
  );
}
