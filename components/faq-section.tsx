'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { useLanguage } from '@/components/language-provider'
import { cn } from '@/lib/utils'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { t } = useLanguage()

  return (
    <section
      id="faq"
      className="relative border-t border-border/50 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

        {/* Left side */}
        <div>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary">
              {t.faqLabel}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="mt-4 text-balance font-serif text-4xl font-light leading-tight sm:text-5xl">
              {t.faqTitle}
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              {t.faqDescription}
            </p>
          </Reveal>
        </div>

        {/* Questions */}
        <Reveal delay={120}>
          <ul className="divide-y divide-border/70 border-y border-border/70">
            {t.faq.map((faq, i) => {
              const isOpen = openIndex === i

              return (
                <li key={faq.question}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : i)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-serif text-xl font-light sm:text-2xl">
                      {faq.question}
                    </span>

                    <Plus
                      className={cn(
                        'h-5 w-5 shrink-0 text-primary transition-transform duration-300',
                        isOpen && 'rotate-45',
                      )}
                    />
                  </button>

                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen
                        ? 'grid-rows-[1fr] pb-6 opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-pretty leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}