'use client';

import Image from 'next/image';
import { useState } from 'react';
import { urlFor } from '../lib/sanity';
import { imageAppProps } from '../types';

const SlidingImage = ({ images }: imageAppProps) => {
  const [showText, setShowText] = useState(false);

  return (
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
        <Image src={urlFor(images).url()} alt='photo' fill={true} />
      </div>
      <div
        className={`absolute inset-0 bg-indigo-200 bg-opacity-50 flex items-center font-semibold text-blue-900 transition-opacity duration-500 ease-in-out ${
          showText ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p>
          Some text!Some text!Some text!Some text!Some text!Some text!Some
          text!Some text!Some text!Some text!Some text!Some text!Some text!Some
          text!Some text!Some text!Some text!Some text!Some text!Some text!Some
          text!Some text!Some text!Some text!Some text!Some text!Some text!Some
          text!Some text!Some text!Some text!Some text!Some text!Some text!Some
          text!Some text!Some text!Some text!Some text!Some text!Some text!Some
          text!Some text!Some text!Some text!Some text!Some text!Some text!Some
          text!Some text!Some text!Some text!Some text!Some text!Some text!Some
        </p>
      </div>
    </div>
  );
};

export default SlidingImage;
