import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-with-jacuzzi'

export const metadata: Metadata = {
  title: 'Баня с джакузи на Коста-Брава | ZHAR de PAR',

  description:
    'Баня с джакузи на Коста-Брава — ZHAR de PAR в Бланесе. Частное банное пространство, парение, веники, купель и отдых.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня с джакузи на Коста-Брава | ZHAR de PAR',
    description:
      'Баня с джакузи на Коста-Брава — ZHAR de PAR в Бланесе. Частное банное пространство, парение, веники, купель и отдых.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня с джакузи на Коста-Брава | ZHAR de PAR',
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

export default function BanyaWithJacuzziPage() {
  return <MainSite />
}

