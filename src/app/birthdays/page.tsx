import { Suspense } from 'react';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { Plus } from 'lucide-react';
import type { Birthday } from '~/lib/db';
import { BirthdayList } from '~/app/birthdays/BirthdayList';
import { getBirthdays } from '~/services/birthday';
import { Button } from '~/components/ui/button';
import { LoadingSpinner } from '~/components/ui/spinner';

export default async function BirthdayTracker() {
  const { userId } = await auth();
  const { birthdays } = userId ? await getBirthdays(userId) : { birthdays: [] };

  return (
    <div className="flex flex-col justify-center items-center w-full p-4 gap-4">
      <div className="w-full flex justify-between items-center">
        <h3>Birthdays you follow</h3>
        <Link href="/birthdays/add" prefetch={true} className="justify-self-center">
          <Button className="w-40 cursor-pointer" variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add birthday
          </Button>
        </Link>
      </div>
      <Suspense fallback={<LoadingSpinner className="justify-self-center" />}>
        <BirthdayList birthdays={birthdays as Birthday[]} />
      </Suspense>
    </div>
  );
}
