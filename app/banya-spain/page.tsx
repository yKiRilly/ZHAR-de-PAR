import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-spain'

export const metadata: Metadata = {
  title: 'Баня в Испании | ZHAR de PAR',

  description:
    'Баня в Испании ZHAR de PAR — частная баня в Бланесе на Коста-Брава. Парение, банные веники, купель, джакузи и отдых на природе.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня в Испании | ZHAR de PAR',
    description:
      'Баня в Испании ZHAR de PAR — частная баня в Бланесе на Коста-Брава. Парение, банные веники, купель, джакузи и отдых на природе.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня в Испании | ZHAR de PAR',
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

export default function BanyaSpainPage() {
  return <MainSite />
}

