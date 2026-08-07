import { BookingProvider } from '@/components/booking-provider'
import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Philosophy } from '@/components/philosophy'
import { ServicesSection } from '@/components/services-section'
import { BroomsSection } from '@/components/brooms-section'
import { MenuSection } from '@/components/menu-section'
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
      name: 'Ember & Birch',
      description:
        'A private luxury bathhouse and thermal wellness retreat offering traditional steam rituals, aromatic bath brooms, plunge pools, and a restaurant-style menu.',
      image: 'https://emberandbirch.example/images/hero.png',
      priceRange: '€€€',
      telephone: '+32 10 000 000',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '14 Cedar Hollow',
        addressLocality: 'Northern Forest Reserve',
      },
      openingHours: 'Mo-Su 10:00-24:00',
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ],
}

export default function Page() {
  return (
    <BookingProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <main>
        <Hero />
        <Philosophy />
        <ServicesSection />
        <BroomsSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <BookNowFab />
    </BookingProvider>
  )
}