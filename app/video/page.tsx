
import type { Metadata } from 'next'

const siteUrl = 'https://www.zhardepar.com'

const videoUrl = `${siteUrl}/video/videobanya.mp4`
const thumbnailUrl = `${siteUrl}/photos/view/viewgeneral.PNG`

export const metadata: Metadata = {
  title: 'ZHAR de PAR â€” Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸',
  description:
    'Ð’Ð¸Ð´ÐµÐ¾ ZHAR de PAR â€” Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð½Ð° Ð¿Ñ€Ð¸Ñ€Ð¾Ð´Ðµ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸. ÐŸÐ°Ñ€, ÑÐ°ÑƒÐ½Ð°, Ð±Ð°Ð½Ð½Ñ‹Ðµ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ñ‹, Ð²ÐµÐ½Ð¸ÐºÐ¸, Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸ Ð¸ ÐºÑƒÐ¿ÐµÐ»ÑŒ.',
  alternates: {
    canonical: `${siteUrl}/video`,
  },
  openGraph: {
    title: 'ZHAR de PAR â€” Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸',
    description:
      'Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð½Ð° Ð¿Ñ€Ð¸Ñ€Ð¾Ð´Ðµ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸. Ð¢Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ð¾Ð½Ð½Ñ‹Ðµ Ð±Ð°Ð½Ð½Ñ‹Ðµ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ñ‹, Ð¿Ð°Ñ€, Ð²ÐµÐ½Ð¸ÐºÐ¸, Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸ Ð¸ ÐºÑƒÐ¿ÐµÐ»ÑŒ.',
    url: `${siteUrl}/video`,
    type: 'video.other',
    images: [
      {
        url: thumbnailUrl,
        width: 1200,
        height: 630,
        alt: 'ZHAR de PAR â€” Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸',
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
  name: 'ZHAR de PAR â€” Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸',
  description:
    'Ð’Ð¸Ð´ÐµÐ¾ ZHAR de PAR â€” Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð½Ð° Ð¿Ñ€Ð¸Ñ€Ð¾Ð´Ðµ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸. ÐŸÐ°Ñ€, Ð±Ð°Ð½Ð½Ñ‹Ðµ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ñ‹, Ð±Ð°Ð½Ð½Ñ‹Ðµ Ð²ÐµÐ½Ð¸ÐºÐ¸, Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸ Ð¸ ÐºÑƒÐ¿ÐµÐ»ÑŒ.',
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
          Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸
        </h1>

        <p className="mb-10 max-w-3xl text-white/70">
          Ð ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ð½Ð° Ð¿Ñ€Ð¸Ñ€Ð¾Ð´Ðµ Ð² Ð˜ÑÐ¿Ð°Ð½Ð¸Ð¸. Ð¢Ñ€Ð°Ð´Ð¸Ñ†Ð¸Ð¾Ð½Ð½Ñ‹Ðµ Ð±Ð°Ð½Ð½Ñ‹Ðµ Ñ€Ð¸Ñ‚ÑƒÐ°Ð»Ñ‹,
          Ð¿Ð°Ñ€, Ð±Ð°Ð½Ð½Ñ‹Ðµ Ð²ÐµÐ½Ð¸ÐºÐ¸, ÑÐ°ÑƒÐ½Ð°, Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸ Ð¸ ÐºÑƒÐ¿ÐµÐ»ÑŒ.
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
            Ð’Ð°Ñˆ Ð±Ñ€Ð°ÑƒÐ·ÐµÑ€ Ð½Ðµ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÑ‚ Ð²Ð¾ÑÐ¿Ñ€Ð¾Ð¸Ð·Ð²ÐµÐ´ÐµÐ½Ð¸Ðµ Ð²Ð¸Ð´ÐµÐ¾.
          </video>
        </div>

        <div className="mt-10 max-w-3xl">
          <h2 className="mb-4 text-2xl sm:text-3xl">
            ZHAR de PAR
          </h2>

          <p className="leading-7 text-white/70">
            Ð§Ð°ÑÑ‚Ð½Ð°Ñ Ñ€ÑƒÑÑÐºÐ°Ñ Ð±Ð°Ð½Ñ Ñ€ÑÐ´Ð¾Ð¼ Ñ Ð›Ð»Ð¾Ñ€ÐµÑ‚-Ð´Ðµ-ÐœÐ°Ñ€ Ð¸ Ð‘Ð»Ð°Ð½ÐµÑÐ¾Ð¼.
            ÐŸÐ°Ñ€Ð½Ð°Ñ, Ð±Ð°Ð½Ð½Ñ‹Ðµ Ð²ÐµÐ½Ð¸ÐºÐ¸, Ð´Ð¶Ð°ÐºÑƒÐ·Ð¸, ÐºÑƒÐ¿ÐµÐ»ÑŒ Ð¸ Ð¿Ñ€Ð¾ÑÑ‚Ñ€Ð°Ð½ÑÑ‚Ð²Ð¾
            Ð´Ð»Ñ Ð¾Ñ‚Ð´Ñ‹Ñ…Ð° ÑÑ€ÐµÐ´Ð¸ Ð¿Ñ€Ð¸Ñ€Ð¾Ð´Ñ‹ ÐšÐ°Ñ‚Ð°Ð»Ð¾Ð½Ð¸Ð¸.
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

