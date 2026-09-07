import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-for-birthday'

export const metadata: Metadata = {
  title: 'Баня на день рождения в Испании | ZHAR de PAR',

  description:
    'Баня на день рождения в Испании — ZHAR de PAR в Бланесе. Частное пространство для компании, парение, купель, джакузи и гриль.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня на день рождения в Испании | ZHAR de PAR',
    description:
      'Баня на день рождения в Испании — ZHAR de PAR в Бланесе. Частное пространство для компании, парение, купель, джакузи и гриль.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня на день рождения в Испании | ZHAR de PAR',
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

export default function BanyaForBirthdayPage() {
  return <MainSite />
}

