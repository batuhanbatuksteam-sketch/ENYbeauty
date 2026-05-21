import PageWrapper from '../components/ui/PageWrapper'
import FadeUp from '../components/ui/FadeUp'

const values = [
  { icon: '✦', title: 'Saflık', desc: 'Her formülümüzde yalnızca en saf, doğal kaynaklı bileşenler kullanıyoruz. Zararlı kimyasallar, sentetik dolgular — asla.' },
  { icon: '◈', title: 'Bilim', desc: 'Dermatoloji uzmanlarıyla geliştirilen formüllerimiz, etkinliği bilimsel araştırmalarla kanıtlanmış aktif bileşenler içeriyor.' },
  { icon: '❋', title: 'Etik', desc: 'Cruelty-free sertifikalı, vegan formüller ve şeffaf tedarik zinciriyle güzellik artık vicdan rahatlığıyla kullanılabiliyor.' },
  { icon: '◉', title: 'Sürdürülebilirlik', desc: 'Geri dönüştürülebilir ambalajlar, karbon-nötr teslimat ve sıfır atık üretim hedefiyle çevreye olan borcumuzu ödüyoruz.' },
]

const milestones = [
  { year: '2026', title: 'Kuruluş', desc: 'İstanbul\'da küçük bir atölyede, büyük bir hayalle başladık.' },
  { year: '2027', title: 'İlk Koleksiyon', desc: '9 ürünlük ilk el kremi ve vücut bakım serimizi piyasaya sürdük.' },
  { year: '2029', title: 'Cruelty Free Sertifikası', desc: 'Uluslararası Cruelty Free International sertifikamızı aldık.' },
  { year: '2031', title: 'Sürdürülebilirlik Taahhüdü', desc: 'Sıfır atık hedefini ve yenilenebilir enerji kullanımını duyurduk.' },
]

const masonry = [
  { src: '/ürün görselleri/el kremi.png', tall: true },
  { src: '/ürün görselleri/parfüm.png', tall: false },
  { src: '/ürün görselleri/vücut kremi.png', tall: false },
  { src: '/ürün görselleri/peeling.png', tall: true },
  { src: '/ürün görselleri/şampuan.png', tall: false },
  { src: '/ürün görselleri/deodorant.png', tall: false },
]

export default function About() {
  return (
    <PageWrapper>
      <main>
        {/* Hero */}
        <section className="bg-charcoal pt-36 pb-28 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blush rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          </div>
          <div className="container-custom relative z-10 max-w-4xl">
            <FadeUp>
              <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-6">Hikayemiz</p>
              <h1 className="heading-xl text-ivory mb-8">
                Hakkımızda
              </h1>
              <p className="font-body text-lg text-ivory/60 leading-relaxed max-w-2xl">
                ENY Beauty, güzelliğin yalnızca bir görüntü meselesi olmadığına inananlar için tasarlandı. Biz güzelliği bir duygu, bir felsefe ve sorumluluk olarak tanımlıyoruz.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-petal">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <FadeUp>
                <div>
                  <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-6">Kurucu Vizyonu</p>
                  <h2 className="heading-lg text-charcoal mb-8">
                    Bir çiçekten<br />
                    <span className="italic text-rose-deep">ilham aldık</span>
                  </h2>
                  <div className="space-y-5 font-body text-base text-warm-gray leading-relaxed">
                    <p>
                      ENY Beauty'nin hikayesi, bir güzel uyanışla başladı. Kurucumuz Ezgi, 2026 yılında kendi cildi için güvenli, saf ve etkili bir ürün arayışına girdiğinde — rafların zararlı kimyasallarla dolu olduğunu fark etti.
                    </p>
                    <p>
                      O günden bu yana misyonumuz değişmedi: Doğanın en saf özleriyle, bilimin titizliğini birleştirerek — hem cilde hem gezegene saygılı ürünler üretmek.
                    </p>
                    <p>
                      Her şişe, her kavanoz, her damlacık — özenle, sevgiyle ve sorumlulukla hazırlanmıştır.
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-charcoal">
          <div className="container-custom">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-4">İlkelerimiz</p>
                <h2 className="heading-lg text-ivory">Değerlerimiz</h2>
              </div>
            </FadeUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <FadeUp key={v.title} delay={i * 0.1}>
                  <div className="border border-ivory/10 p-8 hover:border-rose/40 transition-colors duration-400 group">
                    <span className="font-display text-3xl text-rose/60 group-hover:text-rose transition-colors duration-300 block mb-6">{v.icon}</span>
                    <h3 className="font-display text-2xl text-ivory mb-3">{v.title}</h3>
                    <p className="font-body text-sm text-ivory/50 leading-relaxed">{v.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-petal">
          <div className="container-custom max-w-3xl">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-4">Yolculuğumuz</p>
                <h2 className="heading-lg text-charcoal">Kilometre Taşları</h2>
              </div>
            </FadeUp>
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-blush md:-translate-x-1/2" />
              <div className="space-y-12">
                {milestones.map((m, i) => (
                  <FadeUp key={m.year} delay={i * 0.1}>
                    <div className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* dot */}
                      <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 rounded-full bg-rose -translate-x-1/2 md:-translate-x-1/2 ring-4 ring-ivory" />
                      <div className={`pl-8 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                        <span className="font-body text-xs tracking-widest text-rose uppercase block mb-1">{m.year}</span>
                        <h3 className="font-display text-2xl text-charcoal mb-2">{m.title}</h3>
                        <p className="font-body text-sm text-warm-gray leading-relaxed">{m.desc}</p>
                      </div>
                      <div className="md:w-1/2" />
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="section-padding bg-white/60">
          <div className="container-custom">
            <FadeUp>
              <div className="text-center mb-16">
                <p className="font-body text-xs tracking-[0.4em] uppercase text-rose mb-4">Standartlarımız</p>
                <h2 className="heading-lg text-charcoal">Kalite Güvencesi</h2>
              </div>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { num: '100%', label: 'Doğal Bileşen' },
                { num: '48h', label: 'Uzun Süreli Etki' },
                { num: '0', label: 'Zararlı Kimyasal' },
                { num: '9+', label: 'Ürün Serisi' },
              ].map((stat) => (
                <FadeUp key={stat.label}>
                  <div className="py-10 border border-blush/60 bg-ivory/60">
                    <div className="font-display text-5xl text-rose-deep mb-2">{stat.num}</div>
                    <div className="font-body text-xs tracking-widest uppercase text-warm-gray">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  )
}
