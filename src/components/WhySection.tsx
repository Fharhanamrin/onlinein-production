import { Zap, Wallet, Award, MessageCircleHeart } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

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
    desc: 'Kami ngomong pakai bahasa yang gampang dipahami. Nggak ada jargon teknis yang bikin pusing.',
  },
]

export default function WhySection() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="cyan"
          eyebrow="Kenapa Onlinein?"
          title="Dibuat khusus untuk UMKM kecil"
          subtitle="Kami ngerti kondisi UMKM — makanya semua layanan dirancang biar gampang, terjangkau, dan hasilnya bisa langsung dipakai."
        />

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ icon: Icon, color, title, desc }, i) => (
            <div
              key={title}
              className={`reveal ${visible ? 'is-visible' : ''} group text-center p-7 rounded-2xl border border-slate-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${color}14` }}
              >
                <Icon
                  size={26}
                  style={{ color }}
                  className="transition-transform duration-300"
                />
              </div>
              <h3 className="text-base font-bold text-[#1E1B4B] mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
