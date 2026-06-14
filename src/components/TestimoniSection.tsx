import { Star, Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

// Visual data kept here; text comes from i18n by index.
const meta = [
  { initials: 'IS', color: '#4338CA' },
  { initials: 'MR', color: '#06B6D4' },
  { initials: 'KD', color: '#4338CA' },
]

type Testimonial = { name: string; business: string; location: string; text: string }
type TrustStat = { value: string; label: string }

function StarRating({ count, label }: { count: number; label: string }) {
  return (
    <div className="flex gap-0.5" aria-label={label}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
      ))}
    </div>
  )
}

export default function TestimoniSection() {
  const { t } = useTranslation()
  const { ref, visible } = useReveal<HTMLDivElement>()
  const testimonials = t('testimonials.items', { returnObjects: true }) as Testimonial[]
  const stats = t('testimonials.stats', { returnObjects: true }) as TrustStat[]

  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="amber"
          eyebrow={t('testimonials.eyebrow')}
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
        />

        <div ref={ref} className="grid sm:grid-cols-3 gap-6">
          {testimonials.map(({ name, business, location, text }, i) => {
            const { initials, color } = meta[i]
            return (
              <div
                key={name}
                className={`reveal ${visible ? 'is-visible' : ''} group relative bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
                style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
              >
                <Quote size={36} style={{ color }} className="mb-4 opacity-90" fill="currentColor" />
                <p className="text-[15px] text-slate-700 leading-relaxed flex-1 mb-6">{text}</p>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    {initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-[#1E1B4B] truncate">{name}</div>
                    <div className="text-xs text-slate-500 truncate mb-1">{business} · {location}</div>
                    <StarRating count={5} label={t('testimonials.ratingLabel', { count: 5 })} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust stats */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#1E1B4B] via-[#4338CA] to-[#06B6D4] p-10 shadow-xl shadow-[#4338CA]/20">
          <div className="grid sm:grid-cols-3 gap-8 text-center text-white divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {stats.map((s) => (
              <div key={s.label} className="pt-6 first:pt-0 sm:pt-0">
                <div className="text-4xl font-extrabold mb-1 tracking-tight">{s.value}</div>
                <div className="text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
