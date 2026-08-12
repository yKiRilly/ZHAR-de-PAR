'use client'

import Image from 'next/image'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useBooking } from '@/components/booking-provider'

export function SiteFooter() {
  const { open } = useBooking()

  return (
    <footer id="contact" className="relative border-t border-border/50">
      {/* CTA band */}
      <div
        className="relative overflow-hidden border-b border-border/50 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/photos/galery/grill.PNG")',
          backgroundPosition: 'center 80%',
        }}
      >
        <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8">
          <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">
            Your Private Escape Awaits
          </h2>

          <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Reserve the house for an evening of steam
          </p>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Private sessions are held for a minimum of three hours. Choose your
            ritual, your brooms, and your table — we will prepare the rest.
          </p>

          <button
            onClick={() => open()}
            className="mt-9 rounded-full bg-primary px-10 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Footer content */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr_1fr]">

          {/* Logo */}
          <div className="flex items-start justify-start translate-x-30 -mt-20">
            <Image
              src="/photos/logos/logoof .png"
              alt="DUBъ"
              width={220}
              height={110}
              className="h-auto w-[220px] object-contain"
            />
          </div>

          {/* Visit */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Visit
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                MQPM+73, 17300 Blanes, Girona
              </li>

              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Daily · 24/7 · By reservation
              </li>
            </ul>
          </div>

          {/* Concierge */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              Concierge
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:+"
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  ---------------
                </a>
              </li>

              <li>
                <a
                  href="mailto:stay@emberandbirch.example"
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  ---------------
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} DUBъ. All rights reserved.</p>

          <p className="uppercase tracking-widest">
            Crafted for stillness
          </p>
        </div>
      </div>
    </footer>
  )
}