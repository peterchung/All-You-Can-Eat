'use client';

import Image from 'next/image';
import { useState } from 'react';
import { urlFor } from '../lib/sanity';
import { imageAppProps } from '../types';
import Link from 'next/link';

const SlidingImage = ({ images, index }: imageAppProps & { index: number }) => {
  const [showText, setShowText] = useState(false);

  const profileText = [
    'Personality/Diversity hire - I was selected as the producer for this podcast because I was present more than anything else. Most of my days are spent terrorizing the world as a tech bro. In my spare time, I work on building my golf channel @golfmetric on YouTube and playing golf competitively. Other interests/less serious hobbies include cheering on my Formula 1 fantasy team and playing Chess. I used to attend a lot of house/techno shows, but I am too old to handle that these days.',
    "I am a co-host of AYCE. I am going through a mid-life crisis so that's what I'm bringing to the table. My interests include: trying to have good noonchi, eating sweets, being a bad trumpet player, collecting cat whiskers, breaking typewriters, and repairing typewriters. After being told it wasn’t okay to cry my entire childhood, I hit a weird puberty in my mid-twenties and now I cry really easily, like, all the time. So now my hobbies also include crying at every movie ever made and also when I hear a crowd cheering??? P.S. I cried while writing this.",
    "I'm the vanilla half of AYCE, but my favorite ice cream flavor is pistachio. My cat whisker collection isn't as good as Sora's, because I'm allergic to cats. I'm a big fan of Arsenal FC, and my support for the Korean National Team brought me D-list celebrity status while I was in Russia and Qatar. I like meeting new people and I'm a self-described golden retriever, which is why I think Sora asked me to co-host. In my spare time you can find me at concerts, spending time with family/friends, and playing golf. I hit a hole in one once - sliced it right into the wrong hole. Does that still count as a hole in one?",
  ];
  const profileName = ['Rob', 'Sora', 'Peter'];

  const igHandle = [
    'https://www.instagram.com/golfmetric/',
    'https://www.instagram.com/aznbbppl/',
    'https://www.instagram.com/pmc__life/',
  ];

  const displayedText = profileText[index] || 'error';
  const displayedName = profileName[index] || 'error';
  const igLink = igHandle[index] || 'error';

  return (
    <div>
      <div className='py-2 flex justify-center'>
        <Link href={igLink} target='_blank'>
          <Image
            src='/images/ig-logo-blue.png'
            alt='AYCE logo'
            width='45'
            height='4'
          />
        </Link>
      </div>
      <div
        className='relative overflow-hidden cursor-pointer'
        onClick={() => setShowText(!showText)}
      >
        <div
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            showText ? '-translate-x-full' : 'translate-x-0'
          }`}
          style={{ position: 'relative', height: '602px', width: '300px' }}
        >
          <Image src={urlFor(images).url()} alt='photo' fill={true} priority />
        </div>
        <div
          className={`absolute inset-0 bg-indigo-200 bg-opacity-50 flex flex-col pt-4 items-center font-semibold text-blue-900 transition-opacity duration-500 ease-in-out ${
            showText ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h3 className='text-2xl font-bold py-4'>{displayedName}</h3>
          <div>
            <p className='px-4'>{displayedText}</p>
          </div>
        </div>
      </div>
    </div>
    // <div
    //   className='relative overflow-hidden cursor-pointer'
    //   onClick={() => setShowText(!showText)}
    // >
    //   <div
    //     className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
    //       showText ? '-translate-x-full' : 'translate-x-0'
    //     }`}
    //     style={{ position: 'relative', height: '602px', width: '300px' }}
    //   >
    //     <Image src={urlFor(images).url()} alt='photo' fill={true} />
    //   </div>
    //   <div
    //     className={`absolute inset-0 bg-indigo-200 bg-opacity-50 flex flex-col pt-4 items-center font-semibold text-blue-900 transition-opacity duration-500 ease-in-out ${
    //       showText ? 'opacity-100' : 'opacity-0'
    //     }`}
    //   >
    //     <h3 className='text-2xl font-bold py-4'>{displayedName}</h3>
    //     <div>
    //       <p className='px-4'>{displayedText}</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SlidingImage;
