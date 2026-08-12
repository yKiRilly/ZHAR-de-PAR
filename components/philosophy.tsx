import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const pillars = [
  { value: 'Complete privacy' },
  { value: 'A real slavic sauna' },
  { value: 'In the midst of nature' },
]

export function Philosophy() {
  return (
    <section id="philosophy" className="border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
        
        {/* Photo */}
        <Reveal className="relative min-h-[500px] overflow-hidden rounded-2xl">
          <Image
            src="/photos/view/viewgeneral.PNG"
            alt="Traditional Russian bathhouse"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Our Philosophy
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
              A slow ritual, kept alive by fire and patience
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>
                DUBъ is a private bathhouse on Costa Brava, where slavic bath
                tradition retains its authenticity. We have created a space in
                which nature becomes part of a bathing ritual: here the noise
                of the city is replaced by the silence of the forest, and time
                slows down, allowing you to completely switch to rest.
              </p>

              <p>
                We do not strive to be a SPA complex and do not create
                ostentatious luxury. Instead, we preserve what is truly
                valuable: real steam, a living fire, the scent of oak,
                freedom, privacy and respect for the bath culture. DUBъ is a
                place where you can spend time the way you want it: with your
                loved ones, in silence or with bath rituals under the guidance
                of an experienced bath attendant.
              </p>

              <p>
                For us, a sauna is not a service, but a fortune. This is an
                opportunity to recuperate, feel connected to nature and
                remember what a real vacation can be without haste, unnecessary
                noise and distractions.
              </p>
            </div>
          </Reveal>

          {/* Three advantages */}
          <Reveal delay={200}>
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8 text-center">
              {pillars.map((p) => (
                <div key={p.value}>
                  <dt className="font-serif text-lg leading-tight text-primary sm:text-xl">
                    {p.value}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}