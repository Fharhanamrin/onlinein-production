import { MessageSquareWarning, ShoppingBag, EyeOff } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const icons = [EyeOff, MessageSquareWarning, ShoppingBag]

type Problem = { title: string; desc: string }

export default function ProblemSection() {
  const { t } = useTranslation()
  const { ref, visible } = useReveal<HTMLDivElement>()
  const problems = t('problem.items', { returnObjects: true }) as Problem[]

  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="rose"
          eyebrow={t('problem.eyebrow')}
          title={t('problem.title')}
          subtitle={t('problem.subtitle')}
        />

        <div ref={ref} className="grid sm:grid-cols-3 gap-6">
          {problems.map(({ title, desc }, i) => {
            const Icon = icons[i]
            return (
              <div
                key={title}
                className={`reveal ${visible ? 'is-visible' : ''} group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                style={{ transitionDelay: visible ? `${i * 90}ms` : '0ms' }}
              >
                <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center mb-5 group-hover:bg-rose-100 transition-colors duration-300">
                  <Icon size={26} className="text-rose-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1E1B4B] mb-3">{title}</h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>

        {/* Bridge */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-base">{t('problem.bridgeTop')}</p>
          <p className="text-2xl font-bold text-[#4338CA] mt-1.5 tracking-tight">
            {t('problem.bridgeBottom')}
          </p>
        </div>
      </div>
    </section>
  )
}
