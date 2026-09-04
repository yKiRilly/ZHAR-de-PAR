'use client'

import { useState, type FormEvent } from 'react'

import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from 'lucide-react'

import type { CartItem } from '@/components/booking-provider'
import { useBooking } from '@/components/booking-provider'
import { useLanguage } from '@/components/language-provider'
import { supabase } from '@/lib/supabase'

type BookingModalProps = {
  open: boolean
  onClose: () => void
  cart: CartItem[]
  cartTotal: number
}

function formatDate(date: string) {
  if (!date) return ''

  const [year, month, day] = date.split('-')

  return `${day}.${month}.${year}`
}

function getTodayString() {
  const today = new Date()

  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function dateToString(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function getCalendarDays(monthDate: Date) {
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()

  const firstDay = new Date(year, month, 1)

  // Monday = 0, Sunday = 6
  const startDay = (firstDay.getDay() + 6) % 7

  const daysInMonth = new Date(
    year,
    month + 1,
    0,
  ).getDate()

  const previousMonthDays = new Date(
    year,
    month,
    0,
  ).getDate()

  const days: {
    day: number
    currentMonth: boolean
    date: Date
  }[] = []

  for (let i = startDay - 1; i >= 0; i--) {
    days.push({
      day: previousMonthDays - i,
      currentMonth: false,
      date: new Date(
        year,
        month - 1,
        previousMonthDays - i,
      ),
    })
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push({
      day,
      currentMonth: true,
      date: new Date(year, month, day),
    })
  }

  let nextDay = 1

  while (days.length < 42) {
    days.push({
      day: nextDay,
      currentMonth: false,
      date: new Date(
        year,
        month + 1,
        nextDay,
      ),
    })

    nextDay++
  }

  return days
}

export function BookingModal({
  open,
  onClose,
  cart,
  cartTotal,
}: BookingModalProps) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useBooking()

  const { t } = useLanguage()

  const [guests, setGuests] = useState(2)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const [dateOpen, setDateOpen] = useState(false)
  const [timeOpen, setTimeOpen] = useState(false)
  const [guestsOpen, setGuestsOpen] = useState(false)

  const [calendarMonth, setCalendarMonth] = useState(
    new Date(),
  )

  const [isSubmitting, setIsSubmitting] = useState(false)

  const extraGuests = Math.max(0, guests - 8)
  const guestSurcharge = extraGuests * 50
  const finalTotal = cartTotal + guestSurcharge

  const today = getTodayString()
  const calendarDays = getCalendarDays(calendarMonth)

  // Без "г." после года
  const monthName =
    calendarMonth.toLocaleDateString('ru-RU', {
      month: 'long',
    }) +
    ` ${calendarMonth.getFullYear()}`

  const timeOptions: string[] = []

  for (let hour = 8; hour <= 23; hour++) {
    for (const minute of [0, 30]) {
      if (hour === 23 && minute === 30) continue

      timeOptions.push(
        `${String(hour).padStart(2, '0')}:${String(
          minute,
        ).padStart(2, '0')}`,
      )
    }
  }

  if (!open) {
    return null
  }

  // ==========================================
  // СОХРАНЕНИЕ БРОНИРОВАНИЯ В SUPABASE
  // ==========================================

  const handleReserve = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    // Проверяем дату
    if (!selectedDate) {
      setDateOpen(true)
      return
    }

    // Проверяем время
    if (!selectedTime) {
      setTimeOpen(true)
      return
    }

    const formData = new FormData(
      event.currentTarget,
    )

    const name = String(
      formData.get('name') || '',
    ).trim()

    const phone = String(
      formData.get('phone') || '',
    ).trim()

    // Проверяем имя
    if (!name) {
      alert('Пожалуйста, укажите имя.')
      return
    }

    // Проверяем телефон
    if (!phone) {
      alert('Пожалуйста, укажите телефон.')
      return
    }

    setIsSubmitting(true)

    try {
      const { error } = await supabase
        .from('bookings')
        .insert({
          name,
          phone,
          cart,
          total: finalTotal,
          booking_date: selectedDate,
          booking_time: selectedTime,
        })

      if (error) {
        console.error(
          'SUPABASE BOOKING ERROR:',
          error,
        )

        alert(
          'Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз.',
        )

        return
      }

      console.log(
        'BOOKING SAVED TO SUPABASE',
      )

      alert(t.booking.thankYou)

      onClose()
    } catch (error) {
      console.error(
        'BOOKING ERROR:',
        error,
      )

      alert(
        'Произошла ошибка. Пожалуйста, попробуйте ещё раз.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectDate = (date: Date) => {
    const value = dateToString(date)

    if (value < today) {
      return
    }

    setSelectedDate(value)
    setDateOpen(false)
  }

  const previousMonth = () => {
    setCalendarMonth(
      new Date(
        calendarMonth.getFullYear(),
        calendarMonth.getMonth() - 1,
        1,
      ),
    )
  }

  const nextMonth = () => {
    setCalendarMonth(
      new Date(
        calendarMonth.getFullYear(),
        calendarMonth.getMonth() + 1,
        1,
      ),
    )
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-primary/20 bg-[#110d0b] text-foreground shadow-2xl sm:rounded-2xl"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        {/* HEADER */}

        <div className="flex shrink-0 items-center justify-between border-b border-primary/15 px-6 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-primary" />

            <h2 className="font-serif text-2xl font-light">
              {t.booking.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
            aria-label={t.booking.close}
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* SCROLLABLE CONTENT */}

        <div className="flex-1 overflow-y-auto">

          {/* CART */}

          <div className="px-6 py-5 sm:px-8">
            {cart.length === 0 ? (
              <div className="py-12 text-center">
                <ShoppingBag className="mx-auto h-10 w-10 text-muted-foreground" />

                <p className="mt-4 font-serif text-xl">
                  {t.booking.emptyTitle}
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  {t.booking.emptyDescription}
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {cart.map((item) => {
                  const isBroom =
                    item.type === 'broom'

                  const isSauna =
                    item.type === 'sauna'

                  const atMinimum =
                    isSauna &&
                    item.quantity <= 3

                  const atMaximum =
                    item.maxQuantity !==
                      undefined &&
                    item.quantity >=
                      item.maxQuantity

                  return (
                    <div
                      key={item.id}
                      className="rounded-xl border border-primary/15 bg-[#15100e] px-4 py-4"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">

                        {/* NAME */}

                        <div className="min-w-0 flex-1">
                          <p className="font-serif text-lg font-light">
                            {item.name}
                          </p>

                          <p className="mt-1 text-sm text-muted-foreground">
                            €{item.price} ×{' '}
                            {item.quantity}
                          </p>

                          {isBroom && (
                            <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                              {t.booking.maximum}
                            </p>
                          )}

                          {isSauna && (
                            <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                              {t.booking.minimum}
                            </p>
                          )}
                        </div>

                        {/* QUANTITY */}

                        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              decreaseQuantity(
                                item.id,
                              )
                            }
                            disabled={atMinimum}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            <Minus className="h-4 w-4" />
                          </button>

                          <span className="w-7 text-center font-serif text-lg">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              increaseQuantity(
                                item.id,
                              )
                            }
                            disabled={atMaximum}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/25 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* TOTAL */}

                        <div className="hidden w-24 shrink-0 text-right font-serif text-xl text-primary sm:block">
                          €
                          {(
                            item.price *
                            item.quantity
                          ).toFixed(2)}
                        </div>

                        {/* DELETE */}

                        {!isSauna && (
                          <button
                            type="button"
                            onClick={() =>
                              removeFromCart(
                                item.id,
                              )
                            }
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/20 text-muted-foreground transition-all hover:border-red-500 hover:bg-red-500 hover:text-white"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>

                      <div className="mt-3 border-t border-primary/10 pt-3 text-right font-serif text-lg text-primary sm:hidden">
                        €
                        {(
                          item.price *
                          item.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* TOTAL */}

          {cart.length > 0 && (
            <div className="border-t border-primary/15 px-6 py-4 sm:px-8">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {t.booking.total}
                </span>

                <span className="font-serif text-3xl text-primary">
                  €{finalTotal.toFixed(2)}
                </span>
              </div>

              {guestSurcharge > 0 && (
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Extra guests ({extraGuests} × €50)
                  </span>

                  <span className="font-medium text-primary">
                    +€{guestSurcharge.toFixed(2)}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* BOOKING FORM */}

          {cart.length > 0 && (
            <form
              id="booking-form"
              onSubmit={handleReserve}
              className="border-t border-primary/15 px-6 py-6 sm:px-8"
            >
              {/* FORM HEADING */}

              <div className="mb-6">
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
                  {t.booking.reservation}
                </p>

                <h3 className="mt-2 font-serif text-3xl font-light">
                  {t.booking.yourDetails}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {t.booking.detailsDescription}
                </p>
              </div>

              <div className="space-y-5">

                {/* FULL NAME */}

                <div>
                  <label
                    htmlFor="booking-name"
                    className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    {t.booking.fullName}
                  </label>

                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    required
                    placeholder={
                      t.booking
                        .fullNamePlaceholder
                    }
                    className="h-[54px] w-full rounded-xl border border-primary/20 bg-[#0e0a08] px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label
                    htmlFor="booking-phone"
                    className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    {t.booking.phone}
                  </label>

                  <div className="flex h-[54px] w-full overflow-hidden rounded-xl border border-primary/20 bg-[#0e0a08] transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20">
                    <div className="flex shrink-0 items-center border-r border-primary/15 px-4 text-sm font-medium text-primary">
                      +
                    </div>

                    <input
                      id="booking-phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="tel"
                      className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none"
                    />
                  </div>
                </div>

                {/* DATE + TIME */}

                <div className="grid gap-4 sm:grid-cols-2">

                  {/* DATE */}

                  <div className="relative">
                    <label
                      htmlFor="booking-date"
                      className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                    >
                      {t.booking.date}
                    </label>

                    <button
                      type="button"
                      id="booking-date"
                      onClick={() => {
                        setDateOpen(
                          !dateOpen,
                        )
                        setTimeOpen(false)
                        setGuestsOpen(false)
                      }}
                      className="flex h-[54px] w-full items-center rounded-xl border border-primary/20 bg-[#0e0a08] px-4 text-left text-sm outline-none transition-all hover:border-primary focus:border-primary"
                    >
                      <CalendarDays className="mr-3 h-[18px] w-[18px] shrink-0 text-primary" />

                      <span
                        className={
                          selectedDate
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }
                      >
                        {selectedDate
                          ? formatDate(
                              selectedDate,
                            )
                          : 'дд.мм.гггг'}
                      </span>

                      <ChevronDown
                        className={`ml-auto h-[18px] w-[18px] text-primary transition-transform ${
                          dateOpen
                            ? 'rotate-180'
                            : ''
                        }`}
                      />
                    </button>

                    <input
                      type="hidden"
                      name="date"
                      value={selectedDate}
                    />

                    {/* CALENDAR */}

                    {dateOpen && (
                      <div className="absolute left-0 right-0 top-[82px] z-50 overflow-hidden rounded-2xl border border-primary/30 bg-[#17110e] p-4 shadow-2xl">

                        {/* CALENDAR HEADER */}

                        <div className="mb-4 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={
                              previousMonth
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 text-primary transition hover:border-primary hover:bg-primary hover:text-black"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>

                          <span className="font-serif text-lg capitalize text-foreground">
                            {monthName}
                          </span>

                          <button
                            type="button"
                            onClick={
                              nextMonth
                            }
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 text-primary transition hover:border-primary hover:bg-primary hover:text-black"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>

                        {/* WEEKDAYS */}

                        <div className="mb-2 grid grid-cols-7 text-center text-[10px] font-semibold uppercase tracking-widest text-primary">
                          {[
                            'ПН',
                            'ВТ',
                            'СР',
                            'ЧТ',
                            'ПТ',
                            'СБ',
                            'ВС',
                          ].map(
                            (day) => (
                              <span
                                key={day}
                                className="py-2"
                              >
                                {day}
                              </span>
                            ),
                          )}
                        </div>

                        {/* DAYS */}

                        <div className="grid grid-cols-7 gap-1">
                          {calendarDays.map(
                            ({
                              day,
                              currentMonth,
                              date,
                            }) => {
                              const value =
                                dateToString(
                                  date,
                                )

                              const disabled =
                                value <
                                today

                              const selected =
                                value ===
                                selectedDate

                              return (
                                <button
                                  key={`${value}-${day}`}
                                  type="button"
                                  disabled={
                                    disabled
                                  }
                                  onClick={() =>
                                    selectDate(
                                      date,
                                    )
                                  }
                                  className={`
                                    flex h-9 items-center justify-center rounded-lg text-xs transition-all
                                    ${
                                      !currentMonth
                                        ? 'text-muted-foreground/30'
                                        : ''
                                    }
                                    ${
                                      disabled
                                        ? 'cursor-not-allowed text-muted-foreground/20'
                                        : 'hover:bg-primary/20 hover:text-primary'
                                    }
                                    ${
                                      selected
                                        ? 'bg-primary font-semibold text-black hover:bg-primary'
                                        : ''
                                    }
                                  `}
                                >
                                  {day}
                                </button>
                              )
                            },
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* TIME */}

                  <div className="relative">
                    <label
                      htmlFor="booking-time"
                      className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                    >
                      {t.booking.time}
                    </label>

                    <button
                      type="button"
                      id="booking-time"
                      onClick={() => {
                        setTimeOpen(
                          !timeOpen,
                        )
                        setDateOpen(false)
                        setGuestsOpen(false)
                      }}
                      className="flex h-[54px] w-full items-center rounded-xl border border-primary/20 bg-[#0e0a08] px-4 text-left text-sm outline-none transition-all hover:border-primary focus:border-primary"
                    >
                      <Clock3 className="mr-3 h-[18px] w-[18px] shrink-0 text-primary" />

                      <span
                        className={
                          selectedTime
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }
                      >
                        {selectedTime ||
                          '--:--'}
                      </span>

                      <ChevronDown
                        className={`ml-auto h-[18px] w-[18px] text-primary transition-transform ${
                          timeOpen
                            ? 'rotate-180'
                            : ''
                        }`}
                      />
                    </button>

                    <input
                      type="hidden"
                      name="time"
                      value={selectedTime}
                    />

                    {/* TIME PICKER */}

                    {timeOpen && (
                      <div className="absolute left-0 right-0 top-[82px] z-50 rounded-2xl border border-primary/30 bg-[#17110e] p-4 shadow-2xl">
                        <div className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                          {t.booking.time}
                        </div>

                        <div className="grid max-h-[260px] grid-cols-3 gap-2 overflow-y-auto pr-1">
                          {timeOptions.map(
                            (time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => {
                                  setSelectedTime(
                                    time,
                                  )
                                  setTimeOpen(
                                    false,
                                  )
                                }}
                                className={`
                                  rounded-lg border px-3 py-2.5 text-sm transition-all
                                  ${
                                    selectedTime ===
                                    time
                                      ? 'border-primary bg-primary text-black'
                                      : 'border-primary/15 bg-[#0e0a08] text-foreground hover:border-primary hover:text-primary'
                                  }
                                `}
                              >
                                {time}
                              </button>
                            ),
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* GUESTS */}

                <div className="relative">
                  <label
                    htmlFor="booking-guests"
                    className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    {t.booking.guests}
                  </label>

                  <button
                    type="button"
                    id="booking-guests"
                    onClick={() => {
                      setGuestsOpen(
                        !guestsOpen,
                      )
                      setDateOpen(false)
                      setTimeOpen(false)
                    }}
                    className="flex h-[54px] w-full items-center rounded-xl border border-primary/20 bg-[#0e0a08] px-4 text-left text-sm outline-none transition-all hover:border-primary focus:border-primary"
                  >
                    <span className="text-foreground">
                      {guests}{' '}
                      {guests === 1
                        ? t.booking.guest
                        : t.booking
                            .guestsPlural}
                    </span>

                    <ChevronDown
                      className={`ml-auto h-[18px] w-[18px] text-primary transition-transform ${
                        guestsOpen
                          ? 'rotate-180'
                          : ''
                      }`}
                    />
                  </button>

                  <input
                    type="hidden"
                    name="guests"
                    value={guests}
                  />

                  {/* GUEST PICKER */}

                  {guestsOpen && (
                    <div className="absolute left-0 right-0 top-[82px] z-50 rounded-2xl border border-primary/30 bg-[#17110e] p-3 shadow-2xl">
                      <div className="mb-2 px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                        {t.booking.guests}
                      </div>

                      <div className="grid max-h-[250px] grid-cols-2 gap-1 overflow-y-auto">
                        {Array.from(
                          { length: 17 },
                          (_, index) =>
                            index + 1,
                        ).map(
                          (number) => (
                            <button
                              key={number}
                              type="button"
                              onClick={() => {
                                setGuests(
                                  number,
                                )
                                setGuestsOpen(
                                  false,
                                )
                              }}
                              className={`
                                flex items-center justify-between rounded-lg px-3 py-3 text-sm transition-all
                                ${
                                  guests ===
                                  number
                                    ? 'bg-primary text-black'
                                    : 'text-foreground hover:bg-primary/10 hover:text-primary'
                                }
                              `}
                            >
                              <span>
                                {number}{' '}
                                {number === 1
                                  ? t.booking
                                      .guest
                                  : t.booking
                                      .guestsPlural}
                              </span>

                              {guests ===
                                number && (
                                <span className="text-xs">
                                  ✓
                                </span>
                              )}
                            </button>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {/* SURCHARGE */}

                  {guestSurcharge > 0 && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      {extraGuests}{' '}
                      extra guest
                      {extraGuests > 1
                        ? 's'
                        : ''}{' '}
                      × €50 = €
                      {guestSurcharge}
                    </p>
                  )}
                </div>

                {/* ADDITIONAL INFORMATION */}

                <div className="mt-6">
                  <label
                    htmlFor="booking-message"
                    className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
                  >
                    {
                      t.booking
                        .additionalInformation
                    }
                  </label>

                  <textarea
                    id="booking-message"
                    name="message"
                    rows={4}
                    placeholder={
                      t.booking
                        .additionalInformationPlaceholder
                    }
                    className="w-full resize-none rounded-xl border border-primary/20 bg-[#0e0a08] px-4 py-3.5 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary focus:ring-1 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* FINAL TOTAL */}

              <div className="mt-6 rounded-xl border border-primary/20 bg-[#15100e] px-5 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    {t.booking.total}
                  </span>

                  <span className="font-serif text-2xl text-primary">
                    €{finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full rounded-full border border-primary/40 bg-primary px-6 py-4 text-xs font-medium uppercase tracking-widest text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(178,141,32,0.15)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting
                  ? '...'
                  : t.booking.confirm}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}