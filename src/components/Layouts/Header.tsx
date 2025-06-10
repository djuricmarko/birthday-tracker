import { SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import { Button } from '~/components/ui/button';
import { SidebarTrigger } from '~/components/ui/sidebar';

async function Header() {
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
        </div>
      </div>
    </header>
  );
}

export { Header };
