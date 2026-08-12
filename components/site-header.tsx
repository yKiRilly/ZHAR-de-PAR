'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useBooking } from '@/components/booking-provider'
import { BrandMark } from '@/components/brand-mark'

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Rituals', href: '#rituals' },
  { label: 'Brooms', href: '#brooms' },
  { label: 'Table', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Journal', href: '#faq' },
]

export function SiteHeader() {
  const { open } = useBooking()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled ? 'border-b border-border/60 bg-background/80 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Ember and Birch home">
          <img
  src="/photos/logos/logoof .PNG"
  alt="DUB"
  className="h-55 w-auto"
/>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => open()}
            className="hidden rounded-full bg-primary px-6 py-2.5 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 sm:inline-flex"
          >
            Book Now
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

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
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false)
              open()
            }}
            className="mt-4 w-full rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-widest text-primary-foreground"
          >
            Book Now
          </button>
        </nav>
      )}
    </header>
  )
}