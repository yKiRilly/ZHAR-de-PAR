'use client'

import {
  Check,
  Clock,
  Users,
  Bath,
  Footprints,
  Flame,
  Waves,
} from 'lucide-react'
import { services, treatments } from '@/lib/site-data'
import { useBooking } from '@/components/booking-provider'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'

export function ServicesSection() {
  const { open } = useBooking()
  const { t } = useLanguage()

  return (
    <section
      id="rituals"
      className="relative border-t border-border/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section heading */}
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {t.steamRituals}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
              {t.chooseRitual}
            </h2>
          </Reveal>
        </div>

        {/* Private sauna rental */}
        <Reveal delay={140}>
          <article className="mx-auto mt-10 w-full max-w-5xl rounded-2xl border border-border bg-card p-8 sm:p-10">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="font-serif text-3xl font-light">
                {t.saunaEstate}
              </h3>

              <span className="font-serif text-4xl text-primary">
                €100
                <span className="text-lg text-muted-foreground">
                  /hour
                </span>
              </span>
            </div>

            <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground">
              {t.saunaEstateDescription}
            </p>

            <div className="mt-8 border-t border-border/60 pt-8">
              <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                {t.bookingConditions}
              </h4>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{t.minimumRental}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{t.upToGuests}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{t.additionalGuest}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{t.deposit}</span>
                </li>
              </ul>
            </div>

            <button
  type="button"
  onClick={() => open()}
  className="mt-10 w-full rounded-full border border-border px-6 py-3 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
>
  Reserve
</button>
          </article>
        </Reveal>

        {/* New heading */}
        <Reveal>
  <h2
    className="
      mt-20
      max-w-[1100px]
      font-serif
      text-4xl
      font-light
      leading-[1.1]
      sm:text-5xl
      sm:leading-[1.1]
    "
  >
    {t.forThoseWhoUnderstand}
  </h2>
</Reveal>
        {/* Steam rituals */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service, i) => {
            const translated = t.services[service.id]

            return (
              <Reveal key={service.id} delay={i * 90}>
                <article
                  className="
                    group
                    flex
                    h-full
                    min-h-[440px]
                    flex-col
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-8
                    transition-colors
                    duration-300
                    hover:border-primary/50
                  "
                >

                  {/* Card content — не растягиваем */}
                  <div>
                    <div className="flex items-start justify-between">
                      <h3 className="max-w-[12ch] text-balance font-serif text-2xl font-light">
                        {translated.name}
                      </h3>

                      <span className="shrink-0 font-serif text-3xl text-primary">
                        {service.price}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-widest text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-primary" />
                        {translated.guests}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-primary" />
                        {translated.duration}
                      </span>
                    </div>

                    <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {translated.description}
                    </p>

                    {translated.includes && (
                      <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-6">
                        {translated.includes.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2.5 text-sm text-foreground/85"
                          >
                            <Check className="h-4 w-4 shrink-0 text-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

{/* Кнопка всегда внизу */}
<div className="mt-auto pt-10">
  <button
    onClick={() => open({ service: service.name })}
    className="
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
      group-hover:border-primary
      group-hover:bg-primary
      group-hover:text-primary-foreground
    "
  >
    {t.reserve}
  </button>
</div>

</article>
</Reveal>
)
})}
</div>

        {/* Improving the procedure */}
        <Reveal>
          <h3 className="mt-20 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            {t.improvingProcedure}
          </h3>
        </Reveal>

        {/* Grill / Font / Jacuzzi */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {treatments.map((item, i) => {
            const translated = t.treatments[item.name]

            return (
              <Reveal key={item.name} delay={i * 80}>
                <button
                  onClick={() => open({ service: item.name })}
                  className="group flex h-full w-full flex-col rounded-xl border border-border bg-card/50 p-6 text-left transition-colors hover:border-primary/50 hover:bg-card"
                >
                  <div className="flex items-center justify-between gap-3">

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary">
                        {item.name === 'GRILL' && (
                          <Flame className="h-5 w-5" />
                        )}

                        {item.name === 'BAPTISMAL FONT' && (
                          <Waves className="h-5 w-5" />
                        )}

                        {item.name === 'JACUZZI' && (
                          <Bath className="h-5 w-5" />
                        )}
                      </div>

                      <span className="font-serif text-xl font-light">
                        {translated.name}
                      </span>
                    </div>

                    <span className="font-serif text-xl text-primary">
                      {item.price}
                    </span>

                  </div>

                  <span className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {translated.description}
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>

        {/* Bath essentials */}
        <div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">

          {/* Towel & Sheet */}
          <Reveal delay={160}>
            <button
              onClick={() => open({ service: 'Towel & Sheet' })}
              className="group flex h-full w-full flex-col rounded-xl border border-border bg-card/50 p-6 text-left transition-colors hover:border-primary/50 hover:bg-card"
            >
              <div className="flex items-start justify-between gap-3">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary">
                    <Bath className="h-5 w-5" />
                  </div>

                  <span className="font-serif text-xl font-light">
                    {t.towelSheet}
                  </span>
                </div>

                <span className="font-serif text-xl text-primary">
                  €15
                </span>

              </div>

              <span className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t.towelSheetDescription}
              </span>
            </button>
          </Reveal>

          {/* Slippers & Bath Hat */}
          <Reveal delay={240}>
            <button
              onClick={() => open({ service: 'Slippers & Bath Hat' })}
              className="group flex h-full w-full flex-col rounded-xl border border-border bg-card/50 p-6 text-left transition-colors hover:border-primary/50 hover:bg-card"
            >
              <div className="flex items-start justify-between gap-3">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary">
                    <Footprints className="h-5 w-5" />
                  </div>

                  <span className="font-serif text-xl font-light">
                    {t.slippersHat}
                  </span>
                </div>

                <span className="font-serif text-xl text-primary">
                  €5
                </span>

              </div>

              <span className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {t.slippersHatDescription}
              </span>
            </button>
          </Reveal>

        </div>

      </div>
    </section>
  )
}