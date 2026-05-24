import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FadeUp, PageTransition } from '../components/ui/animations'

const galleryImages = [
  { src: '/products/parfum.png',       alt: 'ENY Beauty Parfüm'      },
  { src: '/products/vucut-kremi.png',   alt: 'ENY Beauty Vücut Kremi' },
  { src: '/products/el-kremi.png',      alt: 'ENY Beauty El Kremi'    },
  { src: '/products/sampuan.png',       alt: 'ENY Beauty Şampuan'     },
  { src: '/products/peeling.png',       alt: 'ENY Beauty Peeling'     },
  { src: '/products/sac-kremi.png',     alt: 'ENY Beauty Saç Kremi'   },
  { src: '/products/deodorant.png',     alt: 'ENY Beauty Deodorant'   },
  { src: '/products/dus-jeli.png',      alt: 'ENY Beauty Duş Jeli'    },
  { src: '/products/vucut-spreyi.png',  alt: 'ENY Beauty Vücut Spreyi'},
]

const values = [
  { title: 'Özgünlük', desc: 'Her formül, gerçek ihtiyaçlardan doğar. Klişe değil, özgün güzellik anlayışı.' },
  { title: 'Şeffaflık', desc: 'İçeriklerimizden üretim süreçlerimize kadar her aşamada açık ve dürüstüz.' },
  { title: 'Zarafet', desc: 'Minimalist tasarım diliyle, abartısız ama etkili. Her dokunuşta bir deneyim.' },
  { title: 'Sorumluluk', desc: 'Gezegenimize, hayvanlarımıza ve insanlığa karşı derin bir sorumluluk hissediyoruz.' },
]

export default function About() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <PageTransition>
      <main>
        {/* ── HERO ── */}
        <section className="pt-32 pb-20 bg-ivory text-center">
          <FadeUp>
            <div className="petal-divider max-w-xs mx-auto mb-5">
              <span className="font-sans text-xs tracking-[0.22em] uppercase text-mink">Kimiz?</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl text-[#2d1a22] mb-5">Hakkımızda</h1>
            <p className="font-sans text-base text-[#6b4455] max-w-2xl mx-auto leading-relaxed">
              ENY Beauty; güzelliği bir standart değil, bir his olarak tanımlar. Her ürünümüz bu felsefeyle hayat bulur.
            </p>
          </FadeUp>
        </section>

        {/* ── BRAND STORY ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

              <FadeUp delay={0}>
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card-lg">
                  <img src="/products/parfum.png" alt="ENY Beauty Marka Hikayesi" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a10]/30 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl px-6 py-4 shadow-rose border border-blush/30 animate-float">
                  <p className="font-sans text-xs text-mink uppercase tracking-widest mb-0.5">Kuruluş</p>
                  <p className="font-display text-lg text-[#2d1a22]">ENY Beauty</p>
                </div>
              </FadeUp>

              <div className="flex flex-col gap-6">
                <FadeUp delay={0.1}>
                  <div className="petal-divider max-w-xs">
                    <span className="font-sans text-xs tracking-[0.22em] uppercase text-mink">Hikayemiz</span>
                  </div>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <h2 className="font-display text-4xl sm:text-5xl text-[#2d1a22] leading-tight">
                    Güzelliğin <br />
                    <span className="text-roseDeep italic">Yeni Tanımı</span>
                  </h2>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <p className="font-sans text-base text-[#6b4455] leading-relaxed">
                    ENY Beauty, güzelliğin herkes için erişilebilir, samimi ve dönüştürücü olabileceği inancıyla kuruldu. Lüks kozmetiği demokratikleştirme vizyonuyla yola çıktık; bugün ise her formülümüz, bu vizyonun somut bir yansıması.
                  </p>
                </FadeUp>
                <FadeUp delay={0.4}>
                  <p className="font-sans text-base text-[#6b4455] leading-relaxed">
                    Vegan içerikler, sürdürülebilir ambalajlar ve şeffaf üretim süreçleriyle hazırlanan her ürün; cildinize, ruhunuza ve gezegenimize saygının bir ifadesidir. Çünkü biz, güzelliğin asla bir bedele mal olmaması gerektiğine inanıyoruz — ne cildimize, ne doğamıza, ne de vicdanımıza.
                  </p>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOUNDER VISION ── */}
        <section className="py-24 bg-ivory">
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
            <FadeUp>
              <div className="petal-divider max-w-xs mx-auto mb-8">
                <span className="font-sans text-xs tracking-[0.22em] uppercase text-mink">Kurucu Vizyonu</span>
              </div>
              <blockquote className="font-script text-3xl sm:text-4xl text-[#2d1a22] leading-relaxed italic mb-8">
                "Doğa bize mükemmel formülleri zaten sunuyor. Bizim görevimiz, bu güzelliği saygıyla işleyip sizlere ulaştırmak."
              </blockquote>
              <p className="font-sans text-sm text-mink tracking-wide">— ENY Beauty, Kurucu Ekibi</p>
            </FadeUp>
          </div>
        </section>

        {/* ── VALUES GRID ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <FadeUp className="text-center mb-14">
              <h2 className="font-display text-4xl text-[#2d1a22] mb-3">Değerlerimiz</h2>
              <p className="font-sans text-sm text-[#6b4455] max-w-md mx-auto">Her kararımızın, her formülümüzün arkasında duran ilkeler.</p>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <FadeUp key={i} delay={i * 0.1}
                  className="p-8 rounded-2xl bg-cream border border-blush/30 hover:border-rose/40 hover:shadow-card transition-all duration-400 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-blush/50 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-lg text-roseDeep font-semibold">{(i + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-display text-lg text-[#2d1a22] mb-3">{v.title}</h3>
                  <p className="font-sans text-sm text-[#6b4455] leading-relaxed">{v.desc}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── MASONRY GALLERY ── */}
        <section className="py-24 bg-ivory">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <FadeUp className="text-center mb-12">
              <div className="petal-divider max-w-xs mx-auto mb-5">
                <span className="font-sans text-xs tracking-[0.22em] uppercase text-mink">Koleksiyon</span>
              </div>
              <h2 className="font-display text-4xl text-[#2d1a22]">Ürün Galerisi</h2>
            </FadeUp>
            <div className="masonry">
              {galleryImages.map((img, i) => (
                <FadeUp key={i} delay={i * 0.06}>
                  <div
                    className="gallery-card"
                    onClick={() => setLightbox(img)}
                  >
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </div>
                </FadeUp>
              ))}
            </div>
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
                transition={{ type: 'spring', damping: 26, stiffness: 260 }}
                className="relative max-w-2xl w-full mx-4"
                onClick={e => e.stopPropagation()}
              >
                <img src={lightbox.src} alt={lightbox.alt} className="w-full rounded-3xl object-contain max-h-[85vh]" />
                <button
                  onClick={() => setLightbox(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#2d1a22] hover:bg-white transition-colors shadow-soft"
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
