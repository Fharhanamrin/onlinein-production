import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGS } from '../i18n'

/** Segmented EN | ID language switcher used in the navbar (desktop + mobile). */
export default function LanguageTabs({ className = '' }: { className?: string }) {
  const { i18n, t } = useTranslation()
  const active = (i18n.resolvedLanguage ?? 'en').startsWith('id') ? 'id' : 'en'

  return (
    <div
      role="group"
      aria-label={t('lang.switch')}
      className={`inline-flex items-center p-0.5 rounded-full bg-slate-100 border border-slate-200 ${className}`}
    >
      {SUPPORTED_LANGS.map((lng) => {
        const isActive = active === lng
        return (
          <button
            key={lng}
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            aria-pressed={isActive}
            className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-[#4338CA] text-white shadow-sm'
                : 'text-slate-500 hover:text-[#4338CA]'
            }`}
          >
            {t(`lang.${lng}`)}
          </button>
        )
      })}
    </div>
  )
}
