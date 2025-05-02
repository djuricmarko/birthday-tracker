'use client';

import { toast } from 'sonner';
import { useEffect } from 'react';

type ToastTriggerProps = {
  message: string;
  description?: string;
  type?: 'error' | 'success';
}

export function ToastTrigger({ message, description, type = 'error' }: ToastTriggerProps) {
  useEffect(() => {
    if (type === 'error') {
      toast.error(message, { description });
    } else if (type === 'success') {
      toast.success(message, { description });
    } else {
      toast(message, { description });
    }
  }, [message, description, type]);

  return null;
}
