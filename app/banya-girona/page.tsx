import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-girona'

export const metadata: Metadata = {
  title: 'Баня в Жироне | ZHAR de PAR',

  description:
    'Баня рядом с Жироной — ZHAR de PAR в Бланесе на Коста-Брава. Частное банное пространство, парение, веники, купель и отдых.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня в Жироне | ZHAR de PAR',
    description:
      'Баня рядом с Жироной — ZHAR de PAR в Бланесе на Коста-Брава. Частное банное пространство, парение, веники, купель и отдых.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня в Жироне | ZHAR de PAR',
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

export default function BanyaGironaPage() {
  return <MainSite />
}

