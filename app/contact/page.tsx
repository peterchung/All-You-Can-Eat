'use client';

import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const processForm = (data) => console.log(data);

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
              className={`${errors.firstName ? 'text-red-500' : 'text-white'}`}
            >
              First Name
            </label>
            <input
              {...register('firstName', { required: true, minLength: 2 })}
              type='text'
              className={`p-2.5 text-black ${
                errors.firstName ? 'border border-red-500' : ''
              }`}
            />
          </div>
          <div className='last-name-wrapper flex flex-col'>
            <label
              className={`${errors.lastName ? 'text-red-500' : 'text-white'}`}
            >
              Last Name
            </label>
            <input
              {...register('lastName', { required: true, minLength: 2 })}
              type='text'
              className={`p-2.5 text-black ${
                errors.lastName ? 'border border-red-500' : ''
              }`}
            />
          </div>
        </fieldset>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <label className='flex gap-x-2'>
              <span
                className={`text-lg font-medium ${
                  errors.email ? 'text-red-500' : 'text-white'
                }`}
              >
                Email Address (required)
              </span>
              {/* <span className='text-lg'>(required)</span> */}
            </label>
          </legend>
          <input
            {...register('email', { required: true, minLength: 4 })}
            type='email'
            className={`p-2.5 w-full text-black ${
              errors.email ? 'border border-red-500' : ''
            }`}
          />
        </fieldset>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <label className='flex gap-x-2'>
              <span
                className={`text-lg font-medium ${
                  errors.subject ? 'text-red-500' : 'text-white'
                }`}
              >
                Subject (required)
              </span>
              {/* <span className='text-lg'>(required)</span> */}
            </label>
          </legend>
          <input
            {...register('subject', { required: true, minLength: 3 })}
            type='text'
            className={`subject p-2.5 w-full text-black ${
              errors.subject ? 'border border-red-500' : ''
            }`}
          />
        </fieldset>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <label className='flex gap-x-2'>
              <span
                className={`text-lg font-medium ${
                  errors.message ? 'text-red-500' : 'text-white'
                }`}
              >
                Message (required)
              </span>
              {/* <span className='text-lg'>(required)</span> */}
            </label>
          </legend>
          <textarea
            {...register('message', { required: true, minLength: 4 })}
            className={`p-2.5 w-full text-black h-32 ${
              errors.message ? 'border border-red-500' : ''
            }`}
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
