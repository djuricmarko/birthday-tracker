import type { Birthday } from '~/lib/db';
import { Gift } from 'lucide-react';
import { formatBirthday } from '~/lib/utils';
import { DeleteBirthday } from './DeleteBirthdayButton';

function BirthdayList({ birthdays }: { birthdays: Birthday[] }) {
  return (
    <div className="w-full">
      {birthdays.length === 0
        ? <p className="text-center text-muted-foreground py-6">No birthdays added yet. Add one above!</p>
        : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {birthdays?.map((birthday) => (
              <div key={birthday.id} className="w-full relative rounded border p-4 flex flex-col items-center space-y-2">
                <div className="absolute top-1 right-1">
                  <DeleteBirthday id={birthday.id} />
                </div>
                <Gift className="h-5 w-5 text-pink-500" />
                <div className="text-center">
                  <p className="font-semibold">{birthday.name}</p>
                  <p className="text-sm text-muted-foreground">{formatBirthday(birthday.date ?? '')}</p>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

export { BirthdayList };
