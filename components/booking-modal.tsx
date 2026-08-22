'use client'

import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'
import { useEffect, useRef, useState } from 'react'
import {
  Calendar,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  X,
} from 'lucide-react'

import { brooms, serviceOptions } from '@/lib/site-data'

type BookingModalProps = {
  open: boolean
  onClose: () => void
  prefill?: {

    service?: string
    broom?: string
  }
}

type DropdownName =
  | 'date'
  | 'time'
  | 'duration'
  | 'guests'
  | 'services'
  | 'brooms'
  | null

export function BookingModal({
  open,
  onClose,
  prefill,
}: BookingModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  const [submitted, setSubmitted] = useState(false)
  const [openDropdown, setOpenDropdown] =
    useState<DropdownName>(null)

  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const [duration, setDuration] = useState('3 hours')
  const [guests, setGuests] = useState(2)

  const [selectedServices, setSelectedServices] =
    useState<string[]>([])

  const [broomQuantities, setBroomQuantities] =
    useState<Record<string, number>>({})

  const [calendarMonth, setCalendarMonth] =
    useState(() => new Date())

  /*
   * =========================================================
   * ВЕНИКИ
   * =========================================================
   *
   * Получаем все названия веников.
   * Это используется для того, чтобы веник НИКОГДА
   * не попал в список Services.
   */

  const broomNames = brooms.map(
    (broom) => broom.name.trim().toLowerCase(),
  )

  /*
   * Проверяем, является ли переданное значение веником.
   *
   * Поддерживаются:
   * - название
   * - id
   */

  const findBroom = (value?: string) => {
    if (!value) return undefined

    const normalized = value
      .trim()
      .toLowerCase()

    return brooms.find((broom) => {
      const broomName = broom.name
        .trim()
        .toLowerCase()

      const broomId = String(broom.id)
        .trim()
        .toLowerCase()

      return (
        broomName === normalized ||
        broomId === normalized
      )
    })
  }

  /*
   * =========================================================
   * ОПРЕДЕЛЯЕМ PREFILL
   * =========================================================
   */

  const broomFromBroomField =
    findBroom(prefill?.broom)

  const broomFromServiceField =
    findBroom(prefill?.service)

  /*
   * Если в prefill пришёл broom — используем его.
   *
   * Если по какой-то причине карточка передала веник
   * через service — тоже превращаем его в веник.
   */

  const incomingBroom =
    broomFromBroomField ??
    broomFromServiceField

  /*
   * SERVICE берём ТОЛЬКО если это действительно
   * НЕ веник.
   */

  const incomingService =
    prefill?.service &&
    !broomFromServiceField &&
    !broomFromBroomField
      ? prefill.service
      : undefined

  /*
   * =========================================================
   * OPEN
   * =========================================================
   */

  useEffect(() => {
    if (!open) return

    setSubmitted(false)
    setOpenDropdown(null)

    /*
     * Сбрасываем старые услуги.
     *
     * ВАЖНО:
     * даже если service случайно содержит название
     * веника — мы его сюда НЕ добавляем.
     */

    if (incomingService) {
      const isActuallyBroom =
        broomNames.includes(
          incomingService
            .trim()
            .toLowerCase(),
        )

      if (isActuallyBroom) {
        setSelectedServices([])
      } else {
        setSelectedServices([
          incomingService,
        ])
      }
    } else {
      setSelectedServices([])
    }

    /*
     * Устанавливаем веник.
     */

    if (incomingBroom) {
      setBroomQuantities({
        [incomingBroom.name]: 1,
      })
    } else {
      setBroomQuantities({})
    }

    const handleEscape = (
      event: KeyboardEvent,
    ) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        onClose()
      }
    }

    const handleOutsideClick = (
      event: MouseEvent,
    ) => {
      if (!openDropdown) return

      const target = event.target

      if (!(target instanceof Element)) return

      const insideDropdown =
        !!target.closest(
          '[data-booking-dropdown]',
        )

      const insideTrigger =
        !!target.closest(
          '[data-booking-trigger]',
        )

      if (
        !insideDropdown &&
        !insideTrigger
      ) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener(
      'keydown',
      handleEscape,
    )

    document.addEventListener(
      'mousedown',
      handleOutsideClick,
    )

    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow =
      'hidden'

    return () => {
      document.removeEventListener(
        'keydown',
        handleEscape,
      )

      document.removeEventListener(
        'mousedown',
        handleOutsideClick,
      )

      document.body.style.overflow =
        previousOverflow
    }
  }, [
    open,
    onClose,
    prefill?.service,
    prefill?.broom,
  ])

  if (!open) {
    return null
  }

  /*
   * =========================================================
   * DROPDOWN
   * =========================================================
   */

  const toggleDropdown = (
    name: Exclude<
      DropdownName,
      null
    >,
  ) => {
    setOpenDropdown(
      (current) =>
        current === name
          ? null
          : name,
    )
  }

  /*
   * =========================================================
   * SERVICES
   * =========================================================
   */

  const toggleService = (
    service: string,
  ) => {
    /*
     * ЗАЩИТА:
     *
     * Если service почему-то совпадает с веником,
     * вообще не добавляем его в Services.
     */

    const isBroom =
      broomNames.includes(
        service
          .trim()
          .toLowerCase(),
      )

    if (isBroom) {
      return
    }

    setSelectedServices(
      (current) => {
        if (
          current.includes(service)
        ) {
          return current.filter(
            (item) =>
              item !== service,
          )
        }

        return [
          ...current,
          service,
        ]
      },
    )
  }

  /*
   * =========================================================
   * ВЕНИКИ
   * =========================================================
   */

  const changeBroomQuantity = (
    broom: string,
    change: number,
  ) => {
    setBroomQuantities(
      (current) => {
        const currentQuantity =
          current[broom] || 0

        const totalQuantity =
          Object.values(
            current,
          ).reduce(
            (sum, value) =>
              sum + value,
            0,
          )

        /*
         * Максимум 10 веников.
         */

        if (
          change > 0 &&
          totalQuantity >= 10
        ) {
          return current
        }

        const newQuantity =
          Math.max(
            0,
            currentQuantity +
              change,
          )

        const next = {
          ...current,
        }

        if (newQuantity === 0) {
          delete next[broom]
        } else {
          next[broom] =
            newQuantity
        }

        return next
      },
    )
  }

  const totalBrooms =
    Object.values(
      broomQuantities,
    ).reduce(
      (sum, value) =>
        sum + value,
      0,
    )

  /*
   * =========================================================
   * ТЕКСТ SERVICES
   * =========================================================
   */

  /*
   * Дополнительная защита:
   *
   * даже если старое состояние каким-то образом
   * содержит название веника, мы его здесь убираем.
   */

  const safeSelectedServices =
    selectedServices.filter(
      (service) =>
        !broomNames.includes(
          service
            .trim()
            .toLowerCase(),
        ),
    )

  const selectedServicesText =
    safeSelectedServices.length === 0
      ? 'Choose services'
      : safeSelectedServices.length === 1
        ? safeSelectedServices[0]
        : `${safeSelectedServices.length} services selected`

  /*
   * =========================================================
   * ТЕКСТ ВЕНИКОВ
   * =========================================================
   */

  const selectedBroomsText =
    totalBrooms === 0
      ? 'Choose bath brooms'
      : totalBrooms === 1
        ? '1 broom selected'
        : `${totalBrooms} brooms selected`

  /*
   * =========================================================
   * SUBMIT
   * =========================================================
   */

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    if (!selectedDate) {
      setOpenDropdown('date')
      return
    }

    if (!selectedTime) {
      setOpenDropdown('time')
      return
    }

    setOpenDropdown(null)
    setSubmitted(true)
  }

  /*
   * =========================================================
   * RENDER
   * =========================================================
   */

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Reserve your visit"
    >
      {/* BACKGROUND */}

      <button
        type="button"
        aria-label="Close booking form"
        onClick={() => {
          setOpenDropdown(null)
          onClose()
        }}
        className="fixed inset-0 h-full w-full cursor-default"
      />

      {/* MODAL */}

      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-2xl rounded-t-2xl border border-[#b28d20]/50 bg-[#080808] p-6 shadow-2xl sm:rounded-2xl sm:p-8"
      >
        {/* CLOSE */}

        <button
          type="button"
          onClick={() => {
            setOpenDropdown(null)
            onClose()
          }}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-[#b28d20] hover:text-[#b28d20]"
        >
          <X className="h-4 w-4" />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center py-12 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#b28d20]/15 text-[#b28d20]">
              <Check className="h-7 w-7" />
            </div>

            <h3 className="font-serif text-3xl font-light text-white">
              Your request is received
            </h3>

            <p className="mt-3 max-w-md leading-relaxed text-white/50">
              Thank you. Our concierge
              will confirm your private
              session within a few hours.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-[#b28d20] px-8 py-3 text-sm font-medium uppercase tracking-widest text-black transition-colors hover:bg-[#c9a42d]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* HEADER */}

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b28d20]">
              Reserve your visit
            </p>

            <h3 className="mt-2 font-serif text-3xl font-light text-white sm:text-4xl">
              Request a private session
            </h3>

            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#b28d20]/40 bg-black px-3 py-1.5 text-xs text-white/50">
              <Clock className="h-3.5 w-3.5 text-[#b28d20]" />

              Reservations are available
              for a minimum of 3 hours
            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {/* NAME */}

              <Field
                label="Full name"
                htmlFor="name"
              >
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClass}
                />
              </Field>

              {/* PHONE */}

              <Field
                label="Phone"
                htmlFor="phone"
              >
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+00 000 000 000"
                  className={inputClass}
                />
              </Field>

              {/* EMAIL */}

              <Field
                label="Email"
                htmlFor="email"
                className="sm:col-span-2"
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  className={inputClass}
                />
              </Field>

              {/* DATE */}

              <Field
                label="Date"
                htmlFor="date"
              >
                <div className="relative">
                  <button
                    id="date"
                    type="button"
                    data-booking-trigger
                    onClick={() =>
                      toggleDropdown(
                        'date',
                      )
                    }
                    className={
                      selectButtonClass
                    }
                  >
                    <span
                      className={
                        selectedDate
                          ? 'text-white'
                          : 'text-white/35'
                      }
                    >
                      {selectedDate ||
                        'dd/mm/yyyy'}
                    </span>

                    <Calendar className="h-4 w-4 text-[#b28d20]" />
                  </button>

                  {openDropdown ===
                    'date' && (
                    <DatePicker
                      selectedDate={
                        selectedDate
                      }
                      month={
                        calendarMonth
                      }
                      onMonthChange={
                        setCalendarMonth
                      }
                      onSelect={(
                        date,
                      ) => {
                        setSelectedDate(
                          date,
                        )
                        setOpenDropdown(
                          null,
                        )
                      }}
                    />
                  )}
                </div>
              </Field>

              {/* TIME */}

              <Field
                label="Preferred time"
                htmlFor="time"
              >
                <div className="relative">
                  <button
                    id="time"
                    type="button"
                    data-booking-trigger
                    onClick={() =>
                      toggleDropdown(
                        'time',
                      )
                    }
                    className={
                      selectButtonClass
                    }
                  >
                    <span
                      className={
                        selectedTime
                          ? 'text-white'
                          : 'text-white/35'
                      }
                    >
                      {selectedTime ||
                        '--:--'}
                    </span>

                    <Clock className="h-4 w-4 text-[#b28d20]" />
                  </button>

                  {openDropdown ===
                    'time' && (
                    <TimePicker
                      selectedTime={
                        selectedTime
                      }
                      onSelect={(
                        time,
                      ) => {
                        setSelectedTime(
                          time,
                        )
                        setOpenDropdown(
                          null,
                        )
                      }}
                    />
                  )}
                </div>
              </Field>

              {/* DURATION */}

              <Field
                label="Duration"
                htmlFor="duration"
              >
                <div className="relative">
                  <button
                    id="duration"
                    type="button"
                    data-booking-trigger
                    onClick={() =>
                      toggleDropdown(
                        'duration',
                      )
                    }
                    className={
                      selectButtonClass
                    }
                  >
                    <span>
                      {duration}
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 text-[#b28d20] transition-transform ${
                        openDropdown ===
                        'duration'
                          ? 'rotate-180'
                          : ''
                      }`}
                    />
                  </button>

                  {openDropdown ===
                    'duration' && (
                    <DropdownMenu>
                      {[
                        '3 hours',
                        '4 hours',
                        '5 hours',
                        '6 hours',
                        'Full evening',
                      ].map(
                        (item) => (
                          <Choice
                            key={item}
                            text={item}
                            selected={
                              duration ===
                              item
                            }
                            onClick={() => {
                              setDuration(
                                item,
                              )
                              setOpenDropdown(
                                null,
                              )
                            }}
                          />
                        ),
                      )}
                    </DropdownMenu>
                  )}
                </div>
              </Field>

              {/* GUESTS */}

              <Field
                label="Guests"
                htmlFor="guests"
              >
                <div className="relative">
                  <button
                    id="guests"
                    type="button"
                    data-booking-trigger
                    onClick={() =>
                      toggleDropdown(
                        'guests',
                      )
                    }
                    className={
                      selectButtonClass
                    }
                  >
                    <span>
                      {guests}{' '}
                      {guests === 1
                        ? 'guest'
                        : 'guests'}
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 text-[#b28d20] transition-transform ${
                        openDropdown ===
                        'guests'
                          ? 'rotate-180'
                          : ''
                      }`}
                    />
                  </button>

                  {openDropdown ===
                    'guests' && (
                    <DropdownMenu>
                      {[
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                      ].map(
                        (number) => (
                          <Choice
                            key={number}
                            text={`${number} ${
                              number ===
                              1
                                ? 'guest'
                                : 'guests'
                            }`}
                            selected={
                              guests ===
                              number
                            }
                            onClick={() => {
                              setGuests(
                                number,
                              )
                              setOpenDropdown(
                                null,
                              )
                            }}
                          />
                        ),
                      )}
                    </DropdownMenu>
                  )}
                </div>
              </Field>

              {/* SERVICES */}

              <div className="sm:col-span-2">
                <label
                  className={labelClass}
                >
                  Services
                </label>

                <div className="relative">
                  <button
                    type="button"
                    data-booking-trigger
                    onClick={() =>
                      toggleDropdown(
                        'services',
                      )
                    }
                    className={
                      selectButtonClass
                    }
                  >
                    <span>
                      {
                        selectedServicesText
                      }
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 text-[#b28d20] transition-transform ${
                        openDropdown ===
                        'services'
                          ? 'rotate-180'
                          : ''
                      }`}
                    />
                  </button>

                  {openDropdown ===
                    'services' && (
                    <DropdownMenu>
                      <div className="max-h-64 overflow-y-auto">
                        {serviceOptions
                          /*
                           * ВАЖНО:
                           * дополнительно убираем
                           * все веники из Services.
                           */
                          .filter(
                            (service) =>
                              !broomNames.includes(
                                service
                                  .trim()
                                  .toLowerCase(),
                              ),
                          )
                          .map(
                            (
                              service,
                            ) => (
                              <Choice
                                key={
                                  service
                                }
                                text={
                                  service
                                }
                                selected={safeSelectedServices.includes(
                                  service,
                                )}
                                onClick={() =>
                                  toggleService(
                                    service,
                                  )
                                }
                              />
                            ),
                          )}
                      </div>

                      <DoneButton
                        onClick={() =>
                          setOpenDropdown(
                            null,
                          )
                        }
                      />
                    </DropdownMenu>
                  )}
                </div>
              </div>

              {/* BATH BROOMS */}

              <div className="sm:col-span-2">
                <label
                  className={labelClass}
                >
                  Bath brooms
                </label>

                <div className="relative">
                  <button
                    type="button"
                    data-booking-trigger
                    onClick={() =>
                      toggleDropdown(
                        'brooms',
                      )
                    }
                    className={
                      selectButtonClass
                    }
                  >
                    <span>
                      {
                        selectedBroomsText
                      }
                    </span>

                    <ChevronDown
                      className={`h-4 w-4 text-[#b28d20] transition-transform ${
                        openDropdown ===
                        'brooms'
                          ? 'rotate-180'
                          : ''
                      }`}
                    />
                  </button>

                  {openDropdown ===
                    'brooms' && (
                    <DropdownMenu>
                      <div className="max-h-72 overflow-y-auto">
                        {brooms.map(
                          (broom) => {
                            const quantity =
                              broomQuantities[
                                broom.name
                              ] || 0

                            const canAdd =
                              totalBrooms <
                              10

                            return (
                              <div
                                key={
                                  broom.id
                                }
                                className={`flex items-center justify-between border-b border-white/10 px-4 py-3 transition-all ${
                                  quantity >
                                  0
                                    ? 'bg-[#b28d20]/10'
                                    : 'hover:bg-[#b28d20]/5'
                                }`}
                              >
                                <span
                                  className={`text-sm ${
                                    quantity >
                                    0
                                      ? 'text-[#b28d20]'
                                      : 'text-white/70'
                                  }`}
                                >
                                  {
                                    broom.name
                                  }
                                </span>

                                <div className="flex items-center gap-2">
                                  {/* MINUS */}

                                  <button
                                    type="button"
                                    onClick={() =>
                                      changeBroomQuantity(
                                        broom.name,
                                        -1,
                                      )
                                    }
                                    disabled={
                                      quantity ===
                                      0
                                    }
                                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-[#b28d20] hover:text-[#b28d20] disabled:cursor-not-allowed disabled:opacity-20"
                                  >
                                    −
                                  </button>

                                  {/* NUMBER */}

                                  <span
                                    className={`flex h-7 min-w-[28px] items-center justify-center text-sm font-medium ${
                                      quantity >
                                      0
                                        ? 'text-[#b28d20]'
                                        : 'text-white/30'
                                    }`}
                                  >
                                    {
                                      quantity
                                    }
                                  </span>

                                  {/* PLUS */}

                                  <button
                                    type="button"
                                    onClick={() =>
                                      changeBroomQuantity(
                                        broom.name,
                                        1,
                                      )
                                    }
                                    disabled={
                                      !canAdd
                                    }
                                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all hover:border-[#b28d20] hover:text-[#b28d20] disabled:cursor-not-allowed disabled:opacity-20"
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                            )
                          },
                        )}
                      </div>

                      <div className="flex items-center justify-between border-t border-white/10 px-3 py-2">
                        <span className="text-xs text-white/30">
                          {totalBrooms}/10
                        </span>

                        <DoneButton
                          onClick={() =>
                            setOpenDropdown(
                              null,
                            )
                          }
                        />
                      </div>
                    </DropdownMenu>
                  )}
                </div>
              </div>

              {/* NOTES */}

              <Field
                label="Notes & dining requests"
                htmlFor="notes"
                className="sm:col-span-2"
              >
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  placeholder="Dietary preferences, a lunch or dinner prepared before arrival, special occasions…"
                  className={`${inputClass} resize-none`}
                />
              </Field>

              {/* SUBMIT */}

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-[#b28d20] px-8 py-4 text-sm font-medium uppercase tracking-widest text-black transition-all hover:bg-[#c9a42d] hover:shadow-[0_0_25px_rgba(178,141,32,0.25)] sm:col-span-2"
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

/* =========================================================
   DATE PICKER
========================================================= */

function DatePicker({
  selectedDate,
  month,
  onMonthChange,
  onSelect,
}: {
  selectedDate: string
  month: Date
  onMonthChange: (date: Date) => void
  onSelect: (date: string) => void
}) {
  const year =
    month.getFullYear()

  const monthIndex =
    month.getMonth()

  const monthName =
    month.toLocaleDateString(
      'en-US',
      {
        month: 'long',
      },
    )

  const firstDay =
    new Date(
      year,
      monthIndex,
      1,
    ).getDay()

  const offset =
    firstDay === 0
      ? 6
      : firstDay - 1

  const daysInMonth =
    new Date(
      year,
      monthIndex + 1,
      0,
    ).getDate()

  const cells: Array<{
    day: number
    date: string
    current: boolean
  }> = []

  const previousMonthDays =
    new Date(
      year,
      monthIndex,
      0,
    ).getDate()

  for (
    let i = offset - 1;
    i >= 0;
    i--
  ) {
    const day =
      previousMonthDays - i

    cells.push({
      day,
      date: makeDate(
        new Date(
          year,
          monthIndex - 1,
          day,
        ),
      ),
      current: false,
    })
  }

  for (
    let day = 1;
    day <= daysInMonth;
    day++
  ) {
    cells.push({
      day,
      date: makeDate(
        new Date(
          year,
          monthIndex,
          day,
        ),
      ),
      current: true,
    })
  }

  let nextDay = 1

  while (cells.length < 42) {
    cells.push({
      day: nextDay,
      date: makeDate(
        new Date(
          year,
          monthIndex + 1,
          nextDay,
        ),
      ),
      current: false,
    })

    nextDay++
  }

  const today =
    makeDate(new Date())

  return (
    <div
      data-booking-dropdown
      className="absolute left-0 right-0 top-full z-[100] mt-1 overflow-hidden rounded-md border border-[#b28d20] bg-[#080808] shadow-2xl"
    >
      {/* MONTH */}

      <div className="flex items-center justify-between border-b border-white/10 px-3 py-3">
        <button
          type="button"
          onClick={() =>
            onMonthChange(
              new Date(
                year,
                monthIndex - 1,
                1,
              ),
            )
          }
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-[#b28d20]/10 hover:text-[#b28d20]"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <span className="text-sm text-white">
          {monthName} {year}
        </span>

        <button
          type="button"
          onClick={() =>
            onMonthChange(
              new Date(
                year,
                monthIndex + 1,
                1,
              ),
            )
          }
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-[#b28d20]/10 hover:text-[#b28d20]"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* WEEK */}

      <div className="grid grid-cols-7 px-2 pt-2">
        {[
          'Mo',
          'Tu',
          'We',
          'Th',
          'Fr',
          'Sa',
          'Su',
        ].map((day) => (
          <span
            key={day}
            className="text-center text-[10px] uppercase tracking-wider text-white/30"
          >
            {day}
          </span>
        ))}
      </div>

      {/* DAYS */}

      <div className="grid grid-cols-7 gap-1 p-2">
        {cells.map(
          (
            cell,
            index,
          ) => {
            const selected =
              selectedDate ===
              cell.date

            const isToday =
              today ===
              cell.date

            return (
              <button
                key={`${cell.date}-${index}`}
                type="button"
                onClick={() =>
                  onSelect(
                    cell.date,
                  )
                }
                className={`flex h-9 items-center justify-center rounded-md text-xs transition-all ${
                  selected
                    ? 'bg-[#b28d20] text-black'
                    : cell.current
                      ? 'text-white/80 hover:bg-[#b28d20]/15 hover:text-[#b28d20]'
                      : 'text-white/20 hover:bg-white/5'
                } ${
                  isToday &&
                  !selected
                    ? 'ring-1 ring-[#b28d20]'
                    : ''
                }`}
              >
                {cell.day}
              </button>
            )
          },
        )}
      </div>

      {/* FOOTER */}

      <div className="flex items-center justify-between border-t border-white/10 px-3 py-2">
        <button
          type="button"
          onClick={() =>
            onSelect('')
          }
          className="text-xs text-white/30 transition-colors hover:text-white"
        >
          Clear
        </button>

        <button
          type="button"
          onClick={() =>
            onSelect(today)
          }
          className="text-xs uppercase tracking-widest text-[#b28d20] transition-colors hover:text-[#c9a42d]"
        >
          Today
        </button>
      </div>
    </div>
  )
}

/* =========================================================
   TIME PICKER
========================================================= */

function TimePicker({
  selectedTime,
  onSelect,
}: {
  selectedTime: string
  onSelect: (
    time: string,
  ) => void
}) {
  const times: string[] = []

  for (
    let hour = 0;
    hour < 24;
    hour++
  ) {
    for (
      let minute = 0;
      minute < 60;
      minute += 30
    ) {
      times.push(
        `${String(
          hour,
        ).padStart(
          2,
          '0',
        )}:${String(
          minute,
        ).padStart(
          2,
          '0',
        )}`,
      )
    }
  }

  return (
    <div
      data-booking-dropdown
      className="absolute left-0 right-0 top-full z-[100] mt-1 overflow-hidden rounded-md border border-[#b28d20] bg-[#080808] shadow-2xl"
    >
      <div className="grid max-h-64 grid-cols-2 gap-1 overflow-y-auto p-2">
        {times.map(
          (time) => {
            const selected =
              selectedTime ===
              time

            return (
              <button
                key={time}
                type="button"
                onClick={() =>
                  onSelect(
                    time,
                  )
                }
                className={`group flex items-center justify-between rounded-md px-3 py-3 text-sm transition-all ${
                  selected
                    ? 'bg-[#b28d20]/15 text-[#b28d20]'
                    : 'text-white/70 hover:bg-[#b28d20]/10 hover:text-[#b28d20]'
                }`}
              >
                <span>
                  {time}
                </span>

                <SelectionCircle
                  selected={
                    selected
                  }
                />
              </button>
            )
          },
        )}
      </div>
    </div>
  )
}

/* =========================================================
   DROPDOWN
========================================================= */

function DropdownMenu({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      data-booking-dropdown
      className="absolute left-0 right-0 top-full z-[100] mt-1 overflow-hidden rounded-md border border-[#b28d20] bg-[#080808] shadow-2xl"
    >
      {children}
    </div>
  )
}

/* =========================================================
   CHOICE
========================================================= */

function Choice({
  text,
  selected,
  onClick,
}: {
  text: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center justify-between rounded-md border-b border-white/10 px-4 py-3 text-left text-sm transition-all duration-200 last:border-b-0 ${
        selected
          ? 'border border-[#b28d20] bg-[#b28d20]/10 text-[#b28d20]'
          : 'border border-transparent text-white/70 hover:border-[#b28d20] hover:bg-[#b28d20]/10 hover:text-[#b28d20]'
      }`}
    >
      <span>
        {text}
      </span>

      <SelectionCircle
        selected={selected}
      />
    </button>
  )
}

