'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-provider'

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = t.testimonials

  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + testimonials.length) % testimonials.length)
    },
    [testimonials.length],
  )

  useEffect(() => {
    if (paused) return

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(id)
  }, [paused, testimonials.length])

  useEffect(() => {
    if (index >= testimonials.length) {
      setIndex(0)
    }
  }, [index, testimonials.length])

  return (
    <section
      className="relative overflow-hidden border-t border-border/50 py-24 sm:py-32"
      aria-roledescription="carousel"
      aria-label={t.guestTestimonials}
    >
      <div
        className="mx-auto max-w-4xl px-5 text-center sm:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Title */}
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            {t.inTheirWords}
          </p>
        </Reveal>

        {/* Testimonials */}
        <Reveal delay={80}>
          <div className="relative mt-10 min-h-[280px] sm:min-h-[240px]">
            {testimonials.map((testimonial, i) => (
              <blockquote
                key={testimonial.name}
                aria-hidden={i !== index}
                className={cn(
                  'absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-out',
                  i === index
                    ? 'translate-y-0 opacity-100'
                    : 'pointer-events-none translate-y-4 opacity-0',
                )}
              >
                <Quote className="mb-6 h-8 w-8 text-primary/60" />

                <p className="text-balance font-serif text-2xl font-light leading-relaxed sm:text-3xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <footer className="mt-8">
                  <p className="text-sm font-medium uppercase tracking-widest text-foreground">
                    {testimonial.name}
                  </p>

                  {testimonial.detail && (
                    <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {testimonial.detail}
                    </p>
                  )}
                </footer>
              </blockquote>
            ))}
          </div>
        </Reveal>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={t.previousTestimonial}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((testimonial, i) => (
              <button
                type="button"
                key={testimonial.name}
                onClick={() => setIndex(i)}
                aria-label={`${t.goToTestimonial} ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  i === index
                    ? 'w-8 bg-primary'
                    : 'w-1.5 bg-border hover:bg-muted-foreground',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label={t.nextTestimonial}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}