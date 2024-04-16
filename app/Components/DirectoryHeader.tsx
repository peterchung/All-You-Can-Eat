'use client';

import { usePathname } from 'next/navigation';

export default function DirectoryHeader() {
  const pathname = usePathname();

  const getHeaderByPathname = (pathname: string) => {
    const pathMap: { [key: string]: string } = {
      '/theteam': 'MEET THE TEAM',
      '/contact': 'CONTACT',
      '/meetups': 'MEETUPS',
      '/shop': 'SHOP',
    };
    console.log('pathname type', pathname);
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
