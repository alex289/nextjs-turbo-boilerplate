import '../styles/globals.css';

import { Inter } from 'next/font/google';

import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export function generateMetadata(): Metadata {
  return {
    title: {
      default: 'Next.Js Turbo Boilerplate',
      template: '%s | Next.Js Turbo Boilerplate',
    },
    icons: {
      shortcut: '/favicon.ico',
    },
  };
}

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={inter.className}>
      <body>
        <main className="container mx-auto flex min-h-screen flex-col items-center py-16">
          {children}
        </main>
      </body>
    </html>
  );
}
