'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { BookingModal } from '@/components/booking-modal'

type BookingContextValue = {
  open: (prefill?: { service?: string; broom?: string }) => void
  close: () => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking() {
  const ctx = useContext(BookingContext)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [prefill, setPrefill] = useState<{ service?: string; broom?: string }>({})

  const open = useCallback((next?: { service?: string; broom?: string }) => {
    setPrefill(next ?? {})
    setIsOpen(true)
  }, [])

  const close = useCallback(() => setIsOpen(false), [])

  const value = useMemo(() => ({ open, close }), [open, close])

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal open={isOpen} onClose={close} prefill={prefill} />
    </BookingContext.Provider>
  )
}