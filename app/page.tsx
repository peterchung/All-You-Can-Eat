import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* navbar */}
      <nav className='flex min-w-screen min-h-50px justify-between'>
        <a>HOME</a>
        <a>ABOUT</a>
        <a>THE HOSTS</a>
        <a>CONTACT</a>
        <a>PODCAST</a>
        <a>SHOP</a>
      </nav>

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
        <div>
          <Image
            src='/images/theHostsLeft.JPG'
            alt='Peter image'
            width='243'
            height='668'
          />
        </div>
        <div className='flex flex-col justify-center max-w-2xl'>
          <h1 className='text-5xl font-bold'>The Hosts</h1>
          <h2 className='text-4xl font-bold'>Peter Chung</h2>
          <span className='bg-white text-2xl leading-normal text-justify'>
            Peter is the best Peter is the best Peter is the best Peter is the
            best Peter is the best Peter is the best Peter is the best Peter is
            the best Peter is the best Peter is the best Peter is the best Peter
            is the best Peter is the best Peter is the best Peter is the best
            Peter is the best Peter is the best Peter is the best Peter is the
            best Peter is the best Peter is the best Peter is the best Peter is
            the best.
          </span>
          <h2 className='text-4xl font-bold'>Sora Ko</h2>
          <span className='bg-white text-2xl leading-normal text-justify'>
            Sora is the worst Sora is the worst Sora is the worst Sora is the
            worst Sora is the worst Sora is the worst Sora is the worst Sora is
            the worst Sora is the worst Sora is the worst Sora is the worst Sora
            is the worst Sora is the worst Sora is the worst Sora is the worst
            Sora is the worst Sora is the worst Sora is the worst Sora is the
            worst Sora is the worst Sora is the worst Sora is the worst Sora is
            the worst Sora is the worst Sora is the worst.
          </span>
        </div>
        <div>
          <Image
            src='/images/theHostsRight.JPG'
            alt='Sora image'
            width='243'
            height='668'
          />
        </div>
      </div>
    </main>
  );
}
