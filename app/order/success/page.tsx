'use client';

import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

export default function StripeSuccess() {
  const { clearCart } = useShoppingCart();
  const hasCleared = useRef(false);

  //TODO: clear the cart upon successful payment
  //TODO: create session so that this page is only accessible after order has been processed and can't be reached directly
  // useEffect(() => {
  //   console.log('has cleared should be false');
  //   if (!hasCleared.current) {
  //     clearCart();
  //     hasCleared.current = true;
  //   }
  // }, [clearCart]);

  return (
    <div className='h-screen'>
      <div className='mt-60 md:max-w-[50vw] mx-auto'>
        <CircleCheck className='text-green-600 w-16 h-16 mx-auto my-4 ' />
        <div className='text-center'>
          <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>
            Order Confirmed
          </h3>
          <p className='text-gray-600 my-2'>Thank you for supporting AYCE!</p>
          <Button asChild>
            <Link href='/'>Go back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
