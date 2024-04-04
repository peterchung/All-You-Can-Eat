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

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullProduct = await getData(params.slug);
  console.log('data returned', data);
  return <div>hello</div>;
}
