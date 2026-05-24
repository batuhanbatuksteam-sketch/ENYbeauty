import { FadeUp, PageTransition } from '../components/ui/animations'

// Birebir Evyap'tan alınan metinler — rewrite yapılmamıştır
const commitments = [
  'Çevre, sosyal ve yönetişim uygulamalarında sürdürülebilirliği şirket kültürü haline getirmeyi,',
  'Ulusal ve uluslararası mevzuat, sözleşme ve standartlara uymayı,',
  'Üretim tesislerimizde enerji verimliliğini sağlamak amacıyla sürekli iyileştirmeler yapmayı,',
  'Çalışanlarımızı ve iş ortaklarımızı sürdürülebilirlik konularında bilinçlendirmeyi,',
  'Enerji ve su tüketimini izlemeyi, raporlamayı ve tasarruf sağlamak amacıyla önlemler almayı,',
  'Tesislerimizde güneş enerjisi ve diğer yenilenebilir enerji kaynaklarını kullanarak enerji ihtiyacımızı sürdürülebilir şekilde karşılamayı,',
  'Tüm faaliyetlerimizde oluşan çevresel etkileri kaynağında azaltmayı,',
  'Tesislerimizde sıfır atık hedefi doğrultusunda, atıkların yeniden kullanımı ve geri dönüşümü için sistemler oluşturmayı,',
  'İklim değişikliğiyle ilgili küresel risklerle mücadele kapsamında tüm faaliyetlerimizi iyileştirerek karbon emisyonlarını düşürmeyi,',
  'Ürünlerde kullanılan malzemelerin çevre dostu, geri dönüştürülebilir ve düşük karbon ayak izine sahip olmasına özen göstermeyi,',
  'İş ortaklarımızın faaliyetlerini sürdürülebilirlik anlayışımız kapsamında değerlendirmeyi ve bu faaliyetleri iyileştirmek adına iş birliği yapmayı,',
  'Çalışanlarımızın sağlık ve güvenliğini sağlamak için iş sağlığı ve güvenlik önlemlerini en üst düzeyde tutmayı,',
  'Çalışanlarımızın bağlılığını ve refahını yükseltmeyi, daha verimli çalışma ortamları için çalışmalar yapmayı,',
  'Çalışanlarımıza adil ve sürdürülebilir bir ücret politikası sunmayı,',
  'Kadınların eşit ve etkin katılımını sağlayarak, kadın istihdamını artırmayı,',
  'Ayrımcılık, zorbalık, yolsuzluk, rüşvet ve diğer etik ihlallere karşı sıfır tolerans politikası uygulamayı,',
  'Çalışanlarımızın mesleki gelişimlerine katkıda bulunmak amacıyla düzenli eğitim programları ve kariyer gelişim fırsatları sunmayı,',
  'Yerel topluluklarla iş birliği yaparak sosyal sorumluluk projelerine katkıda bulunmayı ve çevre bilincini yaymayı,',
  'Farklı ırk, cinsiyet, yaş, engellilik durumu gibi özelliklere sahip çalışanların eşit şartlarda iş gücüne katılımını desteklemeyi,',
  'Tüm iş süreçlerimizde şeffaflığı sağlamayı, şirket faaliyetlerini ve sürdürülebilirlik performansını açık bir şekilde raporlamayı,',
  'Yönetişim, çevresel ve sosyal hedeflerimizin etkinliğini izlemek için iç denetim sistemleri kurmayı,',
  'Müşterilerimizin haklarına saygı duyarak, adil ve şeffaf hizmet anlayışıyla sürdürülebilir büyümeyi sağlamayı taahhüt ederiz.',
]

const half = Math.ceil(commitments.length / 2)
const col1 = commitments.slice(0, half)
const col2 = commitments.slice(half)

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/>
      </svg>
    ),
    label: 'Yenilenebilir Enerji',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"/>
      </svg>
    ),
    label: 'Sıfır Atık Hedefi',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
      </svg>
    ),
    label: 'Etik İş Gücü',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
      </svg>
    ),
    label: 'Küresel Standartlar',
  },
]

