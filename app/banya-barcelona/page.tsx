import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-barcelona'

export const metadata: Metadata = {
  title: 'Баня в Барселоне | ZHAR de PAR',

  description:
    'Баня в Барселоне и рядом с Барселоной — ZHAR de PAR в Бланесе на Коста-Брава. Частное банное пространство и отдых.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня в Барселоне | ZHAR de PAR',
    description:
      'Баня в Барселоне и рядом с Барселоной — ZHAR de PAR в Бланесе на Коста-Брава. Частное банное пространство и отдых.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня в Барселоне | ZHAR de PAR',
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

export default function BanyaBarcelonaPage() {
  return <MainSite />
}

