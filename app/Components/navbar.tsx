'use client';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header>
      <div className='fixed top-0 w-full z-50'>
        <nav className='flex justify-between items-center m-5'>
          <div className=''>
            <Image
              src='/images/AYCE-Logo.png'
              alt='AYCE logo'
              width='150'
              height='143'
            />
          </div>
          <ul className='flex space-x-4 font-bold'>
            <li>
              <a>THE HOSTS</a>
            </li>
            <li>
              <a>LISTEN</a>
            </li>
            <li>
              <a>SHOP</a>
            </li>
            <li>
              <a>MEETUPS</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
