'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { gallery } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-provider'

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null)
  const { t } = useLanguage()

  const close = useCallback(() => setActive(null), [])

  const next = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i + 1) % gallery.length
      ),
    [],
  )

  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + gallery.length) % gallery.length
      ),
    [],
  )

  useEffect(() => {
    if (active === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }

    document.addEventListener('keydown', onKey)

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [active, close, next, prev])

  return (
    <section
      id="gallery"
      className="relative border-t border-border/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section heading */}
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {t.galleryAtmosphere}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
              {t.galleryTitle}
            </h2>
          </Reveal>
        </div>

        {/* Gallery */}
        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[280px] lg:grid-cols-3">
          {gallery.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 3) * 90}
              className={cn(
                image.span && 'sm:col-span-2',
                i === gallery.length - 1 &&
                  'lg:col-start-3 lg:row-start-2',
                'h-full',
              )}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${t.openImage}: ${image.alt}`}
                className="group relative h-full w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-background/10 transition-colors group-hover:bg-background/0" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Fullscreen viewer */}
      {active !== null && (
        <div
          onClick={close}
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-background/95 p-4 backdrop-blur-md animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={t.imageViewer}
        >

          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label={t.closeViewer}
            className="absolute right-6 top-6 z-20 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:bg-secondary"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label={t.previousImage}
            className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label={t.nextImage}
            className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary sm:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Image */}
          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative mx-auto flex h-full max-h-[82vh] w-full max-w-5xl flex-col items-center justify-center animate-in zoom-in-95 duration-300"
          >
            <div className="relative h-full w-full">
              <Image
                src={gallery[active].src}
                alt={gallery[active].alt}
                fill
                sizes="100vw"
                className="rounded-xl object-contain"
                priority
              />
            </div>

            <figcaption className="mt-4 text-center text-sm text-muted-foreground">
              {gallery[active].alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}