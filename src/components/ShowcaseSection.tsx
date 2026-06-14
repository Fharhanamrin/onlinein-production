import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { InstagramIcon } from './BrandIcons'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { IG_URL, IG_HANDLE } from '../lib/site'

const images = [
  '/showcase/showcase-1.png',
  '/showcase/showcase-2.png',
  '/showcase/showcase-3.png',
  '/showcase/showcase-4.png',
  '/showcase/showcase-5.png',
  '/showcase/showcase-6.png',
]

export default function ShowcaseSection() {
  const { t } = useTranslation()
  const { ref, visible } = useReveal<HTMLDivElement>()
  const captions = t('showcase.posts', { returnObjects: true }) as string[]

  return (
    <section id="karya" className="py-16 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            tone="indigo"
            align="left"
            eyebrow={t('showcase.eyebrow')}
            title={t('showcase.title')}
            subtitle={t('showcase.subtitle')}
          />
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex shrink-0 items-center gap-2 px-5 py-3 rounded-full bg-[#1E1B4B] text-white text-sm font-semibold hover:bg-[#4338CA] transition-colors duration-200 cursor-pointer mb-14"
          >
            <InstagramIcon size={18} />
            {t('showcase.follow', { handle: IG_HANDLE })}
          </a>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <a
              key={src}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal ${visible ? 'is-visible' : ''} group relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer`}
              style={{ transitionDelay: visible ? `${i * 70}ms` : '0ms' }}
            >
              <img
                src={src}
                alt={captions[i]}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/85 via-[#1E1B4B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-xs sm:text-sm font-medium leading-snug">{captions[i]}</p>
              </div>
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight size={16} className="text-[#1E1B4B]" />
              </div>
            </a>
          ))}
        </div>

        {/* Mobile follow button */}
        <div className="mt-10 text-center lg:hidden">
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E1B4B] text-white text-sm font-semibold hover:bg-[#4338CA] transition-colors duration-200 cursor-pointer"
          >
            <InstagramIcon size={18} />
            {t('showcase.follow', { handle: IG_HANDLE })}
          </a>
        </div>
      </div>
    </section>
  )
}
