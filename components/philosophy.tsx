import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const pillars = [
    { value: 'Fire', label: 'Wood-fired stoves, tended by hand' },
    { value: 'Water', label: 'Spring-fed plunge, ice and warmth' },
    { value: 'Birch', label: 'Aromatic brooms, gathered in season' },
]

export function Philosophy() {
    return (
        <section id="philosophy" className="relative border-t border-border/50 py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
                <Reveal>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                        <Image
                            src="/images/philosophy.png"
                            alt="Sunlight cutting through steam in a warm oak sauna with hanging birch brooms"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                    </div>
                </Reveal>

                <div>
                    <Reveal>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Our Philosophy</p>
                    </Reveal>
                    <Reveal delay={80}>
                        <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
                            A slow ritual, kept alive by fire and patience
                        </h2>
                    </Reveal>
                    <Reveal delay={140}>
                        <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
                            <p>
                                Ember &amp; Birch began with a simple belief: that true restoration cannot be rushed. Long
                                before wellness became an industry, the bathhouse was a place of quiet ceremony — a room of
                                heat and steam where the body softened and the mind fell still.
                            </p>
                            <p>
                                We have devoted ourselves to honouring that tradition without compromise. Every session is
                                private and unhurried, guided by a master who tends the fire, pours the herbal infusions, and
                                works the aromatic brooms with a craft passed down through generations.
                            </p>
                            <p>
                                There is no clock here — only the rhythm of steam and cold water, warmth and rest, repeated
                                until the world outside dissolves.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={200}>
                        <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
                            {pillars.map((p) => (
                                <div key={p.value}>
                                    <dt className="font-serif text-2xl text-primary sm:text-3xl">{p.value}</dt>
                                    <dd className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.label}</dd>
                                </div>
                            ))}
                        </dl>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}