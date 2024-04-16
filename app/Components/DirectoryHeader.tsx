'use client';

import { usePathname } from 'next/navigation';

export default function DirectoryHeader() {
  const pathname = usePathname();

  const getHeaderByPathname = (pathname) => {
    const pathMap = {
      '/theteam': 'MEET THE TEAM',
      '/contact': 'CONTACT',
      '/meetups': 'MEETUPS',
      '/shop': 'SHOP',
    };

    return pathMap[pathname] || 'Error';
  };

  const header = getHeaderByPathname(pathname);
  return (
    <div className='pt-28 bg-custom-header-background'>
      <hr className='border border-white w-11/12 mx-auto' />

      <div className='w-11/12 mx-auto'>
        <h1 className='py-6 text-6xl font-bold'>{header}</h1>
      </div>
    </div>
  );
}
