'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '~/components/ui/calendar';
import { LoadingSpinner } from '~/components/ui/Spinner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { type FormEvent, useState } from 'react';
import { useToast } from '~/context/ToastContext';
import { format } from 'date-fns';

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

export function AddBirthdayModal() {
  const { showSuccessToast, showErrorToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: addBirthday, isPending: isMutating } = useMutation({
    mutationFn: (newBirthday: { name: string; date: string }) => submitForm('/api/birthdays', { arg: newBirthday }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['birthdays'] });
    }
  });

  const [name, setName] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [validationError, setValidationError] = useState<string>('');

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

  function formatBirthday(date: Date | string) {
    const dateObject = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(dateObject.getTime())) {
      return 'Invalid Date';
    }
    return format(dateObject, 'MMMM d, yyyy');
  }

  return (
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
              disabled={isMutating}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Birthday</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground')}
                  disabled={isMutating}
                >
                  <CalendarIcon className="mr-2 h-4 w-4"/>
                  {date ? formatBirthday(date) : 'Select date'}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus disabled={isMutating}/>
              </PopoverContent>
            </Popover>
          </div>

          {validationError && <p className="text-sm text-red-500">{validationError}</p>}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full mt-5" disabled={isMutating}>
            {isMutating ? <LoadingSpinner/> : 'Add Birthday'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