/* =========================================================
   CIRCLE
========================================================= */

function SelectionCircle({
  selected,
}: {
  selected: boolean
}) {
  return (
    <span
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
        selected
          ? 'border-[#b28d20] bg-[#b28d20]'
          : 'border-white/30 group-hover:border-[#b28d20]'
      }`}
    >
      {selected && (
        <Check className="h-3 w-3 text-black" />
      )}
    </span>
  )
}

/* =========================================================
   DONE
========================================================= */

function DoneButton({
  onClick,
}: {
  onClick: () => void
}) {
  return (
    <div className="border-t border-white/10 p-2">
      <button
        type="button"
        onClick={onClick}
        className="w-full rounded-md py-2 text-xs uppercase tracking-widest text-[#b28d20] transition-colors hover:bg-[#b28d20]/10"
      >
        Done
      </button>
    </div>
  )
}

/* =========================================================
   FIELD
========================================================= */

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
    <div
      className={className}
    >
      <label
        htmlFor={htmlFor}
        className={labelClass}
      >
        {label}
      </label>

      {children}
    </div>
  )
}

/* =========================================================
   STYLES
========================================================= */

const labelClass =
  'mb-1.5 block text-xs uppercase tracking-widest text-white/50'

const inputClass =
  'w-full rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder:text-white/30 hover:border-[#b28d20] focus:border-[#b28d20] focus:ring-1 focus:ring-[#b28d20]'

const selectButtonClass =
  'flex min-h-[46px] w-full items-center justify-between rounded-md border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition-all duration-200 hover:border-[#b28d20] focus:border-[#b28d20]'

/* =========================================================
   DATE HELPER
========================================================= */

function makeDate(
  date: Date,
) {
  const day =
    String(
      date.getDate(),
    ).padStart(2, '0')

  const month =
    String(
      date.getMonth() + 1,
    ).padStart(2, '0')

  const year =
    date.getFullYear()

  return `${day}/${month}/${year}`
}