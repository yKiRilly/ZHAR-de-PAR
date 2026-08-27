
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
        'ZHAR de PAR is a private Slavic banya in Spain offering traditional steam rituals, bath brooms, sauna, jacuzzi, plunge pool and private relaxation in nature.',
      priceRange: '€€€',
      image: `${siteUrl}/photos/view/viewgeneral.PNG`,
      logo: `${siteUrl}/photos/logos/logoof.png`,
      openingHours: 'Mo-Su 10:00-24:00',
    },

    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'ZHAR de PAR',
      description:
        'Private Slavic banya in Spain with traditional steam rituals, bath brooms, sauna and private relaxation.',
      publisher: {
        '@id': `${siteUrl}/#business`,
      },
    },

    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: 'ZHAR de PAR — Русская баня в Испании',
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
      thumbnailUrl: [
        `${siteUrl}/photos/view/viewgeneral.PNG`,
      ],
      contentUrl: `${siteUrl}/video/videobanya.mp4`,
      embedUrl: `${siteUrl}/video`,
      uploadDate: '2026-08-26',
      mainEntityOfPage: {
        '@id': `${siteUrl}/#webpage`,
      },
      publisher: {
        '@id': `${siteUrl}/#business`,
      },
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
