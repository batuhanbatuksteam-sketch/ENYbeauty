import { Link } from 'react-router-dom'

const links = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Ürünlerimiz', to: '/urunlerimiz' },
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Sürdürülebilirlik', to: '/surdurulebilirlik' },
]

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      {/* Top Section */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-rose-gradient rounded-full flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none">
                  <path d="M20 8 C14 12 12 18 16 22 C20 26 26 24 28 18 C30 12 26 6 20 8Z" fill="white" fillOpacity="0.9" />
                </svg>
              </div>
              <div>
                <span className="font-display text-xl tracking-widest text-ivory">ENY Beauty</span>
              </div>
            </div>
            <p className="font-body text-sm text-ivory/60 leading-relaxed max-w-xs">
              Doğanın en saf özleriyle buluşan lüks bakım deneyimi. Her damla, her koku — senin için.
            </p>
            <div className="flex gap-4 mt-8">
              {['instagram', 'tiktok', 'pinterest'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full border border-ivory/20 flex items-center justify-center text-ivory/50 hover:border-rose hover:text-rose transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    {s === 'instagram' ? (
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    ) : s === 'tiktok' ? (
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.15 8.15 0 004.77 1.52V6.77a4.85 4.85 0 01-1-.08z" />
                    ) : (
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-ivory/40 mb-6">Keşfet</p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="font-body text-sm text-ivory/70 hover:text-rose transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-ivory/40 mb-6">Bülten</p>
            <p className="font-body text-sm text-ivory/60 leading-relaxed mb-6">
              Yeni ürünler ve kampanyalardan ilk haberdar ol.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="E-posta adresin"
                className="flex-1 bg-white/10 border border-ivory/20 text-ivory placeholder-ivory/30 px-4 py-3 text-sm font-body focus:outline-none focus:border-rose transition-colors duration-300"
              />
              <button
                type="submit"
                className="bg-rose-gradient px-5 py-3 text-white text-sm hover:opacity-90 transition-opacity duration-300"
              >
                →
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ivory/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-ivory/30">
            © {new Date().getFullYear()} ENY Beauty. Tüm hakları saklıdır.
          </p>
          <p className="font-body text-xs text-rose/60 italic">
            🌿 Hiçbir ürünümüz hayvanlar üzerinde test edilmemiştir.
          </p>
        </div>
      </div>
    </footer>
  )
}
