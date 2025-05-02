'use client';

import { useEffect } from 'react';
import { useToast } from '~/context/ToastContext';

export default function ToastTrigger({ error }: { error: string | undefined }) {
  const { showErrorToast } = useToast();

  useEffect(() => {
    if (error) {
      showErrorToast(error);
    }
  }, [error, showErrorToast]);

  return null;
}
