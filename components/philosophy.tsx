'use client'

import Image from 'next/image'

import { Reveal } from '@/components/reveal'

import { useLanguage } from '@/components/language-provider'

export function Philosophy() {
  const { t } = useLanguage()

  return (
    <section id="philosophy" className="border-t border-border/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
        {/* Photos */}
        <div className="relative min-h-[620px]">
          {/* Photo 1 */}
          <Reveal
            className="absolute right-0 top-0 z-10 h-[250px] w-[72%] overflow-hidden rounded-2xl"
          >
            <Image
              src="/photos/ps/generalps.PNG"
              alt={t.philosophyImageAlt}
              fill
              sizes="(max-width: 1024px) 72vw, 36vw"
              className="object-cover"
            />
          </Reveal>

          {/* Photo 3 */}
          <Reveal
            delay={180}
            className="absolute right-[5%] top-[437px] z-10 h-[250px] w-[72%] overflow-hidden rounded-2xl"
          >
            <Image
              src="/photos/ps/zoneps.PNG"
              alt={t.philosophyImageAlt}
              fill
              sizes="(max-width: 1024px) 72vw, 36vw"
              className="object-cover"
            />
          </Reveal>

          {/* Photo 2 */}
          <Reveal
            delay={100}
            className="absolute left-0 top-[220px] z-30 h-[250px] w-[72%] overflow-hidden rounded-2xl"
          >
            <Image
              src="/photos/ps/allps.PNG"
              alt={t.philosophyImageAlt}
              fill
              sizes="(max-width: 1024px) 72vw, 36vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        {/* Text */}
        <div className="lg:translate-y-12">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {t.ourPhilosophy}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
              {t.philosophyTitle}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-6 space-y-5 text-pretty leading-relaxed text-muted-foreground">
              <p>{t.philosophyText1}</p>
              <p>{t.philosophyText2}</p>
              <p>{t.philosophyText3}</p>
            </div>
          </Reveal>

          {/* Slavic slogan */}
          <Reveal delay={200}>
            <div className="mt-10 border-t border-border/60 pt-8 text-center">
              <p className="font-serif text-xl leading-tight text-primary sm:text-2xl">
                Slavic space for Slavic face
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}