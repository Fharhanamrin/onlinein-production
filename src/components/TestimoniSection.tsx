import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ibu Sari',
    business: 'Kue & Snack Homemade',
    location: 'Surabaya',
    rating: 5,
    text: 'Sebelumnya orderan sering kelewat di WA. Sekarang punya landing page sendiri, calon pembeli bisa langsung lihat menu dan pesan. Hasilnya rapi banget dan cepat jadi!',
    initials: 'IS',
    color: '#4338CA',
  },
  {
    name: 'Mas Rizal',
    business: 'Konveksi Kaos Custom',
    location: 'Bandung',
    rating: 5,
    text: 'Tim Onlinein sabar banget ngelayanin saya yang buta teknologi. Harganya masuk akal, dan hasilnya kelihatan profesional. Udah dapat 3 klien baru minggu pertama website live!',
    initials: 'MR',
    color: '#06B6D4',
  },
  {
    name: 'Kak Dewi',
    business: 'MUA Freelance',
    location: 'Jakarta',
    rating: 5,
    text: 'Portfolio dan booking saya sekarang rapih di satu halaman. Klien tinggal klik, lihat hasil kerja, terus langsung WA. Jumlah inquiry naik drastis setelah pakai Onlinein!',
    initials: 'KD',
    color: '#4338CA',
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`Rating ${count} dari 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-yellow-400" fill="currentColor" />
      ))}
    </div>
  )
}

export default function TestimoniSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
            Testimoni Klien
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E1B4B] mb-4">
          UMKM yang sudah naik kelas
        </h2>
        <p className="text-center text-[#1E1B4B]/60 max-w-xl mx-auto mb-12">
          Ini cerita dari klien kami — usaha kecil yang kini tampil profesional dan bisa jualan online.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map(({ name, business, location, rating, text, initials, color }) => (
            <div
              key={name}
              className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <Quote size={24} style={{ color, opacity: 0.3 }} className="mb-4" />
              <p className="text-sm text-[#1E1B4B]/70 leading-relaxed flex-1 mb-5">
                "{text}"
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: color }}
                >
                  {initials}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-[#1E1B4B] truncate">{name}</div>
                  <div className="text-xs text-[#1E1B4B]/50 truncate">{business} · {location}</div>
                  <StarRating count={rating} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-[#4338CA] to-[#06B6D4] p-8">
          <div className="grid sm:grid-cols-3 gap-8 text-center text-white">
            {[
              { value: '50+', label: 'Proyek Selesai' },
              { value: '100%', label: 'Klien Puas' },
              { value: '≤14 Hari', label: 'Rata-rata Pengerjaan' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold mb-1">{s.value}</div>
                <div className="text-sm text-white/75">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
