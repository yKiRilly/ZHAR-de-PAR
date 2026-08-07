'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Clock, X } from 'lucide-react'
import { brooms, serviceOptions } from '@/lib/site-data'

type BookingModalProps = {
  open: boolean
  onClose: () => void
  prefill?: { service?: string; broom?: string }
}

export function BookingModal({ open, onClose, prefill }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    setSubmitted(false)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  if (!open) return null

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Reserve your visit"
    >
      <button
        aria-label="Close booking form"
        onClick={onClose}
        className="fixed inset-0 h-full w-full cursor-default bg-background/80 backdrop-blur-sm animate-in fade-in"
      />

      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-2xl animate-in fade-in slide-in-from-bottom-6 rounded-t-2xl border border-border bg-card p-6 shadow-2xl duration-300 sm:rounded-2xl sm:p-8"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center py-10 text-center">
            <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
              <Check className="h-7 w-7" />
            </span>
            <h3 className="font-serif text-3xl font-light">Your request is received</h3>
            <p className="mt-3 max-w-md text-pretty text-muted-foreground">
              Thank you. Our concierge will confirm your private session and menu preferences within a few
              hours. We look forward to welcoming you to Ember &amp; Birch.
            </p>
            <button
              onClick={onClose}
              className="mt-8 rounded-full bg-primary px-8 py-3 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">Reserve your visit</p>
            <h3 className="mt-2 font-serif text-3xl font-light sm:text-4xl">Request a private session</h3>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-primary" />
              Reservations are available for a minimum of 3 hours
            </div>

            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Full name" htmlFor="name">
                <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Your name" />
              </Field>
              <Field label="Phone" htmlFor="phone">
                <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} placeholder="+00 000 000 000" />
              </Field>
              <Field label="Email" htmlFor="email" className="sm:col-span-2">
                <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="you@email.com" />
              </Field>
              <Field label="Date" htmlFor="date">
                <input id="date" name="date" type="date" required className={inputClass} />
              </Field>
              <Field label="Preferred time" htmlFor="time">
                <input id="time" name="time" type="time" required className={inputClass} />
              </Field>
              <Field label="Duration" htmlFor="duration">
                <select id="duration" name="duration" defaultValue="3 hours" className={inputClass}>
                  <option>3 hours</option>
                  <option>4 hours</option>
                  <option>5 hours</option>
                  <option>Full evening</option>
                </select>
              </Field>
              <Field label="Guests" htmlFor="guests">
                <select id="guests" name="guests" defaultValue="2" className={inputClass}>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? 'guest' : 'guests'}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Experience" htmlFor="service">
                <select id="service" name="service" defaultValue={prefill?.service ?? serviceOptions[0]} className={inputClass}>
                  {serviceOptions.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
              <Field label="Bath broom" htmlFor="broom">
                <select id="broom" name="broom" defaultValue={prefill?.broom ?? brooms[0].name} className={inputClass}>
                  {brooms.map((b) => (
                    <option key={b.id}>{b.name}</option>
                  ))}
                </select>
              </Field>
              <Field label="Notes & dining requests" htmlFor="notes" className="sm:col-span-2">
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  className={`${inputClass} resize-none`}
                  placeholder="Dietary preferences, a lunch or dinner prepared before arrival, special occasions…"
                />
              </Field>

              <button
                type="submit"
                className="sm:col-span-2 mt-2 w-full rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request reservation
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

const inputClass =
  'w-full rounded-md border border-input bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary [color-scheme:dark]'

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string
  htmlFor: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      {children}
    </div>
  )
}