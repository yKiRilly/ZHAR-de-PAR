import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-rent-costa-brava'

export const metadata: Metadata = {
  title: 'Аренда бани на Коста-Брава | ZHAR de PAR',

  description:
    'Аренда бани на Коста-Брава в Бланесе. ZHAR de PAR — частное банное пространство для отдыха, парения, встреч и мероприятий.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Аренда бани на Коста-Брава | ZHAR de PAR',
    description:
      'Аренда бани на Коста-Брава в Бланесе. ZHAR de PAR — частное банное пространство для отдыха, парения, встреч и мероприятий.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Аренда бани на Коста-Брава | ZHAR de PAR',
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

export default function BanyaRentCostaBravaPage() {
  return <MainSite />
}

