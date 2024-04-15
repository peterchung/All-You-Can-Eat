'use client';

import Image from 'next/image';
import { useState } from 'react';
import { urlFor } from '../lib/sanity';
import { imageAppProps } from '../types';

const SlidingImage = ({ images }: imageAppProps) => {
  const [isRevealed, setIsRevealed] = useState(false);
  console.log('images prop', images);

  return (
    <div className='mt-10'>
      {/* <Image src={urlFor(images).url()} alt='photo' width={400} height={400} /> */}
      <Image
        src={urlFor(images).url()}
        alt='photo'
        width={400}
        height={400}
        sizes='(max-width: 200px)'
      />
    </div>
  );
};

export default SlidingImage;
