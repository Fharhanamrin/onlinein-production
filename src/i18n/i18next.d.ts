import type en from './locales/en'

// Make t() keys type-safe: a typo in a translation key fails at compile time.
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      translation: typeof en
    }
  }
}
