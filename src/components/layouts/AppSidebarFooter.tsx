import { SignedIn } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';

import { SidebarFooter, SidebarMenu, SidebarMenuItem } from '~/components/ui/sidebar';

async function AppSidebarFooter() {
  const user = await currentUser();

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SignedIn>
            <div className="flex flex-col justify-center">
              <p className="text-xs">{user?.fullName}</p>
              <p className="text-xs text-gray-600">{user?.emailAddresses?.[0]?.emailAddress}</p>
            </div>
          </SignedIn>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}

export { AppSidebarFooter };
