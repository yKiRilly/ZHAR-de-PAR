'use client'

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

export function MainSite() {
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