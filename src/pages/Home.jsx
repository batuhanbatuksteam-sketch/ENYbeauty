import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import PageWrapper from '../components/ui/PageWrapper'
import FadeUp from '../components/ui/FadeUp'

const featuredProducts = [
  {
    name: 'Gül Özü El Kremi',
    desc: 'Doğal gül yağı ile zenginleştirilmiş, eller için yoğun nem desteği.',
    img: '/ürün görselleri/el kremi.png',
    tag: 'Çok Satan',
  },
  {
    name: 'Velvet Vücut Kremi',
    desc: 'Shea yağı ve lavanta ekstraktı ile kadifemsi, uzun süreli nemlendirme.',
    img: '/ürün görselleri/vücut kremi.png',
    tag: 'Yeni',
  },
  {
    name: 'Saten Parfüm',
    desc: 'Beyaz çiçekler ve misk notaları ile benzersiz, zarif bir koku deneyimi.',
    img: '/ürün görselleri/parfüm.png',
    tag: 'Özel Koleksiyon',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacityHero = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <PageWrapper>
      <main>
        {/* ── HERO BANNER ── */}
        <section ref={heroRef} className="relative w-full overflow-hidden" style={{ minHeight: '100svh' }}>
          {/* Desktop banner */}
          <motion.div
            style={{ y: yParallax }}
            className="absolute inset-0 hidden md:block"
          >
            <picture>
              <source media="(min-width: 768px)" srcSet="/banner masaüstü .jpg" />
              <img
                src="/banner masaüstü .jpg"
                alt="ENY Beauty – Premium Kozmetik"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-charcoal/20 to-transparent" />
          </motion.div>

          {/* Mobile banner */}
          <div className="absolute inset-0 block md:hidden">
            <img
              src="/mobil banner.jpeg"
              alt="ENY Beauty – Premium Kozmetik"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/10 to-transparent" />
          </div>

          {/* Hero Content */}
          <motion.div
            style={{ opacity: opacityHero }}
            className="relative z-10 flex flex-col h-screen"
          >
            {/* Desktop: left-aligned */}
            <div className="hidden md:flex flex-col justify-center h-full container-custom">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="max-w-xl"
              >
                <p className="font-body text-xs tracking-[0.4em] uppercase text-ivory/80 mb-5">
                  Premium Kozmetik
                </p>
                <h1 className="heading-xl text-ivory mb-6 leading-none">
                  Güzellik<br />
                  <span className="italic text-rose">Senden</span><br />
                  İlham Alır
                </h1>
                <p className="font-body text-base text-ivory/80 leading-relaxed mb-10 max-w-sm">
                  Doğanın gücü ve bilimin zarifliğiyle harmanlanmış ürünler. Cildini hak ettiği şekilde özen göster.
                </p>
                <div className="flex gap-4">
                  <Link to="/urunlerimiz" className="btn-primary">
                    Koleksiyonu Keşfet
                  </Link>
                  <Link to="/hakkimizda" className="btn-outline border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal">
                    Hikayemiz
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Mobile: top-aligned */}
            <div className="flex md:hidden flex-col items-start justify-start pt-28 px-6">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="font-body text-xs tracking-[0.4em] uppercase text-ivory/80 mb-4">
                  Premium Kozmetik
                </p>
                <h1 className="font-display text-5xl font-light text-ivory leading-none mb-5">
                  Güzellik<br />
                  <span className="italic text-rose">Senden</span><br />
                  İlham Alır
                </h1>
                <Link to="/urunlerimiz" className="btn-primary text-xs py-3 px-6">
                  Koleksiyonu Keşfet
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          >
            <span className="font-body text-xs text-ivory/50 tracking-widest uppercase">Keşfet</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-ivory/50 to-transparent"
            />
          </motion.div>
        </section>

        {/* ── PHILOSOPHY STRIP ── */}
        <section className="bg-charcoal py-6 overflow-hidden">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-16">
                <span className="font-display italic text-rose/80 text-xl">Doğal</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose/40" />
                <span className="font-body text-xs tracking-widest uppercase text-ivory/40">Cruelty Free</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose/40" />
                <span className="font-display italic text-rose/80 text-xl">Sürdürülebilir</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose/40" />
                <span className="font-body text-xs tracking-widest uppercase text-ivory/40">Vegan Formül</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose/40" />
                <span className="font-display italic text-rose/80 text-xl">Lüks Bakım</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose/40" />
                <span className="font-body text-xs tracking-widest uppercase text-ivory/40">Premium</span>
                <span className="w-1.5 h-1.5 rounded-full bg-rose/40" />
              </span>
            ))}
          </motion.div>
        </section>

        {/* ── FEATURED PRODUCTS ── */}
        <section className="section-padding bg-petal">
          <div className="container-custom">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-4">Öne Çıkanlar</p>
                <h2 className="heading-lg text-charcoal">Seçkin Koleksiyon</h2>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {featuredProducts.map((p, i) => (
                <FadeUp key={p.name} delay={i * 0.12}>
                  <article className="group cursor-pointer flex flex-col text-center">
                    <div className="relative overflow-visible mb-6">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-72 md:h-96 object-contain transition-transform duration-700 scale-[1.4] group-hover:scale-[1.5]"
                      />
                      <span className="absolute top-0 left-4 bg-white/50 backdrop-blur-md px-3 py-1 text-xs font-body tracking-widest uppercase text-rose-deep rounded-full">
                        {p.tag}
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="font-display text-xl text-charcoal mb-2 group-hover:text-rose-deep transition-colors duration-300">{p.name}</h3>
                      <p className="font-body text-sm text-warm-gray leading-relaxed mb-4">{p.desc}</p>
                      <p className="font-body text-xs italic text-rose">🌿 Hayvanlar üzerinde test edilmemiştir.</p>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.4}>
              <div className="text-center mt-14">
                <Link to="/urunlerimiz" className="btn-outline">
                  Tüm Ürünleri Gör
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── BRAND PHILOSOPHY ── */}
        <section className="section-padding bg-charcoal relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blush rounded-full blur-3xl" />
          </div>
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <FadeUp>
                <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-6">Felsefemiz</p>
                <h2 className="font-display text-4xl md:text-6xl font-light text-ivory leading-tight mb-8">
                  "Gerçek güzellik,<br />
                  <span className="italic text-rose">özenle</span> başlar."
                </h2>
                <p className="font-body text-base text-ivory/60 leading-relaxed max-w-xl mx-auto mb-10">
                  ENY Beauty olarak her formülü; doğaya saygı, bilime bağlılık ve estetik mükemmellik ilkeleriyle geliştiriyoruz. Çünkü cildini sevmek, geleceği sevmektir.
                </p>
                <Link to="/hakkimizda" className="btn-outline border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal">
                  Daha Fazla
                </Link>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── SUSTAINABILITY CTA ── */}
        <section className="section-padding bg-petal">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <FadeUp>
                <div>
                  <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-4">🌿 Sürdürülebilirlik</p>
                  <h2 className="heading-lg text-charcoal mb-6">
                    Gezegen için<br />
                    <span className="italic text-rose-deep">Sorumlu</span> Güzellik
                  </h2>
                  <p className="font-body text-base text-warm-gray leading-relaxed mb-8">
                    Ambalajlarımızdan üretim süreçlerimize kadar her adımda gezegenimize olan borcumuzu ödüyoruz. Sıfır atık hedefi, yenilenebilir enerji ve etik tedarik zinciriyle güzelliği sürdürülebilir kılıyoruz.
                  </p>
                  <Link to="/surdurulebilirlik" className="btn-primary">
                    Yaklaşımımız
                  </Link>
                </div>
              </FadeUp>
              <FadeUp delay={0.15}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: '♻️', title: 'Sıfır Atık', desc: 'Geri dönüştürülebilir ambalajlar' },
                    { icon: '☀️', title: 'Yenilenebilir Enerji', desc: 'Güneş enerjisi destekli üretim' },
                    { icon: '🐰', title: 'Cruelty Free', desc: 'Hiçbir hayvan testi yapılmaz' },
                    { icon: '🌱', title: 'Vegan Formül', desc: 'Hayvansal içerik kullanılmaz' },
                  ].map((item) => (
                    <div key={item.title} className="glass-card p-5 rounded-sm">
                      <span className="text-2xl mb-3 block">{item.icon}</span>
                      <h3 className="font-display text-lg text-charcoal mb-1">{item.title}</h3>
                      <p className="font-body text-xs text-warm-gray">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
