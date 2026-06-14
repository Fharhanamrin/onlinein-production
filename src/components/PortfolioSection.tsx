import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

type CategoryKey = 'landing' | 'store'

interface Project {
  name: string
  category: CategoryKey
  desc: string
  // image?: taruh screenshot di public/portfolio/ lalu tambahkan di data + render.
}

const categoryStyle: Record<CategoryKey, { color: string; text: string }> = {
  landing: { color: '#4338CA', text: '#4338CA' },
  store: { color: '#06B6D4', text: '#0891B2' },
}

function BrowserMockup({ name, color }: { name: string; color: string }) {
  return (
    <div className="absolute inset-0 flex flex-col">
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/90 border-b border-slate-200">
        <span className="w-2 h-2 rounded-full bg-red-300" />
        <span className="w-2 h-2 rounded-full bg-amber-300" />
        <span className="w-2 h-2 rounded-full bg-green-300" />
      </div>
      {/* Faux content */}
      <div
        className="flex-1 flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${color}18 0%, ${color}33 100%)` }}
      >
        <span className="text-lg font-extrabold tracking-tight" style={{ color }}>
          {name}
        </span>
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const { t } = useTranslation()
  const { ref, visible } = useReveal<HTMLDivElement>()
  const projects = t('portfolio.items', { returnObjects: true }) as Project[]

  return (
    <section id="portfolio" className="py-24 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('portfolio.eyebrow')}
          title={t('portfolio.title')}
          subtitle={t('portfolio.subtitle')}
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const style = categoryStyle[p.category]
            const categoryLabel = p.category === 'landing' ? t('portfolio.catLanding') : t('portfolio.catStore')
            return (
              <a
                key={p.name}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className={`reveal ${visible ? 'is-visible' : ''} group flex flex-col rounded-3xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                    <BrowserMockup name={p.name} color={style.color} />
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6">
                  <span
                    className="inline-block self-start px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
                    style={{ backgroundColor: `${style.color}1a`, color: style.text }}
                  >
                    {categoryLabel}
                  </span>
                  <h3 className="text-lg font-bold text-[#1E1B4B] mb-1.5">{p.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed flex-1">{p.desc}</p>
                  <span
                    className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5"
                    style={{ color: style.text }}
                  >
                    {t('common.visitWebsite')}
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
