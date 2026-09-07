import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-blanes`

export const metadata: Metadata = {
  title: 'Русская баня в Бланесе | ZHAR de PAR',

  description:
    'Русская баня в Бланесе на Коста-Брава — ZHAR de PAR. Частная баня с парением веником, банными ритуалами, купелью и джакузи. Бронирование от 3 часов.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня в Бланесе | ZHAR de PAR',
    description:
      'Частная русская баня в Бланесе на Коста-Брава. Парение веником, банные ритуалы, купель, джакузи и отдых на природе.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня в Бланесе',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Русская баня в Бланесе | ZHAR de PAR',
    description:
      'Частная русская баня в Бланесе на Коста-Брава. Русское парение, банные ритуалы, купель и джакузи.',
    images: ['/photos/view/viewgeneral.PNG'],
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

export default function RussianBanyaBlanesPage() {
  return <MainSite />
}