import { useState } from 'react'
import { Check, MessageCircle, Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { waPaket } from '../lib/site'

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
      className={`relative rounded-3xl border flex flex-col transition-all duration-300 ${
        plan.popular
          ? 'border-[#4338CA]/30 shadow-xl shadow-[#4338CA]/10 bg-white lg:scale-[1.04] z-10'
          : 'border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1'
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#4338CA] text-white text-xs font-semibold shadow-md shadow-[#4338CA]/30">
            <Star size={11} fill="white" />
            Paling Populer
          </div>
        </div>
      )}

      <div className={`p-7 ${plan.popular ? 'bg-gradient-to-b from-[#4338CA]/5 to-transparent' : ''} rounded-t-3xl`}>
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
          href={waPaket(plan.name)}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-7 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
            plan.popular
              ? 'text-white hover:opacity-90 shadow-md'
              : 'border border-slate-200 text-[#1E1B4B] hover:border-current'
          }`}
          style={
            plan.popular
              ? { backgroundColor: accentColor, boxShadow: `0 8px 20px -8px ${accentColor}80` }
              : { color: accentColor }
          }
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
  const { ref, visible } = useReveal<HTMLDivElement>()

  const plans = tab === 'landing' ? landingPricing : tokoPricing
  const accentColor = tab === 'landing' ? '#4338CA' : '#06B6D4'

  return (
    <section id="harga" className="py-24 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Harga jujur & transparan"
          title="Mulai dari ratusan ribu saja"
          subtitle="Nggak harus mahal buat tampil profesional. Pilih paket yang pas sama kebutuhan usahamu."
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
              Landing Page
            </button>
            <button
              onClick={() => setTab('toko')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                tab === 'toko'
                  ? 'bg-[#06B6D4] text-white shadow-md shadow-[#06B6D4]/25'
                  : 'text-slate-500 hover:text-[#0891B2]'
              }`}
            >
              Toko Online
            </button>
          </div>
        </div>

        {/* Cards */}
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid sm:grid-cols-3 gap-6 items-center`}>
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} accentColor={accentColor} />
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16">
          <h3 className="text-lg font-bold text-[#1E1B4B] text-center mb-6">
            Add-On — Layanan Tambahan
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

        <p className="text-center text-sm text-slate-400 mt-8">
          * Harga dapat berubah sewaktu-waktu. Konsultasi gratis dulu untuk penawaran terbaik.
        </p>
      </div>
    </section>
  )
}
