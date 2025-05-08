'use client';

import type { Birthday } from '~/types/birthdayTypes';
import { useMemo, useState } from 'react';
import { Gift, Trash2 } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { formatBirthday } from '~/lib/utils';
import { deleteBirthdayAction } from '~/app/actions';
import { useToast } from '~/components/context/ToastContext';
import { LoadingSpinner } from '~/components/ui/Spinner';

export function BirthdayList({ birthdays }: { birthdays: Birthday[] }) {
  const { showSuccessToast, showErrorToast } = useToast();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const formattedBirthdays = useMemo(() => {
    return birthdays?.map((b: Birthday) => ({ ...b, date: new Date(b.date), })) || [];
  }, [birthdays]);

  const handleDelete = async (id: string) => {
    try {
      setDeletingId(id);
      const result = await deleteBirthdayAction(id);

      if (result.success) {
        showSuccessToast(result.message);
      } else {
        showErrorToast(result.message);
      }
    } catch (error) {
      showErrorToast(`Failed to delete birthday ${error}`);
    } finally {
      setDeletingId(null);
    }
  };

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
                      <p className="text-sm text-muted-foreground">{formatBirthday(birthday.date)}</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(birthday.id)}
                    disabled={deletingId === birthday.id}
                  >
                    {deletingId === birthday.id ? <LoadingSpinner/> : (
                      <Trash2 className="h-4 w-4 text-muted-foreground"/>
                    )}
                  </Button>
                </li>
              ))}
            </ul>
          )}
      </CardContent>
    </Card>
  );
}
