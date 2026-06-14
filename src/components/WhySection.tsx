import { Zap, Wallet, Award, MessageCircleHeart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const meta = [
  { icon: Zap, color: '#4338CA' },
  { icon: Wallet, color: '#06B6D4' },
  { icon: Award, color: '#4338CA' },
  { icon: MessageCircleHeart, color: '#06B6D4' },
]

type Reason = { title: string; desc: string }

export default function WhySection() {
  const { t } = useTranslation()
  const { ref, visible } = useReveal<HTMLDivElement>()
  const reasons = t('why.items', { returnObjects: true }) as Reason[]

  return (
    <section className="py-16 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="cyan"
          eyebrow={t('why.eyebrow')}
          title={t('why.title')}
          subtitle={t('why.subtitle')}
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ title, desc }, i) => {
            const { icon: Icon, color } = meta[i]
            return (
              <div
                key={title}
                className={`reveal ${visible ? 'is-visible' : ''} group text-center p-7 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${color}14` }}
                >
                  <Icon size={26} style={{ color }} className="transition-transform duration-300" />
                </div>
                <h3 className="text-base font-bold text-[#1E1B4B] mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
