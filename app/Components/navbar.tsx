'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';
import { useEffect, useState } from 'react';

const links = [
  { name: 'THE TEAM', href: '/theteam' },
  { name: 'MEETUPS', href: '/meetups' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'SHOP', href: '/shop' },
];

//TODO: Hamburger menu for responsive design

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const [showNav, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setShow(true); // show the navbar when scrolling up
      } else if (currentScrollY > lastScrollY) {
        setShow(false); // hide the navbar when scrolling down
      }
      setLastScrollY(currentScrollY); // update the last scroll position
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='flex justify-between items-center px-4 py-4 sm:px-6 lg:max-w-full w-full'>
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
                    className='text-lg font-bold text-amber-400'
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    className='text-lg font-bold text-blue-900 transition duration-100 hover:text-primary'
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <button
            className='flex flex-col items-center gap-y-1.5 h-12 w-12'
            onClick={() => handleCartClick()}
          >
            <ShoppingBag />
            <span className='hidden text-xs font-bold sm:block'>Cart</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
