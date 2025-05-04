import { BirthdayList } from '~/app/(birthdays)/BirthdayList';
import { getBirthdays } from '~/services/birthday';
import type { Birthday } from '~/types/birthdayTypes';
import { AddDialog } from '~/app/(birthdays)/AddDialog';

export default async function BirthdayTracker() {
  const { birthdays } = await getBirthdays();

  return (
    <div className="flex flex-col justify-center items-center w-full pt-10">
      <h1 className="text-3xl font-bold text-center mb-8">Birthday Tracker</h1>
      <div className="grid gap-8 w-full px-5 max-w-[500px]">
        <AddDialog/>
        <BirthdayList birthdays={birthdays as Birthday[]}/>
      </div>
    </div>
  );
}
