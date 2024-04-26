import Footer from './Footer';
import { client } from '../lib/sanity';

const getData = async () => {
  const query = "*[_type == 'footerImages'][0]";

  const data = await client.fetch(query);

  return data;
};
export default async function FooterParent() {
  const data = await getData();

  return (
    <div>
      <Footer images={data} />
    </div>
  );
}
