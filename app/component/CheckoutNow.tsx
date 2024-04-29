'use client';

import { useShoppingCart } from 'use-shopping-cart';
import { ProductCart } from '../types';
import { urlFor } from '../lib/sanity';

export default function CheckoutNow({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  const buyNow = (priceID: string) => {
    checkoutSingleItem(priceID);
  };

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
      className='w-full sm:w-1/2 rounded-2xl bg-blue-500 border-2 border-blue-500 shadow-lg text-white font-semibold py-2 mb-4'
      onClick={() => {
        buyNow(product.price_id);
      }}
    >
      Checkout now
    </button>
  );
}
