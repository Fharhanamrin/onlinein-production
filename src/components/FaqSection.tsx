import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Berapa lama waktu pengerjaan?',
    a: 'Untuk Landing Page, biasanya 7–14 hari kerja tergantung paket dan kelengkapan konten dari kamu. Toko Online membutuhkan 10–21 hari kerja. Kami selalu komunikasikan progres secara rutin.',
  },
  {
    q: 'Saya tidak punya konten / foto produk — apakah bisa tetap dibantu?',
    a: 'Bisa! Kami menyediakan add-on copywriting untuk bantu tulis konten. Untuk foto, kami bisa pakai ilustrasi atau placeholder dulu — dan kamu bisa update nanti. Konsultasi gratis untuk tahu lebih lanjut.',
  },
  {
    q: 'Setelah website jadi, saya bisa update sendiri?',
    a: 'Untuk Toko Online paket Standard ke atas, ya — kamu mendapat panel admin untuk kelola produk sendiri. Untuk Landing Page, kami sediakan add-on update berkala atau paket maintenance bulanan.',
  },
  {
    q: 'Apakah hasil website mobile-friendly?',
    a: '100% — semua hasil kerja kami dioptimasi untuk tampil sempurna di HP. Karena sebagian besar pengunjung usaha UMKM datang dari HP.',
  },
  {
    q: 'Bagaimana cara pembayaran?',
    a: 'Pembayaran via transfer bank (BCA, Mandiri, BRI, BNI) atau dompet digital (GoPay, OVO, Dana). Kami minta DP 50% di awal, sisanya setelah website selesai dan kamu puas.',
  },
]

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#4338CA]/10 text-[#4338CA] text-sm font-medium">
            FAQ
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E1B4B] mb-4">
          Pertanyaan yang sering ditanya
        </h2>
        <p className="text-center text-[#1E1B4B]/60 mb-10">
          Masih ada pertanyaan lain? Hubungi kami langsung via WhatsApp.
        </p>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold text-[#1E1B4B] pr-4">{q}</span>
                <ChevronDown
                  size={18}
                  className={`flex-shrink-0 text-[#4338CA] transition-transform duration-200 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-[#1E1B4B]/65 leading-relaxed border-t border-gray-50">
                  <div className="pt-3">{a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
