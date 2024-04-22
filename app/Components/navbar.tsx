'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ShoppingBag } from 'lucide-react';
import { useShoppingCart } from 'use-shopping-cart';
import { useEffect, useState } from 'react';

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

//TODO: Hamburger menu for responsive design. Hamburger menu should start in line 110 since showNav affects <nav>
// hamburger menu should be a modal that opens up to half the page at a certain size and takes up the whole screen at the smallest viewscreen size
//TODO: outline navbar text with white

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  const [showNav, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showMenu, setMenu] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
      setShow(true); // show the navbar when scrolling up
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setShow(false); // hide the navbar when scrolling down
    }
    setLastScrollY(currentScrollY); // update the last scroll position
  };

  //TODO: debounce handleResize
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  const debouncedHandleScroll = debounce(handleScroll, 100);

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.removeEventListener('resize', handleResize);
    };

    // deboucnedHandleScroll included in dependency array because it holds the debounced version of handleScroll.
    // Each time navbar component re-renders and reached the point where debouncedHandleScroll is defined, it creates a new instance of the debounced function, because debounchedHandleScroll depends on handleScroll function
    // handleScroll updates lastScrollY and handleScroll is part of the debounce closure. When lastScrollY changes, a new handleScroll function is created to capture the updated state.
    // Since debounceHandleScroll wraps handleScroll, it needs to be updated as well to incorporate the latest handleScroll function. Otherwise the old handleScroll with the last state lastScrollY could be used leading to wrong behavior
  }, [lastScrollY, debouncedHandleScroll, showMenu]);

  return (
    <header
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
            {/* <button
              className='flex flex-col items-center gap-y-1.5 h-12 w-12 hover:text-sky-400'
              onClick={() => handleCartClick()}
            >
              <ShoppingBag />
              <span className='hidden text-xs font-bold sm:block'>Cart</span>
            </button> */}
            <button
              className='md:flex h-12 w-12 hover:text-sky-400'
              onClick={() => handleCartClick()}
            >
              <ShoppingBag />
            </button>
          </nav>
          {/* <button
            className='flex flex-col items-center gap-y-1.5 h-12 w-12 hover:text-sky-400'
            onClick={() => handleCartClick()}
          >
            <ShoppingBag />
            <span className='hidden text-xs font-bold sm:block'>Cart</span>
          </button> */}
        </div>
        <div className={`${showMenu ? '' : 'hidden'}`}>
          <button className='flex h-12 w-12' onClick={openMenuModal}>
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
