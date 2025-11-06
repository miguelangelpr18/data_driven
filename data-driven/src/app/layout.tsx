import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '600']
});

export const metadata: Metadata = {
  title: 'Data Driven Consulting',
  description: 'Consultoría de datos y diseño de experiencias analíticas.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.png', rel: 'shortcut icon' }
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' }
    ]
  },
  themeColor: '#ffffff'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <meta name="theme-color" content="#ffffff" />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_title: document.title,
                  page_location: window.location.href,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`${inter.variable} font-sans text-neutral-900 antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
