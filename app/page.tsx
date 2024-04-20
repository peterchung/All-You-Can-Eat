import Image from 'next/image';
import { client, urlFor } from './lib/sanity';

const getData = async () => {
  const query = "*[_type == 'homeImages'][0]";

  const data = await client.fetch(query);

  return data;
};

export const dynamic = 'force-dynamic';

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <section className='landing-page relative flex flex-col h-screen'>
        <div className='absolute inset-0'>
          <Image
            src={urlFor(data.image2).url()}
            alt='Landing Background'
            fill={true}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        <div className='relative'></div>
        <div className='mb-20 z-10'>
          <div className='mx-auto max-w-lg absolute top-20 left-8'>
            <div className='font-bold text-blue-900 text-5xl my-8 uppercase'>
              <h3>a podcast about anything, really. sort of.</h3>
            </div>
            <div>
              <button className='bg-gray-200 hover:opacity-50 font-bold text-black py-4 px-6 rounded-full uppercase'>
                Watch now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='my-auto flex flex-wrap justify-between'>
          <div className='mb-2 flex w-full flex-col justify-center sm:mb-8 lg:mb-0 lg:w-5/12 lg:py-24'>
            <h1 className='mb-4 mt-4 text-4xl font-bold sm:text-5xl md:mb-6 lg:mt-0 md:text-6xl uppercase'>
              what is all you can eat?
            </h1>
            <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>
              We created this space to explore our experiences and share our
              opinions in a mostly lighthearted way. The Asian American come up
              can be so comparable, yet at the same time so unique - same same
              but different. We encourage open dialogue and finding comfort over
              shared experiences or discovering new ones. Welcome to All You Can
              Eat.
            </p>
          </div>

          <div className='mb-12 mt-12 flex w-full md:mb-16 lg:w-7/12'>
            <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
              <Image
                src={urlFor(data.image1).url()}
                alt='Dinner Image'
                className='h-full w-full object-cover object-center'
                width={700}
                height={700}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className='welcome-and-listen relative flex flex-col h-screen text-amber-300'>
        <div className='absolute inset-0'>
          <Image
            src={urlFor(data.image3).url()}
            alt='Landing Background'
            fill={true}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>

        <div className='flex justify-center text-7xl font-bold uppercase mt-10 z-10'>
          <h1>welcome to all you can eat</h1>
        </div>

        <div className='flex flex-col items-center z-10'>
          <h2 className='text-6xl font-bold uppercase my-10'>listen now on</h2>
          <div className='flex justify-between w-3/4'>
            <div className='flex flex-col items-center'>
              <div className='text-3xl font-bold uppercase'>spotify</div>
              <Image
                src='/images/icons8-spotify-50.png'
                alt='spotify'
                width='50'
                height='50'
              />
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-3xl font-bold uppercase'>youtube</div>
              <Image
                src='/images/icons8-youtube-50.png'
                alt='youtube'
                width='50'
                height='50'
              />
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-3xl font-bold uppercase'>apple</div>
              <Image
                src='/images/icons8-podcasts-48.png'
                alt='apple podcast'
                width='50'
                height='50'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
