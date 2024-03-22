'use server';

import { formSchema } from '@/lib/schema';

export const handleSubmit = async (state, formData) => {
  const result = formSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });
  console.log('in server action');
  if (result.success) {
    return { data: result.data };
  }

  if (result.error) {
    return { error: 'error' };
  }
};
