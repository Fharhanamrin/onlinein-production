import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { WA_KONSULTASI } from '../lib/site'

const trustPoints = ['Konsultasi gratis', 'Tanpa syarat', 'Respon cepat']

export default function CtaSection() {
  return (
    <section className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-[2rem] overflow-hidden relative"
          style={{ background: 'linear-gradient(135deg, #1E1B4B 0%, #4338CA 60%, #06B6D4 100%)' }}
        >
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-[#06B6D4]/20 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          <div className="relative px-8 py-16 sm:px-14 sm:py-20 text-center">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5">
              Siap Onlinein usahamu?
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-9 leading-relaxed">
              Mulai dengan konsultasi gratis — ceritakan usahamu, dan kami bantu tentukan solusi terbaik. Tanpa syarat, tanpa biaya.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WA_KONSULTASI}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#4338CA] font-bold text-base hover:bg-slate-50 transition-all duration-200 shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle size={20} />
                Konsultasi Gratis via WhatsApp
              </a>
              <a
                href="#harga"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                Lihat Paket Harga
                <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-white/75">
              {trustPoints.map((p) => (
                <span key={p} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 size={16} className="text-[#06B6D4]" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
