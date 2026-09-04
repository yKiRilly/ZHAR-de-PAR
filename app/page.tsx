
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

    title:
      'Русская баня на Коста-Брава рядом с Барселоной | ZHAR de PAR',

    description:
      'Частная русская баня в Бланесе на Коста-Брава. Парение веником, банные ритуалы, купель, джакузи и отдых на природе рядом с Барселоной.',

    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt:
          'ZHAR de PAR — русская баня на Коста-Брава рядом с Барселоной',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title:
      'Русская баня на Коста-Брава | ZHAR de PAR',

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
  return (
    <BookingProvider>
      <SiteHeader />

      <main>
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
