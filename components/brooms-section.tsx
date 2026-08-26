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
      className="relative border-t border-border/50 py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {t.bathBroom}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-serif text-3xl font-light leading-tight sm:text-4xl lg:text-5xl">
              {t.heartOfRitual}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base">
              {t.broomDescription}
            </p>
          </Reveal>
        </div>

        {/* Brooms */}
        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:mt-14 lg:grid-cols-3">
          {brooms.map((broom, i) => {
            const translatedBroom =
              t.broomTypes[
                broom.id as keyof typeof t.broomTypes
              ]

            // €15 -> 15
            const price = Number(
              broom.price
                .replace(/[^\d.,]/g, '')
                .replace(',', '.'),
            )

            return (
              <Reveal
                key={broom.id}
                delay={i * 90}
                className="h-full"
              >
                <article
                  className="
                    group
                    flex
                    h-full
                    min-h-0
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
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                    <Image
                      src={broom.image}
                      alt={`${translatedBroom.name} bath broom`}
                      fill
                      sizes="
                        (max-width: 639px) 100vw,
                        (max-width: 1023px) 50vw,
                        33vw
                      "
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-8">

                    {/* Name + Price */}
                    <div className="flex items-start justify-between gap-3 sm:gap-5">
                      <h3
                        className="
                          min-w-0
                          flex-1
                          text-balance
                          font-serif
                          text-xl
                          font-light
                          leading-tight
                          sm:text-2xl
                        "
                      >
                        {translatedBroom.name}
                      </h3>

                      <span
                        className="
                          shrink-0
                          whitespace-nowrap
                          font-serif
                          text-2xl
                          text-primary
                          sm:text-3xl
                        "
                      >
                        {broom.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p
                      className="
                        mt-4
                        text-pretty
                        text-sm
                        leading-relaxed
                        text-muted-foreground
                        sm:mt-5
                      "
                    >
                      {translatedBroom.description}
                    </p>

                    {/* Add to cart */}
                    <div className="mt-auto pt-7 sm:pt-8">
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
                          flex
                          min-h-11
                          w-full
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-border
                          px-5
                          py-3
                          text-center
                          text-[11px]
                          font-medium
                          uppercase
                          tracking-[0.16em]
                          text-foreground
                          transition-colors
                          hover:border-primary
                          hover:bg-primary
                          hover:text-primary-foreground
                          sm:text-xs
                          sm:tracking-widest
                        "
                      >
                        <Plus className="mr-2 h-4 w-4 shrink-0" />
                        <span>{t.addToRitual}</span>
                      </button>
                    </div>
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