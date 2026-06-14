import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en'
import id from './locales/id'

export const SUPPORTED_LANGS = ['en', 'id'] as const
export type Lang = (typeof SUPPORTED_LANGS)[number]

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGS,
    // Default to English on first visit; remember the user's choice afterwards.
    detection: {
      order: ['localStorage'],
      lookupLocalStorage: 'tampilo_lang',
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false },
  })

// Keep <html lang>, the document title, and the meta description in sync with the language.
function syncDocument(lng: string) {
  document.documentElement.lang = lng
  document.title = i18n.t('meta.title')
  const desc = document.querySelector('meta[name="description"]')
  if (desc) desc.setAttribute('content', i18n.t('meta.description'))
}

i18n.on('languageChanged', syncDocument)
syncDocument(i18n.resolvedLanguage ?? 'en')

export default i18n
