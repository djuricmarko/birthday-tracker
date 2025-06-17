import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';

import { Button } from '~/components/ui/button';
import { SidebarTrigger } from '~/components/ui/sidebar';
import { Skeleton } from '~/components/ui/skeleton';

async function Header() {
  const user = await currentUser();

  return (
    <header className="h-[50px] border-b border-[#F3F3F3]">
      <div className="flex justify-between items-center gap-4 h-full px-5">
        <div className="flex items-center gap-4">
          <SidebarTrigger/>
          <h1 className={`sm:block hidden`}>
            Birthdays
          </h1>
        </div>
        <div className="flex gap-4 items-center">
          <SignedOut>
            <SignInButton>
              <Button className="cursor-pointer">Login</Button>
            </SignInButton>
            <SignUpButton>
              <Button className="cursor-pointer">Register</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <div className="flex flex-col items-end justify-center">
              <p className="text-xs">{user?.fullName}</p>
              <p className="text-xs text-gray-600">{user?.emailAddresses?.[0]?.emailAddress}</p>
            </div>
            <UserButton fallback={<Skeleton className="bg-gray-300 w-[28px] h-[28px] rounded-full"/>}/>
          </SignedIn>
        </div>
      </div>
    </header>
  );
}

export { Header };
