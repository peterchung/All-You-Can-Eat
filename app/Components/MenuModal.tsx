'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';

export default function MenuModal({ isOpen, handleClose, links }) {
  const { handleCartClick } = useShoppingCart();

  const handleCartButtonClick = () => {
    handleClose();
    handleCartClick();
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className='flex flex-col justify-center bg-custom-background sm:max-w-lg'>
        <div className=''>
          <nav className='flex flex-col gap-y-12'>
            {links.map((link, idx) => (
              <div key={idx}>
                <button onClick={handleClose}>
                  <Link
                    className='text-5xl font-bold text-blue-900'
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </button>
              </div>
            ))}
            <button onClick={() => handleCartButtonClick()}>
              <div className='flex text-5xl font-bold text-blue-900 uppercase'>
                Cart
              </div>
            </button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
