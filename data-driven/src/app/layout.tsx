import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Data Driven - Transformamos Datos en Decisiones Estratégicas",
    template: "%s | Data Driven"
  },
  description: "Transformamos información dispersa en insights accionables que revolucionan la forma en que las empresas toman decisiones estratégicas. ROI promedio del 300%.",
  keywords: ["data driven", "análisis de datos", "business intelligence", "dashboard", "métricas", "KPIs", "toma de decisiones"],
  authors: [{ name: "Data Driven" }],
  creator: "Data Driven",
  publisher: "Data Driven",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://datadriven.com",
    siteName: "Data Driven",
    title: "Data Driven - Transformamos Datos en Decisiones Estratégicas",
    description: "Transformamos información dispersa en insights accionables que revolucionan la forma en que las empresas toman decisiones estratégicas. ROI promedio del 300%.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Data Driven - Transformamos Datos en Decisiones Estratégicas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Driven - Transformamos Datos en Decisiones Estratégicas",
    description: "Transformamos información dispersa en insights accionables que revolucionan la forma en que las empresas toman decisiones estratégicas. ROI promedio del 300%.",
    images: ["/og-image.png"],
    creator: "@datadriven",
  },
  alternates: {
    canonical: "https://datadriven.com",
  },
  category: "technology",
  classification: "Business Intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es">
      <head>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
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
      <body className="font-sans antialiased text-[#0B0B0B]">
        {children}
      </body>
    </html>
  );
}
