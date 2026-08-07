'use client'

import { useEffect, useState } from 'react'
import { CalendarCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useBooking } from '@/components/booking-provider'

export function BookNowFab() {
  const { open } = useBooking()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => open()}
      aria-label="Book now"
      className={cn(
        'fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-primary-foreground shadow-2xl shadow-background/50 transition-all duration-500 hover:bg-primary/90',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-16 opacity-0',
      )}
    >
      <CalendarCheck className="h-4 w-4" />
      Book Now
    </button>
  )
}