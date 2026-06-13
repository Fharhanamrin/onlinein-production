import { Star, Quote } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

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
        <Star key={i} size={16} className="text-amber-400" fill="currentColor" />
      ))}
    </div>
  )
}

export default function TestimoniSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="amber"
          eyebrow="Testimoni klien"
          title="UMKM yang sudah naik kelas"
          subtitle="Satu testimoni jujur lebih kuat dari 100 posting promo. Ini cerita dari usaha kecil yang kini tampil profesional & bisa jualan online."
        />

        <div ref={ref} className="grid sm:grid-cols-3 gap-6">
          {testimonials.map(({ name, business, location, rating, text, initials, color }, i) => (
            <div
              key={name}
              className={`reveal ${visible ? 'is-visible' : ''} group relative bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              style={{ transitionDelay: visible ? `${i * 100}ms` : '0ms' }}
            >
              <Quote size={36} style={{ color }} className="mb-4 opacity-90" fill="currentColor" />
              <p className="text-[15px] text-slate-700 leading-relaxed flex-1 mb-6">
                {text}
              </p>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: color }}
                >
                  {initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold text-[#1E1B4B] truncate">{name}</div>
                  <div className="text-xs text-slate-500 truncate mb-1">{business} · {location}</div>
                  <StarRating count={rating} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust stats */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#1E1B4B] via-[#4338CA] to-[#06B6D4] p-10 shadow-xl shadow-[#4338CA]/20">
          <div className="grid sm:grid-cols-3 gap-8 text-center text-white divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {[
              { value: '50+', label: 'Proyek Selesai' },
              { value: '100%', label: 'Klien Puas' },
              { value: '7–14 hari', label: 'Rata-rata Pengerjaan' },
            ].map((s) => (
              <div key={s.label} className="pt-6 first:pt-0 sm:pt-0">
                <div className="text-4xl font-extrabold mb-1 tracking-tight">{s.value}</div>
                <div className="text-sm text-white/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
