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
import { useLanguage } from '@/components/language-provider'
import { translations } from '@/lib/translations'

export type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  type?: 'service' | 'treatment' | 'broom' | 'sauna'
  maxQuantity?: number
  minQuantity?: number
}

type AddToCartItem = {
  id: string
  name: string
  price: number
  type?: 'service' | 'treatment' | 'broom' | 'sauna'
  maxQuantity?: number
  minQuantity?: number
}

type BookingContextValue = {
  open: () => void
  close: () => void
  cart: CartItem[]
  cartTotal: number
  cartCount: number
  addToCart: (item: AddToCartItem) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  canAddExtras: boolean
  cartMessage: string | null
  clearCartMessage: () => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking() {
  const ctx = useContext(BookingContext)

  if (!ctx) {
    throw new Error('useBooking must be used within BookingProvider')
  }

  return ctx
}

export function BookingProvider({
  children,
}: {
  children: ReactNode
}) {
  const { language } = useLanguage()

  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartMessage, setCartMessage] = useState<string | null>(null)

  const open = useCallback(() => {
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  const hasSauna = cart.some(
    (item) => item.type === 'sauna',
  )

  const canAddExtras = hasSauna

  /*
   * Показываем сообщение на 2.5 секунды
   */
  const showCartMessage = useCallback(
    (message: string) => {
      setCartMessage(message)

      setTimeout(() => {
        setCartMessage(null)
      }, 2500)
    },
    [],
  )

  const clearCartMessage = useCallback(() => {
    setCartMessage(null)
  }, [])

  /*
   * Получаем переведённое название товара.
   */
  const getTranslatedName = useCallback(
    (item: AddToCartItem) => {
      const t = translations[language]

      /*
       * Ритуалы
       */
      if (item.type === 'service') {
        const service =
          t.services[item.id as keyof typeof t.services]

        if (service) {
          return service.name
        }
      }

      /*
       * Дополнительные услуги:
       * grill
       * baptismal-font
       * jacuzzi
       */
      if (item.type === 'treatment') {
        const treatmentKey =
          item.id === 'grill'
            ? 'GRILL'
            : item.id === 'baptismal-font'
              ? 'BAPTISMAL FONT'
              : item.id === 'jacuzzi'
                ? 'JACUZZI'
                : null

        if (treatmentKey) {
          const treatment =
            t.treatments[
              treatmentKey as keyof typeof t.treatments
            ]

          if (treatment) {
            return treatment.name
          }
        }
      }

      /*
       * Если перевод не найден,
       * оставляем оригинальное название.
       */
      return item.name
    },
    [language],
  )

  /*
   * ADD TO CART
   */
  const addToCart = useCallback(
    (item: AddToCartItem) => {
      /*
       * Нельзя добавить ничего,
       * пока не добавлена баня.
       */
      if (item.type !== 'sauna' && !hasSauna) {
        showCartMessage(
          'Сначала добавьте баню в корзину',
        )
        return
      }

      setCartMessage(null)

      const translatedItem: AddToCartItem = {
        ...item,
        name: getTranslatedName(item),
      }

      setCart((currentCart) => {
        const existingItem = currentCart.find(
          (cartItem) =>
            cartItem.id === translatedItem.id,
        )

        if (existingItem) {
          const maxQuantity =
            existingItem.maxQuantity

          if (
            maxQuantity !== undefined &&
            existingItem.quantity >= maxQuantity
          ) {
            return currentCart
          }

          return currentCart.map((cartItem) =>
            cartItem.id === translatedItem.id
              ? {
                  ...cartItem,
                  name: translatedItem.name,
                  quantity: cartItem.quantity + 1,
                }
              : cartItem,
          )
        }

        return [
          ...currentCart,
          {
            ...translatedItem,
            quantity:
              translatedItem.minQuantity ?? 1,
          },
        ]
      })
    },
    [hasSauna, getTranslatedName, showCartMessage],
  )

  /*
   * INCREASE
   */
  const increaseQuantity = useCallback(
    (id: string) => {
      setCart((currentCart) =>
        currentCart.map((item) => {
          if (item.id !== id) {
            return item
          }

          const maxQuantity = item.maxQuantity

          if (
            maxQuantity !== undefined &&
            item.quantity >= maxQuantity
          ) {
            return item
          }

          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }),
      )
    },
    [],
  )

  /*
   * DECREASE
   */
  const decreaseQuantity = useCallback(
    (id: string) => {
      setCart((currentCart) =>
        currentCart
          .map((item) => {
            if (item.id !== id) {
              return item
            }

            const minQuantity =
              item.minQuantity ?? 1

            if (item.quantity <= minQuantity) {
              return item.type === 'sauna'
                ? item
                : null
            }

            return {
              ...item,
              quantity: item.quantity - 1,
            }
          })
          .filter(
            (item): item is CartItem =>
              item !== null,
          ),
      )
    },
    [],
  )

  /*
   * REMOVE COMPLETELY
   */
  const removeFromCart = useCallback(
    (id: string) => {
      setCart((currentCart) =>
        currentCart.filter(
          (item) => item.id !== id,
        ),
      )
    },
    [],
  )

  /*
   * CLEAR CART
   */
  const clearCart = useCallback(() => {
    setCart([])
    setCartMessage(null)
  }, [])

  /*
   * TOTAL
   */
  const cartTotal = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0,
    )
  }, [cart])

  /*
   * COUNT
   */
  const cartCount = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.quantity,
      0,
    )
  }, [cart])

  /*
   * CONTEXT VALUE
   */
  const value = useMemo(
    () => ({
      open,
      close,
      cart,
      cartTotal,
      cartCount,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
      canAddExtras,
      cartMessage,
      clearCartMessage,
    }),
    [
      open,
      close,
      cart,
      cartTotal,
      cartCount,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
      canAddExtras,
      cartMessage,
      clearCartMessage,
    ],
  )

  return (
    <BookingContext.Provider value={value}>
      {children}

      <BookingModal
        open={isOpen}
        onClose={close}
        cart={cart}
        cartTotal={cartTotal}
      />

      {cartMessage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
          <div
            className="
              rounded-xl
              border border-[#B28D20]/40
              bg-[#110d0b]
              px-8
              py-5
              text-center
              text-sm
              font-medium
              text-white
              shadow-2xl
              animate-in
              fade-in
              zoom-in-95
              duration-200
            "
          >
            {cartMessage}
          </div>
        </div>
      )}
    </BookingContext.Provider>
  )
}