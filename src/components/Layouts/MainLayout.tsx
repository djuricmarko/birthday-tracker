import type { ReactNode } from 'react';
import Header from './Header';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header/>
      <main className="container mx-auto h-[calc(100vh-60px)]">
        <SignedIn>
          {children}
        </SignedIn>
        <SignedOut>
          <div className="flex flex-col items-center justify-center h-full">
            <h2>Uloguj se prvo</h2>
          </div>
        </SignedOut>
      </main>
    </>
  );
}
