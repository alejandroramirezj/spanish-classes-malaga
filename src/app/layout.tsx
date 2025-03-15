import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import SecurityHeaders from './components/SecurityHeaders';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Spanish Classes Málaga | Clases de Español con Virginia",
    template: "%s | Spanish Classes Málaga",
  },
  description: "Aprende español en Málaga con Virginia, profesora nativa cualificada con más de 15 años de experiencia. Clases personalizadas, individuales y en grupo.",
  keywords: [
    "clases de español", "aprender español", "Málaga", "profesor nativo", 
    "español para extranjeros", "ELE", "Spanish lessons", "learn Spanish",
    "DELE preparation", "one-to-one Spanish lessons", "Spanish immersion"
  ],
  authors: [{ name: "Virginia", url: "https://spanishclassesmalaga.com" }],
  creator: "Virginia",
  publisher: "Spanish Classes Málaga",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://spanishclassesmalaga.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en",
      "es-ES": "/",
    },
  },
  openGraph: {
    title: "Spanish Classes Málaga | Clases de Español con Virginia",
    description: "Aprende español en Málaga con Virginia, profesora nativa cualificada con más de 15 años de experiencia. Clases personalizadas, individuales y en grupo.",
    url: "https://spanishclassesmalaga.com",
    siteName: "Spanish Classes Málaga",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Spanish Classes Málaga - Aprende español en Málaga",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spanish Classes Málaga | Clases de Español con Virginia",
    description: "Aprende español en Málaga con Virginia, profesora nativa cualificada con más de 15 años de experiencia.",
    images: ["/twitter-image.jpg"],
    creator: "@SpanishMalaga",
  },
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
  category: "education",
  verification: {
    google: "verificación-google",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning>
        <SecurityHeaders />
        {children}
        <Analytics />
        
        {/* Structured data for SEO (JSON-LD) */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Spanish Classes Málaga",
              image: "https://spanishclassesmalaga.com/og-image.jpg",
              "@id": "https://spanishclassesmalaga.com",
              url: "https://spanishclassesmalaga.com",
              telephone: "+34 XXX XXX XXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Málaga",
                addressLocality: "Málaga",
                addressRegion: "Andalucía",
                postalCode: "29001",
                addressCountry: "ES"
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.7213,
                longitude: -4.4213
              },
              priceRange: "€€",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                  ],
                  opens: "09:00",
                  closes: "20:00"
                }
              ],
              sameAs: [
                "https://www.facebook.com/spanishclassesmalaga",
                "https://www.instagram.com/spanishclassesmalaga"
              ],
              description: "Aprende español en Málaga con Virginia, profesora nativa cualificada con más de 15 años de experiencia. Clases personalizadas, individuales y en grupo.",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Clases de Español",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Clases Individuales",
                      description: "Clases personalizadas adaptadas a tus necesidades específicas."
                    },
                    price: "25.00",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Clases en Pareja",
                      description: "Aprende con tu pareja o un amigo."
                    },
                    price: "40.00",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock"
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Clases Online",
                      description: "Aprende español desde cualquier parte del mundo."
                    },
                    price: "20.00",
                    priceCurrency: "EUR",
                    availability: "https://schema.org/InStock"
                  }
                ]
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5"
                  },
                  author: {
                    "@type": "Person",
                    name: "María Thompson"
                  },
                  reviewBody: "Virginia es una profesora excepcional. Sus métodos de enseñanza son divertidos y efectivos."
                }
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "32"
              }
            })
          }}
        />
        
        {/* Google Analytics */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}
