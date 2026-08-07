'use client'

import { Check, Clock, Users } from 'lucide-react'
import { services, treatments } from '@/lib/site-data'
import { useBooking } from '@/components/booking-provider'
import { Reveal } from '@/components/reveal'

export function ServicesSection() {
    const { open } = useBooking()

    return (
        <section id="rituals" className="relative border-t border-border/50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
                <div className="max-w-2xl">
                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Steam Rituals</p>
                    </Reveal>
                    <Reveal delay={80}>
                        <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
                            Choose the ritual that calls to you
                        </h2>
                    </Reveal>
                    <Reveal delay={140}>
                        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                            Each experience is a curated passage of heat, steam, and rest. Every private reservation is held
                            for a minimum of three hours, so there is always time to linger.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <Reveal key={service.id} delay={i * 90}>
                            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-colors duration-300 hover:border-primary/50">
                                <div className="flex items-start justify-between">
                                    <h3 className="max-w-[12ch] text-balance font-serif text-2xl font-light">{service.name}</h3>
                                    <span className="font-serif text-3xl text-primary">{service.price}</span>
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
                                            <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
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

                {/* Additional treatments */}
                <Reveal>
                    <h3 className="mt-20 text-xs font-medium uppercase tracking-[0.3em] text-primary">
                        Enhancements &amp; Treatments
                    </h3>
                </Reveal>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    {treatments.map((t, i) => (
                        <Reveal key={t.id} delay={i * 80}>
                            <button
                                onClick={() => open({ service: t.name })}
                                className="group flex h-full w-full flex-col rounded-xl border border-border bg-card/50 p-6 text-left transition-colors hover:border-primary/50 hover:bg-card"
                            >
                                <div className="flex items-baseline justify-between gap-3">
                                    <span className="font-serif text-xl font-light">{t.name}</span>
                                    <span className="font-serif text-xl text-primary">{t.price}</span>
                                </div>
                                <span className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                                    {t.duration}
                                </span>
                                <span className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.description}</span>
                            </button>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}