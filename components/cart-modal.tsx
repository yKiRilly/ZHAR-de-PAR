'use client'

import { ShoppingCart, X, Minus, Plus, Trash2 } from 'lucide-react'

import { useBooking } from '@/components/booking-provider'

type CartModalProps = {
  open: boolean
  onClose: () => void
}

export function CartModal({
  open,
  onClose,
}: CartModalProps) {
  const {
    cart,
    cartCount,
    cartTotal,
    removeFromCart,
    updateQuantity,
    clearCart,
    open: openBooking,
  } = useBooking()

  if (!open) {
    return null
  }

  const handleBooking = () => {
    onClose()
    openBooking()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
    >
      {/* BACKGROUND */}

      <button
        type="button"
        aria-label="Close cart"
        onClick={onClose}
        className="fixed inset-0 h-full w-full cursor-default"
      />

      {/* CART */}

      <div className="relative z-10 w-full max-w-xl rounded-t-2xl border border-[#b28d20]/50 bg-[#080808] shadow-2xl sm:rounded-2xl">

        {/* HEADER */}

        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#b28d20]">
              Your selection
            </p>

            <h3 className="mt-1 flex items-center gap-2 font-serif text-2xl font-light text-white">
              <ShoppingCart className="h-5 w-5 text-[#b28d20]" />
              Cart
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-[#b28d20] hover:text-[#b28d20]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* CONTENT */}

        {cart.length === 0 ? (
          <div className="flex flex-col items-center px-6 py-16 text-center">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#b28d20]/30 bg-[#b28d20]/10">
              <ShoppingCart className="h-6 w-6 text-[#b28d20]" />
            </div>

            <h4 className="font-serif text-2xl font-light text-white">
              Your cart is empty
            </h4>

            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/40">
              Choose a sauna experience, treatment or bath broom and it will appear here.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 rounded-full border border-[#b28d20] px-7 py-3 text-xs font-medium uppercase tracking-widest text-[#b28d20] transition-all hover:bg-[#b28d20] hover:text-black"
            >
              Continue browsing
            </button>
          </div>
        ) : (
          <>
            {/* ITEMS */}

            <div className="max-h-[55vh] overflow-y-auto px-6 py-5">

              <div className="space-y-3">

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-xl border border-white/10 bg-black/50 p-4"
                  >

                    <div className="flex items-start justify-between gap-4">

                      <div className="min-w-0">

                        <h4 className="text-sm font-medium uppercase tracking-wider text-white">
                          {item.name}
                        </h4>

                        <p className="mt-1 text-sm text-[#b28d20]">
                          €{item.price}
                        </p>

                      </div>

                      {/* DELETE */}

                      <button
                        type="button"
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/30 transition-colors hover:bg-red-500/10 hover:text-red-400"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>

                    </div>

                    {/* QUANTITY */}

                    <div className="mt-4 flex items-center justify-between">

                      <span className="text-xs uppercase tracking-widest text-white/30">
                        Quantity
                      </span>

                      <div className="flex items-center gap-3">

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1,
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all hover:border-[#b28d20] hover:text-[#b28d20]"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>

                        <span className="min-w-[24px] text-center text-sm text-white">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1,
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/50 transition-all hover:border-[#b28d20] hover:text-[#b28d20]"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>

                      </div>

                    </div>

                    {/* ITEM TOTAL */}

                    <div className="mt-3 border-t border-white/10 pt-3 text-right">

                      <span className="text-sm text-white/50">
                        €{item.price * item.quantity}
                      </span>

                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* FOOTER */}

            <div className="border-t border-white/10 px-6 py-5">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs uppercase tracking-widest text-white/30">
                    {cartCount}{' '}
                    {cartCount === 1
                      ? 'item'
                      : 'items'}
                  </p>

                  <p className="mt-1 text-sm text-white/50">
                    Total
                  </p>
                </div>

                <span className="font-serif text-3xl font-light text-[#b28d20]">
                  €{cartTotal}
                </span>

              </div>

              {/* BOOK */}

              <button
                type="button"
                onClick={handleBooking}
                className="mt-5 w-full rounded-full bg-[#b28d20] px-8 py-4 text-sm font-medium uppercase tracking-widest text-black transition-all hover:bg-[#c9a42d] hover:shadow-[0_0_25px_rgba(178,141,32,0.25)]"
              >
                Book now
              </button>

              {/* CLEAR */}

              <button
                type="button"
                onClick={clearCart}
                className="mt-3 w-full py-2 text-xs uppercase tracking-widest text-white/30 transition-colors hover:text-white"
              >
                Clear cart
              </button>

            </div>
          </>
        )}

      </div>
    </div>
  )
}