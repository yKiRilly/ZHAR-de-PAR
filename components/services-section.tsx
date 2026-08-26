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
  const { addToCart } = useBooking()
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
      className="
        relative
        border-t
        border-border/50
        py-16
        sm:py-24
        lg:py-32
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* Section heading */}
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary sm:tracking-[0.3em]">
              {t.steamRituals}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2
              className="
                mt-3
                text-balance
                font-serif
                text-3xl
                font-light
                leading-tight
                sm:mt-4
                sm:text-5xl
              "
            >
              {t.chooseRitual}
            </h2>
          </Reveal>
        </div>

        {/* Private sauna rental */}
        <Reveal delay={140}>
          <article
            id="sauna-rental"
            className="
              mx-auto
              mt-8
              w-full
              max-w-6xl
              rounded-2xl
              border
              border-border
              bg-card
              p-5
              sm:mt-10
              sm:p-8
              lg:p-10
            "
          >
            {/* Title + price */}
            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:items-start
                sm:justify-between
                sm:gap-4
              "
            >
              <h3
                className="
                  max-w-full
                  font-serif
                  text-2xl
                  font-light
                  leading-tight
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                {t.saunaEstate}
              </h3>

              <span
                className="
                  shrink-0
                  font-serif
                  text-3xl
                  leading-none
                  text-primary
                  sm:text-4xl
                "
              >
                €100
                <span className="ml-1 text-base text-muted-foreground sm:text-lg">
                  {t.perHour}
                </span>
              </span>
            </div>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-4xl
                text-sm
                leading-relaxed
                text-muted-foreground
                sm:mt-6
                sm:text-base
              "
            >
              {t.saunaEstateDescription}
            </p>

            {/* Two columns */}
            <div
              className="
                mt-8
                grid
                gap-8
                border-t
                border-border/60
                pt-8
                sm:mt-10
                sm:gap-10
                sm:pt-10
                lg:grid-cols-2
              "
            >
              {/* Booking conditions */}
              <div>
                <h4
                  className="
                    mb-5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-primary
                    sm:mb-7
                    sm:text-xs
                    sm:tracking-[0.3em]
                  "
                >
                  {t.bookingConditions}
                </h4>

                <ul className="space-y-4 sm:space-y-5">
                  <li className="flex items-start gap-3 sm:gap-4">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />

                    <span
                      className="
                        text-sm
                        leading-relaxed
                        text-foreground/90
                        sm:text-base
                        lg:text-lg
                      "
                    >
                      {t.minimumRental}
                    </span>
                  </li>

                  <li className="flex items-start gap-3 sm:gap-4">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />

                    <span
                      className="
                        text-sm
                        leading-relaxed
                        text-foreground/90
                        sm:text-base
                        lg:text-lg
                      "
                    >
                      {t.upToGuests}
                    </span>
                  </li>

                  <li className="flex items-start gap-3 sm:gap-4">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />

                    <span
                      className="
                        text-sm
                        leading-relaxed
                        text-foreground/90
                        sm:text-base
                        lg:text-lg
                      "
                    >
                      {t.additionalGuest}
                    </span>
                  </li>

                  <li className="flex items-start gap-3 sm:gap-4">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />

                    <span
                      className="
                        text-sm
                        leading-relaxed
                        text-foreground/90
                        sm:text-base
                        lg:text-lg
                      "
                    >
                      {t.deposit}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Additional services */}
              <div className="lg:border-l lg:border-border/60 lg:pl-10">
                <h4
                  className="
                    mb-5
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-primary
                    sm:mb-6
                    sm:text-xs
                    sm:tracking-[0.3em]
                  "
                >
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
                    className="
                      group
                      flex
                      min-h-[56px]
                      w-full
                      items-center
                      justify-between
                      gap-3
                      rounded-lg
                      border
                      border-border
                      bg-card/50
                      px-3
                      py-3
                      text-left
                      transition-colors
                      hover:border-primary/50
                      hover:bg-card
                      sm:px-3.5
                    "
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-border
                          text-primary
                          transition-colors
                          group-hover:border-primary
                        "
                      >
                        <Waves className="h-4 w-4" />
                      </div>

                      <span className="min-w-0 font-serif text-base font-light sm:text-lg">
                        {t.treatments['BAPTISMAL FONT'].name}
                      </span>
                    </div>

                    <span className="shrink-0 font-serif text-xl text-primary sm:text-2xl">
                      €50
                    </span>
                  </button>
                </div>

                {/* Bath essentials */}
                <div className="mt-5 sm:mt-6">
                  <p
                    className="
                      mb-3
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-muted-foreground
                      sm:text-[10px]
                      sm:tracking-[0.25em]
                    "
                  >
                    {t.bathEssentials}
                  </p>

                  <div className="space-y-2.5">
                    {/* Towel & sheet */}
                    <div
                      className="
                        flex
                        min-h-[56px]
                        w-full
                        items-center
                        justify-between
                        gap-3
                        rounded-lg
                        border
                        border-border
                        bg-card/50
                        px-3
                        py-3
                        text-left
                        sm:px-3.5
                      "
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-border
                            text-primary
                          "
                        >
                          <Bath className="h-4 w-4" />
                        </div>

                        <span className="min-w-0 font-serif text-base font-light sm:text-lg">
                          {t.towelSheet}
                        </span>
                      </div>

                      <span className="shrink-0 font-serif text-xl text-primary sm:text-2xl">
                        €15
                      </span>
                    </div>

                    {/* Slippers & bath hat */}
                    <div
                      className="
                        flex
                        min-h-[56px]
                        w-full
                        items-center
                        justify-between
                        gap-3
                        rounded-lg
                        border
                        border-border
                        bg-card/50
                        px-3
                        py-3
                        text-left
                        sm:px-3.5
                      "
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-border
                            text-primary
                          "
                        >
                          <Footprints className="h-4 w-4" />
                        </div>

                        <span className="min-w-0 font-serif text-base font-light sm:text-lg">
                          {t.slippersHat}
                        </span>
                      </div>

                      <span className="shrink-0 font-serif text-xl text-primary sm:text-2xl">
                        €5
                      </span>
                    </div>
                  </div>
                </div>

                {/* Jacuzzi + Grill */}
                <div className="mt-5 space-y-2.5 sm:mt-6">
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
                    className="
                      group
                      flex
                      min-h-[56px]
                      w-full
                      items-center
                      justify-between
                      gap-3
                      rounded-lg
                      border
                      border-border
                      bg-card/50
                      px-3
                      py-3
                      text-left
                      transition-colors
                      hover:border-primary/50
                      hover:bg-card
                      sm:px-3.5
                    "
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-border
                          text-primary
                          transition-colors
                          group-hover:border-primary
                        "
                      >
                        <Bath className="h-4 w-4" />
                      </div>

                      <span className="min-w-0 font-serif text-base font-light sm:text-lg">
                        {t.treatments.JACUZZI.name}
                      </span>
                    </div>

                    <span className="shrink-0 font-serif text-xl text-primary sm:text-2xl">
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
                    className="
                      group
                      flex
                      min-h-[56px]
                      w-full
                      items-center
                      justify-between
                      gap-3
                      rounded-lg
                      border
                      border-border
                      bg-card/50
                      px-3
                      py-3
                      text-left
                      transition-colors
                      hover:border-primary/50
                      hover:bg-card
                      sm:px-3.5
                    "
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <div
                        className="
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-border
                          text-primary
                          transition-colors
                          group-hover:border-primary
                        "
                      >
                        <Flame className="h-4 w-4" />
                      </div>

                      <span className="min-w-0 font-serif text-base font-light sm:text-lg">
                        {t.treatments.GRILL.name}
                      </span>
                    </div>

                    <span className="shrink-0 font-serif text-xl text-primary sm:text-2xl">
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
              className="
                mt-8
                w-full
                rounded-full
                border
                border-border
                px-6
                py-3.5
                text-xs
                font-medium
                uppercase
                tracking-widest
                text-foreground
                transition-colors
                hover:border-primary
                hover:bg-primary
                hover:text-primary-foreground
                sm:mt-10
              "
            >
              {t.reserve}
            </button>

            {/* Minimum rental note */}
            <p className="mt-3 text-center text-[11px] text-muted-foreground sm:text-xs">
              {t.minimumRental}
            </p>
          </article>
        </Reveal>

        {/* Main heading */}
