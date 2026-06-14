import { useState } from 'react'
import { Check, MessageCircle, Star } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { waLink } from '../lib/site'

type Tab = 'landing' | 'toko'

type Plan = {
  name: string
  price: string
  desc: string
  features: string[]
}

type AddOn = { label: string; price: string }

function PricingCard({
  plan,
  popular,
  accentColor,
}: {
  plan: Plan
  popular: boolean
  accentColor: string
}) {
  const { t } = useTranslation()
  return (
    <div
      className={`relative rounded-3xl border flex flex-col transition-all duration-300 ${
        popular
          ? 'border-[#4338CA]/30 shadow-xl shadow-[#4338CA]/10 bg-white lg:scale-[1.04] z-10'
          : 'border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1'
      }`}
    >
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#4338CA] text-white text-xs font-semibold shadow-md shadow-[#4338CA]/30">
            <Star size={11} fill="white" />
            {t('pricing.popular')}
          </div>
        </div>
      )}

      <div className={`p-7 ${popular ? 'bg-gradient-to-b from-[#4338CA]/5 to-transparent' : ''} rounded-t-3xl`}>
        <h3 className="text-lg font-bold text-[#1E1B4B] mb-1">{plan.name}</h3>
        <p className="text-sm text-slate-500 mb-4 leading-relaxed">{plan.desc}</p>
        <div className="text-[1.7rem] font-extrabold tracking-tight" style={{ color: accentColor }}>
          {plan.price}
        </div>
      </div>

      <div className="px-7 pb-7 flex flex-col flex-1">
        <div className="h-px bg-slate-100 mb-5" />
        <ul className="space-y-3.5 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${accentColor}1a` }}
              >
                <Check size={12} style={{ color: accentColor }} strokeWidth={3} />
              </div>
              <span className="text-[15px] text-slate-700">{f}</span>
            </li>
          ))}
        </ul>

        <a
          href={waLink(t('wa.paket', { paket: plan.name }))}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-7 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
            popular
              ? 'text-white hover:opacity-90 shadow-md'
              : 'border border-slate-200 text-[#1E1B4B] hover:border-current'
          }`}
          style={
            popular
              ? { backgroundColor: accentColor, boxShadow: `0 8px 20px -8px ${accentColor}80` }
              : { color: accentColor }
          }
        >
          <MessageCircle size={16} />
          {t('common.orderWhatsapp')}
        </a>
      </div>
    </div>
  )
}

export default function PricingSection() {
  const { t } = useTranslation()
  const [tab, setTab] = useState<Tab>('landing')
  const { ref, visible } = useReveal<HTMLDivElement>()

  const plans = t(tab === 'landing' ? 'pricing.landing' : 'pricing.store', {
    returnObjects: true,
  }) as Plan[]
  const addOns = t('pricing.addOns', { returnObjects: true }) as AddOn[]
  const accentColor = tab === 'landing' ? '#4338CA' : '#06B6D4'

  return (
    <section id="harga" className="py-16 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('pricing.eyebrow')}
          title={t('pricing.title')}
          subtitle={t('pricing.subtitle')}
        />

        {/* Tab selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setTab('landing')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                tab === 'landing'
                  ? 'bg-[#4338CA] text-white shadow-md shadow-[#4338CA]/25'
                  : 'text-slate-500 hover:text-[#4338CA]'
              }`}
            >
              {t('pricing.tabLanding')}
            </button>
            <button
              onClick={() => setTab('toko')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                tab === 'toko'
                  ? 'bg-[#06B6D4] text-white shadow-md shadow-[#06B6D4]/25'
                  : 'text-slate-500 hover:text-[#0891B2]'
              }`}
            >
              {t('pricing.tabStore')}
            </button>
          </div>
        </div>

        {/* Cards */}
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid sm:grid-cols-3 gap-6 items-center`}>
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} popular={i === 1} accentColor={accentColor} />
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16">
          <h3 className="text-lg font-bold text-[#1E1B4B] text-center mb-6">
            {t('pricing.addOnsTitle')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {addOns.map(({ label, price }) => (
              <div
                key={label}
                className="bg-white rounded-2xl px-5 py-4 border border-slate-100 flex items-center justify-between gap-3 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-sm text-slate-700">{label}</span>
                <span className="text-sm font-bold text-[#4338CA] whitespace-nowrap">{price}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-slate-400 mt-8">{t('pricing.note')}</p>
      </div>
    </section>
  )
}
