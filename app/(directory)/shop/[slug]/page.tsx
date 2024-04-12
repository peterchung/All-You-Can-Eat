import AddToCart from '@/app/components/AddToCart';
import ImageGallery from '@/app/components/ImageGallery';
import { client } from '@/app/lib/sanity';
import { fullProduct } from '@/app/types';

const getData = async (slug: string) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
    _id,
      description,
      images,
      price,
      name,
      'slug': slug.current
      
  }`;

  const data = await client.fetch(query);

  return data;
};

// Opt out of caching for all data requests in route segment
// see https://nextjs.org/docs/app/building-your-application/caching#opting-out-1
export const dynamic = 'force-dynamic';

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className=''>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='grid gap-8 md:grid-cols-2 sm:py-16'>
          <ImageGallery images={data.images} />

          <div className=''>
            <div className='mb-2 md:mb-3'>
              <h2 className='text-2xl font-bold lg:text-5xl'>{data.name}</h2>
            </div>
            <div className='my-2 md:my-3'>
              <span className='text-2xl font-bold'>${data.price}.00 USD</span>
            </div>
            <div className='flex flex-col'>
              <AddToCart
                currency='USD'
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                id={data._id}
              />
              <button className='w-1/2 rounded-2xl bg-blue-500 border-2 border-blue-500 shadow-lg py-2 mb-4'>
                Checkout now
              </button>
            </div>
            <div>
              <span className='tracking-wide'>{data.description}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
