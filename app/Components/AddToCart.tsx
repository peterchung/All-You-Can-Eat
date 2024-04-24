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
  price_id,
  className,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();
  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  return (
    <button
      className={`w-full sm:w-1/2 rounded-2xl bg-white border-2 border-blue-500 shadow-lg font-semibold text-primary py-2 mb-4 ${className}`}
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add to cart
    </button>
  );
}
