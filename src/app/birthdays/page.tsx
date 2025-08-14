import { Suspense } from 'react';
import Link from 'next/link';
import { auth } from '@clerk/nextjs/server';
import { ListFilter, Plus } from 'lucide-react';
import type { Birthday } from '~/lib/db';
import { BirthdayList } from '~/app/birthdays/BirthdayList';
import { getBirthdays } from '~/services/birthday';
import { Button } from '~/components/ui/button';
import { LoadingSpinner } from '~/components/ui/spinner';
import { Tabs, TabsList, TabsTrigger } from '~/components/ui/tabs';

export default async function BirthdayTracker() {
  const { userId } = await auth();
  const { birthdays } = userId ? await getBirthdays(userId) : { birthdays: [] };

  return (
    <div className="flex flex-col justify-center items-center w-full p-4 gap-4">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" className="cursor-pointer">
            <ListFilter className="h-4 w-4" />
          </Button>
        </div>
        <Link href="/birthdays/add" prefetch={true} className="justify-self-center">
          <Button className="w-36 cursor-pointer" variant="outline">
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
