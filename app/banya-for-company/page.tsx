import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-for-company'

export const metadata: Metadata = {
  title: 'Баня для компании в Испании | ZHAR de PAR',

  description:
    'Баня для компании на Коста-Брава — ZHAR de PAR в Бланесе. Частное пространство для отдыха с друзьями, парением, купелью, джакузи и грилем.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня для компании в Испании | ZHAR de PAR',
    description:
      'Баня для компании на Коста-Брава — ZHAR de PAR в Бланесе. Частное пространство для отдыха с друзьями, парением, купелью, джакузи и грилем.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня для компании в Испании | ZHAR de PAR',
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

export default function BanyaForCompanyPage() {
  return <MainSite />
}

