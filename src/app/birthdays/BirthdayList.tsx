import type { Birthday } from '~/lib/db';
import { useMemo } from 'react';
import { Gift } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { formatBirthday } from '~/lib/utils';
import { DeleteBirthday } from './DeleteBirthdayButton';

function BirthdayList({ birthdays }: { birthdays: Birthday[] }) {
  const formattedBirthdays = useMemo(() => {
    return birthdays ?? [];
  }, [birthdays]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming birthdays</CardTitle>
        <CardDescription>Birthdays you are following</CardDescription>
      </CardHeader>
      <CardContent>
        {birthdays.length === 0
          ? <p className="text-center text-muted-foreground py-6">No birthdays added yet. Add one above!</p>
          : (
            <ul className="space-y-3">
              {formattedBirthdays?.map((birthday) => (
                <li key={birthday.id} className="flex items-center justify-between p-3 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <Gift className="h-5 w-5 text-pink-500"/>
                    <div>
                      <p className="font-medium">{birthday.name}</p>
                      <p className="text-sm text-muted-foreground">{formatBirthday(birthday.date ?? '')}</p>
                    </div>
                  </div>
                  <DeleteBirthday id={birthday.id}/>
                </li>
              ))}
            </ul>
          )}
      </CardContent>
    </Card>
  );
}

export { BirthdayList };
