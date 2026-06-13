import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Harga', href: '#harga' },
  { label: 'Cara Kerja', href: '#cara-kerja' },
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
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center cursor-pointer">
            <img
              src="/logos/onlinein-01-utama-512.png"
              alt="Onlinein"
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi utama">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#1E1B4B]/70 hover:text-[#4338CA] transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Onlinein%2C%20saya%20mau%20konsultasi%20gratis"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-[#4338CA] text-white text-sm font-semibold hover:bg-[#3730A3] transition-colors duration-200 cursor-pointer"
          >
            Konsultasi Gratis
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-[#1E1B4B] hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[#1E1B4B]/80 hover:text-[#4338CA] py-2 transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890?text=Halo%20Onlinein%2C%20saya%20mau%20konsultasi%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center items-center px-4 py-2.5 rounded-lg bg-[#4338CA] text-white text-sm font-semibold hover:bg-[#3730A3] transition-colors duration-200 cursor-pointer"
            >
              Konsultasi Gratis
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
