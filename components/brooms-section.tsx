'use client'

import Image from 'next/image'
import { Plus } from 'lucide-react'
import { brooms } from '@/lib/site-data'
import { useBooking } from '@/components/booking-provider'
import { Reveal } from '@/components/reveal'

export function BroomsSection() {
  const { open } = useBooking()

  return (
    <section id="brooms" className="relative border-t border-border/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">The Bath Broom</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
              The heart of the ritual — the venik
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Hand-tied bundles of aromatic leaves, used to circulate heat and gently work the body. Each is
              gathered in season and steeped before your session. Add one to your ritual — €15 each.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brooms.map((broom, i) => (
            <Reveal key={broom.id} delay={i * 70}>
              <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/50">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={broom.image}
                    alt={`${broom.name} bath broom against a dark stone background`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-serif text-2xl font-light">{broom.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{broom.description}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-3">
                    <span className="font-serif text-2xl text-primary">{broom.price}</span>
                    <button
                      onClick={() => open({ broom: broom.name })}
                      aria-label={`Add ${broom.name} broom to a reservation`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}