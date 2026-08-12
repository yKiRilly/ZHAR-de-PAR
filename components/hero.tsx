'use client'

import { ArrowDown } from 'lucide-react'
import { useBooking } from '@/components/booking-provider'

const steamPuffs = [
  { left: '12%', delay: '0s', size: 260 },
  { left: '34%', delay: '2.5s', size: 320 },
  { left: '58%', delay: '1.2s', size: 300 },
  { left: '78%', delay: '3.4s', size: 280 },
]

export function Hero() {
  const { open } = useBooking()

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
  className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: 'url("/photos/view/viewof.PNG")' }}
  aria-hidden="true"
/>
<div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" aria-hidden="true" />
      <div className="absolute inset-0 bg-background/25" aria-hidden="true" />

      {/* Animated steam */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {steamPuffs.map((p, i) => (
          <span
            key={i}
            className="animate-steam absolute bottom-1/4 rounded-full bg-foreground/10 blur-3xl"
            style={{ left: p.left, width: p.size, height: p.size, animationDelay: p.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <p className="mb-6 animate-in fade-in slide-in-from-bottom-4 text-xs font-medium uppercase tracking-[0.4em] text-primary duration-700">
          Private Premiun Bathhouse
        </p>
        <h1 className="text-shadow-hero text-balance font-serif text-5xl font-light leading-[1.05] sm:text-7xl lg:text-8xl">
          Rent a completely private outdoor space
        </h1>
        <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-foreground/80 sm:text-lg">
          This is a bathing estate where a person is left alone with nature, the warmth of a tree, a living fire and real steam.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => open()}
            className="w-full rounded-full bg-primary px-9 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Reserve Your Ritual
          </button>
          <a
            href="#rituals"
            className="w-full rounded-full border border-border/80 bg-background/20 px-9 py-4 text-sm font-medium uppercase tracking-widest text-foreground backdrop-blur-sm transition-colors hover:bg-background/40 sm:w-auto"
          >
            Explore Rituals
          </a>
        </div>
      </div>

      <a
        href="#philosophy"
        aria-label="Scroll to philosophy"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}