
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { supabase } from '@/lib/supabase'

const ADMIN_EMAIL = 'kirill2525225@gmail.com'

export default function AdminLoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState(ADMIN_EMAIL)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (
        session &&
        session.user.email === ADMIN_EMAIL
      ) {
        router.replace('/admin')
      }
    }

    checkSession()
  }, [router])

  const handleLogin = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    setError('')
    setLoading(true)

    try {
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        })

      if (error) {
        setError('Неверный email или пароль.')
        return
      }

      if (!data.session) {
        setError('Не удалось выполнить вход.')
        return
      }

      if (data.user.email !== ADMIN_EMAIL) {
        await supabase.auth.signOut()
        setError(
          'У этого аккаунта нет доступа к админ-панели.',
        )
        return
      }

      router.replace('/admin')
      router.refresh()
    } catch (err) {
      console.error('ADMIN LOGIN ERROR:', err)
      setError('Произошла ошибка входа.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#110d0b] px-6 text-foreground">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-primary/20 bg-[#15100e] p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              ZHAR de PAR
            </p>

            <h1 className="mt-3 font-serif text-4xl font-light">
              Admin
            </h1>

            <p className="mt-3 text-sm text-muted-foreground">
              Управление бронированиями
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="admin-email"
                className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
              >
                Email
              </label>

              <input
                id="admin-email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                required
                autoComplete="email"
                className="h-[54px] w-full rounded-xl border border-primary/20 bg-[#0e0a08] px-4 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
              />
            </div>

            <div>
              <label
                htmlFor="admin-password"
                className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground"
              >
                Пароль
              </label>

              <input
                id="admin-password"
                type="password"
                value={password}
                onChange={(event) =>
                  setPassword(event.target.value)
                }
                required
                autoComplete="current-password"
                placeholder="Введите пароль"
                className="h-[54px] w-full rounded-xl border border-primary/20 bg-[#0e0a08] px-4 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary/20"
              />
            </div>

            {error && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full border border-primary/40 bg-primary px-6 py-4 text-xs font-medium uppercase tracking-widest text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Вход...' : 'Войти'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
