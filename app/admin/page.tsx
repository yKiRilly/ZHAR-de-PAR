
'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Pencil,
  Phone,
  RefreshCw,
  Search,
  Trash2,
  X,
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

const ADMIN_EMAIL = 'kirill2525225@gmail.com'

type BookingItem = {
  id?: string
  name?: string
  price?: number
  quantity?: number
}

type Booking = {
  id: number | string
  name: string | null
  phone: string | null
  booking_date: string | null
  booking_time: string | null
  booking_start: string | null
  booking_end: string | null
  duration_minutes: number | null
  guests: number | null
  message: string | null
  cart: BookingItem[] | null
  total: number | null
  status: string | null
  created_at: string | null
}

type EditForm = {
  name: string
  phone: string
  booking_date: string
  booking_time: string
  guests: number
  message: string
}

type BookingFilter =
  | 'all'
  | 'today'
  | 'upcoming'
  | 'new'
  | 'confirmed'
  | 'completed'
  | 'cancelled'

const statuses = [
  {
    value: 'new',
    label: 'Новая',
  },
  {
    value: 'confirmed',
    label: 'Подтверждена',
  },
  {
    value: 'completed',
    label: 'Завершена',
  },
  {
    value: 'cancelled',
    label: 'Отменена',
  },
]

const filters: {
  value: BookingFilter
  label: string
}[] = [
  {
    value: 'all',
    label: 'Все',
  },
  {
    value: 'today',
    label: 'Сегодня',
  },
  {
    value: 'upcoming',
    label: 'Предстоящие',
  },
  {
    value: 'new',
    label: 'Новые',
  },
  {
    value: 'confirmed',
    label: 'Подтверждённые',
  },
  {
    value: 'completed',
    label: 'Завершённые',
  },
  {
    value: 'cancelled',
    label: 'Отменённые',
  },
]

function formatDate(date: string | null) {
  if (!date) return '—'

  const parts = date.split('-')

  if (parts.length !== 3) {
    return date
  }

  return `${parts[2]}.${parts[1]}.${parts[0]}`
}

function getStatusLabel(status: string | null) {
  return (
    statuses.find(
      (item) => item.value === (status || 'new'),
    )?.label || 'Новая'
  )
}

function getStatusClass(status: string | null) {
  switch (status || 'new') {
    case 'confirmed':
      return 'border-green-500/30 bg-green-500/10 text-green-300'

    case 'completed':
      return 'border-blue-500/30 bg-blue-500/10 text-blue-300'

    case 'cancelled':
      return 'border-red-500/30 bg-red-500/10 text-red-300'

    default:
      return 'border-primary/30 bg-primary/10 text-primary'
  }
}

function getServiceName(item: BookingItem) {
  const id = item.id?.toLowerCase() || ''
  const name = item.name?.trim() || ''

  if (id === 'sauna-rental' || id === 'sauna') {
    return 'Аренда банного пространства'
  }

  if (
    id === 'steam' ||
    id === 'steam-ritual' ||
    id === 'shared-steam'
  ) {
    return 'Парение — общий ритуал'
  }

  if (id === 'individual-steam') {
    return 'Парение — индивидуальный ритуал'
  }

  if (
    id === 'kupel' ||
    id === 'bath' ||
    id === 'baptismal-font'
  ) {
    return 'Купель'
  }

  if (id === 'grill') {
    return 'Мангал'
  }

  if (
    id === 'salt-honey' ||
    id === 'salt-honey-scrub'
  ) {
    return 'Скраб с солью и мёдом'
  }

  if (
    id === 'towel' ||
    id === 'towels' ||
    id === 'towel-sheet'
  ) {
    return 'Полотенце и простынь'
  }

  if (
    id === 'slippers' ||
    id === 'slippers-hat'
  ) {
    return 'Тапочки и банная шапка'
  }

  if (
    id === 'birch' ||
    id === 'birch-broom'
  ) {
    return 'Берёзовый веник'
  }

  if (
    id === 'oak' ||
    id === 'oak-broom'
  ) {
    return 'Дубовый веник'
  }

  if (
    id === 'eucalyptus' ||
    id === 'eucalyptus-broom'
  ) {
    return 'Эвкалиптовый веник'
  }

  if (
    id === 'canadian' ||
    id === 'canadian-broom'
  ) {
    return 'Канадский веник'
  }

  return name || 'Услуга'
}

function parseCart(cart: Booking['cart']): BookingItem[] {
  if (Array.isArray(cart)) {
    return cart
  }

  if (typeof cart === 'string') {
    try {
      const parsed = JSON.parse(cart)

      if (Array.isArray(parsed)) {
        return parsed
      }
    } catch {
      return []
    }
  }

  return []
}

