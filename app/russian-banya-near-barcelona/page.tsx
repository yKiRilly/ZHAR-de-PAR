import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-near-barcelona`

export const metadata: Metadata = {
  title: 'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð‘Ð°Ñ€ÑÐµÐ»Ð¾Ð½Ð¾Ð¹ | ZHAR de PAR',

  description:
    'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð‘Ð°Ñ€ÑÐµÐ»Ð¾Ð½Ð¾Ð¹ â€” ZHAR de PAR Ð² Ð‘Ð»Ð°Ð½ÐµÑÐµ Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð°. Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ð±Ð°Ð½Ñ Ñ Ñ€ÑƒÑÑÐºÐ¸Ð¼ Ð¿Ð°Ñ€ÐµÐ½Ð¸ÐµÐ¼, Ð²ÐµÐ½Ð¸ÐºÐ°Ð¼Ð¸, ÐºÑƒÐ¿ÐµÐ»ÑŒÑŽ, Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸ Ð¸ Ð±Ð°Ð½Ð½Ñ‹Ð¼Ð¸ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ð°Ð¼Ð¸.',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð‘Ð°Ñ€ÑÐµÐ»Ð¾Ð½Ð¾Ð¹ | ZHAR de PAR',
    description:
      'Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ ZHAR de PAR Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð‘Ð°Ñ€ÑÐµÐ»Ð¾Ð½Ð¾Ð¹. Ð‘Ð»Ð°Ð½ÐµÑ, ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð°, Ñ€ÑƒÑÑÐºÐ¾Ðµ Ð¿Ð°Ñ€ÐµÐ½Ð¸Ðµ, Ð²ÐµÐ½Ð¸ÐºÐ¸, ÐºÑƒÐ¿ÐµÐ»ÑŒ Ð¸ Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR â€” Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð‘Ð°Ñ€ÑÐµÐ»Ð¾Ð½Ð¾Ð¹',
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

export default function RussianBanyaNearBarcelonaPage() {
  return <MainSite />
}
