import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <section>
        {/* navbar */}
        <div className='flex justify-between items-center m-5'>
          <div>
            <Image
              src='/images/AYCE-Logo.png'
              alt='AYCE logo'
              width='150'
              height='143'
            />
          </div>
          <nav className='flex space-x-4 font-bold'>
            <div>
              <a>THE HOSTS</a>
            </div>
            <div>
              <a>LISTEN</a>
            </div>
            <div>
              <a>SHOP</a>
            </div>
            <div>
              <a>CONTACT</a>
            </div>
          </nav>
        </div>

        {/* podcast about one liner */}
        <div>
          <div className='font-bold text-white my-5'>
            <h1>
              TWO ASIANS NOT FROM ASIA EXPLORING ASIAN AMERICAN-ISH EXPERIENCES
            </h1>
          </div>
          <button className='bg-gray-200 hover:opacity-50 font-bold text-black py-4 px-6 rounded-full'>
            LISTEN NOW
          </button>
        </div>
      </section>

      <div className='flex justify-center mt-10 bg-primary'>
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
      </div>
    </main>
  );
}
