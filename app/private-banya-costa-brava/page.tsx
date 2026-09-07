import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/private-banya-costa-brava'

export const metadata: Metadata = {
  title: 'Частная баня на Коста-Брава | ZHAR de PAR',

  description:
    'Частная баня на Коста-Брава в Бланесе. ZHAR de PAR предлагает аренду банного пространства, парение, веники, купель и джакузи.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Частная баня на Коста-Брава | ZHAR de PAR',
    description:
      'Частная баня на Коста-Брава в Бланесе. ZHAR de PAR предлагает аренду банного пространства, парение, веники, купель и джакузи.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Частная баня на Коста-Брава | ZHAR de PAR',
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

export default function PrivateBanyaCostaBravaPage() {
  return <MainSite />
}

