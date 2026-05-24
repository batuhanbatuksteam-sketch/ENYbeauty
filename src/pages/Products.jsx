import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeUp, PageTransition } from '../components/ui/animations'

const products = [
  {
    id: 1,
    name: 'Parfüm',
    slug: 'parfum',
    category: 'Koku',
    desc: 'Çiçeksi ve odunsu notaların mükemmel uyumu. Vanilya, gül ve sandal ağacı kalbinden gelen bu özel formül, cildinizde saatler boyunca zarif bir iz bırakır. Kalıcılığı ile benzersiz, duruşuyla ayırt edici.',
    img: '/ürün görselleri/parfüm.png',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'El Kremi',
    slug: 'el-kremi',
    category: 'Bakım',
    desc: 'Shea yağı ve organik gül suyu zenginliğiyle formüle edilen el kremi, elleri derinlemesine besler ve nem dengesini uzun süre korur. Her kullanımda ipek gibi bir his sunar.',
    img: '/ürün görselleri/el kremi.png',
    tag: 'Yeni',
  },
  {
    id: 3,
    name: 'Vücut Kremi',
    slug: 'vucut-kremi',
    category: 'Bakım',
    desc: 'Hyalüronik asit ve peptid kompleksiyle cildi 48 saat boyunca nemlendirir. Hafif ve hızlı emilen dokusuyla günlük kullanıma uygun, lüks bir deneyim sunar.',
    img: '/ürün görselleri/vücut kremi.png',
    tag: 'Favori',
  },
  {
    id: 4,
    name: 'Vücut Spreyi',
    slug: 'vucut-spreyi',
    category: 'Koku',
    desc: 'Hafif ve ferahlatıcı formülüyle gün içinde tazelik sunan vücut spreyi. Doğal botanik özleriyle zenginleştirilmiş, cildi nemlendiren ve hoş bir koku bırakan çok amaçlı bir bakım ürünü.',
    img: '/ürün görselleri/vücut spreyi.png',
    tag: null,
  },
  {
    id: 5,
    name: 'Şampuan',
    slug: 'sampuan',
    category: 'Saç',
    desc: 'Keratin ve argan yağı kompleksiyle saçı besleyen, parlatıcı etkili şampuan. Sülfatsız formülüyle boyalı saçlara özel, skalp dengesini koruyan ve saçı canlı tutan etkin bir bakım formülü.',
    img: '/ürün görselleri/şampuan.png',
    tag: null,
  },
  {
    id: 6,
    name: 'Saç Kremi',
    slug: 'sac-kremi',
    category: 'Saç',
    desc: 'Derin nemlendirici saç kremi, her saç tipine uygun besleyici formülüyle saçı güçlendirir, pürüzsüzleştirir ve yoğun parlaklık katar. Biotin ve provitamin B5 içerir.',
    img: '/ürün görselleri/saç kremi.png',
    tag: null,
  },
  {
    id: 7,
    name: 'Duş Jeli',
    slug: 'dus-jeli',
    category: 'Vücut',
    desc: 'Aloe vera ve organik lavanta özleriyle zenginleştirilmiş duş jeli. Cildi tahriş etmeyen nazik formülü, duş sonrasında taze ve nemli bir his bırakır. Dermatolog tarafından test edilmiştir.',
    img: '/ürün görselleri/duj jeli.png',
    tag: null,
  },
  {
    id: 8,
    name: 'Peeling',
    slug: 'peeling',
    category: 'Vücut',
    desc: 'Nar ekstresi ve deniz tuzu içeren lüks vücut peelingi. Ölü cilt hücrelerini nazikçe uzaklaştırırken cildi derinlemesine nemlendiren çift etkili premium formül.',
    img: '/ürün görselleri/peeling.png',
    tag: 'Özel',
  },
  {
    id: 9,
    name: 'Deodorant',
    slug: 'deodorant',
    category: 'Vücut',
    desc: 'Alüminyum tuzları içermeyen, %48 saatlik koruma sunan doğal deodorant. Cilt dostu probiyotik formülüyle hassas ciltlere uygun, gün içinde taze ve güvende hissettiren bakım.',
    img: '/ürün görselleri/deodorant.png',
    tag: null,
  },
]

const categories = ['Tümü', 'Koku', 'Bakım', 'Saç', 'Vücut']

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Tümü')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'Tümü'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <PageTransition>
      <main>
        {/* ── PAGE HEADER ── */}
        <section className="pt-32 pb-16 bg-ivory text-center">
          <FadeUp>
            <div className="petal-divider max-w-xs mx-auto mb-5">
              <span className="font-sans text-xs tracking-[0.22em] uppercase text-mink">Koleksiyon</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl text-[#2d1a22] mb-4">Ürünlerimiz</h1>
            <p className="font-sans text-base text-[#6b4455] max-w-xl mx-auto leading-relaxed">
              Her ürün, cilt bilimi ve doğal güzellik felsefesinin mükemmel birlikteliğiyle tasarlandı.
            </p>
          </FadeUp>

          {/* Category filter */}
          <FadeUp delay={0.2} className="mt-10 flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(' ', '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-rose text-white shadow-rose'
                    : 'bg-white border border-blush/40 text-[#6b4455] hover:border-rose/50 hover:text-roseDeep'
                }`}
              >
                {cat}
              </button>
            ))}
          </FadeUp>
        </section>

        {/* ── PRODUCT GRID ── */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((prod, i) => (
                  <motion.div
                    key={prod.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <article className="product-card group flex flex-col h-full">
                      {/* Image */}
                      <div
                        className="relative overflow-hidden aspect-square bg-cream cursor-zoom-in"
                        onClick={() => setLightbox(prod)}
                      >
                        {prod.tag && (
                          <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-rose/90 text-white font-sans text-xs font-medium">
                            {prod.tag}
                          </span>
                        )}
                        <img
                          src={prod.img}
                          alt={prod.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-rose/0 group-hover:bg-rose/5 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-5 h-5 text-roseDeep" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"/>
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-6 gap-3">
                        <span className="font-sans text-xs tracking-[0.18em] uppercase text-mink">{prod.category}</span>
                        <h2 className="font-display text-xl text-[#2d1a22]">{prod.name}</h2>
                        <p className="font-sans text-sm text-[#6b4455] leading-relaxed flex-1">{prod.desc}</p>
                        {/* Vegan badge */}
                        <p className="vegan-badge mt-1 pt-3 border-t border-blush/20">
                          🌿 Hayvanlar üzerinde test edilmemiştir.
                        </p>
                      </div>
                    </article>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox-overlay"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 260 }}
                className="relative max-w-lg w-full mx-4 bg-white rounded-3xl overflow-hidden shadow-rose-lg"
                onClick={e => e.stopPropagation()}
              >
                <img src={lightbox.img} alt={lightbox.name} className="w-full aspect-square object-cover" />
                <div className="p-6">
                  <h3 className="font-display text-2xl text-[#2d1a22] mb-2">{lightbox.name}</h3>
                  <p className="font-sans text-sm text-[#6b4455] leading-relaxed mb-4">{lightbox.desc}</p>
                  <p className="vegan-badge">🌿 Hayvanlar üzerinde test edilmemiştir.</p>
                </div>
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[#2d1a22] hover:bg-white transition-colors shadow-soft"
                  aria-label="Kapat"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageTransition>
  )
}
