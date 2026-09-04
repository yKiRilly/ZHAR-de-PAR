
import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = 'https://www.zhardepar.com'
const pageUrl = `${siteUrl}/russian-banya-lloret-de-mar`

export const metadata: Metadata = {
  title: 'Русская баня в Льорет-де-Мар | ZHAR de PAR',
  description:
    'Русская баня рядом с Льорет-де-Мар — ZHAR de PAR в Бланесе на Коста-Брава. Частная баня, парение веником, банные ритуалы, купель и джакузи.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: pageUrl,
    siteName: 'ZHAR de PAR',
    title: 'Русская баня в Льорет-де-Мар | ZHAR de PAR',
    description:
      'Частная русская баня в Бланесе рядом с Льорет-де-Мар. Парение веником, банные ритуалы, купель, джакузи и отдых на Коста-Брава.',
    images: [
      {
        url: '/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня рядом с Льорет-де-Мар',
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
  name: 'Русская баня рядом с Льорет-де-Мар',
  description:
    'Русская баня ZHAR de PAR в Бланесе рядом с Льорет-де-Мар.',
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
      'Lloret de Mar',
      'Blanes',
      'Costa Brava',
      'Girona',
      'Barcelona',
    ],
  },
}

export default function RussianBanyaLloretPage() {
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
              alt="Русская баня ZHAR de PAR рядом с Льорет-де-Мар"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 lg:py-32">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-[#B28D20]">
              ZHAR de PAR · Lloret de Mar · Costa Brava
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Русская баня рядом с Льорет-де-Мар
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
              Частная русская баня ZHAR de PAR находится в Бланесе,
              недалеко от Льорет-де-Мар. Настоящее парение,
              банные веники и отдых на Коста-Брава.
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
              Lloret de Mar · Blanes
            </p>

            <h2 className="text-3xl font-semibold sm:text-4xl">
              Русская баня недалеко от Льорет-де-Мар
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-white/70 sm:text-lg">
              <p>
                Если вы ищете русскую баню в Льорет-де-Мар или
                рядом с ним, обратите внимание на ZHAR de PAR
                в соседнем Бланесе.
              </p>

              <p>
                Бланес и Льорет-де-Мар находятся на Коста-Брава,
                поэтому поездка из Льорет-де-Мар позволяет совместить
                отдых на побережье с настоящей русской баней.
              </p>

              <p>
                У нас вы можете арендовать частное банное пространство
                для себя, семьи или компании друзей. Минимальная
                продолжительность аренды — 3 часа.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#B28D20]">
              Баня и отдых
            </p>

            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Что можно выбрать
            </h2>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: 'Частная аренда',
                  text: 'Всё банное пространство только для вашей компании, без посторонних гостей.',
                },
                {
                  title: 'Парение веником',
                  text: 'Традиционное русское парение с берёзовыми и дубовыми вениками.',
                },
                {
                  title: 'Банные ритуалы',
                  text: 'Общий или индивидуальный ритуал для полноценного банного отдыха.',
                },
                {
                  title: 'Купель',
                  text: 'Можно добавить купель к бронированию и освежиться после парной.',
                },
                {
                  title: 'Джакузи',
                  text: 'Дополнительный вариант отдыха после парения.',
                },
                {
                  title: 'До 8 гостей',
                  text: 'До 8 гостей включены в стоимость аренды банного пространства.',
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
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/photos/view/viewsauna.PNG"
                alt="Парная ZHAR de PAR в Бланесе рядом с Льорет-де-Мар"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>

            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#B28D20]">
                Blanes · Costa Brava
              </p>

              <h2 className="text-3xl font-semibold sm:text-4xl">
                Почему стоит приехать из Льорет-де-Мар
              </h2>

              <div className="mt-6 space-y-4 leading-8 text-white/70">
                <p>
                  ZHAR de PAR находится в Бланесе — городе
                  непосредственно на Коста-Брава.
                </p>

                <p>
                  Если вы отдыхаете в Льорет-де-Мар, поездка
                  в Бланес позволит провести несколько часов
                  в частной русской бане, а затем продолжить
                  отдых на побережье.
                </p>

                <p>
                  Такой формат особенно подходит тем, кто хочет
                  не общественную сауну, а отдельное пространство
                  для своей семьи или компании.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Для отдыха с друзьями и семьёй
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-white/70 sm:text-lg">
              <p>
                <strong className="text-white">
                  Семья
                </strong>{' '}
                — частное пространство без посторонних гостей.
              </p>

              <p>
                <strong className="text-white">
                  Друзья
                </strong>{' '}
                — удобный формат для компании до 8 человек.
              </p>

              <p>
                <strong className="text-white">
                  Любители русской бани
                </strong>{' '}
                — парение веником и традиционный банный ритуал.
              </p>

              <p>
                <strong className="text-white">
                  Гости Льорет-де-Мар
                </strong>{' '}
                — возможность совместить отдых на Коста-Брава
                с посещением русской бани в соседнем Бланесе.
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
              Ищете русскую баню рядом с Льорет-де-Мар?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/65">
              Приезжайте в Бланес и проведите время
              в настоящей русской бане на Коста-Брава.
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
