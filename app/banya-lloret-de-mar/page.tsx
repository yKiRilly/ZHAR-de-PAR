import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-lloret-de-mar'

export const metadata: Metadata = {
  title: 'Баня в Льорет-де-Мар | ZHAR de PAR',

  description:
    'Баня рядом с Льорет-де-Мар — ZHAR de PAR в Бланесе. Частная баня, парение, банные веники, купель и отдых.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня в Льорет-де-Мар | ZHAR de PAR',
    description:
      'Баня рядом с Льорет-де-Мар — ZHAR de PAR в Бланесе. Частная баня, парение, банные веники, купель и отдых.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня в Льорет-де-Мар | ZHAR de PAR',
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

export default function BanyaLloretDeMarPage() {
  return <MainSite />
}

