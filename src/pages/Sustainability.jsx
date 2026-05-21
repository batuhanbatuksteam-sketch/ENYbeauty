import PageWrapper from '../components/ui/PageWrapper'
import FadeUp from '../components/ui/FadeUp'

// ── Birebir kopyalanmış metin – Evyap sürdürülebilirlik yaklaşımımız sayfasından ──
const commitmentIntro = `Gezegenimizin kaynaklarını korumak, toplumun refahını desteklemek, yaşamın kalitesini sürdürülebilir şekilde iyileştirmek ve gelecek nesillere daha yaşanabilir bir dünya bırakmak adına ENY Beauty olarak;`

const commitmentsLeft = [
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
]

const commitmentsRight = [
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

function BulletItem({ text, delay = 0 }) {
  return (
    <FadeUp delay={delay}>
      <div className="flex items-baseline gap-4 py-4 border-b border-blush/50 group">
        <span className="flex-shrink-0 mt-1">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <circle cx="5" cy="5" r="1.875" fill="#ffa4c4" />
            <circle cx="5" cy="5" r="4.6875" stroke="#ffa4c4" strokeWidth="0.625" />
          </svg>
        </span>
        <p className="font-body text-sm text-warm-gray leading-relaxed group-hover:text-charcoal transition-colors duration-300">
          {text}
        </p>
      </div>
    </FadeUp>
  )
}

export default function Sustainability() {
  return (
    <PageWrapper>
      <main>
        {/* ── HERO BANNER ── */}
        <section className="relative w-full overflow-hidden" style={{ minHeight: '70vh' }}>
          {/* Desktop banner */}
          <div className="absolute inset-0 hidden md:block">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet="/sürdürülebilirlik yaklaşımımız sayfası banneri masaüstü.jpg"
              />
              <img
                src="/sürdürülebilirlik yaklaşımımız sayfası banneri masaüstü.jpg"
                alt="ENY Beauty Sürdürülebilirlik"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/30 to-transparent" />
          </div>

          {/* Mobile banner */}
          <div className="absolute inset-0 block md:hidden">
            <img
              src="/sürdürülebilirlik yaklaşım sayfası banner mobil.jpg"
              alt="ENY Beauty Sürdürülebilirlik"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/10 to-transparent" />
          </div>

          {/* Hero content */}
          <div className="relative z-10 flex flex-col h-full min-h-[70vh]">
            {/* Desktop: left */}
            <div className="hidden md:flex flex-col justify-end h-full min-h-[70vh] container-custom pb-20">
              <FadeUp>
                <nav className="flex items-center gap-2 font-body text-xs text-ivory/60 mb-8 tracking-widest uppercase">
                  <span>Anasayfa</span>
                  <span>/</span>
                  <span className="text-ivory">Sürdürülebilirlik Yaklaşımımız</span>
                </nav>
                <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-4">🌿 Sürdürülebilirlik</p>
                <h1 className="font-display text-5xl lg:text-7xl font-light text-ivory leading-none max-w-2xl">
                  Sürdürülebilirlik<br />
                  <span className="italic text-rose">Yaklaşımımız</span>
                </h1>
              </FadeUp>
            </div>

            {/* Mobile: top */}
            <div className="flex md:hidden flex-col items-start justify-start pt-28 px-6">
              <FadeUp>
                <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-4">🌿 Sürdürülebilirlik</p>
                <h1 className="font-display text-4xl font-light text-ivory leading-none">
                  Sürdürülebilirlik<br />
                  <span className="italic text-rose">Yaklaşımımız</span>
                </h1>
              </FadeUp>
            </div>
          </div>

          {/* Divider line */}
          <div className="absolute left-1/2 -bottom-px h-16 w-px bg-gradient-to-b from-ivory/40 to-transparent -translate-x-1/2 z-10" />
        </section>

        {/* ── INTRO QUOTE ── */}
        <section className="bg-petal pt-24 pb-16">
          <div className="container-custom max-w-5xl">
            <FadeUp>
              <p className="font-display text-2xl md:text-4xl lg:text-5xl text-rose-deep font-light leading-relaxed text-center">
                {commitmentIntro}
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── COMMITMENTS GRID ── */}
        <section className="bg-petal pb-28">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0">
              {/* Left Column */}
              <div>
                {commitmentsLeft.map((text, i) => (
                  <BulletItem key={i} text={text} delay={i * 0.04} />
                ))}
              </div>
              {/* Right Column */}
              <div>
                {commitmentsRight.map((text, i) => (
                  <BulletItem key={i} text={text} delay={i * 0.04} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PILLAR CARDS ── */}
        <section className="section-padding bg-charcoal">
          <div className="container-custom">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-4">Üç Temel Sütun</p>
                <h2 className="heading-lg text-ivory">ESG Taahhüdümüz</h2>
              </div>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🌍',
                  title: 'Çevresel',
                  items: ['Sıfır atık hedefi', 'Yenilenebilir enerji', 'Karbon emisyonu azaltma', 'Geri dönüştürülebilir ambalaj'],
                },
                {
                  icon: '🤝',
                  title: 'Sosyal',
                  items: ['İş sağlığı & güvenliği', 'Kadın istihdamı', 'Çeşitlilik & kapsayıcılık', 'Topluluk projeleri'],
                },
                {
                  icon: '⚖️',
                  title: 'Yönetişim',
                  items: ['Etik ticaret', 'Şeffaf raporlama', 'İç denetim sistemleri', 'Müşteri hakları'],
                },
              ].map((pillar, i) => (
                <FadeUp key={pillar.title} delay={i * 0.12}>
                  <div className="border border-ivory/10 p-8 hover:border-rose/30 transition-all duration-400 group h-full">
                    <span className="text-4xl block mb-6">{pillar.icon}</span>
                    <h3 className="font-display text-3xl text-ivory mb-6 group-hover:text-rose transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <ul className="space-y-3">
                      {pillar.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 font-body text-sm text-ivory/50">
                          <span className="w-1 h-1 rounded-full bg-rose flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMMITMENT BANNER ── */}
        <section className="section-padding bg-petal">
          <div className="container-custom max-w-3xl text-center">
            <FadeUp>
              <span className="text-5xl block mb-8">🌱</span>
              <h2 className="heading-lg text-charcoal mb-6">
                Daha Yeşil Bir<br />
                <span className="italic text-rose-deep">Yarın İçin</span>
              </h2>
              <p className="font-body text-base text-warm-gray leading-relaxed">
                Her satın alma, bu taahhüdün bir parçasıdır. ENY Beauty ürünlerini tercih ettiğinizde, yalnızca cildiniziн için değil — gelecek nesiller için de doğru seçimi yapıyorsunuz.
              </p>
            </FadeUp>
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
