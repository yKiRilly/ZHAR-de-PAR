import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-relax-costa-brava'

export const metadata: Metadata = {
  title: 'Баня для отдыха на Коста-Брава | ZHAR de PAR',

  description:
    'Баня для отдыха на Коста-Брава в Бланесе — ZHAR de PAR. Парение, банные веники, купель, джакузи, гриль и отдых на природе.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня для отдыха на Коста-Брава | ZHAR de PAR',
    description:
      'Баня для отдыха на Коста-Брава в Бланесе — ZHAR de PAR. Парение, банные веники, купель, джакузи, гриль и отдых на природе.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня для отдыха на Коста-Брава | ZHAR de PAR',
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

export default function BanyaRelaxCostaBravaPage() {
  return <MainSite />
}

