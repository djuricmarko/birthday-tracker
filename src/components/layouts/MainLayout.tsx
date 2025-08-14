import type { ReactNode } from 'react';
import { auth } from '@clerk/nextjs/server';

import { Header } from './Header';
import { AppSidebar } from './AppSidebar';
import { SidebarProvider } from '~/components/ui/sidebar';

export async function MainLayout({ children }: { children: ReactNode }) {
  const { userId } = await auth();

  if (!userId) {
    return children;
  }

  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar/>
        <div className="flex flex-col w-full">
          <Header/>
          <main className="h-[calc(100vh-50px)]">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
