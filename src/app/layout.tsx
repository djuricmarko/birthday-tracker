import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import { Geist, Geist_Mono } from 'next/font/google';
import { Button } from '~/components/ui/button';
import { ToastProvider } from '~/context/ToastContext';
import { QueryProvider } from '~/context/QueryContext';
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
  title: 'Rođendanko',
  description: 'Prati rođendane svojih voljenih i nikad ih ne zaboravite.',
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
            <header className="flex justify-end items-center p-4 gap-4 h-16">
              <SignedOut>
                <SignInButton>
                  <Button className="cursor-pointer">Uloguj se</Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="cursor-pointer">Registruj se</Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton/>
              </SignedIn>
            </header>
            {children}
          </QueryProvider>
        </ToastProvider>
      </body>
      </html>
    </ClerkProvider>
  );
}
