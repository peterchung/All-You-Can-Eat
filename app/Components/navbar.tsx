'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingBag } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';
import { useEffect, useState } from 'react';
import MenuModal from './MenuModal';
import { imageAppProps } from '../types';
import { urlFor } from '../lib/sanity';

const links = [
  { name: 'THE TEAM', href: '/theteam' },
  { name: 'MEETUPS', href: '/meetups' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'SHOP', href: '/shop' },
];

const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: any[]) => void) => {
  let timeout: NodeJS.Timeout | undefined;
  return function executedFunc(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default function Navbar({ images }: imageAppProps) {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  const openMenuModal = () => {
    setMenuModalOpen(true);
  };

  const closeMenuModal = () => {
    setMenuModalOpen(false);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
      setShowNav(true); // show the navbar when scrolling up
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNav(false); // hide the navbar when scrolling down
    }
    setLastScrollY(currentScrollY); // update the last scroll position
  };

  const handleResize = () => {
    // if (window.innerWidth < 768) {
    //   setShowMenu(true);
    // } else {
    //   setShowMenu(false);
    // }
    setShowMenu(window.innerWidth < 768);
  };

  const debouncedHandleScroll = debounce(handleScroll, 100);
  const debouncedHandleResize = debounce(handleResize, 100);

  useEffect(() => {
    handleResize();
    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.removeEventListener('resize', debouncedHandleResize);
    };

    // deboucnedHandleScroll included in dependency array because it holds the debounced version of handleScroll.
    // Each time navbar component re-renders and reached the point where debouncedHandleScroll is defined, it creates a new instance of the debounced function, because debounchedHandleScroll depends on handleScroll function
    // handleScroll updates lastScrollY and handleScroll is part of the debounce closure. When lastScrollY changes, a new handleScroll function is created to capture the updated state.
    // Since debounceHandleScroll wraps handleScroll, it needs to be updated as well to incorporate the latest handleScroll function. Otherwise the old handleScroll with the last state lastScrollY could be used leading to wrong behavior
  }, [lastScrollY, debouncedHandleScroll, showMenu, debouncedHandleResize]);

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out z-50 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='flex justify-between items-center px-4 py-4 sm:px-6 lg:max-w-full w-full'>
        <Link href='/'>
          <Image
            src={urlFor(images.ayceLogo).url()}
            alt='AYCE logo'
            width='150'
            height='143'
          />
        </Link>
        <div className='flex'>
          <nav className='hidden gap-12 md:flex 2xl:ml-16 font-bold'>
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
                    className='text-lg font-bold text-blue-900 transition duration-100 hover:text-sky-400'
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <button
              className='md:flex h-12 w-12 hover:text-sky-400'
              onClick={() => handleCartClick()}
            >
              <ShoppingBag />
            </button>
          </nav>
        </div>
        <div className={`${showMenu ? '' : 'hidden'}`}>
          <button className='flex h-12 w-12' onClick={openMenuModal}>
            <Menu />
          </button>
          <MenuModal isOpen={menuModalOpen} handleClose={closeMenuModal} />
        </div>
      </div>
    </header>
  );
}
