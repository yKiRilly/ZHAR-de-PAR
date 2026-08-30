
'use client'

import { useEffect, useState } from 'react'
import {
  Menu,
  X,
  ChevronDown,
  ShoppingBag,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { useBooking } from '@/components/booking-provider'
import { useLanguage } from '@/components/language-provider'
import type { Language } from '@/lib/translations'

const navLinks = [
  { key: 'philosophy', href: '#philosophy' },
  { key: 'rituals', href: '#rituals' },
  { key: 'brooms', href: '#brooms' },
  { key: 'gallery', href: '#gallery' },
  { key: 'journal', href: '#faq' },
] as const

// Только русский и украинский
const languages: { code: Language; label: string }[] = [
  { code: 'ru', label: 'Русский' },
  { code: 'uk', label: 'Українська' },
]

export function SiteHeader() {
  const { open, cart } = useBooking()
  const { language, setLanguage, t } = useLanguage()

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [languageOpen, setLanguageOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const cartCount = cart.reduce(
    (sum, item) => sum + item.quantity,
    0,
  )

  const closeMobileMenu = () => {
    setMenuOpen(false)
    setLanguageOpen(false)
  }

  const getNavLabel = (
    key: (typeof navLinks)[number]['key'],
  ) => {
    switch (key) {
      case 'philosophy':
        return t.philosophy

      case 'rituals':
        return t.rituals

      case 'brooms':
        return t.brooms

      case 'gallery':
        return t.gallery

      case 'journal':
        return t.journal
    }
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <div
        className="
          relative
          mx-auto
          flex
          h-24
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-8
        "
      >
        {/* Logo */}
        <a
          href="#top"
          className="flex shrink-0 items-center"
          aria-label="ZHAR de PAR home"
          onClick={closeMobileMenu}
        >
          <img
            src="/photos/logos/logoof.png"
            alt="ZHAR de PAR"
            className="
              h-auto
              w-[200px]
              object-contain
              sm:w-[230px]
              lg:w-[250px]
            "
          />
        </a>

        {/* Desktop navigation */}
        <nav
          className="
            absolute
            left-1/2
            hidden
            -translate-x-1/2
            items-center
            gap-9
            lg:flex
          "
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                whitespace-nowrap
                text-[17px]
                font-semibold
                text-foreground/85
                transition-colors
                hover:text-foreground
              "
            >
              {getNavLabel(link.key)}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex shrink-0 items-center gap-3">

          {/* Language selector */}
          <div className="relative hidden sm:block">
            <button
              type="button"
              onClick={() =>
                setLanguageOpen((value) => !value)
              }
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-border
                px-4
                py-2.5
                text-sm
                font-medium
                uppercase
                tracking-widest
                text-foreground
                transition-colors
                hover:border-primary
                hover:text-primary
              "
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
              <div
                className="
                  absolute
                  right-0
                  top-full
                  mt-2
                  min-w-[150px]
                  overflow-hidden
                  rounded-xl
                  border
                  border-border
                  bg-background/95
                  p-1
                  shadow-xl
                  backdrop-blur-md
                "
              >
                {languages.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLanguage(item.code)
                      setLanguageOpen(false)
                    }}
                    className={cn(
                      'flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm transition-colors',
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

          {/* Cart */}
          <button
            type="button"
            onClick={() => open()}
            className="
              relative
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-border
              text-foreground
              transition-all
              hover:border-primary
              hover:text-primary
            "
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5 w-5" />

            {cartCount > 0 && (
              <span
                className="
                  absolute
                  -right-1
                  -top-1
                  flex
                  h-5
                  min-w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  px-1.5
                  text-[10px]
                  font-bold
                  text-primary-foreground
                "
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile menu */}
          <button
            type="button"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-border
              text-foreground
              transition-colors
              hover:border-primary
              hover:text-primary
              lg:hidden
            "
            onClick={() =>
              setMenuOpen((value) => !value)
            }
            aria-label={
              menuOpen ? 'Close menu' : 'Open menu'
            }
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
          className="
            border-t
            border-border
            bg-background/95
            px-5
            pb-6
            pt-2
            backdrop-blur-md
            lg:hidden
          "
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobileMenu}
              className="
                block
                border-b
                border-border/50
                py-3
                text-[17px]
                font-semibold
                text-foreground/85
                transition-colors
                hover:text-foreground
              "
            >
              {getNavLabel(link.key)}
            </a>
          ))}

          {/* Language */}
          <div className="mt-5 border-t border-border/50 pt-5">
            <p
              className="
                mb-3
                text-xs
                font-medium
                uppercase
                tracking-[0.3em]
                text-primary
              "
            >
              {t.language}
            </p>

            <div className="grid grid-cols-2 gap-2">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => {
                    setLanguage(item.code)
                    setMenuOpen(false)
                  }}
                  className={cn(
                    'rounded-full border px-4 py-2.5 text-sm uppercase tracking-widest transition-colors',
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
        </nav>
      )}
    </header>
  )
}
