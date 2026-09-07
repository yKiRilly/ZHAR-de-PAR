import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-barcelona`

export const metadata: Metadata = {
  title: 'Русская баня в Барселоне | ZHAR de PAR',

  description:
    'Русская баня рядом с Барселоной — ZHAR de PAR на Коста-Брава. Частная баня в Бланесе с русским парением, банными вениками, купелью и джакузи.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня в Барселоне | ZHAR de PAR',
    description:
      'Частная русская баня рядом с Барселоной. ZHAR de PAR в Бланесе на Коста-Брава.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня рядом с Барселоной',
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

export default function RussianBanyaBarcelonaPage() {
  return <MainSite />
}