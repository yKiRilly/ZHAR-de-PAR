import type { Metadata } from 'next'

import { BookingProvider } from '@/components/booking-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Philosophy } from '@/components/philosophy'
import { ServicesSection } from '@/components/services-section'
import { VideoSection } from '@/components/video-section'
import { BroomsSection } from '@/components/brooms-section'
import { GallerySection } from '@/components/gallery-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { FaqSection } from '@/components/faq-section'
import { SiteFooter } from '@/components/site-footer'
import { BookNowFab } from '@/components/book-now-fab'
import { faqs } from '@/lib/site-data'

const siteUrl = 'https://www.zhardepar.com'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${siteUrl}/#business`,
      name: 'ZHAR de PAR',
      url: siteUrl,
      description:
        'Частная русская баня на природе в Испании. Баня, сауна, пар, банные ритуалы, веники, джакузи и купель рядом с Ллорет-де-Мар и Бланесом.',
      priceRange: '€€€',
      image: `${siteUrl}/photos/view/viewgeneral.PNG`,
      logo: `${siteUrl}/photos/logos/logoof.png`,
      openingHours: 'Mo-Su 10:00-24:00',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lloret de Mar',
        addressRegion: 'Girona',
        addressCountry: 'ES',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Lloret de Mar',
        },
        {
          '@type': 'City',
          name: 'Blanes',
        },
        {
          '@type': 'City',
          name: 'Girona',
        },
        {
          '@type': 'City',
          name: 'Barcelona',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Catalonia',
        },
        {
          '@type': 'Country',
          name: 'Spain',
        },
      ],
    },

    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'ZHAR de PAR',
      description:
        'Русская баня на природе в Испании с традиционными банными ритуалами, вениками, сауной, джакузи и купелью.',
      inLanguage: 'ru-RU',
      publisher: {
        '@id': `${siteUrl}/#business`,
      },
    },

    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'ZHAR de PAR — Русская баня в Испании',
      description:
        'Частная русская баня на природе в Испании. Пар, банные ритуалы, веники, сауна, джакузи и купель.',
      inLanguage: 'ru-RU',
      isPartOf: {
        '@id': `${siteUrl}/#website`,
      },
      about: {
        '@id': `${siteUrl}/#business`,
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${siteUrl}/photos/view/viewgeneral.PNG`,
      },
    },

    {
      '@type': 'VideoObject',
      '@id': `${siteUrl}/#banya-video`,
      name: 'ZHAR de PAR — Русская баня в Испании',
      description:
        'Видео ZHAR de PAR — русская баня на природе в Испании. Пар, банные ритуалы, банные веники, сауна, джакузи и купель на Коста-Браве.',
      thumbnailUrl: [`${siteUrl}/photos/view/viewgeneral.PNG`],
      contentUrl: `${siteUrl}/video/videobanya.mp4`,
      embedUrl: `${siteUrl}/video`,
      uploadDate: '2026-08-26',
      inLanguage: 'ru-RU',
      mainEntityOfPage: {
        '@id': `${siteUrl}/#webpage`,
      },
      publisher: {
        '@id': `${siteUrl}/#business`,
      },
    },

    {
      '@type': 'FAQPage',
      '@id': `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
}

export const metadata: Metadata = {
  title: 'ZHAR de PAR — Русская баня в Испании',
  description:
    'Частная русская баня на природе в Испании. Пар, банные ритуалы, веники, сауна, джакузи и купель рядом с Ллорет-де-Мар, Бланесом и Жироной.',

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'ZHAR de PAR',
    title: 'ZHAR de PAR — Русская баня в Испании',
    description:
      'Частная русская баня на природе в Испании. Пар, банные ритуалы, веники, сауна, джакузи и купель.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — Русская баня в Испании',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'ZHAR de PAR — Русская баня в Испании',
    description:
      'Русская баня на природе в Испании. Пар, банные ритуалы, веники, сауна, джакузи и купель.',
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
  return (
    <BookingProvider>
      <SiteHeader />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <Hero />

        <section
          id="philosophy"
          className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8"
        >
          <Philosophy />
        </section>

        <VideoSection />

        <section
          id="services"
          className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8"
        >
          <ServicesSection />
        </section>

        <section
          id="brooms"
          className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8"
        >
          <BroomsSection />
        </section>

        <section
          id="gallery"
          className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8"
        >
          <GallerySection />
        </section>

        <section
          id="testimonials"
          className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8"
        >
          <TestimonialsSection />
        </section>

        <section
          id="faq"
          className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8"
        >
          <FaqSection />
        </section>
      </main>

      <SiteFooter />
      <BookNowFab />
    </BookingProvider>
  )
}
