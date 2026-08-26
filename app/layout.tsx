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

  title: {
    default: 'ZHAR de PAR — Slavic Banya in Spain',
    template: '%s | ZHAR de PAR',
  },

  description:
    'ZHAR de PAR is a private Slavic banya in Spain. Traditional steam rituals, bath brooms, sauna, jacuzzi, plunge pool and authentic banya experiences in the Spanish nature.',

  keywords: [
    'ZHAR de PAR',
    'Slavic banya Spain',
    'Russian banya Spain',
    'private banya Spain',
    'banya in Spain',
    'sauna Spain',
    'private sauna Spain',
    'steam ritual',
    'banya ritual',
    'bathhouse Spain',
    'sauna and jacuzzi',
    'sauna with plunge pool',
    'bath brooms',
    'venik',
    'Slavic sauna',
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
    locale: 'en_US',
    url: siteUrl,
    siteName: 'ZHAR de PAR',

    title: 'ZHAR de PAR — Slavic Banya in Spain',

    description:
      'A private Slavic banya in Spain. Heat, steam, traditional rituals and the freedom of Spanish nature.',

    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — Slavic banya in Spain',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'ZHAR de PAR — Slavic Banya in Spain',

    description:
      'A private Slavic banya in Spain. Traditional steam rituals, bath brooms, sauna, jacuzzi and plunge pool.',

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
      lang="en"
      className={`${cormorant.variable} ${jost.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}