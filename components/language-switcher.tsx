
'use client'

import { useLanguage } from '@/components/language-provider'
import type { Language } from '@/lib/translations'

const languages: { code: Language; name: string }[] = [
  { code: 'ru', name: 'RU' },
  { code: 'uk', name: 'UA' },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="relative flex items-center gap-1 rounded-full border border-border/60 bg-background/60 p-1 backdrop-blur-md">
      {languages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => setLanguage(lang.code)}
          className={`rounded-full px-3 py-1.5 text-[10px] font-medium tracking-widest transition-all ${
            language === lang.code
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  )
}
