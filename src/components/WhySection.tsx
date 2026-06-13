import { Zap, Wallet, Award, MessageCircleHeart } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    color: '#4338CA',
    title: 'Cepat Jadi',
    desc: 'Selesai dalam 7–14 hari kerja. Nggak perlu nunggu berbulan-bulan — usahamu bisa online lebih cepat.',
  },
  {
    icon: Wallet,
    color: '#06B6D4',
    title: 'Harga Bersahabat',
    desc: 'Mulai dari Rp 350.000. Cocok untuk UMKM dengan budget terbatas yang mau hasil profesional.',
  },
  {
    icon: Award,
    color: '#4338CA',
    title: 'Hasil Profesional',
    desc: 'Desain modern, mobile-friendly, dan kelihatan mahal — tanpa harus bayar mahal.',
  },
  {
    icon: MessageCircleHeart,
    color: '#06B6D4',
    title: 'Bebas Istilah Teknis',
    desc: 'Kami bicara dengan bahasa yang mudah dipahami. Nggak ada jargon teknis yang bikin pusing.',
  },
]

export default function WhySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#06B6D4]/10 text-[#06B6D4] text-sm font-medium">
            Kenapa Onlinein?
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E1B4B] mb-4">
          Dibuat khusus untuk UMKM kecil
        </h2>
        <p className="text-center text-[#1E1B4B]/60 max-w-xl mx-auto mb-12">
          Kami ngerti kondisi UMKM — makanya semua layanan kami dirancang biar gampang, terjangkau, dan hasilnya bisa langsung dipakai.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, color, title, desc }) => (
            <div
              key={title}
              className="text-center p-6 rounded-2xl border border-gray-100 hover:border-[#4338CA]/20 hover:shadow-md transition-all duration-300 group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${color}12` }}
              >
                <Icon size={26} style={{ color }} />
              </div>
              <h3 className="text-base font-bold text-[#1E1B4B] mb-2">{title}</h3>
              <p className="text-sm text-[#1E1B4B]/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
