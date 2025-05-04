'use client';

import type { Birthday } from '~/types/birthdayTypes';
import { useMemo } from 'react';
import { Gift, Trash2 } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { formatBirthday } from '~/lib/utils';

export function BirthdayList({ birthdays }: { birthdays: Birthday[] }) {
  const formattedBirthdays = useMemo(() => {
    return birthdays?.map((b: Birthday) => ({ ...b, date: new Date(b.date), })) || [];
  }, [birthdays]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Predostojeći rođendani</CardTitle>
        <CardDescription>Rođendani koje ti pratiš</CardDescription>
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
                      <p className="text-sm text-muted-foreground">{formatBirthday(birthday.date)}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="h-4 w-4 text-muted-foreground"/>
                  </Button>
                </li>
              ))}
            </ul>
          )}
      </CardContent>
    </Card>
  );
}
