import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-girona`

export const metadata: Metadata = {
  title: 'Русская баня в Жироне | ZHAR de PAR',

  description:
    'Русская баня рядом с Жироной — ZHAR de PAR на Коста-Брава. Частная баня с русским парением, банными вениками, купелью, джакузи и отдыхом на природе.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня в Жироне | ZHAR de PAR',
    description:
      'Русская баня ZHAR de PAR рядом с Жироной. Частная аренда, парение веником, купель, джакузи и банные ритуалы.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня рядом с Жироной',
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

export default function RussianBanyaGironaPage() {
  return <MainSite />
}