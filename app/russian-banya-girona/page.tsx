import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Русская баня в Жироне и провинции | ZHAR de PAR',
  description:
    'Русская баня рядом с Жироной — ZHAR de PAR в Бланесе на Коста-Брава. Частная баня с парением веником, банными ритуалами, купелью, джакузи и отдыхом на природе.',
  alternates: {
    canonical: 'https://www.zhardepar.com/russian-banya-girona',
  },
  openGraph: {
    title: 'Русская баня в Жироне и провинции | ZHAR de PAR',
    description:
      'Частная русская баня ZHAR de PAR в Бланесе на Коста-Брава, провинция Жирона.',
    url: 'https://www.zhardepar.com/russian-banya-girona',
    siteName: 'ZHAR de PAR',
    type: 'website',
    locale: 'ru_RU',
    images: [
      {
        url: 'https://www.zhardepar.com/photos/view/viewgeneral.PNG',
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — русская баня в провинции Жирона',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Русская баня в Жироне и провинции | ZHAR de PAR',
    description:
      'Русская баня ZHAR de PAR в Бланесе на Коста-Брава, провинция Жирона.',
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
      '@id': 'https://www.zhardepar.com/russian-banya-girona#webpage',
      url: 'https://www.zhardepar.com/russian-banya-girona',
      name: 'Русская баня в Жироне и провинции | ZHAR de PAR',
      description:
        'Русская баня ZHAR de PAR в Бланесе на Коста-Брава, провинция Жирона.',
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
        'Частная русская баня в Бланесе на Коста-Брава, провинция Жирона.',
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
          '@type': 'AdministrativeArea',
          name: 'Girona',
        },
        {
          '@type': 'AdministrativeArea',
          name: 'Costa Brava',
        },
        {
          '@type': 'City',
          name: 'Blanes',
        },
        {
          '@type': 'City',
          name: 'Lloret de Mar',
        },
      ],
      sameAs: ['https://www.instagram.com/banka_blanes/'],
    },
  ],
}

export default function RussianBanyaGironaPage() {
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
          alt="Русская баня ZHAR de PAR в провинции Жирона"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-20">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-white/70">
            БЛАНЕС · ЖИРОНА · КОСТА-БРАВА
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold uppercase leading-[0.95] md:text-7xl">
            Русская баня
            <br />
            в провинции Жирона
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/85 md:text-xl">
            ZHAR de PAR — частная русская баня в Бланесе, в провинции Жирона,
            на Коста-Брава. Место для отдыха, парения и настоящей банной
            атмосферы в Испании.
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
          Русская баня в провинции Жирона
        </p>

        <h2 className="max-w-4xl text-3xl font-semibold uppercase leading-tight md:text-5xl">
          Баня в Бланесе на Коста-Брава
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/70 md:text-lg">
          <p>
            ZHAR de PAR находится в Бланесе — на побережье Коста-Брава в
            провинции Жирона. Это частная русская баня для тех, кто хочет
            отдохнуть от городской суеты и провести время в настоящей банной
            атмосфере.
          </p>

          <p>
            Если вы ищете баню в Жироне, русскую баню рядом с Жироной или
            баню в провинции Girona, ZHAR de PAR предлагает частную аренду
            банного пространства в Бланесе.
          </p>

          <p>
            Здесь можно провести несколько часов с друзьями или семьёй:
            попариться веником, воспользоваться купелью или джакузи,
            заказать банные ритуалы и отдохнуть на природе.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <h2 className="text-3xl font-semibold uppercase md:text-5xl">
            Что вас ждёт
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="border border-white/10 p-7">
              <h3 className="text-xl font-semibold uppercase">
                Русская парная
              </h3>
              <p className="mt-4 leading-7 text-white/60">
                Традиционная атмосфера русской бани в современном формате.
              </p>
            </div>

            <div className="border border-white/10 p-7">
              <h3 className="text-xl font-semibold uppercase">
                Банные ритуалы
              </h3>
              <p className="mt-4 leading-7 text-white/60">
                Парение веником и дополнительные процедуры для полноценного
                банного отдыха.
              </p>
            </div>

            <div className="border border-white/10 p-7">
              <h3 className="text-xl font-semibold uppercase">
                Вода и отдых
              </h3>
              <p className="mt-4 leading-7 text-white/60">
                Купель, джакузи и возможность спокойно провести время своей
                компанией.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <h2 className="text-3xl font-semibold uppercase md:text-5xl">
          Где находится
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-white/70 md:text-lg">
          <p>
            ZHAR de PAR находится в Бланесе, провинция Жирона, Каталония,
            Испания.
          </p>

          <p>
            Благодаря расположению на Коста-Брава до нас удобно добраться из
            Бланеса, Льорет-де-Мар и других городов побережья.
          </p>

          <p>
            Для гостей из Барселоны это также вариант для отдыха за пределами
            города — русская баня рядом с Барселоной на Коста-Брава.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex bg-[#B28D20] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:opacity-90"
          >
            Перейти на ZHAR de PAR
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
              href="/russian-banya-barcelona"
              className="text-white/70 transition hover:text-white"
            >
              Баня рядом с Барселоной
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
          </div>
        </div>
      </section>
    </main>
  )
}