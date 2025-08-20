import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Torhann Ingeniería S.A.S. - Servicios de Ingeniería Civil, Ambiental y Agroindustrial en Colombia",
  description:
    "Empresa líder en servicios de ingeniería en Colombia. Especialistas en ingeniería civil, ambiental, agroindustrial, SST y consultoría técnica. Más de 7 años de experiencia con estándares internacionales de calidad.",
  keywords: [
    "ingeniería civil colombia",
    "ingeniería ambiental bogotá",
    "consultoría agroindustrial colombia",
    "servicios de ingeniería bogotá",
    "ingeniería civil bogotá",
    "consultoría técnica colombia",
    "ingeniería agroindustrial medellín",
    "SST colombia",
    "gestión ambiental bogotá",
    "obras civiles colombia",
    "diseño estructural bogotá",
    "topografía con drones colombia",
    "sostenibilidad ingeniería colombia",
    "normativas ISO colombia",
    "consultoría ingeniería colombia",
  ].join(", "),
  authors: [{ name: "Torhann Ingeniería S.A.S." }],
  creator: "Torhann Ingeniería S.A.S.",
  publisher: "Torhann Ingeniería S.A.S.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://torhanningenieriasas.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://torhanningenieriasas.com",
    siteName: "Torhann Ingeniería S.A.S.",
    title: "Torhann Ingeniería S.A.S. - Servicios de Ingeniería en Colombia",
    description:
      "Empresa líder en servicios de ingeniería civil, ambiental y agroindustrial en Colombia. Consultoría técnica especializada con estándares internacionales.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Torhann Ingeniería S.A.S. - Servicios de Ingeniería en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Torhann Ingeniería S.A.S. - Servicios de Ingeniería en Colombia",
    description:
      "Empresa líder en servicios de ingeniería civil, ambiental y agroindustrial en Colombia. Consultoría técnica especializada.",
    images: ["/og-image.jpg"],
    creator: "@TorhannIngenieria",
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
  verification: {
    google: "tu-codigo-verificacion-google",
    yandex: "tu-codigo-verificacion-yandex",
    yahoo: "tu-codigo-verificacion-yahoo",
  },
  category: "business",
  classification: "Engineering Services",
  other: {
    "geo.region": "CO",
    "geo.placename": "Colombia",
    "geo.position": "4.7110;-74.0721",
    ICBM: "4.7110, -74.0721",
    "DC.title":
      "Torhann Ingeniería S.A.S. - Servicios de Ingeniería en Colombia",
    "DC.description":
      "Empresa líder en servicios de ingeniería civil, ambiental y agroindustrial en Colombia",
    "DC.subject":
      "Ingeniería Civil, Ingeniería Ambiental, Ingeniería Agroindustrial, Consultoría Técnica, Colombia",
    "DC.language": "es",
    "DC.coverage": "Colombia",
    "DC.creator": "Torhann Ingeniería S.A.S.",
    "DC.publisher": "Torhann Ingeniería S.A.S.",
    "DC.rights":
      "© 2024 Torhann Ingeniería S.A.S. Todos los derechos reservados",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.className}>
      <head>
        <link rel="canonical" href="https://torhanningenieriasas.com" />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://torhanningenieriasas.com"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://torhanningenieriasas.com"
        />
        <meta name="geo.region" content="CO" />
        <meta name="geo.placename" content="Colombia" />
        <meta name="geo.position" content="4.7110;-74.0721" />
        <meta name="ICBM" content="4.7110, -74.0721" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Spanish" />
        <meta name="coverage" content="Colombia" />
        <meta name="target" content="all" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Torhann Ingeniería" />
        <meta name="application-name" content="Torhann Ingeniería" />
        <meta name="msapplication-TileColor" content="#0d1b2a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#0d1b2a" />
        <meta name="msapplication-navbutton-color" content="#0d1b2a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0d1b2a" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0d1b2a" />
        <meta name="msapplication-TileColor" content="#0d1b2a" />
        <meta name="theme-color" content="#0d1b2a" />
      </head>
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EngineeringCompany",
              name: "Torhann Ingeniería S.A.S.",
              alternateName: "Torhann Ingeniería",
              description:
                "Empresa colombiana especializada en servicios de ingeniería civil, ambiental y agroindustrial con estándares internacionales de calidad.",
              url: "https://torhanningenieriasas.com",
              logo: "https://torhanningenieriasas.com/logotC.png",
              image: "https://torhanningenieriasas.com/og-image.jpg",
              sameAs: [
                "https://www.instagram.com/Torhann.ingenieriasas",
                "http://www.torhanningenieriasas.com",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+57-302-840-4105",
                contactType: "customer service",
                areaServed: "CO",
                availableLanguage: "Spanish",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "CO",
                addressRegion: "Colombia",
              },
              areaServed: {
                "@type": "Country",
                name: "Colombia",
              },
              serviceArea: {
                "@type": "Country",
                name: "Colombia",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Ingeniería",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ingeniería Civil",
                      description:
                        "Diseño, ejecución y supervisión de obras civiles",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ingeniería Ambiental",
                      description:
                        "Planes de manejo ambiental y sostenibilidad",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ingeniería Agroindustrial",
                      description:
                        "Diseño de plantas agroindustriales y control de calidad",
                    },
                  },
                ],
              },
              foundingDate: "2017",
              numberOfEmployees: "10-50",
              slogan: "Soluciones Innovadoras · Resultados Reales",
              knowsAbout: [
                "Ingeniería Civil",
                "Ingeniería Ambiental",
                "Ingeniería Agroindustrial",
                "Gestión de Proyectos",
                "Consultoría Técnica",
                "Sostenibilidad",
                "Normativas ISO",
                "Topografía con Drones",
              ],
              award: [
                "Certificaciones ISO",
                "Estándares Internacionales de Calidad",
              ],
              brand: {
                "@type": "Brand",
                name: "Torhann Ingeniería S.A.S.",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "4",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
