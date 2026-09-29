'use client'

export const dynamic = 'force-dynamic'

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LockKeyhole, LogIn, RefreshCw } from 'lucide-react'
import { supabase } from '@/lib/supabase'

const ADMIN_EMAIL = 'kirill2525225@gmail.com'

export default function AdminLoginPage() {
  const router = useRouter()

  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [checking, setChecking] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!active) return

      if (session?.user?.email === ADMIN_EMAIL) {
        router.replace('/admin')
        return
      }

      setChecking(false)
    }

    checkSession()

    return () => {
      active = false
    }
  }, [router])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!password.trim()) {
      setError('Введите пароль.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const { data, error: signInError } =
        await supabase.auth.signInWithPassword({
          email: ADMIN_EMAIL,
          password,
        })

      if (signInError) {
        setError('Неверный пароль или ошибка входа.')
        return
      }

      if (data.user?.email !== ADMIN_EMAIL) {
        await supabase.auth.signOut()
        setError('Доступ разрешён только администратору.')
        return
      }

      router.replace('/admin')
      router.refresh()
    } catch (err) {
      console.error('ADMIN LOGIN ERROR:', err)
      setError('Не удалось выполнить вход. Попробуйте ещё раз.')
    } finally {
      setLoading(false)
    }
  }

  if (checking) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center bg-[#110d0b] px-4 text-foreground">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <RefreshCw className="h-4 w-4 animate-spin text-primary" />
          Проверка доступа...
        </div>
      </main>
    )
  }

  return (
    <main className="flex min-h-[100svh] items-center justify-center overflow-x-hidden bg-[#110d0b] px-4 py-8 text-foreground">
      <div className="w-full max-w-md">
        <div className="rounded-3xl border border-primary/20 bg-[#15100e] p-5 shadow-2xl sm:p-8">
          <div className="mb-8 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-primary sm:text-xs">
              ZHAR de PAR
            </p>

            <h1 className="mt-2 font-serif text-3xl sm:text-4xl">
              Админ-панель
            </h1>

            <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Войдите для управления бронированиями и финансами
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="admin-email"
                className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs"
              >
                Email
              </label>

              <input
                id="admin-email"
                type="email"
                value={ADMIN_EMAIL}
                readOnly
                autoComplete="username"
                className="min-h-12 w-full rounded-2xl border border-primary/15 bg-[#0e0a08] px-4 py-3 text-base text-muted-foreground outline-none sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="admin-password"
                className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs"
              >
                Пароль
              </label>

              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <input
                  id="admin-password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck={false}
                  disabled={loading}
                  placeholder="Введите пароль"
                  className="min-h-12 w-full rounded-2xl border border-primary/20 bg-[#0e0a08] py-3 pl-11 pr-4 text-base outline-none transition focus:border-primary disabled:opacity-50 sm:text-sm"
                />
              </div>
            </div>

            {error && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-relaxed text-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex min-h-12 w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-medium uppercase tracking-widest text-black transition hover:bg-primary/90 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Вход...
                </>
              ) : (
                <>
                  <LogIn className="h-4 w-4" />
                  Войти
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
