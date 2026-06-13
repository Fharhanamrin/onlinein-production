// Konstanta brand & kontak terpusat — ganti nilai di sini sekali untuk seluruh situs.

export const WHATSAPP_NUMBER = '6281234567890' // placeholder — ganti nomor asli nanti
export const IG_HANDLE = 'onlinein_'
export const IG_URL = 'https://www.instagram.com/onlinein_/'
export const TIKTOK_URL = `https://www.tiktok.com/@${IG_HANDLE}`

/** Bangun link WhatsApp dengan pesan ter-encode. */
export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

/** Pesan default untuk CTA konsultasi. */
export const WA_KONSULTASI = waLink(
  'Halo Onlinein, saya mau konsultasi gratis untuk usaha saya'
)
