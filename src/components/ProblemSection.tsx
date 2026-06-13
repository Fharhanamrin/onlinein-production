import { MessageSquareWarning, ShoppingBag, EyeOff } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const problems = [
  {
    icon: EyeOff,
    title: 'Susah dipercaya buyer',
    desc: 'Cuma jualan lewat IG biasa — tanpa website, calon pembeli ragu. Pesaing yang punya landing page langsung kelihatan lebih meyakinkan.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Orderan berantakan di chat',
    desc: 'Order masuk lewat WA, DM, komentar — campur aduk. Sering kelewat, susah dilacak, buyer pun bingung cara pesannya.',
  },
  {
    icon: ShoppingBag,
    title: 'Belum bisa jualan rapi',
    desc: 'Katalog cuma foto di story, harga harus nanya dulu. Nggak ada keranjang, nggak ada checkout — buyer yang males nanya kabur.',
  },
]

export default function ProblemSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="py-24 sm:py-28 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="rose"
          eyebrow="Masalah yang sering dialami"
          title="Usahamu rame, tapi terasa stuck?"
          subtitle="Chat numpuk. Order kelewat. Buyer ragu. Tiga masalah ini yang bikin banyak UMKM susah naik kelas."
        />

        <div ref={ref} className="grid sm:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`reveal ${visible ? 'is-visible' : ''} group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: visible ? `${i * 90}ms` : '0ms' }}
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center mb-5 group-hover:bg-rose-100 transition-colors duration-300">
                <Icon size={26} className="text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1B4B] mb-3">{title}</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-base">Kabar baiknya, ketiga masalah ini ada solusinya —</p>
          <p className="text-2xl font-bold text-[#4338CA] mt-1.5 tracking-tight">
            dan Onlinein hadir untuk menjawabnya.
          </p>
        </div>
      </div>
    </section>
  )
}
