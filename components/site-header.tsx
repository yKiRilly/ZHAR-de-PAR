'use client'

import { useEffect, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useBooking } from '@/components/booking-provider'
import { useLanguage } from '@/components/language-provider'
import type { Language } from '@/lib/translations'

const navLinks = [
  { label: 'philosophy', href: '#philosophy' },
  { label: 'rituals', href: '#rituals' },
  { label: 'brooms', href: '#brooms' },
  { label: 'gallery', href: '#gallery' },
  { label: 'journal', href: '#faq' },
]

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'ru', label: 'Русский' },
  { code: 'uk', label: 'Українська' },
]

export function SiteHeader() {
  const { open } = useBooking()
  const { language, setLanguage, t } = useLanguage()

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)

    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const currentLanguage = languages.find(
    (item) => item.code === language
  )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <a
          href="#top"
          className="flex items-center gap-2.5"
          aria-label="DUB home"
        >
          <img
            src="/photos/logos/logoof .PNG"
            alt="DUB"
            className="h-55 w-auto"
          />
        </a>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t[link.label as keyof typeof t]}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Language selector */}
          <div className="relative hidden sm:block">

            <button
              type="button"
              onClick={() => setLanguageOpen((value) => !value)}
              className="flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-xs font-medium uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
              aria-expanded={languageOpen}
              aria-label="Select language"
            >
              {language.toUpperCase()}

              <ChevronDown
                className={cn(
                  'h-3.5 w-3.5 transition-transform duration-200',
                  languageOpen && 'rotate-180',
                )}
              />
            </button>

            {languageOpen && (
              <div className="absolute right-0 top-full mt-2 min-w-[150px] overflow-hidden rounded-xl border border-border bg-background/95 p-1 shadow-xl backdrop-blur-md">

                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLanguage(item.code)
                      setLanguageOpen(false)
                    }}
                    className={cn(
                      'flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-left text-xs transition-colors',
                      item.code === language
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:bg-primary/10 hover:text-foreground',
                    )}
                  >
                    <span>{item.label}</span>

                    <span className="ml-3 uppercase">
                      {item.code}
                    </span>
                  </button>
                ))}

              </div>
            )}

          </div>

          {/* Book Now */}
          <button
            onClick={() => open()}
            className="hidden rounded-full bg-primary px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            {t.bookNow}
          </button>

          {/* Mobile menu */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="border-t border-border bg-background/95 px-5 pb-6 pt-2 backdrop-blur-md lg:hidden"
          aria-label="Mobile"
        >

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-border/50 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t[link.label as keyof typeof t]}
            </a>
          ))}

          {/* Mobile language selector */}
          <div className="mt-5 border-t border-border/50 pt-5">

            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {t.language}
            </p>

            <div className="grid grid-cols-2 gap-2">

              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLanguage(item.code)
                  }}
                  className={cn(
                    'rounded-full border px-4 py-2.5 text-xs uppercase tracking-widest transition-colors',
                    item.code === language
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border text-muted-foreground hover:border-primary hover:text-foreground',
                  )}
                >
                  {item.code}
                </button>
              ))}

            </div>
          </div>

          {/* Mobile Book Now */}
          <button
            onClick={() => {
              setMenuOpen(false)
              open()
            }}
            className="mt-5 w-full rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground"
          >
            {t.bookNow}
          </button>

        </nav>
      )}
    </header>
  )
}