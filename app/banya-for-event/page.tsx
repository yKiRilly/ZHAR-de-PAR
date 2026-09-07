import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-for-event'

export const metadata: Metadata = {
  title: 'Баня для мероприятия на Коста-Брава | ZHAR de PAR',

  description:
    'Баня для мероприятия на Коста-Брава — ZHAR de PAR в Бланесе. Частное пространство для отдыха, встреч, праздников и мероприятий.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня для мероприятия на Коста-Брава | ZHAR de PAR',
    description:
      'Баня для мероприятия на Коста-Брава — ZHAR de PAR в Бланесе. Частное пространство для отдыха, встреч, праздников и мероприятий.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня для мероприятия на Коста-Брава | ZHAR de PAR',
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

export default function BanyaForEventPage() {
  return <MainSite />
}

