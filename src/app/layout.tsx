import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Geist } from 'next/font/google';
import { ToastProvider } from '~/components/context/ToastContext';
import { QueryProvider } from '~/components/context/QueryContext';
import { MainLayout } from '~/components/Layouts/MainLayout';
import '../styles/globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Birthday Tracker',
  description: 'Track the birthdays of your loved ones and never forget them.',
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="sr">
      <body className={`${geistSans.className} antialiased`}>
      <ToastProvider>
        <QueryProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </QueryProvider>
      </ToastProvider>
      </body>
      </html>
    </ClerkProvider>
  );
}
