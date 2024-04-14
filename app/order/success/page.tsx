import { Button } from '@/components/ui/button';
import { CircleCheck } from 'lucide-react';
import Link from 'next/link';

export default function stripeSuccess() {
  return (
    <div className='h-screen'>
      <div className='mt-60 md:max-w-[50vw] mx-auto'>
        <CircleCheck className='text-green-600 w-16 h-16 mx-auto my-4 ' />
        <div className='text-center'>
          <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>
            Order Confirmed
          </h3>
          <p className='text-gray-600 my-2'>Thank you for supporting AYCE!</p>
          <p></p>
          <Button asChild>
            <Link href='/'>Go back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
