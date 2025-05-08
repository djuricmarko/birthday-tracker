import Link from 'next/link';
import type { Birthday } from '~/types/birthdayTypes';
import { BirthdayList } from '~/app/(birthdays)/BirthdayList';
import { getBirthdays } from '~/services/birthday';
import { Button } from '~/components/ui/button';
import { auth } from '@clerk/nextjs/server';

export default async function BirthdayTracker() {
  const { birthdays } = await getBirthdays();
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1>Login first</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center w-full pt-10">
      <div className="grid gap-8 w-full px-5 max-w-[500px]">
        <BirthdayList birthdays={birthdays as Birthday[]}/>
        <Link href="/add" className="justify-self-center">
          <Button className="w-40 cursor-pointer" variant="outline">
            Add
          </Button>
        </Link>
      </div>
    </div>
  );
}
