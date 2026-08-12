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
import { Reveal } from '@/components/reveal'

export function ServicesSection() {
  const { open } = useBooking()

  return (
    <section id="rituals" className="relative border-t border-border/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Section heading */}
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Steam Rituals
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
              Choose the ritual that calls to you
            </h2>
          </Reveal>
        </div>

        {/* Private sauna rental */}
        <Reveal delay={140}>
          <article className="mx-auto mt-10 w-full max-w-5xl rounded-2xl border border-border bg-card p-8 sm:p-10">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="font-serif text-3xl font-light">
                Rental of a Sauna Estate
              </h3>

              <span className="font-serif text-4xl text-primary">
                €100
                <span className="text-lg text-muted-foreground">
                  /hour
                </span>
              </span>
            </div>

            <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground">
              A real Slavic sauna reserved exclusively for your company.
              Complete privacy, the atmosphere of nature, and uninterrupted
              relaxation without outside guests.
            </p>

            <div className="mt-8 border-t border-border/60 pt-8">
              <h4 className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                Booking Conditions
              </h4>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Minimum rental time — 3 hours</span>
                </li>

                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Up to 8 guests included</span>
                </li>

                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Each additional guest — €50</span>
                </li>

                <li className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-primary" />
                  <span>
                    €100 deposit required to confirm the booking
                    (non-refundable upon cancellation)
                  </span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => open({ service: 'Rental of a Sauna Estate' })}
              className="mt-10 w-full rounded-full border border-border px-6 py-3 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Reserve
            </button>
          </article>
        </Reveal>

        {/* Steam rituals */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 90}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-primary/50">

                <div className="flex items-start justify-between">
                  <h3 className="max-w-[12ch] text-balance font-serif text-2xl font-light">
                    {service.name}
                  </h3>

                  <span className="font-serif text-3xl text-primary">
                    {service.price}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-primary" />
                    {service.guests}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-primary" />
                    {service.duration}
                  </span>
                </div>

                <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {service.includes && (
                  <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-6">
                    {service.includes.map((item) => (
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

                <button
                  onClick={() => open({ service: service.name })}
                  className="mt-8 w-full rounded-full border border-border px-6 py-3 text-xs font-medium uppercase tracking-widest text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  Reserve
                </button>

              </article>
            </Reveal>
          ))}
        </div>

        {/* Improving the procedure */}
        <Reveal>
          <h3 className="mt-20 text-xs font-medium uppercase tracking-[0.3em] text-primary">
            Improving the Procedure
          </h3>
        </Reveal>

        {/* Grill / Font / Jacuzzi */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {treatments.map((t, i) => (
            <Reveal key={t.id || t.name} delay={i * 80}>
              <button
                onClick={() => open({ service: t.name })}
                className="group flex h-full w-full flex-col rounded-xl border border-border bg-card/50 p-6 text-left transition-colors hover:border-primary/50 hover:bg-card"
              >
                <div className="flex items-center justify-between gap-3">
  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary">
      {t.name === 'GRILL' && <Flame className="h-5 w-5" />}
      {t.name === 'BAPTISMAL FONT' && <Waves className="h-5 w-5" />}
      {t.name === 'JACUZZI' && <Bath className="h-5 w-5" />}
    </div>

    <span className="font-serif text-xl font-light">
      {t.name}
    </span>
  </div>

  <span className="font-serif text-xl text-primary">
    {t.price}
  </span>
</div>

                <span className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t.description}
                </span>
              </button>
            </Reveal>
          ))}
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
            Towel &amp; Sheet
          </span>
        </div>

        <span className="font-serif text-xl text-primary">
          €15
        </span>
      </div>

      <span className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Fresh bath towel and linen sheet for your sauna ritual.
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
            Slippers &amp; Bath Hat
          </span>
        </div>

        <span className="font-serif text-xl text-primary">
          €5
        </span>
      </div>

      <span className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Comfortable slippers and a traditional bath hat for your visit.
      </span>
    </button>
  </Reveal>

</div>

      </div>
    </section>
  )
}