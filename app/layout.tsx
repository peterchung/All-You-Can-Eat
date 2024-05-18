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
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#a8ab0e' />
        <meta name='msapplication-TileColor' content='#ffc40d' />
        <meta name='theme-color' content='#ffffff' />
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
