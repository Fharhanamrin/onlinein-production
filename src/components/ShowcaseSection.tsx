import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon } from './BrandIcons'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { IG_URL, IG_HANDLE, BRAND_NAME } from '../lib/site'

const posts = [
  { src: '/showcase/showcase-1.png', caption: `Before vs After — UMKM yang tampil online bareng ${BRAND_NAME}` },
  { src: '/showcase/showcase-2.png', caption: 'Behind the scene — proses ngerjain proyek klien' },
  { src: '/showcase/showcase-3.png', caption: 'Landing Page Basic — mulai Rp 350.000' },
  { src: '/showcase/showcase-4.png', caption: 'Upgrade ke Toko Online — mulai Rp 1.000.000' },
  { src: '/showcase/showcase-5.png', caption: 'Hasil nyata > 100 posting promo' },
  { src: '/showcase/showcase-6.png', caption: 'Landing page ≠ toko online — jangan salah pilih' },
]

export default function ShowcaseSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="karya" className="py-24 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeading
            tone="indigo"
            align="left"
            eyebrow="Karya & Konten"
            title="Aktif berbagi tiap hari"
            subtitle="Edukasi, tips, showcase, sampai behind the scene — kami konsisten hadir buat UMKM Indonesia."
          />
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex shrink-0 items-center gap-2 px-5 py-3 rounded-full bg-[#1E1B4B] text-white text-sm font-semibold hover:bg-[#4338CA] transition-colors duration-200 cursor-pointer mb-14"
          >
            <InstagramIcon size={18} />
            Follow @{IG_HANDLE}
          </a>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <a
              key={post.src}
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal ${visible ? 'is-visible' : ''} group relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer`}
              style={{ transitionDelay: visible ? `${i * 70}ms` : '0ms' }}
            >
              <img
                src={post.src}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B]/85 via-[#1E1B4B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-xs sm:text-sm font-medium leading-snug">{post.caption}</p>
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
            Follow @{IG_HANDLE}
          </a>
        </div>
      </div>
    </section>
  )
}