function getTodayString() {
  const today = new Date()

  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(
    2,
    '0',
  )
  const day = String(today.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function getMonthName(date: Date) {
  return date.toLocaleDateString('ru-RU', {
    month: 'long',
    year: 'numeric',
  })
}

function getCalendarDays(monthDate: Date) {
  const year = monthDate.getFullYear()
  const month = monthDate.getMonth()

  const firstDay = new Date(year, month, 1)

  let startDay = firstDay.getDay()

  startDay = startDay === 0 ? 6 : startDay - 1

  const daysInMonth = new Date(
    year,
    month + 1,
    0,
  ).getDate()

  const totalCells =
    Math.ceil(
      (startDay + daysInMonth) / 7,
    ) * 7

  const days: Date[] = []

  for (let index = 0; index < totalCells; index++) {
    const dayNumber =
      index - startDay + 1

    days.push(
      new Date(
        year,
        month,
        dayNumber,
      ),
    )
  }

  return days
}

function dateToString(date: Date) {
  const year = date.getFullYear()

  const month = String(
    date.getMonth() + 1,
  ).padStart(2, '0')

  const day = String(
    date.getDate(),
  ).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function parseLocalDateTime(value: string) {
  const normalized = value
    .replace('T', ' ')
    .slice(0, 16)

  const [datePart, timePart] =
    normalized.split(' ')

  if (!datePart || !timePart) {
    return new Date(value)
  }

  const [year, month, day] =
    datePart.split('-').map(Number)

  const [hours, minutes] =
    timePart.split(':').map(Number)

  return new Date(
    year,
    month - 1,
    day,
    hours,
    minutes,
    0,
    0,
  )
}

function getBookingEnd(
  date: string,
  time: string,
  durationMinutes: number,
) {
  const [year, month, day] =
    date.split('-').map(Number)

  const [hours, minutes] =
    time.split(':').map(Number)

  const start = new Date(
    year,
    month - 1,
    day,
    hours,
    minutes,
    0,
    0,
  )

  const end = new Date(
    start.getTime() +
      durationMinutes * 60 * 1000,
  )

  const endYear = end.getFullYear()

  const endMonth = String(
    end.getMonth() + 1,
  ).padStart(2, '0')

  const endDay = String(
    end.getDate(),
  ).padStart(2, '0')

  const endHours = String(
    end.getHours(),
  ).padStart(2, '0')

  const endMinutes = String(
    end.getMinutes(),
  ).padStart(2, '0')

  return `${endYear}-${endMonth}-${endDay} ${endHours}:${endMinutes}:00`
}

function formatTime(value: string | null) {
  if (!value) return '—'

  if (value.includes(' ')) {
    return value.split(' ').pop()?.slice(0, 5) || value
  }

  if (value.includes('T')) {
    return value.split('T').pop()?.slice(0, 5) || value
  }

  return value.slice(0, 5)
}

function getPhoneLink(phone: string | null) {
  if (!phone) return ''

  return phone.replace(/\D/g, '')
}

export default function AdminPage() {
  const router = useRouter()

  const [bookings, setBookings] =
    useState<Booking[]>([])

  const [loading, setLoading] =
    useState(true)

  const [error, setError] =
    useState('')

  const [updatingId, setUpdatingId] =
    useState<string | number | null>(null)

  const [expandedId, setExpandedId] =
    useState<string | number | null>(null)

  const [selectedDate, setSelectedDate] =
    useState(getTodayString())

  const [calendarMonth, setCalendarMonth] =
    useState(() => new Date())

  const [editingBooking, setEditingBooking] =
    useState<Booking | null>(null)

  const [editForm, setEditForm] =
    useState<EditForm>({
      name: '',
      phone: '',
      booking_date: '',
      booking_time: '',
      guests: 2,
      message: '',
    })

  const [savingEdit, setSavingEdit] =
    useState(false)

  const [filter, setFilter] =
    useState<BookingFilter>('all')

  const [search, setSearch] =
    useState('')

  const [sortOrder, setSortOrder] =
    useState<'asc' | 'desc'>('asc')

  const loadBookings = async () => {
    setLoading(true)
    setError('')

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        router.replace('/admin/login')
        return
      }

      if (session.user.email !== ADMIN_EMAIL) {
        await supabase.auth.signOut()
        router.replace('/admin/login')
        return
      }

      const {
        data,
        error: bookingsError,
      } = await supabase
        .from('bookings')
        .select('*')
        .order('booking_date', {
          ascending: true,
        })
        .order('booking_time', {
          ascending: true,
        })

      if (bookingsError) {
        console.error(
          'ADMIN BOOKINGS ERROR:',
          bookingsError,
        )

        setError(
          bookingsError.message ||
            'Не удалось загрузить бронирования.',
        )

        return
      }

      setBookings((data || []) as Booking[])
    } catch (err) {
      console.error(
        'ADMIN LOAD ERROR:',
        err,
      )

      setError(
        'Не удалось загрузить бронирования.',
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBookings()
  }, [router])

  const filteredBookings = useMemo(() => {
    const query = search
      .trim()
      .toLowerCase()

    const now = new Date()

    return [...bookings]
      .filter((booking) => {
        const status =
          booking.status || 'new'

        if (filter === 'today') {
          return (
            booking.booking_date ===
            getTodayString()
          )
        }

        if (filter === 'upcoming') {
          if (status === 'cancelled') {
            return false
          }

          if (!booking.booking_date) {
            return false
          }

          const dateTime =
            booking.booking_time
              ? parseLocalDateTime(
                  `${booking.booking_date} ${booking.booking_time}:00`,
                )
              : parseLocalDateTime(
                  `${booking.booking_date} 23:59:59`,
                )

          return dateTime >= now
        }

        if (filter === 'new') {
          return status === 'new'
        }

        if (filter === 'confirmed') {
          return status === 'confirmed'
        }

        if (filter === 'completed') {
          return status === 'completed'
        }

        if (filter === 'cancelled') {
          return status === 'cancelled'
        }

        return true
      })
      .filter((booking) => {
        if (!query) {
          return true
        }

        const name =
          booking.name?.toLowerCase() || ''

        const phone =
          booking.phone?.toLowerCase() || ''

        return (
          name.includes(query) ||
          phone.includes(query)
        )
      })
      .sort((a, b) => {
        const dateA =
          `${a.booking_date || ''} ${a.booking_time || ''}`

        const dateB =
          `${b.booking_date || ''} ${b.booking_time || ''}`

        const comparison =
          dateA.localeCompare(dateB)

        return sortOrder === 'asc'
          ? comparison
          : -comparison
      })
  }, [
    bookings,
    filter,
    search,
    sortOrder,
  ])

  const updateStatus = async (
    bookingId: string | number,
    newStatus: string,
  ) => {
    if (newStatus === 'cancelled') {
      const confirmed = window.confirm(
        'Вы действительно хотите отменить эту бронь?\n\nПосле отмены это время снова станет доступным для клиентов.',
      )

      if (!confirmed) return
    }

    setUpdatingId(bookingId)

    try {
      const {
        error: updateError,
      } = await supabase
        .from('bookings')
        .update({
          status: newStatus,
        })
        .eq('id', bookingId)

      if (updateError) {
        console.error(
          'UPDATE BOOKING ERROR:',
          updateError,
        )

        alert(
          updateError.message ||
            'Не удалось изменить статус.',
        )

        return
      }

      setBookings((current) =>
        current.map((booking) =>
          booking.id === bookingId
            ? {
                ...booking,
                status: newStatus,
              }
            : booking,
        ),
      )
    } finally {
      setUpdatingId(null)
    }
  }

  const cancelBooking = async (
    bookingId: string | number,
  ) => {
    const confirmed = window.confirm(
      'Отменить эту бронь?\n\nПосле отмены время снова будет доступно для бронирования.',
    )

    if (!confirmed) return

    setUpdatingId(bookingId)

    try {
      const {
        error: updateError,
      } = await supabase
        .from('bookings')
        .update({
          status: 'cancelled',
        })
        .eq('id', bookingId)

      if (updateError) {
        console.error(
          'CANCEL BOOKING ERROR:',
          updateError,
        )

        alert(
          updateError.message ||
            'Не удалось отменить бронь.',
        )

        return
      }

      setBookings((current) =>
        current.map((booking) =>
          booking.id === bookingId
            ? {
                ...booking,
                status: 'cancelled',
              }
            : booking,
        ),
      )
    } finally {
      setUpdatingId(null)
    }
  }

  const openEdit = (
    booking: Booking,
  ) => {
    setEditingBooking(booking)

    setEditForm({
      name: booking.name || '',
      phone: booking.phone || '',
      booking_date:
        booking.booking_date || '',
      booking_time:
        booking.booking_time || '',
      guests: Math.max(
        1,
        Number(booking.guests || 2),
      ),
      message: booking.message || '',
    })
  }

  const closeEdit = () => {
    if (savingEdit) return

    setEditingBooking(null)
  }

  const saveEdit = async () => {
    if (!editingBooking) return

    const name =
      editForm.name.trim()

    const phone =
      editForm.phone.trim()

    const bookingDate =
      editForm.booking_date

    const bookingTime =
      editForm.booking_time

    const guests = Math.max(
      1,
      Number(editForm.guests || 1),
    )

    const message =
      editForm.message.trim()

    if (!name) {
      alert('Введите имя клиента.')
      return
    }

    if (!phone) {
      alert('Введите телефон клиента.')
      return
    }

    if (!bookingDate) {
      alert('Выберите дату.')
      return
    }

    if (!bookingTime) {
      alert('Выберите время.')
      return
    }

    if (
      !Number.isFinite(guests) ||
      guests > 50
    ) {
      alert(
        'Количество гостей должно быть от 1 до 50.',
      )
      return
    }

    const cartItems = parseCart(
      editingBooking.cart,
    )

    const saunaItem = cartItems.find(
      (item) => {
        const id =
          item.id?.toLowerCase()

        return (
          id === 'sauna-rental' ||
          id === 'sauna'
        )
      },
    )

    let durationMinutes =
      Number(
        editingBooking.duration_minutes ||
          0,
      )

    if (saunaItem) {
      const saunaHours = Math.max(
        3,
        Number(
          saunaItem.quantity || 3,
        ),
      )

      durationMinutes =
        saunaHours * 60
    }

    if (!durationMinutes) {
      durationMinutes = 180
    }

    const bookingStart =
      `${bookingDate} ${bookingTime}:00`

    const bookingEnd =
      getBookingEnd(
        bookingDate,
        bookingTime,
        durationMinutes,
      )

    if (
      editingBooking.status !==
      'cancelled'
    ) {
      const {
        data: existingBookings,
        error: conflictError,
      } = await supabase
        .from('bookings')
        .select(
          'id, booking_start, booking_end, status',
        )
        .neq(
          'id',
          editingBooking.id,
        )

      if (conflictError) {
        console.error(
          'CHECK CONFLICT ERROR:',
          conflictError,
        )

        alert(
          conflictError.message ||
            'Не удалось проверить занятость времени.',
        )

        return
      }

      const newStart =
        parseLocalDateTime(
          bookingStart,
        )

      const newEnd =
        parseLocalDateTime(
          bookingEnd,
        )

      const hasConflict =
        (existingBookings || [])
          .filter(
            (booking) =>
              booking.status !==
                'cancelled' &&
              booking.booking_start &&
              booking.booking_end,
          )
          .some((booking) => {
            const existingStart =
              parseLocalDateTime(
                booking.booking_start,
              )

            const existingEnd =
              parseLocalDateTime(
                booking.booking_end,
              )

            return (
              newStart <
                existingEnd &&
              newEnd >
                existingStart
            )
          })

      if (hasConflict) {
        alert(
          'Это время уже занято другой бронью.\n\nПожалуйста, выберите другое время.',
        )

        return
      }
    }

    const cartTotal =
      cartItems.reduce(
        (sum, item) => {
          const price = Number(
            item.price || 0,
          )

          const quantity = Math.max(
            1,
            Number(
              item.quantity || 1,
            ),
          )

          return (
            sum +
            price * quantity
          )
        },
        0,
      )

    const guestSurcharge =
      Math.max(0, guests - 8) * 50

    const finalTotal =
      cartTotal + guestSurcharge

    setSavingEdit(true)

    try {
      const {
        data: updatedBooking,
        error: updateError,
      } = await supabase
        .from('bookings')
        .update({
          name,
          phone,
          booking_date:
            bookingDate,
          booking_time:
            bookingTime,
          booking_start:
            bookingStart,
          booking_end:
            bookingEnd,
          duration_minutes:
            durationMinutes,
          guests,
          message,
          total: finalTotal,
        })
        .eq(
          'id',
          editingBooking.id,
        )
        .select('*')
        .single()

      if (updateError) {
        console.error(
          'SAVE EDIT ERROR:',
          updateError,
        )

        if (
          updateError.code ===
          '23P01'
        ) {
          alert(
            'Это время уже занято другой бронью.\n\nПожалуйста, выберите другое время.',
          )
        } else {
          alert(
            updateError.message ||
              'Не удалось сохранить изменения.',
          )
        }

        return
      }

      setBookings((current) =>
        current.map((booking) =>
          booking.id ===
          editingBooking.id
            ? (updatedBooking as Booking)
            : booking,
        ),
      )

      setSelectedDate(
        bookingDate,
      )

      setCalendarMonth(
        new Date(
          Number(
            bookingDate.slice(0, 4),
          ),
          Number(
            bookingDate.slice(5, 7),
          ) - 1,
          1,
        ),
      )

      setEditingBooking(null)

      alert(
        'Бронь успешно изменена.',
      )
    } finally {
      setSavingEdit(false)
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()

    router.replace('/admin/login')
    router.refresh()
  }

  const selectedDayBookings =
    useMemo(() => {
      return bookings
        .filter(
          (booking) =>
            booking.booking_date ===
              selectedDate &&
            booking.status !==
              'cancelled',
        )
        .sort((a, b) =>
          (
            a.booking_time || ''
          ).localeCompare(
            b.booking_time || '',
          ),
        )
    }, [
      bookings,
      selectedDate,
    ])

  const selectedDayCancelledBookings =
    useMemo(() => {
      return bookings
        .filter(
          (booking) =>
            booking.booking_date ===
              selectedDate &&
            booking.status ===
              'cancelled',
        )
        .sort((a, b) =>
          (
            a.booking_time || ''
          ).localeCompare(
            b.booking_time || '',
          ),
        )
    }, [
      bookings,
      selectedDate,
    ])

  const calendarDays = useMemo(
    () =>
      getCalendarDays(
        calendarMonth,
      ),
    [calendarMonth],
  )

  const hasBookingOnDate = (
    date: Date,
  ) => {
    const dateString =
      dateToString(date)

    return bookings.some(
      (booking) =>
        booking.booking_date ===
          dateString &&
        booking.status !==
          'cancelled',
    )
  }

  const goPreviousMonth = () => {
    setCalendarMonth(
      (current) =>
        new Date(
          current.getFullYear(),
          current.getMonth() - 1,
          1,
        ),
    )
  }

  const goNextMonth = () => {
    setCalendarMonth(
      (current) =>
        new Date(
          current.getFullYear(),
          current.getMonth() + 1,
          1,
        ),
    )
  }

  const goToday = () => {
    const today = new Date()

    setCalendarMonth(
      new Date(
        today.getFullYear(),
        today.getMonth(),
        1,
      ),
    )

    setSelectedDate(
      getTodayString(),
    )
  }

  const todayBookingsCount =
    bookings.filter(
      (booking) =>
        booking.booking_date ===
          getTodayString() &&
        booking.status !==
          'cancelled',
    ).length

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#110d0b] text-foreground">
      <div className="mx-auto w-full max-w-7xl px-3 py-4 sm:px-6 sm:py-8 lg:px-10">

        {/* HEADER */}

        <header className="mb-5 rounded-3xl border border-primary/15 bg-[#15100e] p-4 sm:mb-8 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-primary sm:text-xs">
                ZHAR de PAR
              </p>

              <h1 className="mt-1 font-serif text-3xl font-light sm:mt-2 sm:text-5xl">
                Бронирования
              </h1>

              <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                Управление заявками и занятостью
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-3">
              <button
                type="button"
                onClick={loadBookings}
                disabled={loading}
                className="flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/30 px-3 py-3 text-[10px] font-medium uppercase tracking-wider text-primary transition active:scale-[0.98] hover:bg-primary hover:text-black disabled:cursor-not-allowed disabled:opacity-50 sm:px-5 sm:text-xs sm:tracking-widest"
              >
                <RefreshCw
                  className={`h-4 w-4 ${
                    loading
                      ? 'animate-spin'
                      : ''
                  }`}
                />
                {loading
                  ? 'Загрузка'
                  : 'Обновить'}
              </button>

              <button
                type="button"
                onClick={logout}
                className="min-h-11 rounded-full border border-red-500/30 px-3 py-3 text-[10px] font-medium uppercase tracking-wider text-red-300 transition active:scale-[0.98] hover:bg-red-500 hover:text-white sm:px-5 sm:text-xs sm:tracking-widest"
              >
                Выйти
              </button>
            </div>
          </div>
        </header>

        {/* STATS */}

        <div className="mb-5 grid grid-cols-2 gap-2 sm:mb-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {[
            {
              label: 'Всего',
              value: bookings.length,
            },
            {
              label: 'Новые',
              value: bookings.filter(
                (booking) =>
                  !booking.status ||
                  booking.status ===
                    'new',
              ).length,
            },
            {
              label: 'Подтверждены',
              value: bookings.filter(
                (booking) =>
                  booking.status ===
                  'confirmed',
              ).length,
            },
            {
              label: 'Отменены',
              value: bookings.filter(
                (booking) =>
                  booking.status ===
                  'cancelled',
              ).length,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-primary/15 bg-[#15100e] p-3 sm:p-5"
            >
              <p className="text-[9px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                {stat.label}
              </p>

              <p className="mt-1 font-serif text-2xl text-primary sm:mt-2 sm:text-3xl">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {error && (
          <div className="mb-5 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300 sm:mb-6 sm:p-5">
            {error}
          </div>
        )}

        {/* CALENDAR */}

        <section className="mb-7 rounded-3xl border border-primary/15 bg-[#15100e] p-3 sm:mb-10 sm:p-6">
          <div className="mb-4 flex items-center justify-between gap-2 sm:mb-6">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-primary sm:h-5 sm:w-5" />

                <p className="text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.25em]">
                  Календарь
                </p>
              </div>

              <h2 className="mt-1 truncate font-serif text-xl capitalize sm:text-3xl">
                {getMonthName(
                  calendarMonth,
                )}
              </h2>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <button
                type="button"
                onClick={
                  goPreviousMonth
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary transition active:scale-95 hover:bg-primary hover:text-black"
                aria-label="Предыдущий месяц"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={goToday}
                className="h-10 rounded-full border border-primary/20 px-3 text-[9px] uppercase tracking-wider text-primary transition active:scale-95 hover:bg-primary hover:text-black sm:px-4 sm:text-xs sm:tracking-widest"
              >
                Сегодня
              </button>

              <button
                type="button"
                onClick={goNextMonth}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 text-primary transition active:scale-95 hover:bg-primary hover:text-black"
                aria-label="Следующий месяц"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* WEEK DAYS */}

          <div className="mb-1 grid grid-cols-7 gap-1 sm:mb-2 sm:gap-2">
            {[
              'Пн',
              'Вт',
              'Ср',
              'Чт',
              'Пт',
              'Сб',
              'Вс',
            ].map((day) => (
              <div
                key={day}
                className="py-1.5 text-center text-[9px] uppercase tracking-wider text-muted-foreground sm:py-2 sm:text-xs sm:tracking-widest"
              >
                {day}
              </div>
            ))}
          </div>

          {/* DAYS */}

          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {calendarDays.map(
              (date, index) => {
                const dateString =
                  dateToString(date)

                const currentMonth =
                  date.getMonth() ===
                    calendarMonth.getMonth() &&
                  date.getFullYear() ===
                    calendarMonth.getFullYear()

                const selected =
                  dateString ===
                  selectedDate

                const today =
                  dateString ===
                  getTodayString()

                const hasBooking =
                  hasBookingOnDate(
                    date,
                  )

                return (
                  <button
                    key={`${dateString}-${index}`}
                    type="button"
                    onClick={() => {
                      setSelectedDate(
                        dateString,
                      )

                      if (
                        !currentMonth
                      ) {
                        setCalendarMonth(
                          new Date(
                            date.getFullYear(),
                            date.getMonth(),
                            1,
                          ),
                        )
                      }
                    }}
                    className={`relative min-h-[48px] rounded-lg border p-1.5 text-left transition active:scale-[0.97] sm:min-h-[76px] sm:rounded-xl sm:p-2 ${
                      selected
                        ? 'border-primary bg-primary/15'
                        : 'border-primary/10 hover:border-primary/40 hover:bg-primary/5'
                    } ${
                      !currentMonth
                        ? 'opacity-25'
                        : ''
                    }`}
                  >
                    <span
                      className={`text-xs sm:text-sm ${
                        today
                          ? 'font-bold text-primary'
                          : ''
                      }`}
                    >
                      {date.getDate()}
                    </span>

                    {today && (
                      <span className="absolute right-1 top-1 hidden text-[7px] uppercase tracking-widest text-primary sm:block">
                        сегодня
                      </span>
                    )}

                    {hasBooking && (
                      <div className="absolute bottom-1.5 left-1.5 right-1.5 sm:bottom-2 sm:left-2 sm:right-2">
                        <div className="h-1 rounded-full bg-primary sm:h-1.5" />

                        <span className="mt-1 hidden text-[9px] text-primary sm:block">
                          Есть бронь
                        </span>
                      </div>
                    )}
                  </button>
                )
              },
            )}
          </div>

          {/* SELECTED DATE */}

          <div className="mt-4 rounded-2xl border border-primary/15 bg-[#0e0a08] p-3 sm:mt-6 sm:p-4">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground sm:text-[10px]">
                  Выбранная дата
                </p>

                <p className="mt-1 font-serif text-xl text-primary sm:text-2xl">
                  {formatDate(
                    selectedDate,
                  )}
                </p>
              </div>

              <div className="shrink-0 rounded-full border border-primary/15 px-3 py-2 text-xs text-muted-foreground">
                Занято:{' '}
                <span className="text-primary">
                  {
                    selectedDayBookings.length
                  }
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SELECTED DAY */}

        <section className="mb-8 sm:mb-10">
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.25em]">
                Занятость
              </p>

              {selectedDate ===
                getTodayString() && (
                <span className="rounded-full bg-primary/10 px-2 py-1 text-[8px] uppercase tracking-widest text-primary">
                  Сегодня
                </span>
              )}
            </div>

            <h2 className="mt-1 font-serif text-2xl sm:text-3xl">
              {formatDate(
                selectedDate,
              )}
            </h2>
          </div>

          {selectedDayBookings.length ===
          0 ? (
            <div className="rounded-2xl border border-green-500/20 bg-green-500/5 p-5 sm:p-6">
              <p className="font-serif text-xl text-green-300 sm:text-2xl">
                День свободен
              </p>

              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                На выбранную дату активных бронирований нет.
              </p>
            </div>
          ) : (
            <div className="space-y-2.5 sm:space-y-3">
              {selectedDayBookings.map(
                (booking) => (
                  <div
                    key={`calendar-${booking.id}`}
                    className="rounded-2xl border border-primary/20 bg-[#15100e] p-3 sm:p-5"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="shrink-0">
                          <p className="font-serif text-2xl text-primary sm:text-3xl">
                            {formatTime(
                              booking.booking_time,
                            )}
                          </p>

                          <p className="text-[10px] text-muted-foreground sm:text-xs">
                            {booking.booking_end
                              ? `до ${formatTime(
                                  booking.booking_end,
                                )}`
                              : booking.duration_minutes
                                ? `${booking.duration_minutes / 60} ч.`
                                : ''}
                          </p>
                        </div>

                        <div className="min-w-0 border-l border-primary/10 pl-3">
                          <p className="truncate text-sm font-medium sm:text-base">
                            {booking.name ||
                              'Без имени'}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            {booking.guests ||
                              0}{' '}
                            гостей
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setExpandedId(
                            booking.id,
                          )

                          window.scrollTo({
                            top:
                              document.body
                                .scrollHeight,
                            behavior:
                              'smooth',
                          })
                        }}
                        className="shrink-0 rounded-full border border-primary/20 px-3 py-2 text-[9px] uppercase tracking-wider text-primary transition active:scale-95 hover:bg-primary hover:text-black sm:px-4 sm:text-xs sm:tracking-widest"
                      >
                        Подробнее
                      </button>
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-primary/10 pt-3">
                      <span
                        className={`rounded-full border px-2.5 py-1 text-[10px] ${getStatusClass(
                          booking.status,
                        )}`}
                      >
                        {getStatusLabel(
                          booking.status,
                        )}
                      </span>

                      {booking.phone && (
                        <a
                          href={`tel:${booking.phone}`}
                          className="flex items-center gap-1.5 text-xs text-primary"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          Позвонить
                        </a>
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          )}

          {selectedDayCancelledBookings.length >
            0 && (
            <div className="mt-4 rounded-2xl border border-red-500/15 bg-red-500/5 p-4 sm:p-5">
              <p className="mb-3 text-[10px] uppercase tracking-widest text-red-300">
                Отменённые брони
              </p>

              <div className="space-y-2">
                {selectedDayCancelledBookings.map(
                  (booking) => (
                    <div
                      key={`cancelled-${booking.id}`}
                      className="flex items-center justify-between gap-3 text-xs"
                    >
                      <span className="min-w-0 truncate text-muted-foreground">
                        {formatTime(
                          booking.booking_time,
                        )}{' '}
                        —{' '}
                        {booking.name ||
                          'Без имени'}
                      </span>

                      <span className="shrink-0 text-red-300">
                        Отменена
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
          )}
        </section>

        {/* ALL BOOKINGS */}

        <section>
          <div className="mb-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.25em]">
              Все заявки
            </p>

            <div className="mt-1 flex items-end justify-between gap-3">
              <h2 className="font-serif text-2xl sm:text-3xl">
                Бронирования
              </h2>

              <span className="shrink-0 text-[10px] text-muted-foreground sm:text-xs">
                Сегодня:{' '}
                <span className="text-primary">
                  {todayBookingsCount}
                </span>
              </span>
            </div>
          </div>

          {/* FILTER PANEL */}

          <div className="mb-5 rounded-3xl border border-primary/15 bg-[#15100e] p-3 sm:p-5">
            {/* SEARCH */}

            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(
                    event.target.value,
                  )
                }
                placeholder="Поиск по имени или телефону..."
                className="min-h-12 w-full rounded-2xl border border-primary/20 bg-[#0e0a08] py-3 pl-11 pr-10 text-sm outline-none transition placeholder:text-muted-foreground/50 focus:border-primary"
              />

              {search && (
                <button
                  type="button"
                  onClick={() =>
                    setSearch('')
                  }
                  className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition hover:text-primary"
                  aria-label="Очистить поиск"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* FILTERS */}

            <div className="mt-3">
              <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 scrollbar-none">
                {filters.map(
                  (item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() =>
                        setFilter(
                          item.value,
                        )
                      }
                      className={`min-h-10 shrink-0 rounded-full border px-4 py-2 text-[10px] transition active:scale-[0.98] sm:text-xs ${
                        filter ===
                        item.value
                          ? 'border-primary bg-primary text-black'
                          : 'border-primary/20 text-muted-foreground hover:border-primary hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* RESULT / SORT */}

            <div className="mt-3 flex flex-col gap-2 border-t border-primary/10 pt-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[11px] text-muted-foreground">
                Показано:{' '}
                <span className="font-medium text-primary">
                  {
                    filteredBookings.length
                  }
                </span>{' '}
                из{' '}
                <span className="font-medium text-primary">
                  {bookings.length}
                </span>
              </p>

              <button
                type="button"
                onClick={() =>
                  setSortOrder(
                    (current) =>
                      current ===
                      'asc'
                        ? 'desc'
                        : 'asc',
                  )
                }
                className="self-start rounded-full border border-primary/20 px-4 py-2 text-[9px] uppercase tracking-wider text-primary transition active:scale-95 hover:bg-primary hover:text-black sm:self-auto sm:text-xs sm:tracking-widest"
              >
                {sortOrder === 'asc'
                  ? 'Ближайшие ↑'
                  : 'Поздние ↓'}
              </button>
            </div>
          </div>

          {loading ? (
            <div className="rounded-2xl border border-primary/15 bg-[#15100e] p-10 text-center text-sm text-muted-foreground">
              Загружаем бронирования...
            </div>
          ) : bookings.length ===
            0 ? (
            <div className="rounded-2xl border border-primary/15 bg-[#15100e] p-10 text-center">
              <p className="font-serif text-xl sm:text-2xl">
                Бронирований пока нет
              </p>

              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                Новые заявки появятся здесь.
              </p>
            </div>
          ) : filteredBookings.length ===
            0 ? (
            <div className="rounded-2xl border border-primary/15 bg-[#15100e] p-8 text-center sm:p-10">
              <p className="font-serif text-xl sm:text-2xl">
                Ничего не найдено
              </p>

              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                Попробуйте изменить фильтр или поисковый запрос.
              </p>

              <button
                type="button"
                onClick={() => {
                  setFilter('all')
                  setSearch('')
                }}
                className="mt-5 min-h-11 rounded-full border border-primary/30 px-5 py-3 text-[10px] uppercase tracking-widest text-primary transition active:scale-95 hover:bg-primary hover:text-black"
              >
                Сбросить фильтры
              </button>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {filteredBookings.map(
                (booking) => {
                  const isExpanded =
                    expandedId ===
                    booking.id

                  const cartItems =
                    parseCart(
                      booking.cart,
                    )

                  const isCancelled =
                    booking.status ===
                    'cancelled'

                  const phoneLink =
                    getPhoneLink(
                      booking.phone,
                    )

                  return (
                    <div
                      key={booking.id}
                      className={`overflow-hidden rounded-2xl border bg-[#15100e] ${
                        isCancelled
                          ? 'border-red-500/20'
                          : 'border-primary/15'
                      }`}
                    >
                      {/* MOBILE / DESKTOP CARD HEADER */}

                      <button
                        type="button"
                        onClick={() =>
                          setExpandedId(
                            isExpanded
                              ? null
                              : booking.id,
                          )
                        }
                        className="w-full text-left"
                      >
                        <div className="p-4 sm:p-5">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-serif text-2xl text-primary sm:text-3xl">
                                  {formatTime(
                                    booking.booking_time,
                                  )}
                                </span>

                                <span
                                  className={`rounded-full border px-2.5 py-1 text-[9px] ${getStatusClass(
                                    booking.status,
                                  )}`}
                                >
                                  {getStatusLabel(
                                    booking.status,
                                  )}
                                </span>
                              </div>

                              <p className="mt-1 text-xs text-muted-foreground">
                                {formatDate(
                                  booking.booking_date,
                                )}
                                {booking.duration_minutes
                                  ? ` · ${booking.duration_minutes / 60} ч.`
                                  : ''}
                              </p>
                            </div>

                            <span className="shrink-0 rounded-full border border-primary/15 px-2.5 py-1 text-[9px] uppercase tracking-wider text-muted-foreground">
                              #{booking.id}
                            </span>
                          </div>

                          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-primary/10 pt-4 sm:grid-cols-4">
                            <div className="min-w-0">
                              <p className="text-[9px] uppercase tracking-widest text-muted-foreground">
                                Клиент
                              </p>

                              <p className="mt-1 truncate text-sm font-medium">
                                {booking.name ||
                                  '—'}
                              </p>
                            </div>

                            <div className="min-w-0">
                              <p className="text-[9px] uppercase tracking-widest text-muted-foreground">
                                Телефон
                              </p>

                              <p className="mt-1 truncate text-xs text-muted-foreground">
                                {booking.phone ||
                                  '—'}
                              </p>
                            </div>

                            <div>
                              <p className="text-[9px] uppercase tracking-widest text-muted-foreground">
                                Гости
                              </p>

                              <p className="mt-1 text-sm">
                                {booking.guests ||
                                  '—'}
                              </p>
                            </div>

                            <div>
                              <p className="text-[9px] uppercase tracking-widest text-muted-foreground">
                                Сумма
                              </p>

                              <p className="mt-1 font-serif text-lg text-primary">
                                €
                                {Number(
                                  booking.total ||
                                    0,
                                ).toFixed(
                                  2,
                                )}
                              </p>
                            </div>
                          </div>
                        </div>
                      </button>

                      {/* EXPANDED DETAILS */}

                      {isExpanded && (
                        <div className="border-t border-primary/10 px-4 py-5 sm:px-5 sm:py-6">
                          <div className="grid gap-6 lg:grid-cols-2">

                            {/* DETAILS */}

                            <div>
                              <h2 className="mb-4 font-serif text-2xl">
                                Детали
                              </h2>

                              <div className="space-y-0 rounded-2xl border border-primary/10 bg-[#0e0a08]">
                                <div className="flex items-center justify-between gap-4 border-b border-primary/10 p-3.5 text-sm">
                                  <span className="text-muted-foreground">
                                    Имя
                                  </span>

                                  <span className="text-right">
                                    {booking.name ||
                                      '—'}
                                  </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 border-b border-primary/10 p-3.5 text-sm">
                                  <span className="text-muted-foreground">
                                    Телефон
                                  </span>

                                  {booking.phone ? (
                                    <a
                                      href={`tel:${booking.phone}`}
                                      className="flex items-center gap-1.5 text-right text-primary hover:underline"
                                    >
                                      <Phone className="h-3.5 w-3.5" />
                                      {booking.phone}
                                    </a>
                                  ) : (
                                    <span>
                                      —
                                    </span>
                                  )}
                                </div>

                                <div className="flex items-center justify-between gap-4 border-b border-primary/10 p-3.5 text-sm">
                                  <span className="text-muted-foreground">
                                    Дата
                                  </span>

                                  <span>
                                    {formatDate(
                                      booking.booking_date,
                                    )}
                                  </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 border-b border-primary/10 p-3.5 text-sm">
                                  <span className="text-muted-foreground">
                                    Начало
                                  </span>

                                  <span>
                                    {formatTime(
                                      booking.booking_start ||
                                        booking.booking_time,
                                    )}
                                  </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 border-b border-primary/10 p-3.5 text-sm">
                                  <span className="text-muted-foreground">
                                    Конец
                                  </span>

                                  <span>
                                    {formatTime(
                                      booking.booking_end,
                                    )}
                                  </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 border-b border-primary/10 p-3.5 text-sm">
                                  <span className="text-muted-foreground">
                                    Гости
                                  </span>

                                  <span>
                                    {booking.guests ||
                                      '—'}
                                  </span>
                                </div>

                                <div className="p-3.5 text-sm">
                                  <p className="text-muted-foreground">
                                    Комментарий
                                  </p>

                                  <p className="mt-1 break-words">
                                    {booking.message ||
                                      '—'}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* SERVICES */}

                            <div>
                              <h2 className="mb-4 font-serif text-2xl">
                                Услуги
                              </h2>

                              <div className="space-y-2">
                                {cartItems.length >
                                0 ? (
                                  cartItems.map(
                                    (
                                      item,
                                      index,
                                    ) => {
                                      const quantity =
                                        Number(
                                          item.quantity ||
                                            1,
                                        )

                                      const price =
                                        Number(
                                          item.price ||
                                            0,
                                        )

                                      return (
                                        <div
                                          key={`${booking.id}-${index}`}
                                          className="flex items-start justify-between gap-3 rounded-xl border border-primary/10 bg-[#0e0a08] p-3 text-sm"
                                        >
                                          <span className="min-w-0 break-words">
                                            {getServiceName(
                                              item,
                                            )}{' '}
                                            ×{' '}
                                            {
                                              quantity
                                            }
                                          </span>

                                          <span className="shrink-0 whitespace-nowrap text-primary">
                                            €
                                            {(
                                              price *
                                              quantity
                                            ).toFixed(
                                              2,
                                            )}
                                          </span>
                                        </div>
                                      )
                                    },
                                  )
                                ) : (
                                  <p className="text-sm text-muted-foreground">
                                    Услуги не указаны.
                                  </p>
                                )}
                              </div>

                              <div className="mt-4 rounded-xl border border-primary/20 bg-[#0e0a08] p-4">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-muted-foreground">
                                    Итого
                                  </span>

                                  <span className="font-serif text-2xl text-primary">
                                    €
                                    {Number(
                                      booking.total ||
                                        0,
                                    ).toFixed(
                                      2,
                                    )}
                                  </span>
                                </div>
                              </div>

                              {/* ACTION BUTTONS */}

                              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                                <button
                                  type="button"
                                  onClick={() =>
                                    openEdit(
                                      booking,
                                    )
                                  }
                                  className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[10px] font-medium uppercase tracking-widest text-black transition active:scale-[0.98] hover:bg-primary/90 sm:col-span-2"
                                >
                                  <Pencil className="h-4 w-4" />
                                  Редактировать бронь
                                </button>

                                {booking.phone && (
                                  <>
                                    <a
                                      href={`tel:${booking.phone}`}
                                      className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/20 px-4 py-3 text-[10px] uppercase tracking-widest text-primary transition active:scale-[0.98] hover:bg-primary hover:text-black"
                                    >
                                      <Phone className="h-4 w-4" />
                                      Позвонить
                                    </a>

                                    <a
                                      href={`https://wa.me/${phoneLink}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary/30 bg-primary px-4 py-3 text-[10px] font-medium uppercase tracking-widest text-black transition active:scale-[0.98] hover:bg-primary/90"
                                    >
                                      <MessageCircle className="h-4 w-4" />
                                      WhatsApp
                                    </a>
                                  </>
                                )}
                              </div>

                              {/* STATUS */}

                              <div className="mt-6">
                                <p className="mb-3 text-[10px] uppercase tracking-widest text-muted-foreground">
                                  Изменить статус
                                </p>

                                <div className="grid grid-cols-2 gap-2">
                                  {statuses.map(
                                    (
                                      status,
                                    ) => (
                                      <button
                                        key={
                                          status.value
                                        }
                                        type="button"
                                        disabled={
                                          updatingId ===
                                          booking.id
                                        }
                                        onClick={() =>
                                          updateStatus(
                                            booking.id,
                                            status.value,
                                          )
                                        }
                                        className={`min-h-11 rounded-full border px-3 py-2 text-[10px] transition active:scale-[0.98] ${
                                          (booking.status ||
                                            'new') ===
                                          status.value
                                            ? getStatusClass(
                                                status.value,
                                              )
                                            : 'border-primary/20 text-muted-foreground hover:border-primary hover:text-primary'
                                        } disabled:cursor-not-allowed disabled:opacity-50`}
                                      >
                                        {updatingId ===
                                          booking.id &&
                                        (booking.status ||
                                          'new') !==
                                          status.value
                                          ? '...'
                                          : status.label}
                                      </button>
                                    ),
                                  )}
                                </div>
                              </div>

                              {/* CANCEL */}

                              {!isCancelled && (
                                <button
                                  type="button"
                                  disabled={
                                    updatingId ===
                                    booking.id
                                  }
                                  onClick={() =>
                                    cancelBooking(
                                      booking.id,
                                    )
                                  }
                                  className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-red-500/30 px-5 py-3 text-[10px] font-medium uppercase tracking-widest text-red-300 transition active:scale-[0.98] hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                  <Trash2 className="h-4 w-4" />

                                  {updatingId ===
                                  booking.id
                                    ? 'Отменяем...'
                                    : 'Отменить бронь'}
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                },
              )}
            </div>
          )}
        </section>
      </div>

      {/* EDIT MODAL */}

      {editingBooking && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm sm:items-center sm:p-4"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeEdit()
            }
          }}
        >
          <div className="flex max-h-[96vh] w-full flex-col overflow-hidden rounded-t-3xl border border-primary/20 bg-[#15100e] shadow-2xl sm:max-h-[90vh] sm:max-w-2xl sm:rounded-3xl">

            {/* MODAL HEADER */}

            <div className="shrink-0 border-b border-primary/10 bg-[#15100e] p-4 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs sm:tracking-[0.25em]">
                    Редактирование
                  </p>

                  <h2 className="mt-1 truncate font-serif text-2xl sm:text-3xl">
                    Бронь #{editingBooking.id}
                  </h2>

                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    Измените данные клиента или время.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeEdit}
                  disabled={savingEdit}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/20 text-muted-foreground transition active:scale-95 hover:border-primary hover:text-primary disabled:opacity-50"
                  aria-label="Закрыть"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* MODAL CONTENT */}

            <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="space-y-5">

                {/* NAME */}

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                    Имя клиента
                  </label>

                  <input
                    type="text"
                    value={editForm.name}
                    onChange={(event) =>
                      setEditForm(
                        (current) => ({
                          ...current,
                          name: event.target
                            .value,
                        }),
                      )
                    }
                    className="min-h-12 w-full rounded-2xl border border-primary/20 bg-[#0e0a08] px-4 py-3 text-sm outline-none transition focus:border-primary"
                    placeholder="Имя"
                  />
                </div>

                {/* PHONE */}

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                    Телефон
                  </label>

                  <input
                    type="tel"
                    inputMode="tel"
                    value={editForm.phone}
                    onChange={(event) =>
                      setEditForm(
                        (current) => ({
                          ...current,
                          phone: event.target
                            .value,
                        }),
                      )
                    }
                    className="min-h-12 w-full rounded-2xl border border-primary/20 bg-[#0e0a08] px-4 py-3 text-sm outline-none transition focus:border-primary"
                    placeholder="+34..."
                  />
                </div>

                {/* DATE + TIME */}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                      Дата
                    </label>

                    <input
                      type="date"
                      value={
                        editForm.booking_date
                      }
                      onChange={(event) =>
                        setEditForm(
                          (current) => ({
                            ...current,
                            booking_date:
                              event.target
                                .value,
                          }),
                        )
                      }
                      className="min-h-12 w-full rounded-2xl border border-primary/20 bg-[#0e0a08] px-4 py-3 text-sm text-white outline-none transition focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                      Время
                    </label>

                    <input
                      type="time"
                      value={
                        editForm.booking_time
                      }
                      onChange={(event) =>
                        setEditForm(
                          (current) => ({
                            ...current,
                            booking_time:
                              event.target
                                .value,
                          }),
                        )
                      }
                      className="min-h-12 w-full rounded-2xl border border-primary/20 bg-[#0e0a08] px-4 py-3 text-sm text-white outline-none transition focus:border-primary"
                    />
                  </div>
                </div>

                {/* GUESTS */}

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                    Количество гостей
                  </label>

                  <input
                    type="number"
                    min={1}
                    max={50}
                    inputMode="numeric"
                    value={editForm.guests}
                    onChange={(event) =>
                      setEditForm(
                        (current) => ({
                          ...current,
                          guests: Number(
                            event.target
                              .value,
                          ),
                        }),
                      )
                    }
                    className="min-h-12 w-full rounded-2xl border border-primary/20 bg-[#0e0a08] px-4 py-3 text-sm outline-none transition focus:border-primary"
                  />

                  <p className="mt-2 text-[10px] leading-relaxed text-muted-foreground sm:text-xs">
                    До 8 гостей входит в аренду.
                    С 9-го гостя +€50 за каждого.
                  </p>
                </div>

                {/* MESSAGE */}

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">
                    Комментарий
                  </label>

                  <textarea
                    rows={4}
                    value={editForm.message}
                    onChange={(event) =>
                      setEditForm(
                        (current) => ({
                          ...current,
                          message:
                            event.target
                              .value,
                        }),
                      )
                    }
                    className="w-full resize-none rounded-2xl border border-primary/20 bg-[#0e0a08] px-4 py-3 text-sm outline-none transition focus:border-primary"
                    placeholder="Комментарий клиента..."
                  />
                </div>

                {/* CURRENT INFO */}

                <div className="rounded-2xl border border-primary/10 bg-[#0e0a08] p-4">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Текущая бронь
                  </p>

                  <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Сейчас
                      </p>

                      <p className="mt-1 text-sm text-primary">
                        {formatDate(
                          editingBooking.booking_date,
                        )}{' '}
                        {formatTime(
                          editingBooking.booking_time,
                        )}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Длительность
                      </p>

                      <p className="mt-1 text-sm">
                        {editingBooking.duration_minutes
                          ? `${editingBooking.duration_minutes / 60} ч.`
                          : '3 ч.'}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        Статус
                      </p>

                      <p className="mt-1 text-sm text-primary">
                        {getStatusLabel(
                          editingBooking.status,
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}

            <div className="shrink-0 border-t border-primary/10 bg-[#15100e] p-4 sm:p-6">
              <div className="grid gap-2 sm:flex sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeEdit}
                  disabled={savingEdit}
                  className="min-h-12 rounded-full border border-primary/20 px-6 py-3 text-[10px] font-medium uppercase tracking-widest text-muted-foreground transition active:scale-[0.98] hover:border-primary hover:text-primary disabled:opacity-50"
                >
                  Отмена
                </button>

                <button
                  type="button"
                  onClick={saveEdit}
                  disabled={savingEdit}
                  className="min-h-12 rounded-full bg-primary px-6 py-3 text-[10px] font-medium uppercase tracking-widest text-black transition active:scale-[0.98] hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {savingEdit
                    ? 'Сохраняем...'
                    : 'Сохранить изменения'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
