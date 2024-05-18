import Image from 'next/image';
import { client, urlFor } from './lib/sanity';

const getData = async () => {
  const query = "*[_type == 'homeImages'][0]";

  const data = await client.fetch(query);

  return data;
};

//TODO: Add onclick to watch now directing to youtube, and onclick to apple, spotify, youtube buttons
//TODO: DRY: Reduce lines of code for spotify, youtube, etc. and use map

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
            priority
          />
        </div>

        <div className='relative'></div>
        <div className='mb-20 z-10'>
          <div className='mx-auto max-w-lg absolute top-20 left-8'>
            <div className='font-bold text-blue-900 text-2xl md:text-4xl lg:text-5xl mt-8 mb-4 md:mb-8 uppercase'>
              <h3>a podcast about anything, really. sort of.</h3>
            </div>
            <div>
              <button className='bg-gray-200 hover:opacity-50 font-bold text-black py-4 px-6 rounded-full uppercase hover:cursor-pointer'>
                <a
                  href='https://www.youtube.com/@aycepod'
                  target='_blank'
                  rel='noopener'
                >
                  Watch now
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='my-auto flex flex-wrap justify-between'>
          <div className='flex w-full flex-col justify-center lg:mb-0 lg:w-5/12 lg:py-24'>
            <h1 className='mb-4 mt-6 text-5xl font-bold md:mb-6 lg:mt-0 md:text-6xl uppercase'>
              what is all you can eat?
            </h1>
            <p className='max-w-full leading-relaxed text-gray-500 xl:text-lg'>
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
            priority
          />
        </div>

        <div className='flex flex-col items-center justify-center w-full mt-10 z-10'>
          <h1 className='text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase'>
            welcome to all you can eat
          </h1>
        </div>

        <div className='flex flex-col items-center z-10'>
          <h2 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase my-10'>
            listen now on
          </h2>
          <div className='flex justify-between w-3/4'>
            <div className='hover-cursor-pointer'>
              <a
                href='https://podcasters.spotify.com/pod/show/all-you-can-eat0'
                target='_blank'
                rel='noopener'
                className='flex flex-col items-center'
              >
                <div className='text-md md:text-2xl xl:text-3xl font-bold uppercase'>
                  spotify
                </div>
                <Image
                  src={urlFor(data.image4).url()}
                  alt='spotify'
                  width='50'
                  height='50'
                />
              </a>
            </div>
            <div className='hover-cursor-pointer'>
              <a
                href='https://www.youtube.com/@aycepod'
                target='_blank'
                rel='noopener'
                className='flex flex-col items-center'
              >
                <div className='text-md md:text-2xl xl:text-3xl font-bold uppercase'>
                  youtube
                </div>
                <Image
                  src={urlFor(data.image5).url()}
                  alt='youtube'
                  width='50'
                  height='50'
                />
              </a>
            </div>
            <div className='flex flex-col items-center'>
              <div className='text-md md:text-2xl xl:text-3xl font-bold uppercase'>
                apple
              </div>
              <Image
                src={urlFor(data.image6).url()}
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
