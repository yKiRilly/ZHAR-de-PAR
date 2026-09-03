
'use client'

import Image from 'next/image'

import { Clock, Mail, MapPin, Phone } from 'lucide-react'

import { useBooking } from '@/components/booking-provider'
import { useLanguage } from '@/components/language-provider'

export function SiteFooter() {
  const { open } = useBooking()
  const { t } = useLanguage()

  return (
    <footer id="contact" className="relative border-t border-border/50">
      {/* CTA */}
      <div
        className="relative overflow-hidden border-b border-border/50 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/photos/galery/grill.PNG")',
          backgroundPosition: 'center 80%',
        }}
      >
        {/* Затемнение только фоновой картинки */}
        <div className="pointer-events-none absolute inset-0 bg-black/30" />

        <div
          className="
            relative
            mx-auto
            flex
            min-h-[380px]
            max-w-7xl
            items-center
            justify-center
            px-5
            py-14
            sm:min-h-[400px]
            sm:px-8
            sm:py-16
            lg:min-h-[360px]
            lg:justify-end
            lg:px-10
          "
        >
          <div
            className="
              w-full
              max-w-2xl
              text-center
              lg:mr-0
              lg:translate-x-8
              lg:text-left
            "
          >
            <h2
              className="
                font-serif
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-5xl
                lg:text-6xl
              "
            >
              {t.footerTitle}
            </h2>

            <p
              className="
                mt-5
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-primary
                sm:text-base
                sm:tracking-[0.2em]
                lg:text-lg
              "
            >
              {t.footerSubtitle}
            </p>

            <p
              className="
                mx-auto
                mt-6
                max-w-xl
                text-sm
                font-semibold
                leading-relaxed
                text-muted-foreground
                sm:mt-7
                sm:text-base
                lg:mx-0
                lg:max-w-2xl
                lg:text-lg
              "
            >
              {t.footerDescription}
            </p>

            <button
              type="button"
              onClick={() => open()}
              className="
                mt-8
                rounded-full
                bg-primary
                px-9
                py-3.5
                text-xs
                font-medium
                uppercase
                tracking-widest
                text-primary-foreground
                transition-colors
                hover:bg-primary/90
                sm:mt-9
                sm:px-10
                sm:py-4
                sm:text-sm
              "
            >
              {t.bookNow}
            </button>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          py-8
          sm:px-8
          sm:py-10
          lg:px-10
          lg:py-8
        "
      >
        {/* Main footer columns */}
        <div
          className="
            grid
            gap-10
            sm:grid-cols-2
            sm:gap-x-10
            sm:gap-y-12
            lg:grid-cols-[1.2fr_1fr_1fr]
            lg:items-start
            lg:gap-8
          "
        >
          {/* Logo */}
          <div
            className="
              flex
              items-center
              justify-center
              sm:col-span-2
              lg:col-span-1
              lg:-mt-16
              lg:items-start
              lg:justify-start
              lg:translate-x-8
            "
          >
            <Image
              src="/photos/logos/logogr.png"
              alt="ZHAR de PAR"
              width={220}
              height={200}
              className="
                h-auto
                w-[240px]
                object-contain
                sm:w-[260px]
                lg:w-[280px]
              "
            />
          </div>

          {/* Visit */}
          <div
            className="
              text-center
              sm:text-left
            "
          >
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {t.footerVisit}
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              {/* Google Maps */}
              <li
                className="
                  flex
                  items-start
                  justify-center
                  gap-3
                  sm:justify-start
                "
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                <a
                  href="https://www.google.com/maps/search/?api=1&query=MQPM%2B73%2C%2017300%20Blanes%2C%20Girona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  MQPM+73, 17300 Blanes, Girona
                </a>
              </li>

              {/* Hours */}
              <li
                className="
                  flex
                  items-start
                  justify-center
                  gap-3
                  sm:justify-start
                "
              >
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{t.footerHours}</span>
              </li>
            </ul>
          </div>

          {/* Concierge */}
          <div
            className="
              text-center
              sm:text-left
            "
          >
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {t.footerConcierge}
            </h3>

            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              {/* Phone */}
              <li>
                <a
                  href="tel:+34601801800"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    transition-colors
                    hover:text-foreground
                    sm:justify-start
                  "
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>+34 601 80 18 00</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:zhardepar1@gmail.com"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    break-all
                    transition-colors
                    hover:text-foreground
                    sm:justify-start
                    sm:break-normal
                  "
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>zhardepar1@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social media */}
        <div
          className="
            mt-10
            flex
            w-full
            items-center
            justify-center
            gap-4
            sm:mt-8
            lg:-mt-10
          "
        >
          {/* Instagram */}
          <a
            href="https://www.instagram.com/banka_blanes/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-primary/40
              text-primary
              transition-all
              duration-300
              hover:border-primary
              hover:bg-primary
              hover:text-primary-foreground
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="0.8"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/34601801800?text=Здравствуйте!%20Хочу%20забронировать%20баню"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-primary/40
              text-primary
              transition-all
              duration-300
              hover:border-primary
              hover:bg-primary
              hover:text-primary-foreground
            "
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.83 11.83 0 0 0 12.08 0C5.54 0 .21 5.33.21 11.9c0 2.1.55 4.15 1.6 5.96L.1 24l6.29-1.65a11.86 11.86 0 0 0 5.68 1.45h.01c6.54 0 11.87-5.33 11.87-11.9 0-3.18-1.24-6.17-3.43-8.42ZM12.08 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.87 9.87 0 0 1-1.51-5.28C2.21 6.43 6.64 2 12.09 2c2.64 0 5.12 1.03 6.98 2.9a9.9 9.9 0 0 1 2.9 7c-.01 5.45-4.44 9.9-9.89 9.9Zm5.42-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.77-1.65-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
          </a>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            justify-between
            gap-4
            border-t
            border-border/60
            pt-6
            text-center
            text-xs
            text-muted-foreground
            sm:flex-row
            sm:text-left
            lg:mt-8
          "
        >
          <p>
            © {new Date().getFullYear()} DUBъ. {t.footerRights}
          </p>

          <p className="uppercase tracking-widest">
            {t.footerTagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
