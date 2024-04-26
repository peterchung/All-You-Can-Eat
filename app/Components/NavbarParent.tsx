import Navbar from './Navbar';
import { client } from '../lib/sanity';

const getData = async () => {
  const query = "*[_type == 'navbarImages'][0]";

  const data = await client.fetch(query);

  return data;
};
export default async function NavbarParent() {
  const data = await getData();

  return (
    <div>
      <Navbar images={data} />
    </div>
  );
}
