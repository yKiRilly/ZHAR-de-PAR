import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/private-banya-spain'

export const metadata: Metadata = {
  title: 'Частная баня в Испании | ZHAR de PAR',

  description:
    'Частная баня в Испании ZHAR de PAR — индивидуальное банное пространство в Бланесе. Аренда, парение, веники, купель и джакузи.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Частная баня в Испании | ZHAR de PAR',
    description:
      'Частная баня в Испании ZHAR de PAR — индивидуальное банное пространство в Бланесе. Аренда, парение, веники, купель и джакузи.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Частная баня в Испании | ZHAR de PAR',
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function PrivateBanyaSpainPage() {
  return <MainSite />
}

