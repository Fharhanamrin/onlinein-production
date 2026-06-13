import { MessageCircle, Lightbulb, Code2, Rocket } from 'lucide-react'

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'DM / Hubungi Kami',
    desc: 'Hubungi Onlinein via WhatsApp atau DM Instagram @onlinein.id. Ceritakan kebutuhan usahamu.',
  },
  {
    icon: Lightbulb,
    step: '02',
    title: 'Konsultasi Gratis',
    desc: 'Kami diskusi bareng — paket apa yang cocok, konten apa yang perlu disiapkan, dan estimasi biaya & waktu.',
  },
  {
    icon: Code2,
    step: '03',
    title: 'Proses Pengerjaan',
    desc: 'Tim kami mulai mengerjakan. Kamu bisa pantau progres dan kasih masukan. Revisi termasuk dalam paket.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Launch & Online!',
    desc: 'Website siap, kamu terima hasilnya, dan usahamu resmi online. Kami bantu sampai kamu puas.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="cara-kerja" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#4338CA]/10 text-[#4338CA] text-sm font-medium">
            Cara Kerja
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E1B4B] mb-4">
          Gampang banget, 4 langkah saja
        </h2>
        <p className="text-center text-[#1E1B4B]/60 max-w-xl mx-auto mb-14">
          Prosesnya simpel dan transparan — kamu selalu tahu apa yang sedang dikerjakan.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line - desktop only */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px"
            style={{
              background: 'linear-gradient(to right, #4338CA, #06B6D4)',
              opacity: 0.2,
            }}
            aria-hidden="true"
          />

          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="relative text-center">
              {/* Step circle */}
              <div className="relative inline-flex mb-5">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center relative z-10"
                  style={{
                    background: 'linear-gradient(135deg, #4338CA 0%, #06B6D4 100%)',
                  }}
                >
                  <Icon size={30} className="text-white" />
                </div>
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-[#4338CA] flex items-center justify-center"
                >
                  <span className="text-[10px] font-bold text-[#4338CA]">{step}</span>
                </div>
              </div>
              <h3 className="text-base font-bold text-[#1E1B4B] mb-2">{title}</h3>
              <p className="text-sm text-[#1E1B4B]/60 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
