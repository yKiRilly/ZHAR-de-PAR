import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-with-veniki'

export const metadata: Metadata = {
  title: 'Баня с вениками в Испании | ZHAR de PAR',

  description:
    'Баня с банными вениками в Испании — ZHAR de PAR в Бланесе. Парение, частная аренда, купель, джакузи и полноценный банный отдых.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня с вениками в Испании | ZHAR de PAR',
    description:
      'Баня с банными вениками в Испании — ZHAR de PAR в Бланесе. Парение, частная аренда, купель, джакузи и полноценный банный отдых.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня с вениками в Испании | ZHAR de PAR',
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

export default function BanyaWithVenikiPage() {
  return <MainSite />
}

