import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { waLink } from '../lib/site'

type Faq = { q: string; a: string }

export default function FaqSection() {
  const { t } = useTranslation()
  const [open, setOpen] = useState<number | null>(null)
  const faqs = t('faq.items', { returnObjects: true }) as Faq[]

  return (
    <section id="faq" className="py-24 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#4338CA]/10 text-[#4338CA] text-xs font-semibold tracking-wide uppercase">
            {t('faq.eyebrow')}
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1B4B]">
            {t('faq.title')}
          </h2>
          <p className="mt-4 text-base text-slate-600">{t('faq.subtitle')}</p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'border-[#4338CA]/30 shadow-md' : 'border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-slate-50/60 transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-[#1E1B4B]">{q}</span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[#4338CA] text-white rotate-180' : 'bg-slate-100 text-[#4338CA]'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>
                <div className={`acc-grid ${isOpen ? 'open' : ''}`}>
                  <div className="acc-inner">
                    <p className="px-6 pb-5 text-[15px] text-slate-600 leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Inline CTA */}
        <div className="mt-10 text-center">
          <a
            href={waLink(t('wa.tanya'))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 bg-white text-[#1E1B4B] text-sm font-semibold hover:border-[#4338CA] hover:text-[#4338CA] transition-colors duration-200 cursor-pointer"
          >
            <MessageCircle size={16} />
            {t('faq.askCta')}
          </a>
        </div>
      </div>
    </section>
  )
}
