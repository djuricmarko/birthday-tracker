import type { ReactNode } from 'react';
import { Header } from './Header';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header/>
      <main className="container mx-auto h-[calc(100vh-60px)]">
        {children}
      </main>
    </>
  );
}