export default function Sustainability() {
  return (
    <PageTransition>
      <main>
        {/* ── HERO BANNER ── */}
        <section className="relative min-h-[520px] md:min-h-[640px] flex items-end overflow-hidden">
          {/* Responsive banner images */}
          <picture className="absolute inset-0">
            <source
              media="(max-width: 767px)"
              srcSet="/sustainability-banner-mobile.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/sustainability-banner-desktop.jpg"
            />
            <img
              src="/sustainability-banner-desktop.jpg"
              alt="ENY Beauty Sürdürülebilirlik"
              className="w-full h-full object-cover object-center"
            />
          </picture>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a10]/80 via-[#1a0a10]/30 to-transparent" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#1a0a10]/60 to-transparent" />

          {/* Breadcrumb + Title */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-16">
            <nav className="mb-4 flex items-center gap-2 text-white/60 font-sans text-xs" aria-label="Breadcrumb">
              <a href="/" className="hover:text-white transition-colors">Anasayfa</a>
              <span>/</span>
              <span className="text-white/80">Sürdürülebilirlik</span>
              <span>/</span>
              <span className="text-white">Yaklaşımımız</span>
            </nav>
            <h1 className="font-display text-4xl sm:text-6xl text-white leading-tight max-w-2xl">
              Sürdürülebilirlik<br />
              <span className="text-rose font-light italic">Yaklaşımımız</span>
            </h1>
          </div>

          {/* Connecting line */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-px h-12 bg-rose/40" />
        </section>

        {/* ── INTRO STATEMENT ── */}
        <section className="pt-20 pb-12 bg-ivory">
          <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12">
            <FadeUp>
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-[#2d6642] font-light leading-relaxed text-center max-w-4xl mx-auto">
                Gezegenimizin kaynaklarını korumak, toplumun refahını desteklemek, yaşamın kalitesini sürdürülebilir şekilde iyileştirmek ve gelecek nesillere daha yaşanabilir bir dünya bırakmak adına ENY Beauty olarak;
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── PILLARS ICONS ── */}
        <section className="py-10 bg-ivory">
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <FadeUp className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {pillars.map((p, i) => (
                <div key={i} className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white border border-blush/30 hover:border-rose/30 hover:shadow-soft transition-all duration-300">
                  <div className="text-roseDeep">{p.icon}</div>
                  <span className="font-sans text-xs text-center text-[#6b4455] tracking-wide">{p.label}</span>
                </div>
              ))}
            </FadeUp>
          </div>
        </section>

        {/* ── COMMITMENTS TWO-COLUMN ── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

            <FadeUp className="mb-12">
              <div className="petal-divider max-w-xs mx-auto">
                <span className="font-sans text-xs tracking-[0.22em] uppercase text-mink text-center block">Taahhütlerimiz</span>
              </div>
            </FadeUp>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0">
              {/* Column 1 */}
              <div>
                {col1.map((item, i) => (
                  <FadeUp key={i} delay={i * 0.04}>
                    <div className="sustain-bullet border-b border-blush/20 last:border-0">
                      <div className="sustain-bullet-dot" />
                      <p className="font-sans text-sm text-[#4a2c38] leading-relaxed py-1">{item}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>

              {/* Column 2 */}
              <div>
                {col2.map((item, i) => (
                  <FadeUp key={i} delay={i * 0.04 + 0.1}>
                    <div className={`sustain-bullet border-b border-blush/20 ${i === col2.length - 1 ? 'border-0' : ''}`}>
                      <div className="sustain-bullet-dot" />
                      <p className={`font-sans text-sm leading-relaxed py-1 ${
                        i === col2.length - 1
                          ? 'text-[#2d6642] font-medium'
                          : 'text-[#4a2c38]'
                      }`}>{item}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ── */}
        <section
          className="py-24 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #fdecec 0%, #ffd7e0 50%, #fdecec 100%)' }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-rose/15 blur-3xl pointer-events-none" />
          <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
            <FadeUp>
              <p className="font-sans text-xs tracking-[0.22em] uppercase text-mink mb-4">ENY Beauty Taahhüdü</p>
              <h2 className="font-display text-4xl sm:text-5xl text-[#2d1a22] mb-6 leading-tight">
                Geleceğe Birlikte<br />
                <span className="text-roseDeep italic">Adım Atacağız</span>
              </h2>
              <p className="font-sans text-base text-[#6b4455] max-w-xl mx-auto leading-relaxed mb-10">
                Sürdürülebilirlik bizim için yalnızca bir hedef değil, var oluş biçimimizdir. Her ürün, her karar, her gün.
              </p>
              <a href="/urunlerimiz" className="btn-primary inline-flex">
                Koleksiyonu Keşfet
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                </svg>
              </a>
            </FadeUp>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
