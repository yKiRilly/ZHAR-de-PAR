import type { Metadata } from 'next'

import { MainSite } from '@/components/main-site'

const siteUrl = 'https://www.zhardepar.com'

export const metadata: Metadata = {
  title: 'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð° Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð‘Ð°Ñ€ÑÐµÐ»Ð¾Ð½Ð¾Ð¹ | ZHAR de PAR',

  description:
    'Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ ZHAR de PAR Ð² Ð‘Ð»Ð°Ð½ÐµÑÐµ Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð°. Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð‘Ð°Ñ€ÑÐµÐ»Ð¾Ð½Ð¾Ð¹, Ð›Ð»Ð¾Ñ€ÐµÑ‚-Ð´Ðµ-ÐœÐ°Ñ€ Ð¸ Ð–Ð¸Ñ€Ð¾Ð½Ð¾Ð¹. ÐŸÐ°Ñ€ÐµÐ½Ð¸Ðµ Ð²ÐµÐ½Ð¸ÐºÐ¾Ð¼, Ð±Ð°Ð½Ð½Ñ‹Ðµ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ñ‹, ÐºÑƒÐ¿ÐµÐ»ÑŒ, Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸ Ð¸ Ð¾Ñ‚Ð´Ñ‹Ñ… Ð½Ð° Ð¿Ñ€Ð¸Ñ€Ð¾Ð´Ðµ.',

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'ZHAR de PAR',
    title: 'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð° Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð‘Ð°Ñ€ÑÐµÐ»Ð¾Ð½Ð¾Ð¹ | ZHAR de PAR',
    description:
      'Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð‘Ð»Ð°Ð½ÐµÑÐµ Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð°. ÐŸÐ°Ñ€ÐµÐ½Ð¸Ðµ Ð²ÐµÐ½Ð¸ÐºÐ¾Ð¼, Ð±Ð°Ð½Ð½Ñ‹Ðµ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ñ‹, ÐºÑƒÐ¿ÐµÐ»ÑŒ, Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸ Ð¸ Ð¾Ñ‚Ð´Ñ‹Ñ… Ð½Ð° Ð¿Ñ€Ð¸Ñ€Ð¾Ð´Ðµ Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð‘Ð°Ñ€ÑÐµÐ»Ð¾Ð½Ð¾Ð¹.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR â€” Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð° Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð‘Ð°Ñ€ÑÐµÐ»Ð¾Ð½Ð¾Ð¹',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð½Ð° ÐšÐ¾ÑÑ‚Ð°-Ð‘Ñ€Ð°Ð²Ð° | ZHAR de PAR',
    description:
      'Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð‘Ð»Ð°Ð½ÐµÑÐµ Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð‘Ð°Ñ€ÑÐµÐ»Ð¾Ð½Ð¾Ð¹. ÐŸÐ°Ñ€ÐµÐ½Ð¸Ðµ Ð²ÐµÐ½Ð¸ÐºÐ¾Ð¼, Ð±Ð°Ð½Ð½Ñ‹Ðµ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ñ‹, ÐºÑƒÐ¿ÐµÐ»ÑŒ, Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸ Ð¸ Ð¾Ñ‚Ð´Ñ‹Ñ… Ð½Ð° Ð¿Ñ€Ð¸Ñ€Ð¾Ð´Ðµ.',
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
