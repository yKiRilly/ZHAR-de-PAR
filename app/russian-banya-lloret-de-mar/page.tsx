import type { Metadata } from 'next'
import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-lloret-de-mar`

export const metadata: Metadata = {
  title: 'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð›ÑŒÐ¾Ñ€ÐµÑ‚-Ð´Ðµ-ÐœÐ°Ñ€ | ZHAR de PAR',
  description:
    'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð›ÑŒÐ¾Ñ€ÐµÑ‚-Ð´Ðµ-ÐœÐ°Ñ€ â€” ZHAR de PAR Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð°. Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ð±Ð°Ð½Ñ Ñ Ð¿Ð°Ñ€ÐµÐ½Ð¸ÐµÐ¼ Ð²ÐµÐ½Ð¸ÐºÐ¾Ð¼, Ð±Ð°Ð½Ð½Ñ‹Ð¼Ð¸ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ð°Ð¼Ð¸, ÐºÑƒÐ¿ÐµÐ»ÑŒÑŽ Ð¸ Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸. Ð‘Ñ€Ð¾Ð½Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ Ð¾Ñ‚ 3 Ñ‡Ð°ÑÐ¾Ð².',

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð›ÑŒÐ¾Ñ€ÐµÑ‚-Ð´Ðµ-ÐœÐ°Ñ€ | ZHAR de PAR',
    description:
      'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð›ÑŒÐ¾Ñ€ÐµÑ‚-Ð´Ðµ-ÐœÐ°Ñ€ Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð°. Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ð±Ð°Ð½Ñ ZHAR de PAR Ñ Ð¿Ð°Ñ€ÐµÐ½Ð¸ÐµÐ¼ Ð²ÐµÐ½Ð¸ÐºÐ¾Ð¼ Ð¸ Ð±Ð°Ð½Ð½Ñ‹Ð¼Ð¸ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ð°Ð¼Ð¸.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR â€” Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð°',
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
