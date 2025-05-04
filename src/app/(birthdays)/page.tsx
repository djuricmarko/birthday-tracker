import type { Birthday } from '~/types/birthdayTypes';
import { BirthdayList } from '~/app/(birthdays)/BirthdayList';
import { getBirthdays } from '~/services/birthday';
import { BirthdayDialog } from '~/app/(birthdays)/BirthdayDialog';

export default async function BirthdayTracker() {
  const { birthdays } = await getBirthdays();

  return (
    <div className="flex flex-col justify-center items-center w-full pt-10">
      <div className="grid gap-8 w-full px-5 max-w-[500px]">
        <BirthdayList birthdays={birthdays as Birthday[]}/>
        <BirthdayDialog/>
      </div>
    </div>
  );
}
