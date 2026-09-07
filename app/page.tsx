import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'

export const metadata: Metadata = {
  title: 'Русская баня на Коста-Брава рядом с Барселоной | ZHAR de PAR',

  description:
    'Частная русская баня ZHAR de PAR в Бланесе на Коста-Брава. Русская баня рядом с Барселоной, Ллорет-де-Мар и Жироной. Парение веником, банные ритуалы, купель, джакузи и отдых на природе.',

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня на Коста-Брава рядом с Барселоной | ZHAR de PAR',
    description:
      'Частная русская баня в Бланесе на Коста-Брава. Парение веником, банные ритуалы, купель, джакузи и отдых на природе рядом с Барселоной.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня на Коста-Брава рядом с Барселоной',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Русская баня на Коста-Брава | ZHAR de PAR',
    description:
      'Частная русская баня в Бланесе рядом с Барселоной. Парение веником, банные ритуалы, купель, джакузи и отдых на природе.',
    images: ['/photos/view/viewgeneral.PNG'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Page() {
  return <MainSite />
}