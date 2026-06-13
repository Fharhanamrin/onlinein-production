import { Globe, ShoppingCart, ArrowRight, Check } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: Globe,
    color: '#4338CA',
    tag: 'Tampil Profesional',
    title: 'Landing Page',
    desc: 'Halaman web tunggal yang fokus meyakinkan calon pembeli dan mengarahkan mereka untuk satu aksi — order, hubungi, atau daftar.',
    features: [
      'Desain modern & mobile-friendly',
      'Tombol WhatsApp langsung terhubung',
      'Selesai dalam 7–14 hari kerja',
      'Revisi sampai puas',
    ],
    cta: 'Lihat Paket Landing Page',
    href: '#harga',
  },
  {
    icon: ShoppingCart,
    color: '#06B6D4',
    tag: 'Jualan Online',
    title: 'Toko Online',
    desc: 'Solusi jualan online sederhana — katalog produk rapi, keranjang belanja, dan checkout yang gampang. Cocok banget untuk UMKM kecil.',
    features: [
      'Katalog produk dengan foto & harga',
      'Keranjang & proses checkout',
      'Panel kelola produk sendiri',
      'Checkout via WA / transfer / COD',
    ],
    cta: 'Lihat Paket Toko Online',
    href: '#harga',
  },
]

export default function ServicesSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="layanan" className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dua lini layanan"
          title="Satu solusi, dua kebutuhan usahamu"
          subtitle="Mulai dari tampil profesional, lalu naik ke jualan online — atau langsung keduanya sekaligus."
        />

        <div ref={ref} className="grid md:grid-cols-2 gap-7">
          {services.map(({ icon: Icon, color, tag, title, desc, features, cta, href }, i) => (
            <div
              key={title}
              className={`reveal ${visible ? 'is-visible' : ''} group rounded-3xl border border-slate-100 overflow-hidden bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
            >
              {/* Card header */}
              <div
                className="relative p-8 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${color}14 0%, ${color}05 100%)` }}
              >
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-40"
                  style={{ background: color }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm"
                    style={{ backgroundColor: 'white' }}
                  >
                    <Icon size={28} style={{ color }} />
                  </div>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                    style={{ backgroundColor: 'white', color }}
                  >
                    {tag}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E1B4B] mb-2">{title}</h3>
                  <p className="text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-8">
                <ul className="space-y-3.5 mb-7">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${color}1a` }}
                      >
                        <Check size={12} style={{ color }} strokeWidth={3} />
                      </div>
                      <span className="text-[15px] text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={href}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-sm text-white transition-all duration-200 hover:gap-3 cursor-pointer"
                  style={{ backgroundColor: color }}
                >
                  {cta}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
