import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Geist, Geist_Mono } from 'next/font/google';
import { ToastProvider } from '~/components/context/ToastContext';
import { QueryProvider } from '~/components/context/QueryContext';
import { MainLayout } from '~/components/Layouts/MainLayout';
import '../styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
