import { Suspense } from 'react';
import Link from 'next/link';
import type { Birthday } from '~/types/birthdayTypes';
import { BirthdayList } from '~/app/birthdays/BirthdayList';
import { getBirthdays } from '~/services/birthday';
import { Button } from '~/components/ui/button';
import { auth } from '@clerk/nextjs/server';
import { LoadingSpinner } from '~/components/ui/spinner';

export default async function BirthdayTracker() {
  const { userId } = await auth();
  const { birthdays } = userId ? await getBirthdays(userId) : { birthdays: [] };

  return (
    <div className="flex flex-col justify-center items-center w-full pt-10">
      <div className="grid gap-8 w-full px-5 max-w-[500px]">
        <Suspense fallback={<LoadingSpinner className="justify-self-center"/>}>
          <BirthdayList birthdays={birthdays as Birthday[]}/>
        </Suspense>
        <Link href="/birthdays/add" prefetch={true} className="justify-self-center">
          <Button className="w-40 cursor-pointer" variant="outline">
            Add
          </Button>
        </Link>
      </div>
    </div>
  );
}
