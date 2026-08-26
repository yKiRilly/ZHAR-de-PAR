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
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/photos/view/viewof.PNG")',
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/30"
        aria-hidden="true"
      />

      {/* Subtle gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-background/35"
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
            className="animate-steam absolute bottom-1/4 rounded-full bg-foreground/10 blur-3xl"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 text-center">
        <p className="relative top-6 mb-6 animate-in fade-in slide-in-from-bottom-4 text-lg font-black uppercase tracking-[0.25em] text-primary duration-700 [text-shadow:0_0_1px_currentColor,0_0_1px_currentColor,0_0_1px_currentColor]">
          {t.heroLabel}
        </p>

        <h1 className="text-shadow-hero text-balance font-serif text-5xl font-bold leading-[1.05] text-[#b28d20] sm:text-7xl lg:text-8xl">
          {t.heroTitle}
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/85 sm:text-xl">
          {t.heroDescription}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* Reserve */}
          <button
            type="button"
            onClick={() => open()}
            className="w-full rounded-full bg-primary px-9 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            {t.reserveRitual}
          </button>

          {/* Explore rituals */}
          <a
            href="#sauna-rental"
            className="w-full rounded-full border border-border/80 bg-background/20 px-9 py-4 text-sm font-medium uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:bg-background/40 sm:w-auto"
          >
            {t.exploreRituals}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#philosophy"
        aria-label={t.scrollToPhilosophy}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">
          {t.scroll}
        </span>

        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}