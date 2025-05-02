'use client';

import { type FormEvent, useEffect, useMemo, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { Calendar } from '~/components/ui/calendar';
import { cn } from '~/lib/utils';
import { useToast } from '~/context/ToastContext';
import { LoadingSpinner } from '~/components/ui/Spinner';
import BirthdayList from '~/components/BirthdayList';

export type Birthday = {
  id: string
  name: string
  date: Date | string
}

async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to retrieve data.');
  }
  return res.json();
}

async function submitForm(url: string, { arg }: { arg: { name: string; date: string } }) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to submit form');
  }

  return response.json();
}

export default function BirthdayTracker() {
  const { showSuccessToast, showErrorToast } = useToast();
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['birthdays'],
    queryFn: () => fetcher('/api/birthdays')
  });

  const { mutate: addBirthday, isPending: isMutating } = useMutation({
    mutationFn: (newBirthday: { name: string; date: string }) => submitForm('/api/birthdays', { arg: newBirthday }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['birthdays'] });
    }
  });

  const [name, setName] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    if (error) {
      showErrorToast('Uh oh! Something went wrong.', 'Please try again later.');
    }
  }, [error, showErrorToast]);

  const birthdays = useMemo(() => {
    return data?.map((b: Birthday) => ({ ...b, date: new Date(b.date), })) || [];
  }, [data]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setValidationError('');

    if (!name.trim()) {
      setValidationError('Please enter a name');
      return;
    }

    if (!date) {
      setValidationError('Please select a date');
      return;
    }

    try {
      addBirthday({ name, date: date.toISOString() });
      showSuccessToast('Birthday added!');

      setName('');
      setDate(undefined);

    } catch (error: Error | unknown) {
      showErrorToast('Something went wrong while adding the birthday.', 'Please try again later.');
      return error;
    }
  }

  async function deleteBirthday(id: string) {
    console.warn(`Deletion for ID ${id} is local only. Implement API call.`);
  }

  function formatBirthday(date: Date | string) {
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(dateObject.getTime())) {
      return 'Invalid Date';
    }
    return format(dateObject, 'MMMM d, yyyy');
  }

  return (
    <div className="container mx-auto py-10 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">Birthday Tracker</h1>
      <div className="grid gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Add a Birthday</CardTitle>
            <CardDescription>Enter the name and birthday of someone you want to remember.</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Birthday</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground')}
                      disabled={isLoading}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4"/>
                      {date ? formatBirthday(date) : 'Select date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus disabled={isLoading}/>
                  </PopoverContent>
                </Popover>
              </div>

              {validationError && <p className="text-sm text-red-500">{validationError}</p>}
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full mt-5" disabled={isLoading}>
                {isLoading || isMutating ? <LoadingSpinner/> : 'Add Birthday'}
              </Button>
            </CardFooter>
          </form>
        </Card>

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
                    <BirthdayList
                      key={birthday.id}
                      birthday={birthday}
                      deleteBirthday={deleteBirthday}
                      formatBirthday={formatBirthday}
                      isLoading={isLoading}
                    />
                  ))}
                </ul>
              )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
