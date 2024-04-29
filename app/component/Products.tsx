import Link from 'next/link';
import { client } from '../lib/sanity';
import { simplifiedProduct } from '../types';
import Image from 'next/image';
import AddToCart from './AddToCart';

const getData = async () => {
  const query = `*[_type == 'product'][0...4] {
    _id,
    price,
    name,
    description,
    price_id,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
  }`;

  const data = await client.fetch(query);

  return data;
};

export default async function Products() {
  const data: simplifiedProduct[] = await getData();

  return (
    <div className='pb-16 mb-16 mt-8'>
      <div className='mx-auto mb-10 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight'>
            Products
          </h2>
        </div>
        <div className='mt-6 grid grid-cols-2 gap-x-6 gap-y-28 lg:grid-cols-4 xl:gap-x-8 cursor-pointer'>
          {data.map((product) => (
            <div key={product._id} className='group relative'>
              <Link
                href={`/shop/${product.slug}`}
                className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover-opacity-75 lg:h-80'
              >
                <Image
                  src={product.imageUrl}
                  alt='Product Image'
                  className='text-black-500 w-full h-full object-cover object-center rounded-lg lg:h-full lg:w-full'
                  width={300}
                  height={300}
                  priority
                />
                <div className='my-4 flex justify-between font-semibold'>
                  <h3 className=''>{product.name}</h3>
                  <p className=''>${product.price}.00</p>
                </div>
              </Link>
              <div className=''>
                <AddToCart
                  currency='USD'
                  description={product.description}
                  image={product.imageUrl}
                  name={product.name}
                  price={product.price}
                  key={product._id}
                  price_id={product.price_id}
                  className='sm:w-full'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
