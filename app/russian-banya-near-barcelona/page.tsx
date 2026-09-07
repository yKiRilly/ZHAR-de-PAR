import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-near-barcelona`

export const metadata: Metadata = {
  title: 'Русская баня рядом с Барселоной | ZHAR de PAR',

  description:
    'Русская баня рядом с Барселоной — ZHAR de PAR в Бланесе на Коста-Брава. Частная баня с русским парением, вениками, купелью, джакузи и банными ритуалами.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня рядом с Барселоной | ZHAR de PAR',
    description:
      'Частная русская баня ZHAR de PAR рядом с Барселоной. Бланес, Коста-Брава, русское парение, веники, купель и джакузи.',
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

export default function RussianBanyaNearBarcelonaPage() {
  return <MainSite />
}