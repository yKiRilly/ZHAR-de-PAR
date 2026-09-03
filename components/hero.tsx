'use client'

import { ArrowDown } from 'lucide-react'

import { useBooking } from '@/components/booking-provider'
import { useLanguage } from '@/components/language-provider'

const steamPuffs = [
  { left: '12%', delay: '0s', size: 260 },
  { left: '34%', delay: '2.5s', size: 320 },
  { left: '58%', delay: '1.2s', size: 300 },
  { left: '78%', delay: '3.4s', size: 280 },
]

export function Hero() {
  const { open } = useBooking()
  const { t } = useLanguage()

  return (
    <section
      id="top"
      className="
        relative
        flex
        min-h-[100svh]
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background image */}
      <div
        className="
          absolute
          inset-0
          scale-105
          bg-cover
          bg-center
          bg-no-repeat
          sm:bg-center
        "
        style={{
          backgroundImage: 'url("/photos/view/viewof.PNG")',
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/30 sm:bg-black/30"
        aria-hidden="true"
      />

      {/* Subtle gradient */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/20
          via-transparent
          to-background/40
        "
        aria-hidden="true"
      />

      {/* Animated steam */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        {steamPuffs.map((p, i) => (
          <span
            key={i}
            className="
              animate-steam
              absolute
              bottom-1/4
              rounded-full
              bg-foreground/10
              blur-3xl
            "
            style={{
              left: p.left,
              width: `clamp(140px, ${p.size}px, 30vw)`,
              height: `clamp(140px, ${p.size}px, 30vw)`,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
          px-5
          pt-16
          text-center
          sm:px-8
          sm:pt-20
          lg:pt-0
        "
      >
        {/* Main title */}
        <h1
          className="
            text-shadow-hero
            text-balance
            font-serif
            text-[clamp(2.7rem,12vw,4rem)]
            font-bold
            leading-[0.98]
            text-[#b28d20]
            sm:text-7xl
            sm:leading-[1.05]
            lg:text-8xl
          "
        >
          {t.heroTitle}
        </h1>

        {/* SEO location text */}
        <p
  className="
    mt-4
    text-sm
    font-medium
    uppercase
    tracking-[0.15em]
    text-[#b28d20]
    sm:mt-5
    sm:text-base
  "
>
  {t.heroLocation}
</p>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-5
            max-w-xl
            text-pretty
            text-base
            leading-relaxed
            text-foreground/90
            sm:mt-7
            sm:max-w-2xl
            sm:text-xl
            sm:text-foreground/85
          "
        >
          {t.heroDescription}
        </p>

        {/* Buttons */}
        <div
          className="
            mt-7
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-3
            sm:mt-10
            sm:flex-row
            sm:gap-4
          "
        >
          {/* Reserve */}
          <button
            type="button"
            onClick={open}
            className="
              w-full
              rounded-full
              bg-primary
              px-8
              py-3.5
              text-sm
              font-medium
              uppercase
              tracking-widest
              text-primary-foreground
              transition-colors
              hover:bg-primary/90
              sm:w-auto
              sm:px-9
              sm:py-4
            "
          >
            {t.reserveRitual}
          </button>

          {/* Explore rituals */}
          <a
            href="#sauna-rental"
            className="
              w-full
              rounded-full
              border
              border-border/80
              bg-background/20
              px-8
              py-3.5
              text-sm
              font-medium
              uppercase
              tracking-widest
              text-foreground
              backdrop-blur-sm
              transition-colors
              hover:bg-background/40
              sm:w-auto
              sm:px-9
              sm:py-4
            "
          >
            {t.exploreRituals}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#philosophy"
        aria-label={t.scrollToPhilosophy}
        className="
          absolute
          bottom-5
          left-1/2
          z-10
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-1.5
          text-muted-foreground
          transition-colors
          hover:text-foreground
          sm:bottom-8
          sm:gap-2
        "
      >
        <span className="text-[9px] uppercase tracking-[0.3em] sm:text-[10px]">
          {t.scroll}
        </span>

        <ArrowDown className="h-3.5 w-3.5 animate-bounce sm:h-4 sm:w-4" />
      </a>
    </section>
  )
}