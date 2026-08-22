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

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HealthAndBeautyBusiness',
      name: 'ZHAR de PAR',
      description:
        'A private Slavic sauna in nature offering traditional steam rituals, bath brooms, plunge pools, and private relaxation.',
      priceRange: '€€€',
      openingHours: 'Mo-Su 10:00-24:00',
    },
    {
      '@type': 'FAQPage',
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

export default function Page() {
  return (
    <BookingProvider>
      <SiteHeader />

      <main>
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Hero */}
        <Hero />

        {/* Philosophy */}
        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <Philosophy />
        </section>

        {/* Video */}
        <VideoSection />

        {/* Services */}
        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <ServicesSection />
        </section>

        {/* Brooms */}
        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <BroomsSection />
        </section>

        {/* Gallery */}
        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <GallerySection />
        </section>

        {/* Testimonials */}
        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <TestimonialsSection />
        </section>

        {/* FAQ */}
        <section className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <FaqSection />
        </section>
      </main>

      <SiteFooter />
      <BookNowFab />
    </BookingProvider>
  )
}