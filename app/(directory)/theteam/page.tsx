import SlidingImage from '@/app/components/SlideImage';
import { client, urlFor } from '@/app/lib/sanity';

const getData = async () => {
  const query = `*[_type == 'teamImages'][0]{
    "imageUrl1": image1.asset->url,
    "imageUrl2": image2.asset->url,
    "imageUrl3": image3.asset->url,
  }`;

  const data = await client.fetch(query);

  return data;
};

const TheTeam = async () => {
  const data = await getData();
  const imageUrl = Object.values(data);

  console.log('array of images', imageUrl);
  return (
    <div className='flex py-20'>
      <div className='mx-auto'>
        <div>
          <p>Click picture to read profile!</p>
        </div>
        <div className='flex space-x-4'>
          {imageUrl.map((image, idx) => (
            <SlidingImage key={idx} images={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const dynamic = 'force-dynamic';

export default TheTeam;
