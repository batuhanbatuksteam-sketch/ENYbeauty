import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/ui/PageWrapper'
import FadeUp from '../components/ui/FadeUp'

const allProducts = [
  {
    name: 'Gül Özü El Kremi',
    category: 'Vücut Bakımı',
    desc: 'Doğal gül yağı ve E vitamini ile zenginleştirilmiş bu el kremi, gün boyu yoğun nem desteği sağlayarak ellerin pürüzsüz ve bakımlı görünmesine yardımcı olur.',
    img: '/ürün görselleri/el kremi.png',
    tag: 'Çok Satan',
  },
  {
    name: 'Velvet Vücut Kremi',
    category: 'Vücut Bakımı',
    desc: 'Shea yağı, lavanta ve papatya ekstraktlarıyla hazırlanan bu kadifemsi formül, cildi derinlemesine besler ve uzun süreli yumuşaklık hissi verir.',
    img: '/ürün görselleri/vücut kremi.png',
    tag: 'Yeni',
  },
  {
    name: 'Saten Parfüm',
    category: 'Koku',
    desc: 'Beyaz çiçekler, bergamot ve misk notalarının zarif dansıyla oluşturulan bu oryantal parfüm, özgün ve unutulmaz bir koku imzası bırakır.',
    img: '/ürün görselleri/parfüm.png',
    tag: 'Özel Koleksiyon',
  },
  {
    name: 'Blossom Vücut Spreyi',
    category: 'Koku',
    desc: 'Taze çiçek notaları ve hafif meyve esanslarıyla hazırlanan bu vücut spreyi, gün boyu ferahlık ve zarafet sunar.',
    img: '/ürün görselleri/vücut spreyi.png',
    tag: '',
  },
  {
    name: 'Aqua Duş Jeli',
    category: 'Duş',
    desc: 'Aloe vera ve deniz mineralleriyle güçlendirilmiş bu kremsi duş jeli, cildi temizlerken nemini korur ve ipeksi bir his bırakır.',
    img: '/ürün görselleri/duj jeli.png',
    tag: 'Favori',
  },
  {
    name: 'Altın Peeling',
    category: 'Peeling',
    desc: 'Argan yağı ve ince şeker kristalleriyle hazırlanan bu lüks peeling, ölü deri hücrelerini nazikçe uzaklaştırarak cildi parlatır ve yeniler.',
    img: '/ürün görselleri/peeling.png',
    tag: 'Lüks',
  },
  {
    name: 'Silk Şampuan',
    category: 'Saç Bakımı',
    desc: 'Keratin, argan yağı ve ipek proteini içeren bu formül, saçı derinlemesine onarır, parlaklık ve yumuşaklık kazandırırken sağlıklı bir görünüm sağlar.',
    img: '/ürün görselleri/şampuan.png',
    tag: '',
  },
  {
    name: 'Repair Saç Kremi',
    category: 'Saç Bakımı',
    desc: 'Yoğun onarıcı formülüyle saç liflerini güçlendiren bu saç kremi, kırılmayı önler ve her yıkamada saçı sağlıklı, dolgun ve parlak gösterir.',
    img: '/ürün görselleri/saç kremi.png',
    tag: 'Yeni',
  },
  {
    name: 'Cotton Deodorant',
    category: 'Deodorant',
    desc: 'Alkol içermeyen, 48 saat etkili bu formül, cildi tahriş etmeden tüm gün koruyor. Pamuk çiçeği ve sedir notalarıyla ferah ve nötr bir koku sunuyor.',
    img: '/ürün görselleri/deodorant.png',
    tag: 'Cruelty Free',
  },
]

const categories = ['Tümü', ...Array.from(new Set(allProducts.map(p => p.category)))]

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Tümü')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'Tümü'
    ? allProducts
    : allProducts.filter(p => p.category === activeCategory)

  return (
    <PageWrapper>
      <main>
        {/* Page Header */}
        <section className="bg-charcoal pt-36 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-rose rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          </div>
          <div className="container-custom relative z-10">
            <FadeUp>
              <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-4">Koleksiyon</p>
              <h1 className="heading-xl text-ivory">Ürünlerimiz</h1>
            </FadeUp>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-blush/40 border-b border-blush sticky top-20 md:top-24 z-30 backdrop-blur-md">
          <div className="container-custom">
            <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2 font-body text-xs tracking-widest uppercase transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-charcoal text-ivory'
                      : 'bg-white/60 text-charcoal hover:bg-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-petal">
          <div className="container-custom">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((product, i) => (
                  <motion.article
                    key={product.name}
                    layout
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, delay: i * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="group flex flex-col"
                  >
                    {/* Image */}
                    <div
                      className="relative overflow-visible cursor-zoom-in mb-6"
                      onClick={() => setLightbox(product)}
                    >
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-72 md:h-96 object-contain transition-transform duration-700 scale-[1.4] group-hover:scale-[1.5]"
                      />
                      {product.tag && (
                        <span className="absolute top-0 left-4 bg-white/50 backdrop-blur-md px-3 py-1 text-[10px] font-body tracking-widest uppercase text-rose-deep rounded-full">
                          {product.tag}
                        </span>
                      )}
                      <div className="absolute bottom-0 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-white/80 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-charcoal text-lg">
                          ↗
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="px-4 text-center">
                      <p className="font-body text-[10px] tracking-widest uppercase text-rose mb-1">{product.category}</p>
                      <h3 className="font-display text-xl text-charcoal mb-2 group-hover:text-rose-deep transition-colors duration-300">{product.name}</h3>
                      <p className="font-body text-sm text-warm-gray leading-relaxed mb-4">{product.desc}</p>
                      <p className="font-body text-xs italic text-rose/80">🌿 Hayvanlar üzerinde test edilmemiştir.</p>
                    </div>
                  </motion.article>
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
              className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-md p-4"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 280 }}
                className="bg-ivory max-w-lg w-full overflow-hidden flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full md:w-1/2 bg-blush/40 flex items-center justify-center p-8">
                  <img src={lightbox.img} alt={lightbox.name} className="w-full object-contain max-h-72" />
                </div>
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                  <p className="font-body text-[10px] tracking-widest uppercase text-rose mb-2">{lightbox.category}</p>
                  <h2 className="font-display text-2xl text-charcoal mb-4">{lightbox.name}</h2>
                  <p className="font-body text-sm text-warm-gray leading-relaxed mb-6">{lightbox.desc}</p>
                  <p className="font-body text-xs italic text-rose">🌿 Hayvanlar üzerinde test edilmemiştir.</p>
                  <button
                    onClick={() => setLightbox(null)}
                    className="mt-8 self-start font-body text-xs text-warm-gray hover:text-charcoal tracking-widest uppercase transition-colors"
                  >
                    × Kapat
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </PageWrapper>
  )
}
