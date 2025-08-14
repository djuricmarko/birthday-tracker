'use client';

import { useActionState, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { addBirthdayAction } from '~/app/actions';
import { useToast } from '~/components/context/ToastContext';
import { Button } from '~/components/ui/button';
import { Calendar } from '~/components/ui/calendar';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover';
import { LoadingSpinner } from '~/components/ui/spinner';
import { cn, formatBirthday } from '~/lib/utils';

const initialState = {
  message: '',
  success: false,
};

export function AddBirthdayForm() {
  const [state, formAction, isPending] = useActionState(addBirthdayAction, initialState);
  const { showSuccessToast, showErrorToast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        showSuccessToast(state.message);
      } else {
        showErrorToast('Error', state.message);
      }
    }
  }, [state, showSuccessToast, showErrorToast]);

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Enter name" required/>
      </div>
      <div className="space-y-2">
        <input type="hidden" name="date" value={date ? format(date, 'yyyy-MM-dd') : ''}/>
        <Label htmlFor="date-display">Birthday</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date-display"
              variant="outline"
              className={cn('w-full justify-start text-left font-normal', !date && 'text-muted-foreground')}
              disabled={isPending}
            >
              <CalendarIcon className="mr-2 h-4 w-4"/>
              {date ? formatBirthday(date) : 'Select date'}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={isPending}
            />
          </PopoverContent>
        </Popover>
      </div>
      {!state.success && state.message && <p className="text-sm text-red-500">{state.message}</p>}
      <Button className="cursor-pointer w-full" variant="outline" type="submit" disabled={isPending}>
        {isPending ? <LoadingSpinner/> : 'Add birthday'}
      </Button>
    </form>
  );
}
