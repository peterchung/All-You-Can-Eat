'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { FormType } from '../../types';
import { formSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendForm } from '@/utils/actions';
import { toast } from 'sonner';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const processForm: SubmitHandler<FormType> = async (data): Promise<void> => {
    const result = await sendForm(data);

    if (result?.emailSent) {
      console.log('result prop on return obj:', result.result);
      toast.success('Message sent!');
      reset();
      return;
    }

    console.log('error obj:', result?.errors);
    toast.error('Message was not sent!');
  };

  return (
    <div className='contact-form-wrapper mt-40 mb-20 flex flex-col items-center'>
      <form onSubmit={handleSubmit(processForm)}>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <div className='flex gap-x-2'>
              <span className='text-lg font-medium'>Name</span>
              <span className='text-lg'>(required)</span>
            </div>
          </legend>
          <div className='first-name-wrapper flex flex-col'>
            <label
              className={`${errors.firstName ? 'text-red-500' : 'text-black'}`}
            >
              First Name
            </label>
            <div className='firstName-input w-full flex flex-col'>
              <input
                {...register('firstName')}
                type='text'
                className={`firstName p-2.5 text-black ${
                  errors.firstName
                    ? 'border rounded-md border-red-500'
                    : 'border rounded-md border-black'
                }`}
              />
              {errors.firstName?.message && (
                <span className='text-sm text-red-500'>
                  {errors.firstName.message}
                </span>
              )}
            </div>
          </div>
          <div className='last-name-wrapper flex flex-col'>
            <label
              className={`${errors.lastName ? 'text-red-500' : 'text-black'}`}
            >
              Last Name
            </label>
            <div className='w-full flex flex-col'>
              <input
                {...register('lastName')}
                type='text'
                className={`lastName p-2.5 text-black ${
                  errors.lastName
                    ? 'border rounded-md border-red-500'
                    : 'border rounded-md border-black'
                }`}
              />
              {errors.lastName?.message && (
                <span className='text-sm text-red-500'>
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>
        </fieldset>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <label className='flex gap-x-2'>
              <span
                className={`text-lg font-medium ${
                  errors.email ? 'text-red-500' : 'text-black'
                }`}
              >
                Email Address (required)
              </span>
            </label>
          </legend>
          <div className='w-full flex flex-col'>
            <input
              {...register('email')}
              type='text'
              className={`email p-2.5 w-full text-black ${
                errors.email
                  ? 'border rounded-md border-red-500'
                  : 'border rounded-md border-black'
              }`}
            />
            {errors.email?.message && (
              <span className='text-sm text-red-500'>
                {errors.email.message}
              </span>
            )}
          </div>
        </fieldset>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <label className='flex gap-x-2'>
              <span
                className={`text-lg font-medium ${
                  errors.subject ? 'text-red-500' : 'text-black'
                }`}
              >
                Subject (required)
              </span>
            </label>
          </legend>
          <div className='w-full flex flex-col'>
            <input
              {...register('subject')}
              type='text'
              className={`subject p-2.5 w-full text-black ${
                errors.subject
                  ? 'border rounded-md border-red-500'
                  : 'border rounded-md border-black'
              }`}
            />
            {errors.subject?.message && (
              <span className='text-sm text-red-500'>
                {errors.subject.message}
              </span>
            )}
          </div>
        </fieldset>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <label className='flex gap-x-2'>
              <span
                className={`text-lg font-medium ${
                  errors.message ? 'text-red-500' : 'text-black'
                }`}
              >
                Message (required)
              </span>
            </label>
          </legend>
          <div className='w-full flex flex-col'>
            <textarea
              {...register('message')}
              className={`message p-2.5 w-full text-black h-32 ${
                errors.message
                  ? 'border rounded-md border-red-500'
                  : 'border rounded-md border-black'
              }`}
            ></textarea>
            {errors.message?.message && (
              <span className='text-sm text-red-500'>
                {errors.message.message}
              </span>
            )}
          </div>
        </fieldset>
        <button
          type='submit'
          disabled={isSubmitting}
          className='bg-gray-200 font-bold text-black uppercase py-4 px-6 rounded hover:opacity-50'
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
