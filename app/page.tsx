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
  console.log('image data', data);
  return (
    <main>
      <section
        className='landing-page flex flex-col h-screen bg-cover bg-center'
        style={{ backgroundImage: 'url("/images/landing-page.jpeg")' }}
      >
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

      {/* <section className='podcast-about flex flex-col justify-between h-screen border-2'>
        <div className='flex justify-between mx-10 mt-28'>
          <div className='w-1/2'>
            <h1 className='text-8xl font-bold uppercase'>
              What is All You Can Eat?
            </h1>
          </div>
          <div className='w-1/2 text-2xl text-justify mx-5 uppercase'>
            <p>
              {' '}
              we explore and share our Asian American experiences. We created
              this space to share our different opinions in a mostly
              lighthearted way. The Asian American come up can be so comparable
              yet at the same time so unique - same same but different*. We
              encourage open dialogue and finding comfort over shared
              experiences or discovering new ones. Have your fill however you
              want. This is All You Can Eat.
            </p>
          </div>
        </div>

        <div className='flex justify-evenly my-28'>
          <Image
            src='/images/art.png'
            alt='hokusai wave art'
            width='243'
            height='211'
            className='m-4'
          />
          <Image
            src='/images/popculture.png'
            alt='blackpink culture'
            width='243'
            height='211'
            className='m-4'
          />
          <Image
            src='/images/food.png'
            alt='blackpink culture'
            width='243'
            height='211'
            className='my-4'
          />
          <Image
            src='/images/history.png'
            alt='blackpink culture'
            width='243'
            height='211'
            className='my-4'
          />
        </div>
      </section> */}
      <section className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='mb-8 flex flex-wrap justify-between md:mb-16'>
          <div className='mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-5/12 lg:pb-24 lg:pt-48'>
            <h1 className='mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl uppercase'>
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
            <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0'>
              <Image
                src={urlFor(data.image1).url()}
                alt='Host Peter'
                className='h-full w-full object-cover object-center'
                width={700}
                height={700}
                priority
              />
            </div>

            {/* <div className='overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
              <Image
                src={urlFor(data.image2).url()}
                alt='Host Peter'
                className='h-full w-full object-cover object-center'
                width={500}
                height={500}
                priority
              />
            </div> */}
          </div>
        </div>
      </section>

      <section
        className='welcome-and-listen flex flex-col h-screen bg-cover bg-center text-amber-300'
        style={{ backgroundImage: 'url("/images/welcome-to-ayce.jpeg")' }}
      >
        <div className='flex justify-center text-7xl font-bold uppercase mt-10'>
          <h1>welcome to all you can eat</h1>
        </div>
        {/* <div
          className='flex-grow relative overflow-hidden'
          style={{ maxHeight: '400px' }}
        >
          <div
            className='absolute inset-0 bg-cover bg-center bg-fixed'
            style={{ backgroundImage: 'url("/images/parallax-temp.png")' }}
          ></div>
        </div> */}
        <div className='flex flex-col items-center'>
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

      {/* <section className='host-pics'>
        <div className='flex justify-between p-[50px]'>
          <div className='w-1/2'>
            <Image
              src='/images/host-left.jpeg'
              alt='left-host'
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
              // fill
              // style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='w-1/2'>
            <Image
              src='/images/host-right.jpeg'
              alt='right-host'
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section> */}

      {/* <div className='flex justify-center mt-10 bg-primary'>
        <div className='p-5 flex flex-col'>
          <h1 className='text-5xl font-bold'>What is All You Can Eat?</h1>
          <div className='text-justify max-w-2xl'>
            <span className='bg-white text-2xl leading-normal'>
              we explore and share our Asian American experiences. We created
              this space to share our different opinions in a mostly
              lighthearted way. The Asian American come up can be so comparable
              yet at the same time so unique - same same but different*. We
              encourage open dialogue and finding comfort over shared
              experiences or discovering new ones. Have your fill however you
              want. This is All You Can Eat.
            </span>
          </div>
          <div className='self-end'>
            <Image
              src='/images/AYCE-Logo.png'
              alt='AYCE logo'
              width='243'
              height='100'
            />
          </div>
        </div>
        <div className='flex p-5'>
          <div className=''>
            <Image
              src='/images/art.png'
              alt='hokusai wave art'
              width='243'
              height='211'
              className='m-4'
            />
            <Image
              src='/images/popculture.png'
              alt='blackpink culture'
              width='243'
              height='211'
              className='m-4'
            />
          </div>
          <div className=''>
            <Image
              src='/images/food.png'
              alt='blackpink culture'
              width='243'
              height='211'
              className='my-4'
            />
            <Image
              src='/images/history.png'
              alt='blackpink culture'
              width='243'
              height='211'
              className='my-4'
            />
          </div>
        </div>
      </div>

      <div className='flex justify-evenly'>
        <div className='relative flex-grow'>
          <Image
            src='/images/theHostsLeft.JPG'
            alt='Peter image'
            layout='fill'
            objectFit='cover'
            className='opacity-95'
          />
        </div>
        <div className='flex flex-col justify-center items-center relative'>
          <div className='absolute inset-0 z-0'>
            <Image
              src='/images/host-bio-background.png'
              alt='host background image'
              layout='fill'
              objectFit='cover'
              className='opacity-15'
            />
          </div>

          <h1 className='text-8xl font-bold my-10'>The Hosts</h1>

          <div className='flex flex-col items-center'>
            <h2 className='text-6xl font-bold text-hostTitle'>Peter Chung</h2>
            <div className='text-justify max-w-2xl m-5'>
              <span className='bg-white text-2xl leading-normal'>
                Peter is the best Peter is the best Peter is the best Peter is
                the best Peter is the best Peter is the best Peter is the best
                Peter is the best Peter is the best Peter is the best Peter is
                the best Peter is the best Peter is the best Peter is the best
                Peter is the best Peter is the best Peter is the best Peter is
                the best Peter is the best Peter is the best Peter is the best
                Peter is the best Peter is the best.
              </span>
            </div>
          </div>

          <div className='flex flex-col items-center mt-20'>
            <h2 className='text-6xl font-bold text-hostTitle'>Sora Ko</h2>
            <div className='text-justify max-w-2xl m-5'>
              <span className='bg-white text-2xl leading-normal'>
                Sora is the worst Sora is the worst Sora is the worst Sora is
                the worst Sora is the worst Sora is the worst Sora is the worst
                Sora is the worst Sora is the worst Sora is the worst Sora is
                the worst Sora is the worst Sora is the worst Sora is the worst
                Sora is the worst Sora is the worst Sora is the worst Sora is
                the worst Sora is the worst Sora is the worst Sora is the worst
                Sora is the worst Sora is the worst Sora is the worst Sora is
                the worst.
              </span>
            </div>
          </div>
        </div>
        <div className='relative flex-grow'>
          <Image
            src='/images/theHostsRight.JPG'
            alt='Sora image'
            layout='fill'
            objectFit='cover'
            className='opacity-95'
          />
        </div>
      </div>

      <div className='flex flex-col items-center relative'>
        <div className='items-start mt-20 mb-5 border-8 max-w-2xl'>
          <h1 className=''>
            <span className='text-3xl bg-white text-hostTitle'>
              Take a look at...
            </span>
          </h1>
          <h1 className='text-5xl font-bold my-5'>Our latest Podcast.</h1>
          <div className='relative z-0'>
            <iframe
              width='575'
              height='315'
              src='https://www.youtube.com/embed/IiGCngEupFw?si=_1-ZF3Kv6PpS28xu'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div className='absolute top-0 right-0 w-full mb-[-50] z-1'>
          <Image
            src='/images/open.png'
            alt='open sign'
            width='243'
            height='211'
            className='m-4'
          />
        </div>
      </div> */}
    </main>
  );
}
