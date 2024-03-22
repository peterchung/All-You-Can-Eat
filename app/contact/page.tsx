'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { handleSubmit } from '@/utils/actions';

const Contact = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className='contact-form-wrapper mt-40 mb-20 flex flex-col items-center'>
      <form>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <div className='flex gap-x-2'>
              <span className='text-lg font-medium'>Name</span>
              <span className='text-lg'>(required)</span>
            </div>
          </legend>
          <div className='first-name-wrapper flex flex-col'>
            <label>First Name</label>
            <input
              {...register('firstName', { required: true, minLength: 2 })}
              type='text'
              className='first-name p-2.5 text-black'
            />
          </div>
          <div className='last-name-wrapper flex flex-col'>
            <label>Last Name</label>
            <input
              {...register('lastName', { required: true, minLength: 2 })}
              type='text'
              className='last-name p-2.5 text-black'
            />
          </div>
        </fieldset>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <label className='flex gap-x-2'>
              <span className='text-lg font-medium'>Email Address</span>
              <span className='text-lg'>(required)</span>
            </label>
          </legend>
          <input
            {...register('email', { required: true, minLength: 4 })}
            type='email'
            className='email p-2.5 w-full text-black'
          />
        </fieldset>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <label className='flex gap-x-2'>
              <span className='text-lg font-medium'>Subject</span>
              <span className='text-lg'>(required)</span>
            </label>
          </legend>
          <input
            {...register('subject', { required: true, minLength: 3 })}
            type='text'
            className='subject p-2.5 w-full text-black'
          />
        </fieldset>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <label className='flex gap-x-2'>
              <span className='text-lg font-medium'>Message</span>
              <span className='text-lg'>(required)</span>
            </label>
          </legend>
          <textarea
            {...register('message', { required: true, minLength: 4 })}
            className='message p-2.5 w-full text-black h-32'
          ></textarea>
        </fieldset>
        <button
          type='submit'
          className='bg-gray-200 font-bold text-black uppercase py-4 px-6 rounded hover:opacity-50'
        >
          Submit
        </button>
      </form>
      {/* <div>{JSON.stringify(state, null, 2)}</div> */}
    </div>
  );
};

export default Contact;
