
'use client'

import Image from 'next/image'

import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/components/language-provider'

export function Philosophy() {
  const { t } = useLanguage()

  return (
    <section
      id="philosophy"
      className="border-t border-border/60"
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-12
          overflow-hidden
          px-5
          py-20
          sm:px-8
          sm:py-24
          lg:grid-cols-2
          lg:gap-10
          lg:py-28
          xl:gap-20
          xl:py-32
        "
      >
        {/* PHOTOS */}
        <div
          className="
            relative
            min-w-0
            min-h-[430px]
            overflow-hidden
            sm:min-h-[520px]
            lg:min-h-[560px]
            xl:min-h-[620px]
          "
        >
          {/* Photo 1 */}
          <Reveal
            className="
              absolute
              right-0
              top-0
              z-10
              h-[170px]
              w-[74%]
              max-w-full
              overflow-hidden
              rounded-2xl
              sm:h-[220px]
              sm:w-[70%]
              lg:h-[210px]
              lg:w-[68%]
              xl:h-[250px]
              xl:w-[72%]
            "
          >
            <Image
              src="/photos/ps/generalps.PNG"
              alt={t.philosophyImageAlt}
              fill
              sizes="(max-width: 640px) 74vw, (max-width: 1024px) 50vw, 34vw"
              className="object-cover"
            />
          </Reveal>

          {/* Photo 2 */}
          <Reveal
            delay={100}
            className="
              absolute
              left-0
              top-[135px]
              z-30
              h-[170px]
              w-[74%]
              max-w-full
              overflow-hidden
              rounded-2xl
              sm:top-[190px]
              sm:h-[220px]
              sm:w-[70%]
              lg:top-[175px]
              lg:h-[210px]
              lg:w-[68%]
              xl:top-[220px]
              xl:h-[250px]
              xl:w-[72%]
            "
          >
            <Image
              src="/photos/ps/allps.PNG"
              alt={t.philosophyImageAlt}
              fill
              sizes="(max-width: 640px) 74vw, (max-width: 1024px) 50vw, 34vw"
              className="object-cover"
            />
          </Reveal>

          {/* Photo 3 */}
          <Reveal
            delay={180}
            className="
              absolute
              right-[5%]
              top-[270px]
              z-10
              h-[170px]
              w-[74%]
              max-w-full
              overflow-hidden
              rounded-2xl
              sm:top-[360px]
              sm:h-[220px]
              sm:w-[70%]
              lg:top-[350px]
              lg:h-[210px]
              lg:w-[68%]
              xl:top-[437px]
              xl:h-[250px]
              xl:w-[72%]
            "
          >
            <Image
              src="/photos/ps/zoneps.PNG"
              alt={t.philosophyImageAlt}
              fill
              sizes="(max-width: 640px) 74vw, (max-width: 1024px) 50vw, 34vw"
              className="object-cover"
            />
          </Reveal>
        </div>

        {/* TEXT */}
        <div
          className="
            min-w-0
            lg:translate-y-6
            xl:translate-y-12
          "
        >
          {/* Section label */}
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {t.ourPhilosophy}
            </p>
          </Reveal>

          {/* Title */}
          <Reveal delay={80}>
            <h2
              className="
                mt-4
                max-w-full
                break-words
                text-balance
                font-serif
                text-3xl
                font-light
                leading-tight
                sm:text-5xl
              "
            >
              {t.philosophyTitle}
            </h2>
          </Reveal>

          {/* Text */}
          <Reveal delay={140}>
            <div
              className="
                mt-6
                max-w-full
                space-y-5
                text-pretty
                text-sm
                leading-relaxed
                text-muted-foreground
                sm:text-base
              "
            >
              <p>{t.philosophyText1}</p>
              <p>{t.philosophyText2}</p>
              <p>{t.philosophyText3}</p>
            </div>
          </Reveal>

          {/* Slogan */}
          <Reveal delay={200}>
            <div
              className="
                mt-8
                border-t
                border-border/60
                pt-7
                text-center
                sm:mt-10
                sm:pt-8
              "
            >
              <p
                className="
                  font-serif
                  text-2xl
                  leading-tight
                  text-primary
                  sm:text-3xl
                  lg:text-[32px]
                  xl:text-4xl
                "
              >
                Slavic space for Slavic face :)
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
