'use client';

const Contact = () => {
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
            <input type='text' className='first-name p-2.5 text-black' />
          </div>
          <div className='last-name-wrapper flex flex-col'>
            <label>Last Name</label>
            <input type='text' className='last-name p-2.5 text-black' />
          </div>
        </fieldset>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <label className='flex gap-x-2'>
              <span className='text-lg font-medium'>Email Address</span>
              <span className='text-lg'>(required)</span>
            </label>
          </legend>
          <input type='email' className='email p-2.5 w-full text-black' />
        </fieldset>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <label className='flex gap-x-2'>
              <span className='text-lg font-medium'>Subject</span>
              <span className='text-lg'>(required)</span>
            </label>
          </legend>
          <input type='text' className='subject p-2.5 w-full text-black' />
        </fieldset>
        <fieldset className='item-field flex gap-x-2.5 mb-4'>
          <legend className='pb-1'>
            <label className='flex gap-x-2'>
              <span className='text-lg font-medium'>Message</span>
              <span className='text-lg'>(required)</span>
            </label>
          </legend>
          <textarea className='message p-2.5 w-full text-black h-32'></textarea>
        </fieldset>
        <button className='bg-gray-200 font-bold text-black uppercase py-4 px-6 rounded hover:opacity-50'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
