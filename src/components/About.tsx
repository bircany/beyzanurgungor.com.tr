import { Brain, GraduationCap, HeartHandshake, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const principles = [
    {
      icon: Brain,
      title: "Bilimsel Temel",
      description: "TÜBİTAK destekli bilimsel çalışma deneyimi ve güncel eğitimlerle psikolojik danışmanlık sürecini destekler.",
    },
    {
      icon: HeartHandshake,
      title: "Güvenli İlişki",
      description: "Çocuk, genç ve yetişkinlerle kurulan süreçte güven, mahremiyet ve etik ilkelere önem verir.",
    },
    {
      icon: GraduationCap,
      title: "Çok Yönlü Eğitim",
      description: "BDT, Şema Terapi, oyun terapisi, çocuk değerlendirme testleri ve aile danışmanlığı alanlarında eğitimlidir.",
    },
    {
      icon: ShieldCheck,
      title: "Değerlendirme Yetkinliği",
      description: "WISC-4, Moxo Dikkat Testi, özgül öğrenme ve objektif çocuk değerlendirme testleriyle süreci destekler.",
    },
  ];

  return (
    <section id="about" className="bg-secondary/45 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-gradient mb-6 text-4xl font-extrabold md:text-5xl">
            Biyografi
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Psikolog Beyzanur Özgüngör, çocuk, genç ve yetişkin alanlarında çalışmalarını sürdürmektedir.
          </p>
        </div>

        <div className="mb-16 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-lg border border-white/80 bg-white shadow-card">
            <img
              src="/beyzanur-session.jpg"
              alt="Psikolog Beyzanur Özgüngör danışmanlık ortamı"
              className="h-full max-h-[620px] w-full object-cover object-center"
            />
          </div>

          <Card className="card-professional">
            <CardContent className="p-8">
              <p className="mb-6 text-lg leading-relaxed text-foreground">
                İstanbul Haliç Üniversitesi Fen ve Edebiyat Fakültesi Psikoloji bölümünü tamamladım. Şu an Ondokuz Mayıs Üniversitesi'nde yüksek lisans yapmaktayım.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-foreground">
                Akademik alanda çalışmalarıma devam edebilmek için Psikoloji Bölüm Başkanı Burcu Türk ile beraber TÜBİTAK tarafından desteklenen, "Ortak Ebeveynliğin Çocuklarda Mizacın Sosyal ve Duygusal Yeterlilik Üzerine Etkisi"ni araştıran bilimsel bir çalışma yürüttüm.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-foreground">
                Lisans eğitimim boyunca Bakırköy Ruh ve Sinir Hastalıkları Hastanesi, Cerrahpaşa Nöropsikoloji bölümü ve birçok özel klinikte stajyer psikolog olarak görev aldım.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-foreground">
                Klinik tecrübelerimi desteklemek amacıyla Prof. Dr. Ebru Şalcıoğlu tarafından yürütülen 100 saatlik Bilişsel ve Davranışçı Terapiler eğitimini tamamladım. Prof. Dr. Esra Yancar Demir tarafından verilen Şema Terapi eğitimine devam etmekteyim.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-foreground">
                Psk. Dr. Birgül Bakay tarafından verilen Çocuk Merkezli Oyun Terapisi eğitimini tamamladım. Ev Okulu Derneği tarafından verilen çocuklarda bilişsel ve davranışçı terapiler eğitimini tamamladım. Türk Psikologlar Derneği'nden WISC-4 zeka testi ve çocuklarda özgül öğrenme bataryası eğitimlerini tamamladım.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                Çocuklarda objektif test eğitimlerini tamamlayarak uygulama ve yorumlama yetkinliği kazandım. Türk Psikologlar Derneği üyesiyim.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-gradient mb-12 text-center text-3xl font-extrabold">
            Danışmanlık Yaklaşımım
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {principles.map((item, index) => (
              <Card key={index} className="card-professional group h-full transition-all duration-300 hover:shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="mb-3 text-xl font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
