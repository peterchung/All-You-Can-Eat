'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';

const links = [
  { name: 'THE TEAM', href: '/theteam' },
  { name: 'MEETUPS', href: '/meetups' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'SHOP', href: '/shop' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header>
      <div className='flex justify-between items-center p-4 sm:p-6 lg:max-w-full w-full fixed top-0 z-50'>
        <Link href='/'>
          <Image
            src='/images/AYCE-Logo.png'
            alt='AYCE logo'
            width='150'
            height='143'
          />
        </Link>
        <div className='flex gap-12'>
          <nav className='hidden gap-12 lg:flex 2xl:ml-16 font-bold'>
            {links.map((link, idx) => (
              <div key={idx}>
                {pathname === link.href ? (
                  <Link
                    className='text-lg font-bold text-primary'
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    className='text-lg font-bold text-black transition duration-100 hover:text-primary'
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <button className='flex flex-col items-center gap-y-1.5 h-12 w-12'>
            <ShoppingBag />
            <span className='hidden text-xs font-bold sm:block'>Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
