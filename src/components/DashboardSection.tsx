import { useEffect, useRef } from 'react'
import { Check, MessageCircle, Play } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { waLink } from '../lib/site'

const VIDEO_SRC = '/video/content-dashboard-demo.mp4'
const POSTER_SRC = '/video/content-dashboard-poster.jpg'

/**
 * Lazy video: pakai preload="none" + poster, baru download & play saat section
 * masuk viewport, pause saat keluar. Hormati prefers-reduced-motion.
 */
function useLazyVideo<T extends HTMLVideoElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.controls = true // jangan autoplay; biar user kontrol sendiri
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {})
        } else {
          el.pause()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export default function DashboardSection() {
  const { t } = useTranslation()
  const { ref, visible } = useReveal<HTMLDivElement>()
  const videoRef = useLazyVideo<HTMLVideoElement>()
  const features = t('dashboard.features', { returnObjects: true }) as string[]

  return (
    <section id="dashboard" className="py-16 sm:py-28 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
        >
          {/* Copy */}
          <div className="order-2 lg:order-1">
            <SectionHeading
              align="left"
              eyebrow={t('dashboard.eyebrow')}
              title={t('dashboard.title')}
              subtitle={t('dashboard.subtitle')}
            />

            <ul className="space-y-3.5 mb-8 -mt-6">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4338CA]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-[#4338CA]" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-slate-700">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={waLink(t('wa.konsultasi'))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#4338CA] text-white font-semibold text-sm hover:bg-[#3730A3] transition-all duration-200 shadow-lg shadow-[#4338CA]/25 hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle size={18} />
              {t('common.consultFree')}
            </a>
          </div>

          {/* Video — phone frame */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* glow */}
              <div
                className="absolute -inset-6 rounded-[2.5rem] blur-3xl opacity-30 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #4338CA, #06B6D4)' }}
                aria-hidden="true"
              />
              {/* badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white shadow-md border border-slate-100 text-xs font-semibold text-[#4338CA]">
                <Play size={11} fill="currentColor" />
                {t('dashboard.badge')}
              </div>
              <div className="relative w-[15rem] sm:w-[17rem] rounded-[2rem] bg-[#1E1B4B] p-2.5 shadow-2xl ring-1 ring-slate-900/5">
                <video
                  ref={videoRef}
                  className="w-full aspect-[9/16] rounded-[1.4rem] bg-slate-900 object-cover"
                  src={VIDEO_SRC}
                  poster={POSTER_SRC}
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-label={t('dashboard.videoAria')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
