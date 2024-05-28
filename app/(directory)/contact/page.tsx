import DirectoryHeader from '@/app/component/DirectoryHeader';
import ContactForm from '@/app/component/ContactForm';
import Image from 'next/image';
import { client, urlFor } from '@/app/lib/sanity';

const getData = async () => {
  const query = "*[_type == 'contactImages'][0]";

  const data = await client.fetch(query);

  return data;
};

const Contact = async () => {
  const data = await getData();

  return (
    <div>
      <DirectoryHeader />
      <div className='mx-auto max-w-2xl lg:max-w-7xl px-4 sm:px-6 py-10'>
        <div className='my-auto flex flex-wrap justify-between'>
          <div className='mb-6 flex w-full flex-col justify-center items-center sm:mb-12 lg:w-5/12'>
            <div className='w-full sm:w-10/12 md:w-10/12 lg:w-10/12'>
              <ContactForm />
            </div>
          </div>

          <div className='flex w-full sm:mb-12 lg:w-7/12'>
            <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg '>
              <Image
                src={urlFor(data.image1).url()}
                alt='Contact Image'
                className='h-full w-full object-cover object-center'
                width={700}
                height={700}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
