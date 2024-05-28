'use client';

import { Sheet, SheetContent } from '@/components/ui/sheet';
import Link from 'next/link';
import { useShoppingCart } from 'use-shopping-cart';
import { usePathname } from 'next/navigation';
import { menuModalProps } from '../types';

const links = [
  { name: 'HOME', href: '/' },
  { name: 'THE TEAM', href: '/theteam' },
  { name: 'MEETUPS', href: '/meetups' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'SHOP', href: '/shop' },
];

export default function MenuModal({ isOpen, handleClose }: menuModalProps) {
  const { handleCartClick } = useShoppingCart();
  const pathname = usePathname();

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
                {pathname === link.href ? (
                  <button onClick={handleClose}>
                    <Link
                      className='text-2xl sm:text-4xl font-bold text-amber-400'
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </button>
                ) : (
                  <button onClick={handleClose}>
                    <Link
                      className='text-2xl sm:text-4xl font-bold text-blue-900 transition duration-100 hover:text-sky-400'
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </button>
                )}
              </div>
            ))}
            <button onClick={() => handleCartButtonClick()}>
              <div className='flex text-2xl sm:text-4xl font-bold text-blue-900 uppercase transition duration-100 hover:text-sky-400'>
                Cart
              </div>
            </button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
