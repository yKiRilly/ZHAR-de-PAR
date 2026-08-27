
import type { Metadata } from 'next'

const siteUrl = 'https://www.zhardepar.com'

const videoUrl = `${siteUrl}/video/videobanya.mp4`
const thumbnailUrl = `${siteUrl}/photos/view/viewgeneral.PNG`

export const metadata: Metadata = {
  title: 'ZHAR de PAR — Русская баня в Испании',
  description:
    'Видео ZHAR de PAR — русская баня на природе в Испании. Пар, сауна, банные ритуалы, веники, джакузи и купель.',
  alternates: {
    canonical: `${siteUrl}/video`,
  },
  openGraph: {
    title: 'ZHAR de PAR — Русская баня в Испании',
    description:
      'Русская баня на природе в Испании. Традиционные банные ритуалы, пар, веники, джакузи и купель.',
    url: `${siteUrl}/video`,
    type: 'video.other',
    images: [
      {
        url: thumbnailUrl,
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR — Русская баня в Испании',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const videoStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'ZHAR de PAR — Русская баня в Испании',
  description:
    'Видео ZHAR de PAR — русская баня на природе в Испании. Пар, сауна, банные ритуалы, банные веники, джакузи и купель.',
  thumbnailUrl: [thumbnailUrl],
  contentUrl: videoUrl,
  embedUrl: `${siteUrl}/video`,
  uploadDate: '2026-08-26',
  publisher: {
    '@type': 'Organization',
    name: 'ZHAR de PAR',
    url: siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${siteUrl}/photos/logos/logoof.png`,
    },
  },
}

export default function VideoPage() {
  return (
    <main className="min-h-screen bg-black px-5 py-16 text-white sm:px-8 md:py-24">
      <div className="mx-auto w-full max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
          ZHAR de PAR
        </p>

        <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl">
          Русская баня в Испании
        </h1>

        <p className="mb-10 max-w-3xl text-white/70">
          Русская баня на природе в Испании. Традиционные банные ритуалы,
          пар, банные веники, сауна, джакузи и купель.
        </p>

        <div className="overflow-hidden rounded-2xl">
          <video
            className="block h-auto w-full"
            controls
            playsInline
            preload="metadata"
            poster={thumbnailUrl}
          >
            <source src={videoUrl} type="video/mp4" />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="mb-4 text-2xl sm:text-3xl">
            ZHAR de PAR
          </h2>

          <p className="leading-7 text-white/70">
            Частная русская баня рядом с Ллорет-де-Мар и Бланесом.
            Парная, банные веники, джакузи, купель и пространство
            для отдыха среди природы Каталонии.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoStructuredData),
        }}
      />
    </main>
  )
}
