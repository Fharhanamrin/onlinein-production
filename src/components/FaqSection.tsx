import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { WA_KONSULTASI } from '../lib/site'

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
    <section id="faq" className="py-24 sm:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-[#4338CA]/10 text-[#4338CA] text-xs font-semibold tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-[#1E1B4B]">
            Pertanyaan yang sering ditanya
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Masih ada pertanyaan lain? Hubungi kami langsung via WhatsApp.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'border-[#4338CA]/30 shadow-md' : 'border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer hover:bg-slate-50/60 transition-colors duration-200"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-semibold text-[#1E1B4B]">{q}</span>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-[#4338CA] text-white rotate-180' : 'bg-slate-100 text-[#4338CA]'
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>
                <div className={`acc-grid ${isOpen ? 'open' : ''}`}>
                  <div className="acc-inner">
                    <p className="px-6 pb-5 text-[15px] text-slate-600 leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Inline CTA */}
        <div className="mt-10 text-center">
          <a
            href={WA_KONSULTASI}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 bg-white text-[#1E1B4B] text-sm font-semibold hover:border-[#4338CA] hover:text-[#4338CA] transition-colors duration-200 cursor-pointer"
          >
            <MessageCircle size={16} />
            Tanya langsung via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
