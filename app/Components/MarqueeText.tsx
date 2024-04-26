import Image from 'next/image';
import { client, urlFor } from '../lib/sanity';

const getData = async () => {
  const query = "*[_type == 'meetupsImages'][0]";

  const data = await client.fetch(query);

  return data;
};

export default async function MarqueeText() {
  const data = await getData();
  //TODO: Add onClick to open new tab to join discord server
  return (
    <div className='relative h-screen'>
      <div className='absolute inset-0'>
        <Image
          src={urlFor(data.image1).url()}
          alt='Landing Background'
          fill={true}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
      </div>
      <div className='relative flex overflow-x-hidden z-10'>
        <div className='py-7 animate-marquee whitespace-nowrap uppercase'>
          <span className='text-4xl mx-4'>hello</span>
          <span className='text-4xl mx-4'>안녕</span>
          <span className='text-4xl mx-4'>こんにちは</span>
          <span className='text-4xl mx-4'>你好</span>
          <span className='text-4xl mx-4'>Xin chào</span>
          <span className='text-4xl mx-4'>สวัสดีo</span>
          <span className='text-4xl mx-4'>नमस्ते</span>
          <span className='text-4xl mx-4'>hello</span>
          <span className='text-4xl mx-4'>안녕</span>
          <span className='text-4xl mx-4'>こんにちは</span>
          <span className='text-4xl mx-4'>你好</span>
          <span className='text-4xl mx-4'>Xin chào</span>
          <span className='text-4xl mx-4'>สวัสดีo</span>
          <span className='text-4xl mx-4'>नमस्ते</span>
        </div>

        <div className='absolute top-0 py-7 animate-marquee2 whitespace-nowrap uppercase'>
          <span className='text-4xl mx-4'>hello</span>
          <span className='text-4xl mx-4'>안녕</span>
          <span className='text-4xl mx-4'>こんにちは</span>
          <span className='text-4xl mx-4'>你好</span>
          <span className='text-4xl mx-4'>Xin chào</span>
          <span className='text-4xl mx-4'>สวัสดีo</span>
          <span className='text-4xl mx-4'>नमस्ते</span>
          <span className='text-4xl mx-4'>hello</span>
          <span className='text-4xl mx-4'>안녕</span>
          <span className='text-4xl mx-4'>こんにちは</span>
          <span className='text-4xl mx-4'>你好</span>
          <span className='text-4xl mx-4'>Xin chào</span>
          <span className='text-4xl mx-4'>สวัสดีo</span>
          <span className='text-4xl mx-4'>नमस्ते</span>
        </div>
      </div>
      <div className='w-11/12 h-5/6 mx-auto flex flex-col justify-start items-center z-10'>
        <h2 className=' uppercase py-4 text-2xl md:text-4xl font-semibold z-10'>
          dates coming soon
        </h2>
        <p className='w-3/5 text-outline font-semibold leading-relaxed text-sm md:text-lg z-10'>
          Join our Discord Community to chat, share interests, play games, watch
          movies, and support each other&#39;s passions! Our community is meant
          for members to meet new friends, engage in discussion, and encourage
          one another in our endeavors. Grow with us as we support each other on
          our collective journey!
        </p>
        <div className='py-4 z-10'>
          <button className='bg-gray-200 hover:opacity-50 font-bold text-black py-4 px-6 rounded-full uppercase'>
            join server
          </button>
        </div>
      </div>
    </div>
  );
}
