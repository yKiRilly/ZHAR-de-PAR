
'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import {
  translations,
  type Language,
} from '@/lib/translations'

type Translation = (typeof translations)[Language]

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: Translation
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {
  const [language, setLanguageState] = useState<Language>('ru')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('zhar-language')

    if (savedLanguage === 'ru' || savedLanguage === 'uk') {
      setLanguageState(savedLanguage)
    } else {
      localStorage.setItem('zhar-language', 'ru')
    }
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem('zhar-language', newLanguage)
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage must be used inside LanguageProvider'
    )
  }

  return context
}
