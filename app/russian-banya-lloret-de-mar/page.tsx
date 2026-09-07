import type { Metadata } from 'next'
import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-lloret-de-mar`

export const metadata: Metadata = {
  title: 'Русская баня в Льорет-де-Мар | ZHAR de PAR',
  description:
    'Русская баня рядом с Льорет-де-Мар — ZHAR de PAR на Коста-Брава. Частная баня с парением веником, банными ритуалами, купелью и джакузи. Бронирование от 3 часов.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня в Льорет-де-Мар | ZHAR de PAR',
    description:
      'Русская баня рядом с Льорет-де-Мар на Коста-Брава. Частная баня ZHAR de PAR с парением веником и банными ритуалами.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня на Коста-Брава',
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

export default function RussianBanyaLloretDeMarPage() {
  return <MainSite />
}