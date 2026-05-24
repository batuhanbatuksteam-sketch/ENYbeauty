import { Link } from 'react-router-dom'

const footerLinks = [
  { to: '/',                  label: 'Anasayfa'          },
  { to: '/urunlerimiz',       label: 'Ürünlerimiz'       },
  { to: '/hakkimizda',        label: 'Hakkımızda'        },
  { to: '/surdurulebilirlik', label: 'Sürdürülebilirlik' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #1a0a10 0%, #2d1020 100%)' }}>

      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-rose/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blush/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand col */}
          <div className="md:col-span-1 space-y-5">
            <img src="/logo üst kısım.png" alt="ENY Beauty" className="h-12 w-auto object-contain brightness-0 invert opacity-90" />
            <p className="font-sans text-sm text-white/55 leading-relaxed max-w-xs">
              Doğanın zarafetini lüks kozmetikle buluşturan ENY Beauty. Vegan formüller, sürdürülebilir üretim, kusursuz sonuçlar.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { label: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { label: 'TikTok', icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z' },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-rose hover:border-rose/40 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav col */}
          <div className="space-y-4">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-rose/70 font-medium">Sayfalar</p>
            <nav className="space-y-2" aria-label="Footer Navigasyon">
              {footerLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="block font-sans text-sm text-white/55 hover:text-white transition-colors duration-300"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact col */}
          <div className="space-y-4">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-rose/70 font-medium">İletişim</p>
            <div className="space-y-3">
              <a href="mailto:info@enybeauty.com" className="block font-sans text-sm text-white/55 hover:text-white transition-colors duration-300">
                info@enybeauty.com
              </a>
              <p className="font-sans text-xs text-white/35 leading-relaxed">
                🌿 Tüm ürünlerimiz vegan ve hayvanlar üzerinde test edilmemiştir.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-white/30">© {new Date().getFullYear()} ENY Beauty. Tüm hakları saklıdır.</p>
          <p className="font-script text-sm text-white/20 italic">Beauty is a feeling, not a standard.</p>
        </div>
      </div>
    </footer>
  )
}
