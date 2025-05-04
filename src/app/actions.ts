'use server';

import { revalidatePath } from 'next/cache';
import { addBirthday } from '~/services/birthday';

interface FormState {
  message: string;
  success: boolean;
}

export async function addBirthdayAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get('name') as string;
  const date = formData.get('date') as string;

  if (!name || !date) {
    return { message: 'Name and date are required.', success: false };
  }

  try {
    await addBirthday({ name, date })
    revalidatePath('/');

    return { message: 'Birthday added successfully!', success: true };
  } catch (error) {
    console.error('Error adding birthday:', error);
    return { message: 'Failed to add birthday.', success: false };
  }
}
