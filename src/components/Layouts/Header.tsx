import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Button } from '~/components/ui/button';

export default function Header() {
  return (
    <header className="h-[60px] bg-gray-100">
      <div className="container mx-auto flex justify-between items-center gap-4 h-full">
        <h1 className="font-bold uppercase">Rođendanko</h1>
        <div className="flex gap-4">
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
        </div>
      </div>
      <hr className="border-b border-gray-200"/>
    </header>
  );
}
