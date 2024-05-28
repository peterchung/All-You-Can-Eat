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

/**
 * Array of navigation paths.
 * Each path object contains a name and a corresponding href.
 */
const paths = [
  { name: 'THE TEAM', href: '/theteam' },
  { name: 'MEETUPS', href: '/meetups' },
  { name: 'CONTACT', href: '/contact' },
  { name: 'SHOP', href: '/shop' },
];

// TODO: Is the window resize causing the image to zoom in and out on scroll?

/**
 * Debounce function to delay the execution of a function.
 * @param func The function to debounce.
 * @param delay The delay in milliseconds.
 * @returns A debounced version of the function.
 */
const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: any[]) => void) => {
  let timeoutId: NodeJS.Timeout | undefined;
  return function debouncedFunc(...args) {
    const executeFunc = () => {
      clearTimeout(timeoutId);
      func(...args);
    };

    clearTimeout(timeoutId);
    timeoutId = setTimeout(executeFunc, delay);
  };
};

/**
 * Navbar component.
 * Renders a navigation bar with links, logo, and shopping cart functionality.
 * @param {imageAppProps} images - The images object containing the logo image.
 */
export default function Navbar({ images }: imageAppProps) {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  /**
   * Handles the scroll event.
   * Shows/hides the navbar based on the scroll direction and position.
   * Updates the last scroll position
   */
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
      setShowNav(true);
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShowNav(false);
    }
    setLastScrollY(currentScrollY);
  };

  const debouncedHandleScroll = debounce(handleScroll, 100);

  /**
   * Handles the window resize event.
   * Shows/hides the hamburger menu based on the window width.
   */
  const handleResize = () => {
    setShowMenu(window.innerWidth < 768);
  };

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

  /**
   * Opens the menu modal.
   */
  const openMenuModal = () => {
    setMenuModalOpen(true);
  };

  /**
   * Closes the menu modal.
   */
  const closeMenuModal = () => {
    setMenuModalOpen(false);
  };

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
            {paths.map((path, idx) => (
              <div key={idx}>
                {pathname === path.href ? (
                  <Link
                    className='text-lg font-bold text-amber-400'
                    href={path.href}
                  >
                    {path.name}
                  </Link>
                ) : (
                  <Link
                    className='text-lg font-bold text-blue-900 transition duration-100 hover:text-sky-400'
                    href={path.href}
                  >
                    {path.name}
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
