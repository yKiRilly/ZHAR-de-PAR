import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-rent-spain'

export const metadata: Metadata = {
  title: 'Аренда бани в Испании | ZHAR de PAR',

  description:
    'Аренда частной бани в Испании — ZHAR de PAR в Бланесе. Баня для отдыха, парение, веники, купель, джакузи и дополнительные услуги.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Аренда бани в Испании | ZHAR de PAR',
    description:
      'Аренда частной бани в Испании — ZHAR de PAR в Бланесе. Баня для отдыха, парение, веники, купель, джакузи и дополнительные услуги.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Аренда бани в Испании | ZHAR de PAR',
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

export default function BanyaRentSpainPage() {
  return <MainSite />
}

