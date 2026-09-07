import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-for-two'

export const metadata: Metadata = {
  title: 'Баня для двоих на Коста-Брава | ZHAR de PAR',

  description:
    'Баня для двоих на Коста-Брава — частное банное пространство ZHAR de PAR в Бланесе. Парение, купель, джакузи и спокойный отдых.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня для двоих на Коста-Брава | ZHAR de PAR',
    description:
      'Баня для двоих на Коста-Брава — частное банное пространство ZHAR de PAR в Бланесе. Парение, купель, джакузи и спокойный отдых.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня для двоих на Коста-Брава | ZHAR de PAR',
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

export default function BanyaForTwoPage() {
  return <MainSite />
}

