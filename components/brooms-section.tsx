'use client'

import Image from 'next/image'
import { Plus } from 'lucide-react'

import { brooms } from '@/lib/site-data'
import { useBooking } from '@/components/booking-provider'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'

export function BroomsSection() {
  const { addToCart } = useBooking()
  const { t } = useLanguage()

  return (
    <section
      id="brooms"
      className="relative border-t border-border/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Heading */}
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {t.bathBroom}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
              {t.heartOfRitual}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {t.broomDescription}
            </p>
          </Reveal>
        </div>

        {/* Brooms */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brooms.map((broom, i) => {
            const translatedBroom =
              t.broomTypes[
                broom.id as keyof typeof t.broomTypes
              ]

            // €15 -> 15
            const price = Number(
              broom.price.replace(/[^\d.,]/g, '').replace(',', '.'),
            )

            return (
              <Reveal
                key={broom.id}
                delay={i * 90}
              >
                <article
                  className="
                    group
                    flex
                    h-full
                    min-h-[560px]
                    flex-col
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    transition-colors
                    duration-300
                    hover:border-primary/50
                  "
                >

                  {/* Image */}
                  <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
                    <Image
                      src={broom.image}
                      alt={`${translatedBroom.name} bath broom`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-8">

                    {/* Name + Price */}
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="max-w-[12ch] text-balance font-serif text-2xl font-light">
                        {translatedBroom.name}
                      </h3>

                      <span className="shrink-0 font-serif text-3xl text-primary">
                        {broom.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {translatedBroom.description}
                    </p>

                    {/* Add to cart */}
                    <button
                      type="button"
                      onClick={() =>
                        addToCart({
                          id: `broom-${broom.id}`,
                          name: translatedBroom.name,
                          price,
                          canChangeQuantity: true,
                          maxQuantity: 15,
                        })
                      }
                      className="
                        mt-auto
                        w-full
                        rounded-full
                        border
                        border-border
                        px-6
                        py-3
                        text-xs
                        font-medium
                        uppercase
                        tracking-widest
                        text-foreground
                        transition-colors
                        hover:border-primary
                        hover:bg-primary
                        hover:text-primary-foreground
                      "
                    >
                      <Plus className="mr-2 inline-block h-4 w-4" />
                      {t.addToRitual}
                    </button>

                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}