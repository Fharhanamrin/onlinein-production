import { Globe, ShoppingCart, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    color: '#4338CA',
    bgColor: '#4338CA/10',
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
    bgColor: '#06B6D4/10',
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
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#4338CA]/10 text-[#4338CA] text-sm font-medium">
            Dua Lini Layanan
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E1B4B] mb-4">
          Satu solusi, dua kebutuhan usahamu
        </h2>
        <p className="text-center text-[#1E1B4B]/60 max-w-xl mx-auto mb-12">
          Mulai dari tampil profesional, lalu naik ke jualan online — atau langsung keduanya sekaligus.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, color, tag, title, desc, features, cta, href }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Card header */}
              <div
                className="p-8"
                style={{ background: `linear-gradient(135deg, ${color}08 0%, ${color}15 100%)` }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon size={28} style={{ color }} />
                </div>
                <div
                  className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
                  style={{ backgroundColor: `${color}15`, color }}
                >
                  {tag}
                </div>
                <h3 className="text-2xl font-bold text-[#1E1B4B] mb-2">{title}</h3>
                <p className="text-[#1E1B4B]/60 leading-relaxed">{desc}</p>
              </div>

              {/* Card body */}
              <div className="p-8 bg-white">
                <ul className="space-y-3 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${color}15` }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-sm text-[#1E1B4B]/70">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={href}
                  className="inline-flex items-center gap-2 text-sm font-semibold cursor-pointer group-hover:gap-3 transition-all duration-200"
                  style={{ color }}
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
