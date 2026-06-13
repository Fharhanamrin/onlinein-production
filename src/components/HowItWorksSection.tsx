import { MessageCircle, Lightbulb, Code2, Rocket } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'DM / Hubungi Kami',
    desc: 'Hubungi Onlinein via WhatsApp atau DM Instagram @onlinein_. Ceritakan kebutuhan usahamu.',
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
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="cara-kerja" className="py-24 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cara kerja"
          title="Gampang banget, cuma 4 langkah"
          subtitle="Prosesnya simpel & transparan — kamu selalu tahu apa yang sedang dikerjakan. Beres dalam 7–14 hari."
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connector line - desktop only */}
          <div
            className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 rounded-full"
            style={{
              background: 'linear-gradient(to right, #4338CA, #06B6D4)',
              opacity: 0.25,
            }}
            aria-hidden="true"
          />

          {steps.map(({ icon: Icon, step, title, desc }, i) => (
            <div
              key={step}
              className={`reveal ${visible ? 'is-visible' : ''} relative text-center`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
            >
              {/* Step circle */}
              <div className="relative inline-flex mb-6">
                <div
                  className="w-20 h-20 rounded-3xl flex items-center justify-center relative z-10 shadow-lg shadow-[#4338CA]/20"
                  style={{ background: 'linear-gradient(135deg, #4338CA 0%, #06B6D4 100%)' }}
                >
                  <Icon size={30} className="text-white" />
                </div>
                <div className="absolute -top-2.5 -right-2.5 w-8 h-8 rounded-full bg-white border-2 border-[#4338CA] flex items-center justify-center shadow-sm z-20">
                  <span className="text-xs font-extrabold text-[#4338CA]">{step}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#1E1B4B] mb-2">{title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
