import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function formatBirthday(date: Date | string) {
  const dateObject = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(dateObject.getTime())) {
    return 'Invalid Date';
  }
  return format(dateObject, 'MMMM d, yyyy');
}

export { cn, formatBirthday };
