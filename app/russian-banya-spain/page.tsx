
import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-spain`

export const metadata: Metadata = {
  title: 'Русская баня в Испании | ZHAR de PAR',
  description:
    'Русская баня в Испании — ZHAR de PAR в Бланесе на Коста-Брава. Частная баня с парением веником, банными ритуалами, купелью и джакузи. Бронирование от 3 часов.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня в Испании | ZHAR de PAR',
    description:
      'Частная русская баня ZHAR de PAR в Бланесе на Коста-Брава. Традиционное парение, банные веники, купель, джакузи и отдых на природе.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня в Испании',
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
  name: 'Русская баня в Испании',
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
      'Catalonia',
      'Spain',
    ],
  },
}

export default function RussianBanyaSpainPage() {
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
              alt="Русская баня ZHAR de PAR в Испании"
              className="h-full w-full object-cover opacity-40"
            />

            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 lg:py-32">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#B28D20]">
              ZHAR de PAR · Spain · Costa Brava
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Русская баня в Испании
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
              ZHAR de PAR — частная русская баня в Бланесе
              на Коста-Брава. Традиционное парение, банные веники,
              ритуалы и отдых на природе.
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
              Русская банная культура
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              Русская баня в Испании — теперь на Коста-Брава
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-white/70 sm:text-lg">
              <p>
                Русская баня — это не просто горячая парная.
                Это особый способ отдыха, общения и восстановления,
                который объединяет горячий пар, воду, банные веники
                и спокойное время после парения.
              </p>

              <p>
                ZHAR de PAR создана для тех, кто живёт в Испании
                или приезжает на Коста-Брава и хочет сохранить
                традиции русской бани вдали от дома.
              </p>

              <p>
                Наша баня находится в Бланесе, на побережье Коста-Брава,
                недалеко от Льорет-де-Мар и в удобной доступности
                для поездки из Барселоны.
              </p>
            </div>
          </div>
        </section>

        {/* TRADITION */}
        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#B28D20]">
              Традиции
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Что такое русская баня
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: 'Горячий пар',
                  text: 'Правильная температура и влажность создают характерную атмосферу русской парной.',
                },
                {
                  title: 'Банный веник',
                  text: 'Берёзовый или дубовый веник — один из главных символов традиционного русского парения.',
                },
                {
                  title: 'Прогревание',
                  text: 'Банный ритуал строится вокруг постепенного прогревания тела и спокойного отдыха между заходами.',
                },
                {
                  title: 'Вода',
                  text: 'После жара особенно приятно освежиться прохладной водой и продолжить отдых.',
                },
                {
                  title: 'Общение',
                  text: 'Русская баня исторически является местом, где люди встречаются, разговаривают и проводят время вместе.',
                },
                {
                  title: 'Отдых',
                  text: 'После парения важно не спешить — расслабиться, выпить чая и насладиться атмосферой.',
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

        {/* ZHAR DE PAR */}
        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#B28D20]">
                ZHAR de PAR · Blanes
              </p>

              <h2 className="text-3xl font-semibold sm:text-4xl">
                Частная русская баня на Коста-Брава
              </h2>

              <div className="mt-6 space-y-4 leading-8 text-white/70">
                <p>
                  В ZHAR de PAR вы арендуете банное пространство
                  полностью для своей компании. Никаких посторонних
                  гостей — только вы, ваши друзья или семья.
                </p>

                <p>
                  Минимальная продолжительность аренды — 3 часа.
                  В стоимость входит до 8 гостей.
                </p>

                <p>
                  К бане можно добавить банные ритуалы, берёзовые
                  и дубовые веники, купель и джакузи.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src="/photos/view/viewsauna.PNG"
                alt="Русская баня ZHAR de PAR в Испании"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#B28D20]">
              Формат отдыха
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Услуги ZHAR de PAR
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Аренда бани',
                  text: 'Частное банное пространство минимум на 3 часа.',
                },
                {
                  title: 'Парение веником',
                  text: 'Традиционное парение с берёзовыми и дубовыми вениками.',
                },
                {
                  title: 'Банный ритуал',
                  text: 'Общий или индивидуальный формат парения.',
                },
                {
                  title: 'Купель',
                  text: 'Освежение после прогревания и парения.',
                },
                {
                  title: 'Джакузи',
                  text: 'Дополнительный способ расслабиться после бани.',
                },
                {
                  title: 'Гриль',
                  text: 'Возможность дополнить банный отдых приготовлением еды.',
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
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#B28D20]">
              Costa Brava · Catalonia
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              Где находится русская баня ZHAR de PAR
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-white/70 sm:text-lg">
              <p>
                ZHAR de PAR находится в Бланесе, на Коста-Брава,
                в провинции Жирона, Каталония.
              </p>

              <p>
                Это не баня в центре Барселоны — мы находимся
                на побережье Коста-Брава. Поэтому к нам можно
                приехать специально на банный отдых из Барселоны
                или посетить нас во время отдыха в Бланесе
                и Льорет-де-Мар.
              </p>

              <p>
                Такая локация позволяет совместить русскую баню
                с отдыхом на одном из самых известных побережий
                Каталонии.
              </p>
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Для кого наша баня
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-white/70 sm:text-lg">
              <p>
                <strong className="text-white">
                  Для русскоязычных жителей Испании
                </strong>{' '}
                — возможность посетить привычную русскую баню
                недалеко от дома.
              </p>

              <p>
                <strong className="text-white">
                  Для семей
                </strong>{' '}
                — частное пространство без посторонних гостей.
              </p>

              <p>
                <strong className="text-white">
                  Для компаний друзей
                </strong>{' '}
                — баня для совместного отдыха и общения.
              </p>

              <p>
                <strong className="text-white">
                  Для туристов
                </strong>{' '}
                — необычный способ провести время во время отдыха
                на Коста-Брава.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#B28D20]">
              ZHAR de PAR · Spain
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
              Ищете русскую баню в Испании?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">
              Приезжайте в Бланес на Коста-Брава и проведите
              несколько часов в атмосфере настоящей русской бани.
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
