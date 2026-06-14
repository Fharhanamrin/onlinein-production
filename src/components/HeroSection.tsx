import { ArrowRight, MessageCircle, Star } from 'lucide-react'
import { Trans, useTranslation } from 'react-i18next'
import { IG_HANDLE, BRAND_NAME, LOGO_LAUNCH, waLink } from '../lib/site'

type Stat = { value: string; unit: string; label: string }

export default function HeroSection() {
  const { t } = useTranslation()
  const stats = t('hero.stats', { returnObjects: true }) as Stat[]

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Soft grid */}
        <div
          className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_40%,transparent_100%)]"
          style={{
            backgroundImage: `linear-gradient(#4338CA 1px, transparent 1px), linear-gradient(to right, #4338CA 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
          }}
        />
        {/* Gradient blobs — lebih terlihat */}
        <div className="absolute -top-24 -right-20 w-[28rem] h-[28rem] rounded-full bg-[#4338CA]/15 blur-[100px]" />
        <div className="absolute top-1/3 -left-24 w-96 h-96 rounded-full bg-[#06B6D4]/15 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-medium mb-7">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]" />
            </span>
            {t('hero.badge')}
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up text-[2.5rem] leading-[1.08] sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1E1B4B] mb-6"
            style={{ animationDelay: '0.08s' }}
          >
            {t('hero.title.before')}{' '}
            <span
              style={{
                background: 'linear-gradient(120deg, #4338CA 0%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('hero.title.highlight')}
            </span>
            <br />
            {t('hero.title.after')}
          </h1>

          {/* Sub-headline */}
          <p
            className="animate-fade-up text-lg sm:text-xl text-slate-600 leading-relaxed mb-9 max-w-xl mx-auto"
            style={{ animationDelay: '0.16s' }}
          >
            <Trans
              i18nKey="hero.subtitle"
              components={{ strong: <strong className="text-[#1E1B4B] font-semibold" /> }}
            />
          </p>

          {/* CTA buttons */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row gap-3 justify-center mb-10"
            style={{ animationDelay: '0.24s' }}
          >
            <a
              href={waLink(t('wa.konsultasi'))}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#4338CA] text-white font-semibold text-base hover:bg-[#3730A3] transition-all duration-200 shadow-lg shadow-[#4338CA]/25 hover:shadow-xl hover:shadow-[#4338CA]/30 hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle size={20} />
              {t('common.consultFree')}
            </a>
            <a
              href="#harga"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-slate-300 bg-white text-[#1E1B4B] font-semibold text-base hover:border-[#4338CA] hover:text-[#4338CA] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              {t('common.seePricing')}
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Stats row — dengan divider */}
          <div
            className="animate-fade-up inline-flex items-center gap-6 sm:gap-10 px-6 py-4 rounded-2xl bg-white/70 backdrop-blur border border-slate-100 shadow-sm"
            style={{ animationDelay: '0.32s' }}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#1E1B4B]">
                    {stat.value}
                    {stat.unit && <span className="text-sm font-medium text-slate-400 ml-1">{stat.unit}</span>}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-0.5">{stat.label}</div>
                </div>
                {i < stats.length - 1 && <div className="h-9 w-px bg-slate-200" />}
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual — sosmed launch preview */}
        <div
          className="animate-fade-up mt-16 max-w-sm mx-auto sm:max-w-md"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="relative">
            {/* Floating rating chip */}
            <div className="absolute -top-4 -left-4 z-10 hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-slate-100">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <span className="text-xs font-semibold text-[#1E1B4B]">{t('hero.ratingChip')}</span>
            </div>
            <div className="rounded-3xl shadow-2xl overflow-hidden ring-1 ring-slate-200/70">
              <img
                src={LOGO_LAUNCH}
                alt={`${BRAND_NAME} — social media launch preview`}
                className="w-full h-auto block"
              />
            </div>
          </div>
          <p className="text-center text-sm text-slate-400 mt-4">
            {t('hero.socialNote', { handle: IG_HANDLE })}
          </p>
        </div>
      </div>
    </section>
  )
}
