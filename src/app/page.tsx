import { BirthdayList } from '~/components/Birthday/BirthdayList';
import { AddBirthdayModal } from '~/components/Birthday/AddBirthdayModal';
import { getBirthdays } from '~/services/birthday';
import type { Birthday } from '~/types/birthdayTypes';

export default async function BirthdayTracker() {
  const { birthdays } = await getBirthdays();

  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">Birthday Tracker</h1>
      <div className="grid gap-8">
        <AddBirthdayModal/>
        <BirthdayList birthdays={birthdays as Birthday[]}/>
      </div>
    </div>
  );
}
