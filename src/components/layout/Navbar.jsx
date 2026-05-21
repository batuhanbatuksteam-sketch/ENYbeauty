import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Ürünlerimiz', to: '/urunlerimiz' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Sürdürülebilirlik', to: '/surdurulebilirlik' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-md shadow-sm shadow-rose/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex flex-col items-center group">
              <img
                src="/logo üst kısım.png"
                alt="ENY Beauty Logo"
                className="h-16 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              />
              <span
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '16px',
                  letterSpacing: '0.38em',
                  color: '#ffa4c4',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  marginTop: '-14px',
                }}
              >
                beauty
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link group ${location.pathname === link.to ? 'text-rose-deep' : ''}`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-rose-deep transition-all duration-300 ${
                      location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-6">
              <Link
                to="/urunlerimiz"
                className="hidden lg:inline-flex btn-primary text-xs py-2.5 px-6"
              >
                Keşfet
              </Link>
              <button
                onClick={() => setDrawerOpen(true)}
                aria-label="Menüyü aç"
                className="lg:hidden flex flex-col gap-1.5 p-2 group"
              >
                <span className="block w-6 h-px bg-charcoal group-hover:bg-rose-deep transition-colors duration-300" />
                <span className="block w-4 h-px bg-charcoal group-hover:bg-rose-deep transition-colors duration-300" />
                <span className="block w-5 h-px bg-charcoal group-hover:bg-rose-deep transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-charcoal/40 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 250 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-ivory shadow-2xl flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-8 h-20 border-b border-blush">
                <div className="flex flex-col items-start">
                  <img src="/logo üst kısım.png" alt="ENY Beauty" className="h-12 w-auto object-contain" />
                  <span style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '13px', letterSpacing: '0.38em', color: '#ffa4c4', textTransform: 'uppercase', lineHeight: 1, marginTop: '-10px' }}>beauty</span>
                </div>
                <button
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Menüyü kapat"
                  className="p-2 text-charcoal hover:text-rose-deep transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col px-8 pt-10 gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.4 }}
                  >
                    <Link
                      to={link.to}
                      className={`block font-display text-3xl font-light py-3 border-b border-blush/60 transition-colors duration-200 ${
                        location.pathname === link.to ? 'text-rose-deep' : 'text-charcoal hover:text-rose-deep'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="px-8 pb-12">
                <p className="font-body text-xs text-warm-gray tracking-widest uppercase mb-4">Premium Kozmetik</p>
                <div className="flex gap-4">
                  {['instagram', 'tiktok'].map((s) => (
                    <a key={s} href="#" className="w-9 h-9 rounded-full border border-blush flex items-center justify-center text-warm-gray hover:border-rose hover:text-rose-deep transition-all duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        {s === 'instagram' ? (
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        ) : (
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.77a4.85 4.85 0 01-1-.08z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
