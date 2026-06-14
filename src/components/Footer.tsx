import { Music2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { InstagramIcon } from './BrandIcons'
import {
  BRAND_NAME,
  LOGO_ICON,
  WHATSAPP_DISPLAY,
  IG_URL,
  IG_HANDLE,
  TIKTOK_URL,
  waLink,
} from '../lib/site'

const navLinks = [
  { key: 'landing', href: '#layanan' },
  { key: 'store', href: '#layanan' },
  { key: 'pricing', href: '#harga' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'work', href: '#karya' },
  { key: 'faq', href: '#faq' },
] as const

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#1E1B4B] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 pb-10 border-b border-white/10">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <img src={LOGO_ICON} alt="" className="h-8 w-8 object-contain brightness-0 invert" />
              <span className="text-lg font-bold">{BRAND_NAME}</span>
            </div>
            <p className="text-sm text-white/65 leading-relaxed max-w-xs">{t('footer.tagline')}</p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.igAria')}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('footer.tiktokAria')}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <Music2 size={17} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">{t('footer.navTitle')}</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-sm text-white/65 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {t(`footer.links.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-white">{t('footer.contactTitle')}</h4>
            <div className="space-y-3">
              <a
                href={waLink(t('wa.tanya'))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/65 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="text-green-400 flex-shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {WHATSAPP_DISPLAY}
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/65 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <InstagramIcon size={17} className="text-pink-400 flex-shrink-0" />
                @{IG_HANDLE}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <p className="text-xs text-white/40">{t('footer.credits')}</p>
        </div>
      </div>
    </footer>
  )
}
