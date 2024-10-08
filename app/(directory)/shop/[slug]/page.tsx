import AddToCart from '@/app/component/AddToCart';
import CheckoutNow from '@/app/component/CheckoutNow';
import ImageGallery from '@/app/component/ImageGallery';
import { client } from '@/app/lib/sanity';
import { fullProduct } from '@/app/types';

const getData = async (slug: string) => {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
    _id,
      description,
      images,
      price,
      name,
      'slug': slug.current,
      price_id
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
    <div className='mt-20 mb-8'>
      <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='grid gap-8 md:grid-cols-2 py-16'>
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
                key={data._id}
                price_id={data.price_id}
                className=''
              />
              <CheckoutNow
                currency='USD'
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                price_id={data.price_id}
                className=''
              />
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
