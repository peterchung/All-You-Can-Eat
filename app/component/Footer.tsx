'use client';

import { Copyright } from 'lucide-react';
import Image from 'next/image';
import { useRef, useLayoutEffect } from 'react';
import { urlFor } from '../lib/sanity';
import { imageAppProps } from '../types';

const Footer = ({ images }: imageAppProps): JSX.Element => {
  const text1Ref = useRef<HTMLParagraphElement | null>(null);
  const text2Ref = useRef<HTMLParagraphElement | null>(null);
  const lineRef = useRef<HTMLHRElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const copyrightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const updateTextWidth = () => {
      const text1 = text1Ref.current;
      const text2 = text2Ref.current;
      const line = lineRef.current;
      const contact = contactRef.current;

      if (text1 && text2 && line && contact) {
        // Reset styles to get the natural width of the elements
        text2.style.transform = 'scaleX(1)';
        line.style.transform = 'scaleX(1)';
        contact.style.transform = 'scaleX(1)';

        // Calculate the scale factor to apply to the second text element
        const scaleFactor = text1.offsetWidth / text2.offsetWidth;
        const lineScaleFactor = text1.offsetWidth / line.offsetWidth;
        const contactScaleFactor = text1.offsetWidth / contact.offsetWidth;
        text2.style.transform = `scaleX(${scaleFactor})`;
        line.style.transform = `scaleX(${lineScaleFactor})`;
        contact.style.transform = `scaleX(${contactScaleFactor})`;
      }
    };

    updateTextWidth(); // Initial call to set the widths

    // Add event listener for window resize
    window.addEventListener('resize', updateTextWidth);

    // Remove event listener on cleanup
    return (): void => {
      window.removeEventListener('resize', updateTextWidth);
    };
  }, []); // Empty dependency array ensures this runs on mount and unmount only

  return (
    <footer className='bg-black text-white'>
      <div className='py-10 font-bold'>
        <div
          className='flex flex-col items-center uppercase w-screen whitespace-nowrap'
          style={{ fontSize: 'clamp(2rem, 10vw, 12rem)' }}
        >
          <p ref={text1Ref} className='' style={{ lineHeight: '0.75' }}>
            all you can eat
          </p>
          <p
            ref={text2Ref}
            className='flex justify-center'
            style={{
              fontSize: 'clamp(2rem, 7vw, 10rem)',
              lineHeight: '1.25',
            }}
          >
            Peter and Sora
          </p>
        </div>
        <div className='py-4'>
          <hr ref={lineRef}></hr>
        </div>
        <div ref={contactRef} className='contact-wrapper flex justify-between'>
          <div className='flex flex-col'>
            <div className='flex'>
              <Copyright className='w-5 h-5' />
              <p className='text-sm pl-2'>2024, All You Can Eat.</p>
            </div>
            <div>
              <p className='text-xs'>
                Icons by <a href='https://icons8.com/'>Icons8</a>
              </p>
            </div>
          </div>
          <div className='social-media flex'>
            <div className='mr-4 hover:cursor-pointer'>
              <a
                href='https://www.instagram.com/aycepod/'
                target='_blank'
                rel='noopener'
              >
                <Image
                  src={urlFor(images.instagram).url()}
                  alt='instagram'
                  width='36'
                  height='36'
                />
              </a>
            </div>
            <div className='mr-4 hover:cursor-pointer'>
              <a
                href='https://www.tiktok.com/@aycepod'
                target='_blank'
                rel='noopener'
              >
                <Image
                  src={urlFor(images.tiktok).url()}
                  alt='tiktok'
                  width='36'
                  height='36'
                />
              </a>
            </div>
            <div className='mr-4 hover:cursor-pointer'>
              <a>
                <Image
                  src={urlFor(images.discord).url()}
                  alt='discord'
                  width='36'
                  height='36'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
