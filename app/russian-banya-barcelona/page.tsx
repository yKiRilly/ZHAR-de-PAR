import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Русская баня в Барселоне рядом с городом | ZHAR de PAR',
  description:
    'Ищете русскую баню в Барселоне? ZHAR de PAR находится в Бланесе на Коста-Брава, недалеко от Барселоны. Частная баня, парение веником, банные ритуалы, купель и джакузи.',
  alternates: {
    canonical: 'https://www.zhardepar.com/russian-banya-barcelona',
  },
  openGraph: {
    title: 'Русская баня в Барселоне рядом с городом | ZHAR de PAR',
    description:
      'Частная русская баня ZHAR de PAR в Бланесе на Коста-Брава — рядом с Барселоной.',
    url: 'https://www.zhardepar.com/russian-banya-barcelona',
    siteName: 'ZHAR de PAR',
    type: 'website',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://www.zhardepar.com/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня рядом с Барселоной',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Русская баня в Барселоне рядом с городом | ZHAR de PAR',
    description:
      'Русская баня ZHAR de PAR в Бланесе на Коста-Брава, недалеко от Барселоны.',
    images: ['https://www.zhardepar.com/photos/view/viewgeneral.PNG'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.zhardepar.com/russian-banya-barcelona#webpage',
      url: 'https://www.zhardepar.com/russian-banya-barcelona',
      name: 'Русская баня в Барселоне рядом с городом | ZHAR de PAR',
      description:
        'Русская баня ZHAR de PAR в Бланесе на Коста-Брава, недалеко от Барселоны.',
      inLanguage: 'ru',
      isPartOf: {
        '@id': 'https://www.zhardepar.com/#website',
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.zhardepar.com/#business',
      name: 'ZHAR de PAR',
      url: 'https://www.zhardepar.com/',
      image: 'https://www.zhardepar.com/photos/view/viewgeneral.PNG',
      description:
        'Частная русская баня ZHAR de PAR в Бланесе на Коста-Брава рядом с Барселоной.',
      telephone: '+34601801800',
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Blanes',
        addressRegion: 'Girona',
        addressCountry: 'ES',
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Barcelona',
        },
        {
          '@type': 'City',
          name: 'Blanes',
        },
        {
          '@type': 'City',
          name: 'Lloret de Mar',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Costa Brava',
        },
      ],
      sameAs: ['https://www.instagram.com/banka_blanes/'],
    },
  ],
}

export default function RussianBanyaBarcelonaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <section className="relative min-h-[70vh] overflow-hidden">
        <img
          src="/photos/view/viewgeneral.PNG"
          alt="Русская баня ZHAR de PAR рядом с Барселоной"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-20">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/70">
            БЛАНЕС · КОСТА-БРАВА · РЯДОМ С БАРСЕЛОНОЙ
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold uppercase leading-[0.95] md:text-7xl">
            Русская баня
            <br />
            рядом с Барселоной
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
            ZHAR de PAR — частная русская баня в Бланесе на Коста-Брава.
            Уютное банное пространство недалеко от Барселоны для отдыха с
            друзьями и семьёй.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#B28D20] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:opacity-90"
            >
              Забронировать баню
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center border border-white/40 px-7 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-white hover:text-black"
            >
              Перейти на сайт
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">
          Русская баня рядом с Барселоной
        </p>

        <h2 className="max-w-4xl text-3xl font-semibold uppercase leading-tight md:text-5xl">
          Баня недалеко от Барселоны на Коста-Брава
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/70 md:text-lg">
          <p>
            Если вы ищете русскую баню в Барселоне или недалеко от города,
            обратите внимание на ZHAR de PAR в Бланесе. Мы находимся на
            Коста-Брава, в удобной близости от Барселоны.
          </p>

          <p>
            Это не общественная сауна, а частное банное пространство, которое
            можно арендовать для себя, друзей или семьи. Здесь можно спокойно
            провести несколько часов без посторонних гостей.
          </p>

          <p>
            В ZHAR de PAR вас ждёт русская парная, традиционное парение
            веником, банные ритуалы, купель, джакузи и зона для отдыха.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="border border-white/10 p-7">
              <h3 className="text-xl font-semibold uppercase">
                Частная баня
              </h3>
              <p className="mt-4 leading-7 text-white/60">
                Пространство только для вашей компании. До 8 гостей включено
                в аренду.
              </p>
            </div>

            <div className="border border-white/10 p-7">
              <h3 className="text-xl font-semibold uppercase">
                Парение веником
              </h3>
              <p className="mt-4 leading-7 text-white/60">
                Берёзовые и дубовые веники и традиционные банные ритуалы.
              </p>
            </div>

            <div className="border border-white/10 p-7">
              <h3 className="text-xl font-semibold uppercase">
                Отдых на природе
              </h3>
              <p className="mt-4 leading-7 text-white/60">
                Бланес и Коста-Брава — отличный вариант для отдыха недалеко от
                Барселоны.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="text-3xl font-semibold uppercase md:text-5xl">
          Почему ZHAR de PAR
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/70 md:text-lg">
          <p>
            ZHAR de PAR создан для тех, кто хочет почувствовать атмосферу
            настоящей русской бани в Испании.
          </p>

          <p>
            Мы находимся в Бланесе, поэтому это удобный вариант для жителей
            Барселоны, Льорет-де-Мар, Жироны и других городов Каталонии.
          </p>

          <p>
            Если вы искали «баня Барселона», «русская баня Барселона»,
            «баня рядом с Барселоной» или «где попариться рядом с Барселоной» —
            ZHAR de PAR находится именно в этом направлении.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex bg-[#B28D20] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:opacity-90"
          >
            Открыть ZHAR de PAR
          </Link>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            Другие направления
          </p>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4 text-sm uppercase tracking-wider">
            <Link
              href="/russian-banya-spain"
              className="text-white/70 transition hover:text-white"
            >
              Баня в Испании
            </Link>

            <Link
              href="/russian-banya-blanes"
              className="text-white/70 transition hover:text-white"
            >
              Баня в Бланесе
            </Link>

            <Link
              href="/russian-banya-costa-brava"
              className="text-white/70 transition hover:text-white"
            >
              Баня на Коста-Брава
            </Link>

            <Link
              href="/russian-banya-near-barcelona"
              className="text-white/70 transition hover:text-white"
            >
              Баня рядом с Барселоной
            </Link>

            <Link
              href="/russian-banya-girona"
              className="text-white/70 transition hover:text-white"
            >
              Баня рядом с Жироной
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}