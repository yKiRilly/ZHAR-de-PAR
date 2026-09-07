import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-near-barcelona'

export const metadata: Metadata = {
  title: 'Баня рядом с Барселоной | ZHAR de PAR',

  description:
    'Частная баня рядом с Барселоной в Бланесе. ZHAR de PAR предлагает парение, веники, купель, джакузи и отдых.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня рядом с Барселоной | ZHAR de PAR',
    description:
      'Частная баня рядом с Барселоной в Бланесе. ZHAR de PAR предлагает парение, веники, купель, джакузи и отдых.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня рядом с Барселоной | ZHAR de PAR',
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

export default function BanyaNearBarcelonaPage() {
  return <MainSite />
}

