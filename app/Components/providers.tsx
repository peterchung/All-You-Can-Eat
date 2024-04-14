'use client';

import React from 'react';
import { Toaster } from 'sonner';
import { CartProvider } from 'use-shopping-cart';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider
      mode='payment'
      cartMode='client-only'
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl='http://localhost:3000/order/success'
      cancelUrl='http://localhost:3000/error'
      currency='USD'
      billingAddressCollection={true}
      shouldPersist={true}
      language='en-US'
    >
      {children}
      <Toaster position='top-center' richColors expand closeButton />
    </CartProvider>
  );
}
