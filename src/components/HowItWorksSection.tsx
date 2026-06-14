import { MessageCircle, Lightbulb, Code2, Rocket } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { IG_HANDLE } from '../lib/site'

const icons = [MessageCircle, Lightbulb, Code2, Rocket]

type Step = { step: string; title: string; desc: string }

export default function HowItWorksSection() {
  const { t } = useTranslation()
  const { ref, visible } = useReveal<HTMLDivElement>()
  const steps = t('how.steps', { returnObjects: true }) as Step[]

  return (
    <section id="cara-kerja" className="py-24 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('how.eyebrow')}
          title={t('how.title')}
          subtitle={t('how.subtitle')}
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connector line - desktop only */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 rounded-full"
            style={{
              background: 'linear-gradient(to right, #4338CA, #06B6D4)',
              opacity: 0.25,
            }}
            aria-hidden="true"
          />

          {steps.map(({ step, title, desc }, i) => {
            const Icon = icons[i]
            return (
              <div
                key={step}
                className={`reveal ${visible ? 'is-visible' : ''} relative text-center`}
                style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              >
                {/* Step circle */}
                <div className="relative inline-flex mb-6">
                  <div
                    className="w-20 h-20 rounded-3xl flex items-center justify-center relative z-10 shadow-lg shadow-[#4338CA]/20"
                    style={{ background: 'linear-gradient(135deg, #4338CA 0%, #06B6D4 100%)' }}
                  >
                    <Icon size={30} className="text-white" />
                  </div>
                  <div className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-full bg-white border-2 border-[#4338CA] flex items-center justify-center shadow-sm z-20">
                    <span className="text-xs font-extrabold text-[#4338CA]">{step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {desc.replace('{{handle}}', IG_HANDLE)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
