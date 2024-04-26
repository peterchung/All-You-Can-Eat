import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './components/Providers';
import ShoppingCartModal from './components/ShoppingCartModal';
import FooterParent from './components/FooterParent';
import NavbarParent from './components/NavbarParent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <NavbarParent />
          <ShoppingCartModal />
          {children}
          <FooterParent />
        </Providers>
      </body>
    </html>
  );
}
