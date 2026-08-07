import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

const siteUrl = 'https://emberandbirch.example'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ember & Birch — Luxury Private Bathhouse & Thermal Wellness Retreat',
    template: '%s | Ember & Birch',
  },
  description:
    'Ember & Birch is a private luxury bathhouse and thermal wellness retreat offering traditional steam rituals, aromatic bath brooms, plunge pools, and a restaurant-style menu. Reserve your private sauna experience — minimum three hours.',
  keywords: [
    'luxury bathhouse',
    'private sauna experience',
    'thermal spa retreat',
    'steam ritual',
    'banya',
    'wellness resort',
    'aromatic bath brooms',
    'private spa reservation',
    'sauna and plunge pool',
    'premium wellness sanctuary',
  ],
  authors: [{ name: 'Ember & Birch' }],
  creator: 'Ember & Birch',
  openGraph: {
    type: 'website',
    locale: 'en',
    url: siteUrl,
    siteName: 'Ember & Birch',
    title: 'Ember & Birch — Luxury Private Bathhouse & Thermal Wellness Retreat',
    description:
      'A private luxury bathhouse and thermal wellness retreat. Traditional steam rituals, aromatic bath brooms, and cinematic relaxation. Reserve for a minimum of three hours.',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Ember & Birch luxury bathhouse interior with steam and firelight',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ember & Birch — Luxury Private Bathhouse',
    description:
      'A private luxury bathhouse and thermal wellness retreat. Reserve your steam ritual for a minimum of three hours.',
    images: ['/images/hero.png'],
  },
  robots: { index: true, follow: true },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1512',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}