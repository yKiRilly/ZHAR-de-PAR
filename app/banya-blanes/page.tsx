import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-blanes'

export const metadata: Metadata = {
  title: 'Баня в Бланесе | ZHAR de PAR',

  description:
    'Баня в Бланесе на Коста-Брава — ZHAR de PAR. Частная аренда банного пространства, парение, веники, купель, джакузи и отдых.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня в Бланесе | ZHAR de PAR',
    description:
      'Баня в Бланесе на Коста-Брава — ZHAR de PAR. Частная аренда банного пространства, парение, веники, купель, джакузи и отдых.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня в Бланесе | ZHAR de PAR',
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

export default function BanyaBlanesPage() {
  return <MainSite />
}

