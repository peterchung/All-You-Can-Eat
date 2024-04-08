import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'o5a0tfta',
  dataset: 'production',
  apiVersion: '2024-04-02',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};
