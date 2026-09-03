
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
    default: 'ZHAR de PAR — Русская баня в Испании',
    template: '%s | ZHAR de PAR',
  },

  description:
    'Русская баня в Испании на природе. Частная баня ZHAR de PAR в Бланесе, рядом с Ллорет-де-Мар, Жироной и Коста-Бравой. Парение веником, банные ритуалы, купель, джакузи и отдых на природе.',

  keywords: [
    // =========================
    // РУССКИЕ ЗАПРОСЫ
    // =========================

    'русская баня в Испании',
    'баня Испании',
    'баня Каталонии',
    'русская баня Каталонии',

    'баня в Бланесе',
    'русская баня в Бланесе',
    'баня рядом с Бланесом',
    'баня в Ллорет-де-Мар',
    'русская баня в Ллорет-де-Мар',
    'баня рядом с Ллорет-де-Мар',

    'баня Жироне',
    'русская баня в Жироне',
    'баня рядом с Жироной',

    'баня рядом с Барселоной',
    'русская баня рядом с Барселоной',
    'баня недалеко от Барселоны',

    'баня Коста-Брава',
    'русская баня Коста-Брава',

    'частная баня Испания',
    'приватная баня Испания',
    'аренда бани Испания',
    'снять баню Испания',
    'баня почасово Испания',
    'баня на несколько часов',

    'баня с веником',
    'русская баня с веником',
    'парение веником',
    'русское парение',
    'банный ритуал',
    'русский банный ритуал',

    'банные веники Испания',
    'березовый веник',
    'дубовый веник',

    'баня с джакузи',
    'баня с купелью',
    'баня и джакузи',
    'баня и купель',

    'банный отдых Испания',
    'банный отдых Каталония',
    'банный отдых Коста-Брава',
    'отдых на природе Испания',

    'баня для компании',
    'баня для друзей',
    'баня для семьи',

    'где попариться в Испании',
    'где найти русскую баню в Испании',

    // =========================
    // УКРАИНСКИЕ ЗАПРОСЫ
    // =========================

    'баня в Іспанії',
    'українська баня в Іспанії',
    'російська баня в Іспанії',

    'баня в Каталонії',
    'російська баня в Каталонії',

    'баня в Бланесі',
    'російська баня в Бланесі',
    'баня біля Бланеса',

    'баня в Льорет-де-Мар',
    'російська баня в Льорет-де-Мар',
    'баня біля Льорет-де-Мар',

    'баня в Жироні',
    'російська баня в Жироні',
    'баня біля Жирони',

    'баня біля Барселони',
    'російська баня біля Барселони',

    'баня Коста-Брава',
    'російська баня Коста-Брава',

    'приватна баня в Іспанії',
    'оренда бані в Іспанії',
    'зняти баню в Іспанії',
    'баня на кілька годин',

    'баня з віником',
    'російська баня з віником',
    'паріння віником',
    'банний ритуал',

    'банні віники в Іспанії',
    'березовий віник',
    'дубовий віник',

    'баня з джакузі',
    'баня з купеллю',
    'баня та джакузі',
    'баня та купіль',

    'відпочинок у бані',
    'банний відпочинок в Іспанії',
    'відпочинок на природі в Іспанії',

    'баня для компанії',
    'баня для друзів',
    'баня для сім’ї',

    'де попаритися в Іспанії',
    'де знайти російську баню в Іспанії',

    // БРЕНД
    'ZHAR de PAR',
    'ЖАР де ПАР',
  ],

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
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'ZHAR de PAR',

    title: 'ZHAR de PAR — Русская баня в Испании',

    description:
      'Частная русская баня на природе в Испании. Парение веником, банные ритуалы, купель, джакузи и отдых рядом с Бланесом, Ллорет-де-Мар и Жироной.',

    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня в Испании',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'ZHAR de PAR — Русская баня в Испании',

    description:
      'Русская баня на природе в Испании. Парение веником, банные ритуалы, купель, джакузи и отдых.',

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

/* =========================
   STRUCTURED DATA — JSON-LD
========================= */

const jsonLd = {
  '@context': 'https://schema.org',

  '@graph': [
    {
      '@type': 'LocalBusiness',

      '@id': `${siteUrl}/#business`,

      name: 'ZHAR de PAR',

      alternateName: 'ЖАР де ПАР',

      description:
        'Русская баня в Испании на природе. Частная баня ZHAR de PAR в Бланесе рядом с Ллорет-де-Мар, Жироной и Коста-Бравой.',

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
          name: 'Girona',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Catalonia',
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
        'Баня в Каталонии',
        'Баня в Бланесе',
        'Баня в Ллорет-де-Мар',
        'Баня в Жироне',
        'Баня на Коста-Брава',
        'Парение веником',
        'Русский банный ритуал',
        'Банные веники',
        'Березовый веник',
        'Дубовый веник',
        'Джакузи',
        'Купель',
        'Отдых на природе',
        'Банный отдых',
      ],
    },

    {
      '@type': 'VideoObject',

      '@id': `${siteUrl}/#video`,

      name: 'ZHAR de PAR — русская баня в Испании',

      description:
        'Видео о ZHAR de PAR — частной русской бане на природе в Испании рядом с Бланесом, Ллорет-де-Мар и Жироной.',

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

    {
      '@type': 'WebSite',

      '@id': `${siteUrl}/#website`,

      url: siteUrl,

      name: 'ZHAR de PAR',

      alternateName: 'ЖАР де ПАР',

      description: 'Русская баня в Испании',

      inLanguage: ['ru-RU', 'uk-UA'],

      publisher: {
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
