import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format, parse } from 'date-fns';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date into a readable birthday format (e.g., "January 1, 2024").
 * @param {Date | string} date - The date to format, either as a Date object or ISO string
 * @returns {string} The formatted date string or 'Invalid Date' if the input is invalid
 */
function formatBirthday(date: Date | string): string {
  let dateObject: Date;
  if (typeof date === 'string') {
    // Handle pure date strings (YYYY-MM-DD) as local dates to avoid timezone shifts
    if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      dateObject = parse(date, 'yyyy-MM-dd', new Date());
    } else {
      dateObject = new Date(date);
    }
  } else {
    dateObject = date;
  }
  if (isNaN(dateObject.getTime())) {
    return 'Invalid Date';
  }
  return format(dateObject, 'MMMM d, yyyy');
}

export { cn, formatBirthday };
