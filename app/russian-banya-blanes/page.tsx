
import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-blanes`

export const metadata: Metadata = {
  title: 'Русская баня в Бланесе | ZHAR de PAR',
  description:
    'Русская баня в Бланесе на Коста-Брава — ZHAR de PAR. Частная баня с парением веником, банными ритуалами, купелью и джакузи. Бронирование от 3 часов.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня в Бланесе | ZHAR de PAR',
    description:
      'Частная русская баня в Бланесе на Коста-Брава. Парение веником, банные ритуалы, купель, джакузи и отдых на природе.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня в Бланесе',
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
  name: 'Русская баня в Бланесе',
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

export default function RussianBanyaBlanesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/photos/view/viewgeneral.PNG"
              alt="Русская баня ZHAR de PAR в Бланесе"
              className="h-full w-full object-cover opacity-40"
            />

            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 lg:py-32">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#B28D20]">
              ZHAR de PAR · Blanes · Costa Brava
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Русская баня в Бланесе
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
              Частная русская баня ZHAR de PAR в Бланесе —
              место для настоящего парения, банных ритуалов
              и спокойного отдыха на Коста-Брава.
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

        {/* INTRO */}
        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#B28D20]">
              Blanes · Girona · Spain
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              Русская баня в самом Бланесе
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-white/70 sm:text-lg">
              <p>
                ZHAR de PAR — частная русская баня в Бланесе,
                на побережье Коста-Брава. Если вы живёте в Бланесе
                или отдыхаете поблизости, вам не нужно ехать
                в Барселону, чтобы найти русскую баню.
              </p>

              <p>
                У нас можно арендовать банное пространство полностью
                для своей компании, семьи или друзей. Минимальное
                время аренды — 3 часа.
              </p>

              <p>
                В центре нашего подхода — традиционная русская баня:
                горячий пар, банные веники, прогревание, вода
                и полноценный отдых после парной.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#B28D20]">
              Наш формат
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Что предлагает ZHAR de PAR
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: 'Частная баня',
                  text: 'Пространство полностью принадлежит вашей компании на время аренды. Посторонних гостей нет.',
                },
                {
                  title: 'Минимум 3 часа',
                  text: 'Достаточно времени, чтобы спокойно прогреться, попариться и отдохнуть без спешки.',
                },
                {
                  title: 'До 8 гостей',
                  text: 'В аренду включено до 8 гостей. Отличный формат для семьи или компании друзей.',
                },
                {
                  title: 'Берёзовые и дубовые веники',
                  text: 'Традиционный банный атрибут для тех, кто хочет полноценное русское парение.',
                },
                {
                  title: 'Купель',
                  text: 'Можно добавить купель к вашему банному отдыху и завершить прогревание прохладной водой.',
                },
                {
                  title: 'Джакузи',
                  text: 'Дополнительный вариант расслабиться после парной и провести время с друзьями.',
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

        {/* LOCATION */}
        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#B28D20]">
                Локация
              </p>

              <h2 className="text-3xl font-semibold sm:text-4xl">
                Баня в Бланесе на Коста-Брава
              </h2>

              <div className="mt-6 space-y-4 leading-8 text-white/70">
                <p>
                  Бланес расположен на Коста-Брава, в провинции
                  Жирона. Это удобное место для тех, кто живёт
                  на побережье или планирует поездку из Барселоны.
                </p>

                <p>
                  ZHAR de PAR находится в Бланесе, поэтому
                  к нам удобно приехать из Ллорет-де-Мар,
                  Тосса-де-Мар и других городов побережья.
                </p>

                <p>
                  Если вы ищете «баня Бланес», «русская баня Бланес»
                  или «баня на Коста-Брава», вы нашли именно тот
                  формат, который ищете: частное пространство
                  и традиционная русская баня.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/photos/view/viewsauna.PNG"
                alt="Парная русской бани ZHAR de PAR в Бланесе"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* WHO */}
        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Для кого подходит баня в Бланесе
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: 'Для семьи',
                  text: 'Спокойный частный отдых без посторонних людей.',
                },
                {
                  title: 'Для друзей',
                  text: 'Можно провести несколько часов вместе, попариться и отдохнуть.',
                },
                {
                  title: 'Для любителей бани',
                  text: 'Традиционный формат с банными вениками и парением.',
                },
                {
                  title: 'Для гостей Коста-Брава',
                  text: 'Баня может стать частью отдыха на побережье.',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 p-6"
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

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#B28D20]">
              ZHAR de PAR · Blanes
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
              Ищете русскую баню в Бланесе?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">
              Забронируйте частную баню ZHAR de PAR
              и проведите время в атмосфере настоящей русской бани
              на Коста-Брава.
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
