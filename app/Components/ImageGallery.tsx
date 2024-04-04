'use client';

import Image from 'next/image';
import { imageAppProps } from '../types';
import { urlFor } from '../lib/sanity';
import { useState } from 'react';

export default function ImageGallery({ images }: imageAppProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleImageClick = (image: any) => {
    setMainImage(image);
  };

  return (
    <div className='grid gap-4 lg:grid-cols-5'>
      <div className='order-last flex gap-4 lg:order-none lg:flex-col'>
        {images.map((image: any, idx: any) => (
          <div key={idx} className='overflow-hidden rounded-lg bg-gray-100'>
            <Image
              src={urlFor(image).url()}
              alt='photo'
              width={200}
              height={200}
              className='h-full w-full object-cover object-center cursor-pointer'
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
      </div>

      <div className='overflow-hidden rounded-lg bg-gray-100 lg:col-span-4'>
        <Image
          src={urlFor(mainImage).url()}
          alt='main image'
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
