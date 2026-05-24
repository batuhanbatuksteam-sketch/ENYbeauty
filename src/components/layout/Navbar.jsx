import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { to: '/',                  label: 'Anasayfa'               },
  { to: '/urunlerimiz',       label: 'Ürünlerimiz'            },
  { to: '/hakkimizda',        label: 'Hakkımızda'             },
  { to: '/surdurulebilirlik', label: 'Sürdürülebilirlik'      },
]

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-soft border-b border-rose/15'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="ENY Beauty Ana Sayfa">
              <img
                src="/logo.png"
                alt="ENY Beauty Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Ana Navigasyon">
              {links.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`nav-link font-sans text-sm font-medium tracking-wide transition-colors duration-300 ${
                    pathname === to
                      ? 'text-roseDeep active'
                      : scrolled ? 'text-[#2d1a22] hover:text-roseDeep' : 'text-[#2d1a22] hover:text-roseDeep'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Mobile burger */}
            <button
              id="mobile-menu-btn"
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1.5 p-2 z-50"
              aria-label="Menüyü Aç/Kapat"
              aria-expanded={open}
            >
              <span className={`block h-0.5 w-6 rounded transition-all duration-300 ${open ? 'bg-rose rotate-45 translate-y-2' : 'bg-[#2d1a22]'}`} />
              <span className={`block h-0.5 w-6 rounded transition-all duration-300 bg-[#2d1a22] ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-6 rounded transition-all duration-300 ${open ? 'bg-rose -rotate-45 -translate-y-2' : 'bg-[#2d1a22]'}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 md:hidden"
            style={{ background: 'linear-gradient(145deg, #fff8f8 0%, #fdecec 50%, #ffd7e0 100%)' }}
          >
            {/* Decorative circles */}
            <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-rose/10 blur-2xl pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-blush/30 blur-2xl pointer-events-none" />

            {/* Close btn */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-rose/30 flex items-center justify-center text-mink hover:bg-rose/10 transition-colors"
              aria-label="Kapat"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            {/* Logo in drawer */}
            <img src="/logo.png" alt="ENY Beauty" className="h-12 w-auto object-contain" />

            {/* Links */}
            {links.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={to}
                  className={`font-display text-4xl font-medium tracking-wide ${
                    pathname === to ? 'text-roseDeep' : 'text-[#2d1a22] hover:text-roseDeep'
                  } transition-colors duration-300`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            {/* Brand tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: links.length * 0.07 + 0.1 }}
              className="font-sans text-xs text-mink tracking-[0.25em] uppercase"
            >
              Premium Kozmetik · Vegan · Lüks
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
