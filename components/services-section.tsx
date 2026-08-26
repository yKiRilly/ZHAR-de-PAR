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

import { services } from '@/lib/site-data'
import { useBooking } from '@/components/booking-provider'
import { useLanguage } from '@/components/language-provider'
import { Reveal } from '@/components/reveal'

export function ServicesSection() {
  const { addToCart, open } = useBooking()
  const { t } = useLanguage()

  const addService = (
    id: string,
    name: string,
    price: number,
    type: 'service' | 'treatment',
    maxQuantity: number = 1,
  ) => {
    addToCart({
      id,
      name,
      price,
      type,
      maxQuantity,
    })
  }

  // Аренда бани:
  // минимум 3 часа.
  // При повторном нажатии добавляется ещё 1 час.
  // Корзина автоматически НЕ открывается.
  const addSaunaRental = () => {
    addToCart({
      id: 'sauna-rental',
      name: t.saunaEstate,
      price: 100,
      type: 'sauna',
      minQuantity: 3,
    })
  }

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
          <article
            id="sauna-rental"
            className="mx-auto mt-10 w-full max-w-6xl rounded-2xl border border-border bg-card p-8 sm:p-10"
          >
            {/* Title + price */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="font-serif text-3xl font-light sm:text-4xl">
                {t.saunaEstate}
              </h3>

              <span className="shrink-0 font-serif text-4xl text-primary">
                €100
                <span className="text-lg text-muted-foreground">
                  {' '}
                  {t.perHour}
                </span>
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-4xl text-base leading-relaxed text-muted-foreground">
              {t.saunaEstateDescription}
            </p>

            {/* Two columns */}
            <div className="mt-10 grid gap-10 border-t border-border/60 pt-10 lg:grid-cols-2">

              {/* Booking conditions */}
              <div>
                <h4 className="mb-7 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                  {t.bookingConditions}
                </h4>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                      {t.minimumRental}
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                      {t.upToGuests}
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                      {t.additionalGuest}
                    </span>
                  </li>

                  <li className="flex items-start gap-4">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                      {t.deposit}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Additional services */}
              <div className="lg:border-l lg:border-border/60 lg:pl-10">
                <h4 className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                  {t.improvingProcedure}
                </h4>

                {/* Plunge pool */}
                <div className="space-y-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      addService(
                        'baptismal-font',
                        'BAPTISMAL FONT',
                        50,
                        'treatment',
                        1,
                      )
                    }
                    className="group flex w-full items-center justify-between rounded-lg border border-border bg-card/50 px-3.5 py-3 text-left transition-colors hover:border-primary/50 hover:bg-card"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary">
                        <Waves className="h-4 w-4" />
                      </div>

                      <span className="font-serif text-lg font-light">
                        {t.treatments['BAPTISMAL FONT'].name}
                      </span>
                    </div>

                    <span className="font-serif text-2xl text-primary">
                      €50
                    </span>
                  </button>
                </div>

                {/* Bath essentials */}
                <div className="mt-6">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    {t.bathEssentials}
                  </p>

                  <div className="space-y-2.5">

                    {/* Towel & sheet — NOT ADDABLE */}
                    <div className="flex w-full items-center justify-between rounded-lg border border-border bg-card/50 px-3.5 py-3 text-left">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-primary">
                          <Bath className="h-4 w-4" />
                        </div>

                        <span className="font-serif text-lg font-light">
                          {t.towelSheet}
                        </span>
                      </div>

                      <span className="font-serif text-2xl text-primary">
                        €15
                      </span>
                    </div>

                    {/* Slippers & bath hat — NOT ADDABLE */}
                    <div className="flex w-full items-center justify-between rounded-lg border border-border bg-card/50 px-3.5 py-3 text-left">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-primary">
                          <Footprints className="h-4 w-4" />
                        </div>

                        <span className="font-serif text-lg font-light">
                          {t.slippersHat}
                        </span>
                      </div>

                      <span className="font-serif text-2xl text-primary">
                        €5
                      </span>
                    </div>
                  </div>
                </div>

                {/* Jacuzzi + Grill */}
                <div className="mt-6 space-y-2.5">

                  {/* Jacuzzi */}
                  <button
                    type="button"
                    onClick={() =>
                      addService(
                        'jacuzzi',
                        'JACUZZI',
                        80,
                        'treatment',
                        1,
                      )
                    }
                    className="group flex w-full items-center justify-between rounded-lg border border-border bg-card/50 px-3.5 py-3 text-left transition-colors hover:border-primary/50 hover:bg-card"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary">
                        <Bath className="h-4 w-4" />
                      </div>

                      <span className="font-serif text-lg font-light">
                        {t.treatments.JACUZZI.name}
                      </span>
                    </div>

                    <span className="font-serif text-2xl text-primary">
                      €80
                    </span>
                  </button>

                  {/* Grill */}
                  <button
                    type="button"
                    onClick={() =>
                      addService(
                        'grill',
                        'GRILL',
                        40,
                        'treatment',
                        1,
                      )
                    }
                    className="group flex w-full items-center justify-between rounded-lg border border-border bg-card/50 px-3.5 py-3 text-left transition-colors hover:border-primary/50 hover:bg-card"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:border-primary">
                        <Flame className="h-4 w-4" />
                      </div>

                      <span className="font-serif text-lg font-light">
                        {t.treatments.GRILL.name}
                      </span>
                    </div>

                    <span className="font-serif text-2xl text-primary">
                      €40
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Reserve sauna */}
            <button
              type="button"
              onClick={addSaunaRental}
              className="mt-10 w-full rounded-full border border-border px-6 py-3 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {t.reserve}
            </button>

            {/* Minimum rental note */}
            <p className="mt-3 text-center text-xs text-muted-foreground">
  {t.minimumRental}
</p>
          </article>
        </Reveal>

        {/* Main heading */}
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

            const isMultiple =
              service.id === 'group-steam-ritual' ||
              service.id === 'individual-steam-ritual' ||
              service.id === 'body-scrub'

            const price =
              Number(
                service.price.replace('€', '').trim(),
              ) || 0

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
                  {/* Верхняя часть карточки */}
                  <div className="flex min-h-[245px] flex-col">

                    {/* Name + price */}
                    <div className="flex items-start justify-between">
                      <h3 className="max-w-[12ch] text-balance font-serif text-2xl font-light">
                        {translated.name}
                      </h3>

                      <span className="shrink-0 font-serif text-3xl text-primary">
                        {service.price}
                      </span>
                    </div>

                    {/* Guests + duration */}
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

                    {/* Description */}
                    <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                      {translated.description}
                    </p>
                  </div>

                  {/* Includes */}
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

                  {/* Add button */}
                  <div className="mt-auto pt-10">
                    <button
                      type="button"
                      onClick={() =>
                        addService(
                          service.id,
                          service.name,
                          price,
                          'service',
                          isMultiple ? 15 : 1,
                        )
                      }
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
                        hover:border-primary
                        hover:bg-primary
                        hover:text-primary-foreground
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
      </div>
    </section>
  )
}