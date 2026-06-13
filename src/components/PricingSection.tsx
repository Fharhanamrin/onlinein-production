import { useState } from 'react'
import { Check, MessageCircle, Star } from 'lucide-react'

type Tab = 'landing' | 'toko'

const landingPricing = [
  {
    name: 'Basic',
    price: 'Rp 350rb – 500rb',
    popular: false,
    desc: 'Mulai hadir online dengan cepat.',
    features: [
      '1 halaman (1–3 section)',
      'Desain mobile-friendly',
      'Tombol WhatsApp',
      'Revisi 1x',
    ],
  },
  {
    name: 'Standard',
    price: 'Rp 800rb – 1,5jt',
    popular: true,
    desc: 'Paling cocok untuk UMKM yang mau tampil profesional.',
    features: [
      '5–7 section lengkap',
      'Copywriting ringan',
      'Form / halaman order',
      'Integrasi sosial media',
      'Revisi 2x',
    ],
  },
  {
    name: 'Premium',
    price: 'Rp 2jt – 3,5jt',
    popular: false,
    desc: 'Solusi lengkap dengan domain & hosting.',
    features: [
      'Desain custom penuh',
      'Copywriting profesional',
      'Domain .com + hosting 1 tahun',
      'Animasi & interaksi',
      'SEO dasar',
      'Revisi unlimited',
    ],
  },
]

const tokoPricing = [
  {
    name: 'Toko Basic',
    price: 'Rp 1jt – 2jt',
    popular: false,
    desc: 'Tampilkan produkmu secara rapi online.',
    features: [
      'Katalog produk dengan foto & harga',
      'Tampilan mobile-friendly',
      'Checkout via WhatsApp',
      'Revisi 1x',
    ],
  },
  {
    name: 'Toko Standard',
    price: 'Rp 2,5jt – 4,5jt',
    popular: true,
    desc: 'Toko online lengkap dengan keranjang & panel kelola.',
    features: [
      'Katalog + keranjang belanja',
      'Panel kelola produk sendiri',
      'Ongkos kirim sederhana',
      'Checkout transfer / COD',
      'Revisi 2x',
    ],
  },
  {
    name: 'Toko Premium',
    price: 'Rp 5jt ke atas',
    popular: false,
    desc: 'Toko online penuh fitur dengan payment gateway.',
    features: [
      'Semua fitur Standard',
      'Payment gateway (QRIS / transfer otomatis)',
      'Domain + hosting',
      'Laporan penjualan dasar',
      'Revisi unlimited',
    ],
  },
]

const addOns = [
  { label: 'Copywriting per halaman', price: 'Rp 150.000' },
  { label: 'Setup domain + hosting / tahun', price: 'Rp 300.000' },
  { label: 'Maintenance bulanan', price: 'Rp 100rb – 300rb/bln' },
  { label: 'Tambah / update produk toko', price: 'Rp 50.000/batch' },
  { label: 'Desain logo', price: 'Rp 250.000' },
]

function PricingCard({
  plan,
  accentColor,
}: {
  plan: (typeof landingPricing)[0]
  accentColor: string
}) {
  return (
    <div
      className={`relative rounded-2xl border flex flex-col transition-all duration-300 hover:shadow-xl ${
        plan.popular
          ? 'border-[#4338CA] shadow-lg shadow-[#4338CA]/10'
          : 'border-gray-200 bg-white'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#4338CA] text-white text-xs font-semibold">
            <Star size={11} fill="white" />
            Paling Populer
          </div>
        </div>
      )}

      <div className={`p-6 ${plan.popular ? 'bg-[#4338CA]/3' : ''} rounded-t-2xl`}>
        <h3 className="text-lg font-bold text-[#1E1B4B] mb-1">{plan.name}</h3>
        <p className="text-sm text-[#1E1B4B]/55 mb-3">{plan.desc}</p>
        <div
          className="text-2xl font-bold"
          style={{ color: accentColor }}
        >
          {plan.price}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <ul className="space-y-3 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${accentColor}15` }}
              >
                <Check size={11} style={{ color: accentColor }} strokeWidth={2.5} />
              </div>
              <span className="text-sm text-[#1E1B4B]/70">{f}</span>
            </li>
          ))}
        </ul>

        <a
          href={`https://wa.me/6281234567890?text=Halo%20Onlinein%2C%20saya%20tertarik%20paket%20${encodeURIComponent(plan.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-6 inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
            plan.popular
              ? 'bg-[#4338CA] text-white hover:bg-[#3730A3] shadow-md shadow-[#4338CA]/25'
              : 'border-2 border-gray-200 text-[#1E1B4B] hover:border-[#4338CA] hover:text-[#4338CA]'
          }`}
        >
          <MessageCircle size={16} />
          Pesan via WhatsApp
        </a>
      </div>
    </div>
  )
}

export default function PricingSection() {
  const [tab, setTab] = useState<Tab>('landing')

  const plans = tab === 'landing' ? landingPricing : tokoPricing
  const accentColor = tab === 'landing' ? '#4338CA' : '#06B6D4'

  return (
    <section id="harga" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#4338CA]/10 text-[#4338CA] text-sm font-medium">
            Harga Transparan
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E1B4B] mb-4">
          Mulai dari ratusan ribu saja
        </h2>
        <p className="text-center text-[#1E1B4B]/60 max-w-xl mx-auto mb-10">
          Harga terjangkau, hasil profesional. Pilih paket yang sesuai kebutuhan usahamu.
        </p>

        {/* Tab selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-white border border-gray-200 shadow-sm">
            <button
              onClick={() => setTab('landing')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                tab === 'landing'
                  ? 'bg-[#4338CA] text-white shadow-sm'
                  : 'text-[#1E1B4B]/60 hover:text-[#4338CA]'
              }`}
            >
              Landing Page
            </button>
            <button
              onClick={() => setTab('toko')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                tab === 'toko'
                  ? 'bg-[#06B6D4] text-white shadow-sm'
                  : 'text-[#1E1B4B]/60 hover:text-[#06B6D4]'
              }`}
            >
              Toko Online
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} accentColor={accentColor} />
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-14">
          <h3 className="text-lg font-bold text-[#1E1B4B] text-center mb-6">
            Add-On (Layanan Tambahan)
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map(({ label, price }) => (
              <div
                key={label}
                className="bg-white rounded-xl px-5 py-4 border border-gray-100 flex items-center justify-between shadow-sm"
              >
                <span className="text-sm text-[#1E1B4B]/70">{label}</span>
                <span className="text-sm font-semibold text-[#4338CA] ml-4 text-right">{price}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-[#1E1B4B]/40 mt-6">
          * Harga dapat berubah sewaktu-waktu. Konsultasi gratis untuk penawaran terbaik.
        </p>
      </div>
    </section>
  )
}
