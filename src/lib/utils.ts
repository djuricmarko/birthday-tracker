import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { format } from 'date-fns';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date into a readable birthday format (e.g., "January 1, 2024").
 * @param {Date | string} date - The date to format, either as a Date object or ISO string
 * @returns {string} The formatted date string or 'Invalid Date' if the input is invalid
 */
function formatBirthday(date: Date | string): string {
  const dateObject = typeof date === 'string' ? new Date(date) : date;
  if (isNaN(dateObject.getTime())) {
    return 'Invalid Date';
  }
  return format(dateObject, 'MMMM d, yyyy');
}

export { cn, formatBirthday };
