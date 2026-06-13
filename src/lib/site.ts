// Konstanta brand & kontak terpusat — ganti nilai di sini sekali untuk seluruh situs.

export const BRAND_NAME = 'Tampilo'
export const TAGLINE = 'Tampilo — Tampil Online.'
export const WHATSAPP_NUMBER = '6281234567890' // placeholder — ganti nomor asli nanti
export const IG_HANDLE = 'tampilo_tampil_release'
export const IG_URL = 'https://www.instagram.com/tampilo_tampil_release/'
export const TIKTOK_URL = `https://www.tiktok.com/@${IG_HANDLE}`

export const LOGO_ICON = '/logos/tampilo-02-ikon-512.png'
export const LOGO_MAIN = '/logos/tampilo-01-utama-512.png'
export const LOGO_LAUNCH = '/logos/tampilo-launch-feed-1080.png'

/** Bangun link WhatsApp dengan pesan ter-encode. */
export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`

/** Pesan default untuk CTA konsultasi. */
export const WA_KONSULTASI = waLink(
  'Halo Tampilo, saya mau konsultasi gratis untuk usaha saya'
)

export const waPaket = (paket: string) =>
  waLink(`Halo Tampilo, saya tertarik paket ${paket}`)

export const waTanya = () =>
  waLink('Halo Tampilo, saya mau tanya layanan kalian')
