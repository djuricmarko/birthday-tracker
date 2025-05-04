'use client';

import { createContext, useContext, ReactNode } from 'react';
import { toast } from 'sonner';
import { Toaster } from '~/components/ui/sonner';

type ToastContextType = {
  showToast: (message: string, description?: string) => void;
  showSuccessToast: (message: string, description?: string) => void;
  showErrorToast: (message: string, description?: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const showToast = (message: string, description?: string) => {
    toast(message, { description });
  };

  const showSuccessToast = (message: string, description?: string) => {
    toast.success(message, { description });
  };

  const showErrorToast = (message: string, description?: string) => {
    toast.error(message, { description });
  };

  return (
    <ToastContext.Provider
      value={{
        showToast,
        showSuccessToast,
        showErrorToast,
      }}
    >
      <Toaster richColors />
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
