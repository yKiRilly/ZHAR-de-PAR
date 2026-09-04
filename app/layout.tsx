
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { LanguageProvider } from '@/components/language-provider'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

const siteUrl = 'https://www.zhardepar.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  verification: {
    google: 'L4RE2vGSQwVzUxglBVvdd0hZCZ6p0RAeLvyXBLNRV10',
  },

  title: {
    default: 'Русская баня на Коста-Брава рядом с Барселоной | ZHAR de PAR',
    template: '%s | ZHAR de PAR',
  },

  description:
    'Русская баня ZHAR de PAR в Бланесе на Коста-Брава. Частная баня рядом с Барселоной, Ллорет-де-Мар и Жироной. Парение веником, банные ритуалы, купель, джакузи и отдых на природе.',

  authors: [
    {
      name: 'ZHAR de PAR',
      url: siteUrl,
    },
  ],

  creator: 'ZHAR de PAR',
  publisher: 'ZHAR de PAR',

  alternates: {
    canonical: siteUrl,
    languages: {
      'ru-RU': siteUrl,
      'uk-UA': siteUrl,
      'es-ES': siteUrl,
      'en-US': siteUrl,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня на Коста-Брава рядом с Барселоной | ZHAR de PAR',
    description:
      'Частная русская баня в Бланесе на Коста-Брава. Рядом с Барселоной, Ллорет-де-Мар и Жироной. Парение веником, купель, джакузи и банные ритуалы.',

    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня на Коста-Брава рядом с Барселоной',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Русская баня на Коста-Брава | ZHAR de PAR',
    description:
      'Частная русская баня в Бланесе рядом с Барселоной. Парение веником, банные ритуалы, купель, джакузи и отдых на природе.',
    images: ['/photos/view/viewgeneral.PNG'],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/photos/logos/logoof.png',
    apple: '/photos/logos/logoof.png',
  },
}

/* =========================================================
   STRUCTURED DATA — JSON-LD
========================================================= */

const jsonLd = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'LocalBusiness',

      '@id': `${siteUrl}/#business`,

      name: 'ZHAR de PAR',

      alternateName: 'ЖАР де ПАР',

      description:
        'Частная русская баня в Бланесе на Коста-Брава рядом с Барселоной, Ллорет-де-Мар и Жироной.',

      url: siteUrl,

      logo: `${siteUrl}/photos/logos/logoof.png`,

      image: `${siteUrl}/photos/view/viewgeneral.PNG`,

      priceRange: '€€',

      currenciesAccepted: 'EUR',

      telephone: '+34601801800',

      email: 'zhardepar1@gmail.com',

      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Blanes',
        addressRegion: 'Girona',
        postalCode: '17300',
        addressCountry: 'ES',
      },

      areaServed: [
        {
          '@type': 'City',
          name: 'Blanes',
        },

        {
          '@type': 'City',
          name: 'Lloret de Mar',
        },

        {
          '@type': 'City',
          name: 'Tossa de Mar',
        },

        {
          '@type': 'City',
          name: 'Girona',
        },

        {
          '@type': 'AdministrativeArea',
          name: 'Costa Brava',
        },

        {
          '@type': 'AdministrativeArea',
          name: 'Catalonia',
        },

        {
          '@type': 'City',
          name: 'Barcelona',
        },

        {
          '@type': 'Country',
          name: 'Spain',
        },
      ],

      sameAs: [
        'https://www.instagram.com/banka_blanes/',
      ],

      knowsAbout: [
        'Русская баня',
        'Русская баня в Испании',
        'Русская баня на Коста-Брава',
        'Русская баня рядом с Барселоной',
        'Баня в Бланесе',
        'Баня в Ллорет-де-Мар',
        'Баня в Жироне',
        'Частная баня',
        'Парение веником',
        'Русский банный ритуал',
        'Банные веники',
        'Березовый веник',
        'Дубовый веник',
        'Купель',
        'Джакузи',
        'Банный отдых',
        'Отдых на природе',
      ],

      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+34601801800',
        contactType: 'customer service',
        availableLanguage: [
          'Russian',
          'Ukrainian',
          'Spanish',
          'English',
        ],
      },

      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Услуги ZHAR de PAR',

        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Аренда частной русской бани',
            },
          },

          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Парение веником',
            },
          },

          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Банный ритуал',
            },
          },

          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Купель',
            },
          },

          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Джакузи',
            },
          },

          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Банный веник',
            },
          },
        ],
      },
    },

    {
      '@type': 'WebSite',

      '@id': `${siteUrl}/#website`,

      url: siteUrl,

      name: 'ZHAR de PAR',

      alternateName: 'ЖАР де ПАР',

      description:
        'Русская баня на Коста-Брава рядом с Барселоной.',

      inLanguage: [
        'ru-RU',
        'uk-UA',
        'es-ES',
        'en-US',
      ],

      publisher: {
        '@id': `${siteUrl}/#business`,
      },
    },

    {
      '@type': 'WebPage',

      '@id': `${siteUrl}/#webpage`,

      url: siteUrl,

      name:
        'Русская баня на Коста-Брава рядом с Барселоной | ZHAR de PAR',

      description:
        'Частная русская баня ZHAR de PAR в Бланесе на Коста-Брава рядом с Барселоной.',

      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },

      about: {
        '@id': `${siteUrl}/#business`,
      },

      inLanguage: 'ru-RU',
    },

    {
      '@type': 'VideoObject',

      '@id': `${siteUrl}/#video`,

      name: 'ZHAR de PAR — русская баня на Коста-Брава',

      description:
        'Видео о ZHAR de PAR — частной русской бане в Бланесе на Коста-Брава рядом с Барселоной.',

      thumbnailUrl: `${siteUrl}/photos/view/viewgeneral.PNG`,

      uploadDate: '2026-08-26',

      contentUrl: `${siteUrl}/video/videobanya.mp4`,

      embedUrl: siteUrl,

      inLanguage: 'ru-RU',

      isFamilyFriendly: true,

      publisher: {
        '@type': 'Organization',

        name: 'ZHAR de PAR',

        url: siteUrl,

        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/photos/logos/logoof.png`,
        },
      },

      about: {
        '@id': `${siteUrl}/#business`,
      },
    },
  ],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${jost.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  )
}
