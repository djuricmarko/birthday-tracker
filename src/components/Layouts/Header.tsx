import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Button } from '~/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="h-[60px] bg-gray-100">
      <div className="container mx-auto flex justify-between items-center gap-4 h-full px-5">
        <h1 className="font-bold uppercase">
          <Link href="/">Birthday Tracker</Link>
        </h1>
        <div className="flex gap-4">
          <SignedOut>
            <SignInButton>
              <Button className="cursor-pointer">Login</Button>
            </SignInButton>
            <SignUpButton>
              <Button className="cursor-pointer">Register</Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </div>
      </div>
      <hr className="border-b border-gray-200"/>
    </header>
  );
}
