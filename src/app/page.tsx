'use client';

import type React from 'react';

import { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Gift, Trash2 } from 'lucide-react';

import { Button } from '~/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { Calendar } from '~/components/ui/calendar';
import { cn } from '~/lib/utils';

type Birthday = {
  id: string
  name: string
  date: Date
}

export default function BirthdayTracker() {
  const [name, setName] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [birthdays, setBirthdays] = useState<Birthday[]>([]);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Please enter a name');
      return;
    }

    if (!date) {
      setError('Please select a date');
      return;
    }

    setError('');

    const newBirthday: Birthday = {
      id: crypto.randomUUID(),
      name,
      date,
    };

    setBirthdays([...birthdays, newBirthday]);
    setName('');
    setDate(undefined);
  };

  const deleteBirthday = (id: string) => {
    setBirthdays(birthdays.filter((birthday) => birthday.id !== id));
  };

  const formatBirthday = (date: Date) => {
    return format(date, 'MMMM d, yyyy');
  };

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
                <Input id="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Birthday</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground')}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4"/>
                      {date ? formatBirthday(date) : 'Select date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus/>
                  </PopoverContent>
                </Popover>
              </div>

              {error && <p className="text-sm text-red-500">{error}</p>}
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full mt-5">
                Add Birthday
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
            {birthdays.length === 0 ? (
              <p className="text-center text-muted-foreground py-6">No birthdays added yet. Add one above!</p>
            ) : (
              <ul className="space-y-3">
                {birthdays.map((birthday) => (
                  <li key={birthday.id} className="flex items-center justify-between p-3 rounded-lg border">
                    <div className="flex items-center gap-3">
                      <Gift className="h-5 w-5 text-pink-500"/>
                      <div>
                        <p className="font-medium">{birthday.name}</p>
                        <p className="text-sm text-muted-foreground">{formatBirthday(birthday.date)}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => deleteBirthday(birthday.id)}>
                      <Trash2 className="h-4 w-4 text-muted-foreground"/>
                    </Button>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
