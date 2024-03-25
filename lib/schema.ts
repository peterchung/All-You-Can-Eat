import { z } from 'zod';

export const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Valid email is required' }),
  subject: z
    .string()
    .min(2, { message: 'Subject must be at least 2 characters' }),
  message: z
    .string()
    .min(6, { message: 'Message must be at least 6 characters' }),
});
