
import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-costa-brava`

export const metadata: Metadata = {
  title: 'Русская баня на Коста-Брава | ZHAR de PAR',
  description:
    'Русская баня на Коста-Брава в Бланесе. ZHAR de PAR — частная баня в Испании с парением веником, банными ритуалами, купелью, джакузи и отдыхом на природе.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня на Коста-Брава | ZHAR de PAR',
    description:
      'Частная русская баня в Бланесе на Коста-Брава. Парение веником, банные ритуалы, купель, джакузи и отдых на природе.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня на Коста-Брава',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Русская баня на Коста-Брава',
  description:
    'Русская баня ZHAR de PAR в Бланесе на Коста-Брава.',
  url: pageUrl,
  inLanguage: 'ru',
  isPartOf: {
    '@type': 'WebSite',
    name: 'ZHAR de PAR',
    url: siteUrl,
  },
  about: {
    '@type': 'LocalBusiness',
    name: 'ZHAR de PAR',
    url: siteUrl,
    telephone: '+34601801800',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Blanes',
      addressRegion: 'Girona',
      addressCountry: 'ES',
    },
    areaServed: [
      'Blanes',
      'Lloret de Mar',
      'Tossa de Mar',
      'Costa Brava',
      'Girona',
      'Barcelona',
    ],
  },
}

export default function RussianBanyaCostaBravaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="min-h-screen bg-black text-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/photos/view/viewgeneral.PNG"
              alt="Русская баня ZHAR de PAR на Коста-Брава"
              className="h-full w-full object-cover opacity-40"
            />

            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 lg:py-32">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#B28D20]">
              ZHAR de PAR · Blanes · Costa Brava
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Русская баня на Коста-Брава
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
              Частная русская баня ZHAR de PAR в Бланесе —
              для тех, кто хочет совместить традиционное русское
              парение с отдыхом на Коста-Брава.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#booking"
                className="inline-flex items-center justify-center rounded-full bg-[#B28D20] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:opacity-90"
              >
                Забронировать баню
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                На главную
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#B28D20]">
              Русская баня в Испании
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              Настоящая русская баня на побережье Коста-Брава
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-white/70 sm:text-lg">
              <p>
                ZHAR de PAR — это частная русская баня в Бланесе,
                на побережье Коста-Брава. Здесь можно провести
                несколько часов в спокойной атмосфере, попариться
                и отдохнуть в компании друзей или семьи.
              </p>

              <p>
                В основе нашего формата — традиции русской бани:
                горячий пар, банные веники, прогревание и чередование
                тепла и воды. Всё это сочетается с современным
                комфортом и отдыхом на природе.
              </p>

              <p>
                Если вы живёте в Бланесе, Ллорет-де-Мар, Тосса-де-Мар
                или приезжаете на Коста-Брава из Барселоны,
                ZHAR de PAR может стать местом для полноценного
                банного отдыха.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Что есть в нашей бане
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: 'Частная аренда',
                  text: 'Вы арендуете банное пространство полностью для своей компании. Минимальная аренда — 3 часа.',
                },
                {
                  title: 'До 8 гостей',
                  text: 'В стоимость аренды включено до 8 гостей. Дополнительные гости оплачиваются отдельно.',
                },
                {
                  title: 'Банные веники',
                  text: 'Берёзовые и дубовые веники для традиционного русского парения.',
                },
                {
                  title: 'Парение',
                  text: 'Можно выбрать общий или индивидуальный банный ритуал.',
                },
                {
                  title: 'Купель',
                  text: 'Купель помогает завершить банный ритуал и освежиться после парной.',
                },
                {
                  title: 'Джакузи',
                  text: 'Дополнительный вариант расслабиться и провести время после парения.',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-black/40 p-6"
                >
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white/65">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="overflow-hidden rounded-3xl lg:order-1">
              <img
                src="/photos/view/viewsauna.PNG"
                alt="Парная ZHAR de PAR в Бланесе"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>

            <div className="lg:order-2">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#B28D20]">
                Blanes · Girona
              </p>

              <h2 className="text-3xl font-semibold sm:text-4xl">
                Русская баня в Бланесе
              </h2>

              <div className="mt-6 space-y-4 leading-8 text-white/70">
                <p>
                  Бланес — один из известных городов Коста-Брава,
                  расположенный в провинции Жирона.
                </p>

                <p>
                  ZHAR de PAR находится именно здесь, поэтому
                  мы не называем себя баней в центре Барселоны.
                  Мы предлагаем другой формат — поездку на Коста-Брава
                  ради настоящего банного отдыха.
                </p>

                <p>
                  До нас удобно добираться из Бланеса, Ллорет-де-Мар,
                  Тосса-де-Мар и других населённых пунктов побережья.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Кому подойдёт ZHAR de PAR
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-white/70 sm:text-lg">
              <p>
                <strong className="text-white">
                  Для семьи
                </strong>{' '}
                — спокойный формат отдыха, где можно провести
                несколько часов вместе.
              </p>

              <p>
                <strong className="text-white">
                  Для компании друзей
                </strong>{' '}
                — частная баня без посторонних людей и ограничений
                общего общественного пространства.
              </p>

              <p>
                <strong className="text-white">
                  Для любителей русской бани
                </strong>{' '}
                — парение веником, банные ритуалы и традиционный
                подход к отдыху.
              </p>

              <p>
                <strong className="text-white">
                  Для гостей Коста-Брава
                </strong>{' '}
                — возможность совместить отдых на побережье
                с настоящей русской баней.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#B28D20]">
              ZHAR de PAR
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
              Хотите посетить русскую баню на Коста-Брава?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">
              Забронируйте частную баню в Бланесе и проведите
              время в атмосфере настоящей русской бани.
            </p>

            <Link
              href="/#booking"
              className="mt-8 inline-flex rounded-full bg-[#B28D20] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:opacity-90"
            >
              Забронировать баню
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
