import Image from 'next/image';

export default function Navbar() {
  return (
    <header>
      {/* navbar */}

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

      {/* <div className='flex-grow'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: 'url("/images/landing-image-temp.png")',
          }}
        ></div>
      </div> */}

      {/* podcast about one liner */}
      {/* <div className='flex justify-center items-end mb-20 z-10'>
        <div className='mx-auto max-w-6xl'>
          <div className='font-bold text-white text-5xl my-10'>
            <h1>TWO ASIANS EXPLORING ASIAN AMERICAN-ISH EXPERIENCES</h1>
          </div>
          <div>
            <button className='bg-gray-200 hover:opacity-50 font-bold text-black py-4 px-6 rounded-full'>
              LISTEN NOW
            </button>
          </div>
        </div>
      </div> */}
    </header>
  );
}
