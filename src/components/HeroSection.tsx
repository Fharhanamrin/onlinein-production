import { ArrowRight, MessageCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#4338CA 1px, transparent 1px), linear-gradient(to right, #4338CA 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Gradient blobs */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#4338CA]/10 blur-3xl" />
        <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#06B6D4]/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4338CA]/8 border border-[#4338CA]/20 text-[#4338CA] text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
            Jasa Digital untuk UMKM Indonesia
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#1E1B4B] mb-6">
            Onlinein{' '}
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #4338CA 0%, #06B6D4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Usahamu
            </span>
            <br />
            Tampil &amp; Jualan Online
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-[#1E1B4B]/60 leading-relaxed mb-8 max-w-2xl mx-auto">
            Buat <strong className="text-[#1E1B4B]/80 font-semibold">landing page profesional</strong> dan{' '}
            <strong className="text-[#1E1B4B]/80 font-semibold">toko online</strong> untuk usahamu —
            cepat, terjangkau, dan tanpa istilah teknis yang bikin pusing.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { value: '≤ 14 Hari', label: 'Waktu Pengerjaan' },
              { value: 'Mulai 350rb', label: 'Harga Terjangkau' },
              { value: '100%', label: 'Mobile-Friendly' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-[#4338CA]">{stat.value}</div>
                <div className="text-sm text-[#1E1B4B]/50">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Onlinein%2C%20saya%20mau%20konsultasi%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#4338CA] text-white font-semibold text-base hover:bg-[#3730A3] transition-all duration-200 shadow-lg shadow-[#4338CA]/25 hover:shadow-[#4338CA]/40 hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle size={20} />
              Konsultasi Gratis via WhatsApp
            </a>
            <a
              href="#harga"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-[#4338CA] text-[#4338CA] font-semibold text-base hover:bg-[#4338CA]/5 transition-all duration-200 cursor-pointer"
            >
              Lihat Paket Harga
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Hero visual — sosmed launch preview */}
        <div className="mt-16 max-w-sm mx-auto sm:max-w-md">
          <div className="rounded-2xl shadow-2xl overflow-hidden ring-1 ring-gray-200">
            <img
              src="/logos/onlinein-launch-feed-1080.png"
              alt="Preview konten sosial media Onlinein"
              className="w-full h-auto block"
            />
          </div>
          <p className="text-center text-sm text-[#1E1B4B]/40 mt-3">
            Follow kami di Instagram &amp; TikTok — @onlinein.id
          </p>
        </div>
      </div>
    </section>
  )
}
