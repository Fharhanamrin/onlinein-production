// Konstanta brand & kontak terpusat — ganti nilai di sini sekali untuk seluruh situs.

export const BRAND_NAME = 'Tampilo'
export const TAGLINE = 'Tampilo — Tampil Online.'
// Nomor WhatsApp dari env (Vercel/.env), dengan fallback ke nomor asli.
// WHATSAPP_NUMBER: digit saja untuk link wa.me. WHATSAPP_DISPLAY: format rapi untuk tampilan.
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '6287887396493'
export const WHATSAPP_DISPLAY = import.meta.env.VITE_WHATSAPP_DISPLAY ?? '+62 878-8739-6493'
export const IG_HANDLE = 'tampilo_tampil_release'
export const IG_URL = 'https://www.instagram.com/tampilo_tampil_release/'
export const TIKTOK_URL = `https://www.tiktok.com/@${IG_HANDLE}`

export const LOGO_ICON = '/logos/tampilo-02-ikon-512.png'
export const LOGO_MAIN = '/logos/tampilo-01-utama-512.png'
export const LOGO_LAUNCH = '/logos/tampilo-launch-feed-1080.png'

/**
 * Bangun link WhatsApp dengan pesan ter-encode.
 * Teks pesan datang dari i18n (kunci `wa.*`) supaya ikut bahasa aktif.
 */
export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
