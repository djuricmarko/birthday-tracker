import { BirthdayList } from '~/components/Birthday/BirthdayList';
import { AddBirthdayModal } from '~/components/Birthday/AddBirthdayModal';

export default function BirthdayTracker() {
  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">Birthday Tracker</h1>
      <div className="grid gap-8">
        <AddBirthdayModal />
        <BirthdayList />
      </div>
    </div>
  );
}
