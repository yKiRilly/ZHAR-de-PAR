'use client'

import Image from 'next/image'
import { Plus } from 'lucide-react'
import { brooms } from '@/lib/site-data'
import { useBooking } from '@/components/booking-provider'
import { Reveal } from '@/components/reveal'

export function BroomsSection() {
  const { open } = useBooking()

  return (
    <section>
      {/* Section heading */}
      <div className="max-w-2xl">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
            The Bath Broom
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
            The heart of the ritual — the venik
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Hand-tied bundles of aromatic leaves, used to circulate heat and
            gently work the body. Each is gathered in season and steeped before
            your session. Add one to your ritual — €15 each.
          </p>
        </Reveal>
      </div>

      {/* Brooms */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {brooms.map((broom, i) => (
          <Reveal key={broom.id} delay={i * 90}>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/50">

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={broom.image}
                  alt={`${broom.name} bath broom`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-8">

                {/* Name + Price */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[12ch] text-balance font-serif text-2xl font-light">
                    {broom.name}
                  </h3>

                  <span className="shrink-0 font-serif text-3xl text-primary">
                    {broom.price}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {broom.description}
                </p>

                {/* Add to ritual */}
                <button
                  type="button"
                  onClick={() => open({ service: broom.name })}
                  className="mt-8 self-start rounded-full border border-border px-6 py-3 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Plus className="mr-2 inline-block h-4 w-4" />
                  Add to ritual
                </button>

              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
