'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

import { gallery } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/components/language-provider'

type GalleryItemProps = {
  image: (typeof gallery)[number]
  index: number
  active: (index: number) => void
  className?: string
}

function GalleryItem({
  image,
  index,
  active,
  className,
}: GalleryItemProps) {
  return (
    <Reveal className={cn('h-full', className)}>
      <button
        type="button"
        onClick={() => active(index)}
        className="group relative h-full w-full overflow-hidden rounded-2xl"
        aria-label={`Open image ${index + 1}`}
      >
        <Image
          src={image.src}
          alt={image.alt || `Gallery image ${index + 1}`}
          fill
          sizes="100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-background/10 transition-colors duration-300 group-hover:bg-background/0" />
      </button>
    </Reveal>
  )
}

export function GallerySection() {
  const [active, setActive] = useState<number | null>(null)
  const { t } = useLanguage()

  const close = useCallback(() => {
    setActive(null)
  }, [])

  const next = useCallback(() => {
    setActive((i) =>
      i === null ? i : (i + 1) % gallery.length,
    )
  }, [])

  const prev = useCallback(() => {
    setActive((i) =>
      i === null
        ? i
        : (i - 1 + gallery.length) % gallery.length,
    )
  }, [])

  useEffect(() => {
    if (active === null) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }

    document.addEventListener('keydown', onKey)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [active, close, next, prev])

  return (
    <section
      id="gallery"
      className="relative border-t border-border/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* =========================
            HEADING
        ========================= */}

        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {t.galleryatmosphere}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
              {t.galleryTitle}
            </h2>
          </Reveal>
        </div>

        {/* =====================================================
            MOBILE
            До 639px
            Шахматная композиция
        ===================================================== */}

{/* MOBILE GALLERY */}
<div className="mt-10 grid grid-cols-2 gap-3 sm:hidden">

  {/* 1 — левая */}
  <GalleryItem
    image={gallery[0]}
    index={0}
    active={setActive}
    className="aspect-[4/5]"
  />

  {/* 2 — правая */}
  <GalleryItem
    image={gallery[1]}
    index={1}
    active={setActive}
    className="aspect-[4/5]"
  />

  {/* 3 — широкая */}
  <GalleryItem
    image={gallery[2]}
    index={2}
    active={setActive}
    className="col-span-2 aspect-[16/9]"
  />

  {/* 4 — широкая */}
  <GalleryItem
    image={gallery[3]}
    index={3}
    active={setActive}
    className="col-span-2 aspect-[16/9]"
  />

  {/* 5 — левая */}
  <GalleryItem
    image={gallery[4]}
    index={4}
    active={setActive}
    className="aspect-[4/5]"
  />

  {/* 6 — правая */}
  <GalleryItem
    image={gallery[5]}
    index={5}
    active={setActive}
    className="aspect-[4/5]"
  />

  {/* 7 — широкая */}
  <GalleryItem
    image={gallery[6]}
    index={6}
    active={setActive}
    className="col-span-2 aspect-[16/9]"
  />

</div>
        {/* =====================================================
            TABLET
            640px — 1023px

            1 строка:
            [      2/3      ][ 1/3 ]

            2 строка:
            [ 1/3 ][ 1/3 ][ 1/3 ]

            3 строка:
            [      2/3      ][ 1/3 ]
        ===================================================== */}

        <div className="mt-10 hidden grid-cols-3 gap-4 sm:grid lg:hidden">

          {/* =====================
              ROW 1
          ===================== */}

          {/* Фото 1 — 2/3 */}
          <GalleryItem
            image={gallery[0]}
            index={0}
            active={setActive}
            className="col-span-2 aspect-[16/8]"
          />

          {/* Фото 2 — 1/3 */}
          <GalleryItem
            image={gallery[1]}
            index={1}
            active={setActive}
            className="col-span-1 aspect-[4/5]"
          />

          {/* =====================
              ROW 2
          ===================== */}

          {/* Фото 3 */}
          <GalleryItem
            image={gallery[2]}
            index={2}
            active={setActive}
            className="col-span-1 aspect-square"
          />

          {/* Фото 4 */}
          <GalleryItem
            image={gallery[3]}
            index={3}
            active={setActive}
            className="col-span-1 aspect-square"
          />

          {/* Фото 5 */}
          <GalleryItem
            image={gallery[4]}
            index={4}
            active={setActive}
            className="col-span-1 aspect-square"
          />

          {/* =====================
              ROW 3
          ===================== */}

          {/* Фото 6 — 2/3 */}
          <GalleryItem
            image={gallery[5]}
            index={5}
            active={setActive}
            className="col-span-2 aspect-[16/9]"
          />

          {/* Фото 7 — 1/3 */}
          <GalleryItem
            image={gallery[6]}
            index={6}
            active={setActive}
            className="col-span-1 aspect-[4/5]"
          />
        </div>

        {/* =====================================================
            DESKTOP
            1024px+
            Оставляем красивую сетку 3 колонки
        ===================================================== */}

        <div className="mt-14 hidden grid-cols-3 auto-rows-[280px] gap-4 lg:grid">

          {gallery.map((image, i) => (
            <Reveal
              key={image.src}
              delay={(i % 3) * 90}
              className={cn(
                'h-full',

                image.span && 'col-span-2',

                i === gallery.length - 1 &&
                  'col-start-3 row-start-2',
              )}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${t.openImage}: ${
                  image.alt || `Gallery image ${i + 1}`
                }`}
                className="group relative h-full w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={
                    image.alt ||
                    `Gallery image ${i + 1}`
                  }
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-background/10 transition-colors duration-300 group-hover:bg-background/0" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* =====================================================
          FULLSCREEN IMAGE VIEWER
      ===================================================== */}

      {active !== null && (
        <div
          onClick={close}
          className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-background/95 p-4 backdrop-blur-md animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label={t.imageViewer}
        >

          {/* CLOSE */}

          <button
            type="button"
            onClick={close}
            aria-label={t.closeViewer}
            className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background/70 text-foreground transition-colors hover:bg-secondary sm:right-6 sm:top-6 sm:h-16 sm:w-16"
          >
            <X className="h-6 w-6 sm:h-8 sm:w-8" />
          </button>

          {/* PREVIOUS */}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            aria-label={t.previousImage}
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:bg-secondary sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* NEXT */}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            aria-label={t.nextImage}
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/60 text-foreground transition-colors hover:bg-secondary sm:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* IMAGE */}

          <figure
            onClick={(e) => e.stopPropagation()}
            className="relative mx-auto flex h-full max-h-[85vh] w-full max-w-6xl flex-col items-center justify-center animate-in zoom-in-95 duration-300"
          >
            <div className="relative h-full w-full">
              <Image
                src={gallery[active].src}
                alt={
                  gallery[active].alt ||
                  `Gallery image ${active + 1}`
                }
                fill
                sizes="100vw"
                className="rounded-xl object-contain"
                priority
              />
            </div>

            {gallery[active].alt && (
              <figcaption className="mt-4 text-center text-sm text-muted-foreground">
                {gallery[active].alt}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </section>
  )
}