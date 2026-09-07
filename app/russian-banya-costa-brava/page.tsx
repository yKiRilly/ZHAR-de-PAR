import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-costa-brava`

export const metadata: Metadata = {
  title: 'Русская баня на Коста-Брава | ZHAR de PAR',

  description:
    'Русская баня на Коста-Брава — ZHAR de PAR в Бланесе. Частная баня, русское парение веником, банные ритуалы, купель, джакузи и отдых на природе.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня на Коста-Брава | ZHAR de PAR',
    description:
      'Частная русская баня ZHAR de PAR на Коста-Брава в Бланесе. Парение, веники, купель, джакузи и отдых.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня на Коста-Брава',
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

export default function RussianBanyaCostaBravaPage() {
  return <MainSite />
}