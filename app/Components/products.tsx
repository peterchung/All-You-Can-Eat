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

export default async function Newest() {
  const data: simplifiedProduct[] = await getData();
  console.log('sanity data', data);
  return (
    <div>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold tracking-tight'>Products</h2>
        </div>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {data.map((product) => (
            <div key={product._id} className='group relative'>
              <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover-opacity-75 lg:h-80'>
                <Image
                  src={product.imageUrl}
                  alt='Product Image'
                  className='w-full h-full object-cover object-center lg:h-full lg:w-full'
                  width={300}
                  height={300}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