<Reveal>
  <h2
    className="
      mt-16
      max-w-[1100px]
      text-balance
      font-serif
      text-3xl
      font-light
      leading-[1.1]
      sm:mt-20
      sm:text-5xl
      sm:leading-[1.1]
    "
  >
    <p>{t.broomHeading1}</p>
              <p>{t.broomHeading2}</p>
              <p>{t.broomHeading3}</p>
  </h2>
</Reveal>

        {/* Steam rituals */}
        <div
          className="
            mt-8
            grid
            gap-4
            sm:mt-10
            sm:gap-6
            lg:grid-cols-3
          "
        >
          {services.map((service, i) => {
const translated =
  t.services[service.id as keyof typeof t.services]

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
                    min-h-0
                    flex-col
                    rounded-2xl
                    border
                    border-border
                    bg-card
                    p-5
                    transition-colors
                    duration-300
                    hover:border-primary/50
                    sm:min-h-[440px]
                    sm:p-8
                  "
                >
                  {/* Верхняя часть карточки */}
                  <div
                    className="
                      flex
                      min-h-0
                      flex-col
                      sm:min-h-[245px]
                    "
                  >
                    {/* Name + price */}
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className="
                          min-w-0
                          text-balance
                          font-serif
                          text-xl
                          font-light
                          leading-tight
                          sm:max-w-[12ch]
                          sm:text-2xl
                        "
                      >
                        {translated.name}
                      </h3>

                      <span className="shrink-0 font-serif text-2xl text-primary sm:text-3xl">
                        {service.price}
                      </span>
                    </div>

                    {/* Guests + duration */}
                    <div
                      className="
                        mt-4
                        flex
                        flex-wrap
                        gap-x-4
                        gap-y-2
                        text-[10px]
                        uppercase
                        tracking-[0.12em]
                        text-muted-foreground
                        sm:mt-5
                        sm:gap-x-5
                        sm:text-xs
                        sm:tracking-widest
                      "
                    >
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 shrink-0 text-primary" />

                        {translated.guests}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 shrink-0 text-primary" />

                        {translated.duration}
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
                      {translated.description}
                    </p>
                  </div>

                  {/* Includes */}
                  {translated.includes && (
                    <ul
                      className="
                        mt-5
                        space-y-2.5
                        border-t
                        border-border/60
                        pt-5
                        sm:mt-6
                        sm:pt-6
                      "
                    >
                      {translated.includes.map((item) => (
                        <li
                          key={item}
                          className="
                            flex
                            items-center
                            gap-2.5
                            text-sm
                            text-foreground/85
                          "
                        >
                          <Check className="h-4 w-4 shrink-0 text-primary" />

                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Add button */}
                  <div className="mt-auto pt-7 sm:pt-10">
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