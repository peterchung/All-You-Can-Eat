import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './component/Providers';
import ShoppingCartModal from './component/ShoppingCartModal';
import FooterParent from './component/FooterParent';
import NavbarParent from './component/NavbarParent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'All You Can Eat Podcast',
  description:
    'Welcome to All You Can Eat. A podcast about anything, really. Sort of.',
};

export function generateImageMetadata() {}

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
