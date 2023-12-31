import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '📚 Tome Web',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles = {
    body: 'w-screen h-screen overflow-hidden px-24 py-16',
  };

  return (
    <html lang="en">
      <body className={inter.className + ' ' + styles.body}>
        <section>
          <Navbar />
        </section>
        {children}
      </body>
    </html>
  );
}
