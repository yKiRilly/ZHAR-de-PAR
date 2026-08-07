'use client'

import Image from 'next/image'
import { UtensilsCrossed } from 'lucide-react'
import { menu } from '@/lib/site-data'
import { useBooking } from '@/components/booking-provider'
import { Reveal } from '@/components/reveal'

export function MenuSection() {
  const { open } = useBooking()

  return (
    <section id="menu" className="relative border-t border-border/50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">The Table</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
              Fire-cooked food, served in the calm after steam
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              A seasonal menu of dishes cooked over open flame. Order during your visit, or arrange a complete
              lunch or dinner to be prepared before you arrive — ready the moment you step out of the heat.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-16">
          {menu.map((course, index) => (
            <Reveal key={course.course}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  index % 2 === 1 ? 'lg:[&>figure]:order-2' : ''
                }`}
              >
                <figure className="relative aspect-[3/2] overflow-hidden rounded-2xl">
                  <Image
                    src={course.image}
                    alt={`${course.course} — plated dishes from the Ember & Birch kitchen`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </figure>
                <div>
                  <h3 className="font-serif text-3xl font-light text-primary">{course.course}</h3>
                  <ul className="mt-6 divide-y divide-border/60">
                    {course.items.map((item) => (
                      <li key={item.name} className="flex items-start justify-between gap-6 py-4">
                        <div>
                          <p className="font-serif text-xl font-light">{item.name}</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                        <span className="shrink-0 font-serif text-lg text-foreground/80">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <UtensilsCrossed className="h-5 w-5" />
              </span>
              <p className="max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                Prefer everything ready in advance? Pre-order a full lunch or dinner with your reservation and
                our kitchen will have it waiting.
              </p>
            </div>
            <button
              onClick={() => open()}
              className="shrink-0 rounded-full bg-primary px-8 py-3.5 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Arrange Dining
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}