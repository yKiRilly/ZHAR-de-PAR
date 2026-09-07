import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-catalonia'

export const metadata: Metadata = {
  title: 'Баня в Каталонии | ZHAR de PAR',

  description:
    'Баня в Каталонии ZHAR de PAR — частное банное пространство в Бланесе. Парение, веники, купель, джакузи и отдых на Коста-Брава.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня в Каталонии | ZHAR de PAR',
    description:
      'Баня в Каталонии ZHAR de PAR — частное банное пространство в Бланесе. Парение, веники, купель, джакузи и отдых на Коста-Брава.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня в Каталонии | ZHAR de PAR',
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

export default function BanyaCataloniaPage() {
  return <MainSite />
}

