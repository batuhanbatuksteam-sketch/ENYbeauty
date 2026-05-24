import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeUp, PageTransition } from '../components/ui/animations'

const featuredProducts = [
  {
    id: 1,
    name: 'Parfüm',
    desc: 'Çiçeksi ve odunsu notaların mükemmel uyumu. Uzun süre kalıcı, ince bir iz bırakan özel formül.',
    img: '/products/parfum.png',
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'El Kremi',
    desc: 'Shea yağı ve gül suyu zenginliğiyle elleri derinlemesine besleyen, ipek gibi bir his.',
    img: '/products/el-kremi.png',
    tag: 'Yeni',
  },
  {
    id: 3,
    name: 'Vücut Kremi',
    desc: 'Hyalüronik asit kompleksiyle cildi 48 saat boyunca nemlendirir. Hafif doku, derin etki.',
    img: '/products/vucut-kremi.png',
    tag: 'Favori',
  },
]

const pillars = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
      </svg>
    ),
    title: 'Vegan Formüller',
    desc: 'Hayvansal içerik içermeyen, tamamen bitkisel kaynaklı bileşenlerle üretilir.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 010 3.282c-1.1.778-2.566.778-3.666 0a3.745 3.745 0 01-3.282 0A3.745 3.745 0 019.75 21c-.778-1.1-.778-2.566 0-3.666a3.745 3.745 0 010-3.282A3.745 3.745 0 0112 9.75c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 013.282 0A3.745 3.745 0 0121 12z"/>
      </svg>
    ),
    title: 'Klinik Onaylı',
    desc: 'Dermatolojik testlerden geçmiş, her cilt tipine uygun, hassas formulasyonlar.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.4" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
      </svg>
    ),
    title: 'Sürdürülebilir',
    desc: 'Geri dönüştürülebilir ambalajlar ve çevre dostu üretim süreçleriyle doğaya saygı.',
  },
]

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <PageTransition>
      <main>
        {/* ── HERO ── */}
        <section ref={heroRef} id="hero" className="relative h-screen min-h-[660px] overflow-hidden">

          {/* Desktop banner */}
          <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
            <picture>
              <source media="(max-width: 767px)" srcSet="/banner-mobile.jpeg" />
              <source media="(min-width: 768px)" srcSet="/banner-desktop.jpg" />
              <img
                src="/banner-desktop.jpg"
                alt="ENY Beauty — Premium Kozmetik"
                className="w-full h-full object-cover object-center"
              />
            </picture>
          </motion.div>

          {/* Gradient overlay – desktop: left side; mobile: top area */}
          <div className="absolute inset-0 hidden md:block bg-hero-gradient" />
          <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/55 via-black/30 to-black/10" />

          {/* Content — desktop: left aligned; mobile: top centered */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="
              relative z-10 h-full
              flex flex-col
              md:items-start md:justify-center md:pl-16 lg:pl-24
              items-start justify-start pt-28 px-4 sm:px-6
            "
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-rose animate-pulse-soft" />
              <span className="font-sans text-xs text-white/90 tracking-[0.2em] uppercase">Premium Kozmetik</span>
            </motion.div>

            {/* Brand name */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
              className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-none mb-3"
            >
              ENY<br />
              <span className="font-script font-light italic text-rose text-5xl sm:text-6xl lg:text-7xl">Beauty</span>
            </motion.h1>

            {/* Thin line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="h-px w-20 bg-rose/60 rounded-full mb-5 origin-left"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="font-sans text-sm text-white/80 tracking-[0.12em] uppercase font-light mb-8 max-w-xs"
            >
              Zarafet · Doğallık · Lüks
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 items-start"
            >
              <Link to="/urunlerimiz" className="btn-primary">
                Koleksiyonu Keşfet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                </svg>
              </Link>
              <Link to="/hakkimizda" className="btn-ghost" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>
                Hakkımızda
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="font-sans text-[10px] text-white/50 tracking-widest uppercase">Keşfet</span>
            <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="w-1 h-1 rounded-full bg-rose/70"
              />
            </div>
          </motion.div>
        </section>

        {/* ── PILLARS STRIP ── */}
        <section className="py-16 bg-white border-y border-rose/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <FadeUp key={i} delay={i * 0.12}
                  className="flex items-start gap-4 p-7 rounded-2xl bg-cream border border-blush/30 hover:border-rose/40 hover:shadow-card transition-all duration-400"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blush/40 flex items-center justify-center text-roseDeep">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#2d1a22] mb-1">{p.title}</h3>
                    <p className="font-sans text-sm text-[#6b4455] leading-relaxed">{p.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PRODUCTS ── */}
        <section className="py-28 bg-ivory">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

            <FadeUp className="text-center mb-16">
              <div className="petal-divider max-w-xs mx-auto mb-6">
                <span className="font-sans text-xs tracking-[0.22em] uppercase text-mink">Öne Çıkan</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-[#2d1a22] mb-4">
                Seçkin Koleksiyon
              </h2>
              <p className="font-sans text-base text-[#6b4455] max-w-xl mx-auto leading-relaxed">
                Her formül, cildinizin ihtiyacına özenle cevap verecek şekilde tasarlandı.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-7">
              {featuredProducts.map((prod, i) => (
                <FadeUp key={prod.id} delay={i * 0.12}>
                  <article className="product-card group flex flex-col h-full">
                    <div className="relative overflow-hidden aspect-square bg-cream">
                      {prod.tag && (
                        <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-rose/90 text-white font-sans text-xs font-medium tracking-wide">
                          {prod.tag}
                        </span>
                      )}
                      <img src={prod.img} alt={prod.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div className="flex flex-col flex-1 p-6 gap-3">
                      <h3 className="font-display text-xl text-[#2d1a22]">{prod.name}</h3>
                      <p className="font-sans text-sm text-[#6b4455] leading-relaxed flex-1">{prod.desc}</p>
                      <p className="vegan-badge mt-2">🌿 Hayvanlar üzerinde test edilmemiştir.</p>
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.4} className="text-center mt-12">
              <Link to="/urunlerimiz" className="btn-ghost" style={{ borderColor: '#ffa4c4', color: '#c4607e' }}>
                Tüm Ürünleri Gör
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                </svg>
              </Link>
            </FadeUp>
          </div>
        </section>

        {/* ── PHILOSOPHY QUOTE ── */}
        <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a10 0%, #2d1020 50%, #1a0a10 100%)' }}>
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img src="/banner-desktop.jpg" alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a10]/90 to-[#2d1020]/80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-rose/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
            <FadeUp>
              <svg className="w-8 h-8 text-rose/50 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <p className="font-display text-3xl sm:text-5xl font-light text-white leading-tight mb-8 italic">
                Güzellik bir his,<br/>
                <span className="rose-text not-italic font-semibold">bir standar değil.</span>
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-12 bg-rose/40" />
                <span className="font-sans text-sm text-rose/60 tracking-[0.2em] uppercase">ENY Beauty</span>
                <div className="h-px w-12 bg-rose/40" />
              </div>
            </FadeUp>
          </div>
        </section>

        {/* ── SUSTAINABILITY TEASER ── */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <FadeUp className="relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card-lg">
                  <img src="/products/vucut-kremi.png" alt="ENY Beauty Sürdürülebilirlik" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a10]/40 via-transparent to-transparent" />
                </div>
                <div className="absolute -bottom-5 -right-4 bg-white rounded-2xl px-6 py-4 shadow-rose border border-blush/40 animate-float">
                  <p className="font-sans text-xs text-mink uppercase tracking-widest mb-0.5">Taahhüdümüz</p>
                  <p className="font-display text-lg text-[#2d1a22]">%100 Vegan</p>
                </div>
              </FadeUp>

              <div className="flex flex-col gap-5">
                <FadeUp delay={0.1}>
                  <div className="petal-divider max-w-xs">
                    <span className="font-sans text-xs tracking-[0.22em] uppercase text-mink">Sürdürülebilirlik</span>
                  </div>
                </FadeUp>
                <FadeUp delay={0.2}>
                  <h2 className="font-display text-4xl sm:text-5xl text-[#2d1a22] leading-tight">
                    Geleceğe<br />
                    <span className="text-roseDeep italic">Saygıyla</span>
                  </h2>
                </FadeUp>
                <FadeUp delay={0.3}>
                  <p className="font-sans text-base text-[#6b4455] leading-relaxed">
                    Gezegenimizin kaynaklarını korumak, toplumun refahını desteklemek ve gelecek nesillere daha yaşanabilir bir dünya bırakmak adına her kararımızı sürdürülebilirlik ilkesiyle alıyoruz.
                  </p>
                </FadeUp>
                <FadeUp delay={0.4}>
                  <Link to="/surdurulebilirlik" className="inline-flex items-center gap-2 font-sans text-sm font-medium text-roseDeep hover:gap-4 transition-all duration-300 group mt-2">
                    Yaklaşımımızı Keşfet
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                    </svg>
                  </Link>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
