'use client';

import { useEffect, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Gift, Trash2 } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { format } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { LoadingSpinner } from '~/components/ui/Spinner';
import { useToast } from '~/context/ToastContext';

type Birthday = {
  id: string
  name: string
  date: Date | string
}

async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to retrieve birthdays.');
  }
  return res.json();
}

export function BirthdayList() {
  const { showErrorToast } = useToast();

  const { data, isLoading, error } = useQuery({
    queryKey: ['birthdays'],
    queryFn: () => fetcher('/api/birthdays')
  });

  useEffect(() => {
    if (error) {
      showErrorToast(error.message || 'An unknown error occurred');
    }
  }, [error, showErrorToast]);

  const birthdays = useMemo(() => {
    return data?.map((b: Birthday) => ({ ...b, date: new Date(b.date), })) || [];
  }, [data]);

  function formatBirthday(date: Date | string) {
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(dateObject.getTime())) {
      return 'Invalid Date';
    }
    return format(dateObject, 'MMMM d, yyyy');
  }

  async function deleteBirthday(id: string) {
    console.warn(`Deletion for ID ${id} is local only. Implement API call.`);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Birthday List</CardTitle>
        <CardDescription>All the birthdays you&#39;re tracking.</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && <div className="flex justify-center"><LoadingSpinner/></div>}
        {!isLoading && birthdays.length === 0
          ? <p className="text-center text-muted-foreground py-6">No birthdays added yet. Add one above!</p>
          : (
            <ul className="space-y-3">
              {birthdays.map((birthday: Birthday & { date: Date; }) => (
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
                    onClick={() => deleteBirthday(birthday.id)}
                    disabled={isLoading}
                  >
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
