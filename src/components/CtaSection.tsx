import { MessageCircle, ArrowRight } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl overflow-hidden relative"
          style={{
            background: 'linear-gradient(135deg, #1E1B4B 0%, #4338CA 60%, #06B6D4 100%)',
          }}
        >
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative px-8 py-14 sm:px-14 sm:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Siap Onlinein usahamu?
            </h2>
            <p className="text-white/75 text-lg max-w-xl mx-auto mb-8">
              Mulai dengan konsultasi gratis — ceritakan usahamu, dan kami bantu tentukan solusi terbaik. Tanpa syarat, tanpa biaya.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Onlinein%2C%20saya%20mau%20konsultasi%20gratis%20untuk%20usaha%20saya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#4338CA] font-bold text-base hover:bg-gray-50 transition-all duration-200 shadow-lg cursor-pointer"
              >
                <MessageCircle size={20} />
                Konsultasi Gratis via WhatsApp
              </a>
              <a
                href="#harga"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 transition-all duration-200 cursor-pointer"
              >
                Lihat Paket Harga
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <span>✓ Konsultasi gratis</span>
              <span>✓ Tanpa syarat</span>
              <span>✓ Respon cepat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
