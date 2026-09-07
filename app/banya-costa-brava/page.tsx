import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-costa-brava'

export const metadata: Metadata = {
  title: 'Баня на Коста-Брава | ZHAR de PAR',

  description:
    'Баня на Коста-Брава в Бланесе — ZHAR de PAR. Частное банное пространство, парение, банные веники, купель, джакузи и отдых.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня на Коста-Брава | ZHAR de PAR',
    description:
      'Баня на Коста-Брава в Бланесе — ZHAR de PAR. Частное банное пространство, парение, банные веники, купель, джакузи и отдых.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня на Коста-Брава | ZHAR de PAR',
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

export default function BanyaCostaBravaPage() {
  return <MainSite />
}

