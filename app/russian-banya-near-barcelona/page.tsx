
import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = 'https://www.zhardepar.com'

export const metadata: Metadata = {
  title: 'Русская баня рядом с Барселоной | ZHAR de PAR',
  description:
    'Русская баня рядом с Барселоной — ZHAR de PAR в Бланесе на Коста-Брава. Частная баня, парение веником, банные ритуалы, купель, джакузи и отдых на природе.',
  alternates: {
    canonical: `${siteUrl}/russian-banya-near-barcelona`,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: `${siteUrl}/russian-banya-near-barcelona`,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня рядом с Барселоной | ZHAR de PAR',
    description:
      'Частная русская баня в Бланесе на Коста-Брава, недалеко от Барселоны. Парение веником, банные ритуалы, купель и отдых на природе.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня рядом с Барселоной',
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
  name: 'Русская баня рядом с Барселоной',
  description:
    'Русская баня ZHAR de PAR в Бланесе на Коста-Брава рядом с Барселоной.',
  url: `${siteUrl}/russian-banya-near-barcelona`,
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
  },
}

export default function RussianBanyaNearBarcelonaPage() {
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
              alt="Русская баня ZHAR de PAR рядом с Барселоной"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 lg:py-32">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#B28D20]">
              ZHAR de PAR · Costa Brava
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Русская баня рядом с Барселоной
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
              Частная русская баня ZHAR de PAR находится в Бланесе,
              на Коста-Брава. Это место для настоящего парения,
              отдыха и банных ритуалов недалеко от Барселоны.
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
                Вернуться на сайт
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
              Русская баня недалеко от Барселоны
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-white/70 sm:text-lg">
              <p>
                Если вы ищете русскую баню рядом с Барселоной,
                ZHAR de PAR находится в Бланесе — на побережье
                Коста-Брава. Здесь можно арендовать банное пространство
                полностью для себя, семьи или компании друзей.
              </p>

              <p>
                Мы сохранили главные традиции русской бани:
                горячий пар, правильное прогревание, банные веники
                и атмосферу спокойного отдыха. При этом пространство
                создано в современном формате для комфортного отдыха
                на природе.
              </p>

              <p>
                ZHAR de PAR подходит тем, кто хочет выбраться из
                Барселоны на несколько часов и провести время
                в настоящей частной бане на Коста-Брава.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Что вас ждёт в ZHAR de PAR
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: 'Частная баня',
                  text: 'Банное пространство полностью в вашем распоряжении. До 8 гостей включено в аренду.',
                },
                {
                  title: 'Парение веником',
                  text: 'Берёзовые и дубовые веники для традиционного русского банного ритуала.',
                },
                {
                  title: 'Банные ритуалы',
                  text: 'Общий и индивидуальный паровой ритуал для полноценного банного отдыха.',
                },
                {
                  title: 'Купель и джакузи',
                  text: 'Дополнительные водные процедуры после парной для ещё более насыщенного отдыха.',
                },
                {
                  title: 'Отдых на природе',
                  text: 'Баня расположена в Бланесе, на Коста-Брава, вдали от городской суеты.',
                },
                {
                  title: 'Компания друзей',
                  text: 'Формат подходит для семейного отдыха, встречи друзей или особого вечера.',
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
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#B28D20]">
                Blanes · Costa Brava
              </p>

              <h2 className="text-3xl font-semibold sm:text-4xl">
                Баня в Бланесе вместо городской суеты
              </h2>

              <div className="mt-6 space-y-4 leading-8 text-white/70">
                <p>
                  Бланес находится на Коста-Брава и является удобным
                  направлением для поездки из Барселоны.
                </p>

                <p>
                  Поэтому ZHAR de PAR — хороший вариант для тех,
                  кто ищет русскую баню не обязательно в самом городе,
                  а рядом с Барселоной, в спокойной обстановке
                  на побережье.
                </p>

                <p>
                  Также к нам удобно добраться из Ллорет-де-Мар,
                  Тосса-де-Мар и других городов Коста-Брава.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/photos/view/viewsauna.PNG"
                alt="Русская баня ZHAR de PAR в Бланесе"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#B28D20]">
              ZHAR de PAR
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
              Хотите настоящую русскую баню рядом с Барселоной?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">
              Забронируйте частную баню в Бланесе и проведите
              несколько часов в атмосфере настоящей русской бани
              на Коста-Брава.
            </p>

            <Link
              href="/#booking"
              className="mt-8 inline-flex rounded-full bg-[#B28D20] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:opacity-90"
            >
              Забронировать
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
