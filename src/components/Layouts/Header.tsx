import Link from 'next/link';
import Image from 'next/image';
import { Afacad } from 'next/font/google';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { Button } from '~/components/ui/button';
import { Skeleton } from '~/components/ui/Skeleton';

const afacad = Afacad({ subsets: ['latin'] });

async function Header() {
  const user = await currentUser();

  return (
    <header className="h-[60px] bg-gray-100">
      <div className="container mx-auto flex justify-between items-center gap-4 h-full px-5">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={50} height={50}/>
          <h1 className={`sm:block hidden ${afacad.className} text-[#fe6f55] text-xl`}>
            Birthday tracker
          </h1>
        </Link>
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
      <hr className="border-b border-gray-200"/>
    </header>
  );
}

export { Header };
