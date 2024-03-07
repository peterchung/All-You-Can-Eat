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

      <div className='flex justify-center p-20 mt-10 bg-primary'>
        <div className='basis-1/2 text-justify'>
          <h1 className='text-2xl font-bold'>What is All You Can Eat?</h1>
          <span className='bg-white'>
            we explore and share our Asian American experiences. We created this
            space to share our different opinions in a mostly lighthearted way.
            The Asian American come up can be so comparable yet at the same time
            so unique - same same but different*. We encourage open dialogue and
            finding comfort over shared experiences or discovering new ones.
            Have your fill however you want. This is All You Can Eat.
          </span>
        </div>
        <div className='flex'>
          <div className='m-2'>
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
          <div className='m-2'>
            <Image
              src='/images/food.png'
              alt='blackpink culture'
              width='243'
              height='211'
              className='m-4'
            />
            <Image
              src='/images/history.png'
              alt='blackpink culture'
              width='243'
              height='211'
              className='m-4'
            />
          </div>
        </div>
      </div>
    </main>
  );
}
