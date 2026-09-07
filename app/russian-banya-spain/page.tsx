import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-spain`

export const metadata: Metadata = {
  title: 'Русская баня в Испании | ZHAR de PAR',

  description:
    'Русская баня в Испании — ZHAR de PAR на Коста-Брава. Частная баня с настоящим русским парением, банными вениками, купелью, джакузи и банными ритуалами.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня в Испании | ZHAR de PAR',
    description:
      'Частная русская баня ZHAR de PAR на Коста-Брава. Парение веником, банные ритуалы, купель, джакузи и отдых.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня в Испании',
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

export default function RussianBanyaSpainPage() {
  return <MainSite />
}