'use client'

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useBooking } from '@/components/booking-provider'
import { BrandMark } from '@/components/brand-mark'
import { Reveal } from '@/components/reveal'

export function SiteFooter() {
    const { open } = useBooking()

    return (
        <footer id="contact" className="relative border-t border-border/50">
            {/* CTA band */}
            <div
                className="relative overflow-hidden border-b border-border/50 bg-cover bg-center"
                style={{ backgroundImage: 'url(/images/gallery-fire.png)' }}
            >
                <div className="absolute inset-0 bg-background/85 backdrop-blur-[2px]" />
                <div className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 sm:py-32">
                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Your Private Escape Awaits</p>
                    </Reveal>
                    <Reveal delay={80}>
                        <h2 className="mt-5 text-balance font-serif text-4xl font-light leading-tight sm:text-6xl">
                            Reserve the house for an evening of steam
                        </h2>
                    </Reveal>
                    <Reveal delay={140}>
                        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                            Private sessions are held for a minimum of three hours. Choose your ritual, your brooms, and your
                            table — we will prepare the rest.
                        </p>
                    </Reveal>
                    <Reveal delay={200}>
                        <button
                            onClick={() => open()}
                            className="mt-9 rounded-full bg-primary px-10 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Book Now
                        </button>
                    </Reveal>
                </div>
            </div>

            {/* Footer content */}
            <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
                <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
                    <div>
                        <div className="flex items-center gap-2.5">
                            <BrandMark className="h-7 w-7 text-primary" />
                            <span className="font-serif text-xl tracking-wide">
                                Ember <span className="text-primary">&amp;</span> Birch
                            </span>
                        </div>
                        <p className="mt-5 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                            A private thermal bathhouse and wellness retreat devoted to the ancient ritual of steam, fire,
                            and water. Reserved exclusively, for you.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Visit</h3>
                        <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                14 Cedar Hollow, Northern Forest Reserve
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                                Daily · 10:00 — 24:00 · By reservation
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Concierge</h3>
                        <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                            <li>
                                <a href="tel:+3210000000" className="flex items-center gap-3 transition-colors hover:text-foreground">
                                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                                    +32 10 000 000
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:stay@emberandbirch.example"
                                    className="flex items-center gap-3 transition-colors hover:text-foreground"
                                >
                                    <Mail className="h-4 w-4 shrink-0 text-primary" />
                                    stay@emberandbirch.example
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row">
                    <p>© {new Date().getFullYear()} Ember &amp; Birch. All rights reserved.</p>
                    <p className="uppercase tracking-widest">Crafted for stillness</p>
                </div>
            </div>
        </footer>
    )
}