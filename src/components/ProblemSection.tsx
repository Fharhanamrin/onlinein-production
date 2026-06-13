import { MessageSquareWarning, ShoppingBag, EyeOff } from 'lucide-react'

const problems = [
  {
    icon: EyeOff,
    title: 'Susah Dipercaya Calon Pembeli',
    desc: 'Jualan cuma lewat IG biasa — tanpa website, calon pembeli ragu. Pesaing yang punya landing page kelihatan jauh lebih profesional dan terpercaya.',
  },
  {
    icon: MessageSquareWarning,
    title: 'Orderan Berantakan di Chat',
    desc: 'Order masuk lewat WA, DM, komentar IG — semua campur aduk. Sering kelewat, susah dilacak, pelanggan pun bingung cara pesannya.',
  },
  {
    icon: ShoppingBag,
    title: 'Belum Bisa Jualan Online Rapi',
    desc: 'Katalog produk cuma foto di story, harga harus nanya dulu. Nggak ada keranjang, nggak ada checkout — pembeli yang males nanya akhirnya kabur.',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-sm font-medium">
            Masalah yang Sering Dialami UMKM
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E1B4B] mb-4">
          Usahamu rame, tapi terasa stuck?
        </h2>
        <p className="text-center text-[#1E1B4B]/60 max-w-xl mx-auto mb-12">
          Banyak UMKM sudah kerja keras, tapi hasilnya belum maksimal karena tiga masalah ini.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                <Icon size={24} className="text-red-500" />
              </div>
              <h3 className="text-lg font-semibold text-[#1E1B4B] mb-2">{title}</h3>
              <p className="text-sm text-[#1E1B4B]/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <div className="mt-10 text-center">
          <p className="text-[#1E1B4B]/70 text-base">
            Ketiga masalah ini ada solusinya —
          </p>
          <p className="text-xl font-bold text-[#4338CA] mt-1">
            dan Onlinein hadir untuk menjawabnya.
          </p>
        </div>
      </div>
    </section>
  )
}
