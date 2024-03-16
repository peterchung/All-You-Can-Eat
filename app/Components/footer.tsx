'use client';

import { useRef, useLayoutEffect } from 'react';

const Footer = (): JSX.Element => {
  const text1Ref = useRef<HTMLParagraphElement | null>(null);
  const text2Ref = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    const updateTextWidth = () => {
      const text1 = text1Ref.current;
      const text2 = text2Ref.current;

      if (text1 && text2) {
        // Reset styles to get the natural width of the elements
        text2.style.transform = 'scaleX(1)';

        // Calculate the scale factor to apply to the second text element
        const scaleFactor = text1.offsetWidth / text2.offsetWidth;
        text2.style.transform = `scaleX(${scaleFactor})`;
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
      <div
        className='flex flex-col items-center uppercase font-bold w-screen whitespace-nowrap'
        style={{ fontSize: 'clamp(2rem, 10vw, 12rem)' }}
      >
        <p ref={text1Ref} className='mt-10' style={{ lineHeight: '0.75' }}>
          all you can eat
        </p>
        <p
          ref={text2Ref}
          className='flex justify-center'
          style={{
            fontSize: 'clamp(1rem, 6vw, 10rem)',
            lineHeight: '1.25',
          }}
        >
          peter chung & sora ko
        </p>
      </div>
    </footer>
  );
};

export default Footer;
