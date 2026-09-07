import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-spain`

export const metadata: Metadata = {
  title: 'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸ | ZHAR de PAR',

  description:
    'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸ â€” ZHAR de PAR Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð°. Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ð±Ð°Ð½Ñ Ñ Ð½Ð°ÑÑ‚Ð¾ÑÑ‰Ð¸Ð¼ Ñ€ÑƒÑÑÐºÐ¸Ð¼ Ð¿Ð°Ñ€ÐµÐ½Ð¸ÐµÐ¼, Ð±Ð°Ð½Ð½Ñ‹Ð¼Ð¸ Ð²ÐµÐ½Ð¸ÐºÐ°Ð¼Ð¸, ÐºÑƒÐ¿ÐµÐ»ÑŒÑŽ, Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸ Ð¸ Ð±Ð°Ð½Ð½Ñ‹Ð¼Ð¸ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ð°Ð¼Ð¸.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸ | ZHAR de PAR',
    description:
      'Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ ZHAR de PAR Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð°. ÐŸÐ°Ñ€ÐµÐ½Ð¸Ðµ Ð²ÐµÐ½Ð¸ÐºÐ¾Ð¼, Ð±Ð°Ð½Ð½Ñ‹Ðµ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ñ‹, ÐºÑƒÐ¿ÐµÐ»ÑŒ, Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸ Ð¸ Ð¾Ñ‚Ð´Ñ‹Ñ….',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR â€” Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸',
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

export default function RussianBanyaSpainPage() {
  return <MainSite />
}
