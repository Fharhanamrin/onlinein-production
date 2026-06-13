import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { WA_KONSULTASI } from '../lib/site'

const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Harga', href: '#harga' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Karya', href: '#karya' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-[0_1px_0_rgba(15,23,42,0.06),0_8px_24px_-12px_rgba(15,23,42,0.18)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center cursor-pointer shrink-0">
            <img
              src="/logos/onlinein-01-utama-512.png"
              alt="Onlinein"
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8" aria-label="Navigasi utama">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-slate-600 hover:text-[#4338CA] transition-colors duration-200 cursor-pointer after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#4338CA] after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WA_KONSULTASI}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4338CA] text-white text-sm font-semibold hover:bg-[#3730A3] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            <MessageCircle size={16} />
            Konsultasi Gratis
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-[#1E1B4B] hover:bg-slate-100 transition-colors duration-200 cursor-pointer"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-[#4338CA] hover:bg-slate-50 rounded-lg px-3 py-2.5 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_KONSULTASI}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center items-center gap-2 px-4 py-3 rounded-full bg-[#4338CA] text-white text-sm font-semibold hover:bg-[#3730A3] transition-colors duration-200 cursor-pointer"
            >
              <MessageCircle size={16} />
              Konsultasi Gratis
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
