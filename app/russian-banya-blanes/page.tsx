import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-blanes`

export const metadata: Metadata = {
  title: 'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð‘Ð»Ð°Ð½ÐµÑÐµ | ZHAR de PAR',

  description:
    'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð‘Ð»Ð°Ð½ÐµÑÐµ Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð° â€” ZHAR de PAR. Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ð±Ð°Ð½Ñ Ñ Ð¿Ð°Ñ€ÐµÐ½Ð¸ÐµÐ¼ Ð²ÐµÐ½Ð¸ÐºÐ¾Ð¼, Ð±Ð°Ð½Ð½Ñ‹Ð¼Ð¸ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ð°Ð¼Ð¸, ÐºÑƒÐ¿ÐµÐ»ÑŒÑŽ Ð¸ Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸. Ð‘Ñ€Ð¾Ð½Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾Ñ‚ 3 Ñ‡Ð°ÑÐ¾Ð².',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð‘Ð»Ð°Ð½ÐµÑÐµ | ZHAR de PAR',
    description:
      'Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð‘Ð»Ð°Ð½ÐµÑÐµ Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð°. ÐŸÐ°Ñ€ÐµÐ½Ð¸Ðµ Ð²ÐµÐ½Ð¸ÐºÐ¾Ð¼, Ð±Ð°Ð½Ð½Ñ‹Ðµ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ñ‹, ÐºÑƒÐ¿ÐµÐ»ÑŒ, Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸ Ð¸ Ð¾Ñ‚Ð´Ñ‹Ñ… Ð½Ð° Ð¿Ñ€Ð¸Ñ€Ð¾Ð´Ðµ.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR â€” Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð‘Ð»Ð°Ð½ÐµÑÐµ',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð‘Ð»Ð°Ð½ÐµÑÐµ | ZHAR de PAR',
    description:
      'Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð‘Ð»Ð°Ð½ÐµÑÐµ Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð°. Ð ÑƒÑÑÐºÐ¾Ðµ Ð¿Ð°Ñ€ÐµÐ½Ð¸Ðµ, Ð±Ð°Ð½Ð½Ñ‹Ðµ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ñ‹, ÐºÑƒÐ¿ÐµÐ»ÑŒ Ð¸ Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸.',
    images: ['/photos/view/viewgeneral.PNG'],
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

export default function RussianBanyaBlanesPage() {
  return <MainSite />
}
