'use server';

import { revalidatePath } from 'next/cache';
import { addBirthday, deleteBirthday } from '~/services/birthday';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';

interface FormState {
  message: string;
  success: boolean;
}

const birthdaySchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  date: z.string().min(1, { message: 'Date is required' }).refine(
    (date) => !isNaN(new Date(date).getTime()),
    { message: 'Invalid date format' }
  ),
  userId: z.string({ message: 'Valid user ID is required' })
});

async function addBirthdayAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const { userId } = await auth();

  if (!userId) {
    return { message: 'You must be signed in to add an item to your cart', success: false };
  }

  const name = formData.get('name') as string;
  const date = formData.get('date') as string;

  const validationResult = birthdaySchema.safeParse({ name, date, userId });

  if (!validationResult.success) {
    const errorMessage = validationResult.error.errors[0]?.message || 'Invalid input data';
    return { message: errorMessage, success: false };
  }

  try {
    await addBirthday(validationResult.data);
    revalidatePath('/');

    return { message: 'Birthday added successfully!', success: true };
  } catch (error) {
    console.error('Error adding birthday:', error);
    return { message: 'Failed to add birthday.', success: false };
  }
}

async function deleteBirthdayAction(id: string): Promise<FormState> {
  try {
    await deleteBirthday(id);
    revalidatePath('/');

    return { message: 'Birthday deleted successfully!', success: true };
  } catch (error) {
    console.error('Error deleting birthday:', error);
    return { message: 'Failed to delete birthday.', success: false };
  }
}

export { addBirthdayAction, deleteBirthdayAction };
