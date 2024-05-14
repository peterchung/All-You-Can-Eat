'use client';

import React from 'react';
import { Toaster } from 'sonner';
import { CartProvider } from 'use-shopping-cart';

//TODO: Update success and cancel url to aycepod.com

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider
      mode='payment'
      cartMode='client-only'
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl='https://www.aycepod.com/order/success'
      cancelUrl='https://www.aycepod.com/order/error'
      currency='USD'
      billingAddressCollection={true}
      shouldPersist={true}
      language='en-US'
      allowedCountries={['US']}
    >
      {children}
      <Toaster position='top-center' richColors expand closeButton />
    </CartProvider>
  );
}
