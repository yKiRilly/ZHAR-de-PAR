import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = 'https://www.zhardepar.com/banya-with-kupel'

export const metadata: Metadata = {
  title: 'Баня с купелью в Испании | ZHAR de PAR',

  description:
    'Баня с купелью в Испании на Коста-Брава. ZHAR de PAR в Бланесе предлагает частную аренду, парение, банные веники и отдых.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Баня с купелью в Испании | ZHAR de PAR',
    description:
      'Баня с купелью в Испании на Коста-Брава. ZHAR de PAR в Бланесе предлагает частную аренду, парение, банные веники и отдых.',
    images: [
      {
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
        width: 1200,
        height: 630,
        alt: 'Баня с купелью в Испании | ZHAR de PAR',
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

export default function BanyaWithKupelPage() {
  return <MainSite />
}

