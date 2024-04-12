'use client';

import { useShoppingCart } from 'use-shopping-cart';
import { ProductCart } from '../types';
import { urlFor } from '../lib/sanity';

export default function AddToCart({
  name,
  description,
  price,
  currency,
  image,
  id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: id,
  };

  return (
    <button
      className='w-1/2 rounded-2xl bg-white border-2 border-blue-500 shadow-lg py-2 mb-4'
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add to cart
    </button>
  );
}
