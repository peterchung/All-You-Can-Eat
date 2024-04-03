import Link from 'next/link';
import { client } from '../lib/sanity';
import { simplifiedProduct } from '../types';
import Image from 'next/image';

const getData = async () => {
  const query = `*[_type == 'product'][0...4] {
    _id,
    price,
    name,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
};

export default async function Products() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div>
      <div className='mx-auto mb-10 max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold tracking-tight'>Products</h2>
        </div>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-28 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 cursor-pointer'>
          {data.map((product) => (
            <div key={product._id} className='group relative'>
              <Link
                href={`/shop/${product.slug}`}
                className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover-opacity-75 lg:h-80'
              >
                <Image
                  src={product.imageUrl}
                  alt='Product Image'
                  className='text-black-500 w-full h-full object-cover object-center lg:h-full lg:w-full'
                  width={300}
                  height={300}
                />
                <div className='mt-2 flex justify-between font-semibold'>
                  <h3 className=''>{product.name}</h3>
                  <p className=''>${product.price}.00</p>
                </div>
              </Link>
              <button className='w-full rounded-full bg-white border-2 border-blue-500 shadow-lg py-2 mt-4'>
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
