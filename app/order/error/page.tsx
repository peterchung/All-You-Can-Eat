import { Button } from '@/components/ui/button';
import { CircleAlert, CircleCheck } from 'lucide-react';
import Link from 'next/link';

export default function stripeError() {
  return (
    <div className='h-screen'>
      <div className='mt-60 md:max-w-[50vw] mx-auto'>
        <CircleAlert className='text-red-600 w-16 h-16 mx-auto my-4 ' />
        <div className='text-center'>
          <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>
            Payment Error
          </h3>
          <p className='text-gray-600 my-2'>
            We're sorry! There was an error processing your payment. Please try
            again.
          </p>
          <p></p>
          <Button asChild>
            <Link href='/shop'>Go back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
