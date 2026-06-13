import { Baby, BookOpen, Brain, HeartHandshake, Puzzle, ShieldCheck, Sparkles, TestTube2, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { trackContactClick } from "@/lib/analytics";

const Services = () => {
  const services = [
    {
      icon: Baby,
      title: "Çocuk Terapisi",
      description: "Çocuğun duygu, davranış ve ilişki dünyasını gelişim dönemine uygun şekilde ele alan psikolojik destek.",
    },
    {
      icon: HeartHandshake,
      title: "Çift ve Aile Danışmanlığı",
      description: "Aile içi iletişim, ilişki dinamikleri, ebeveynlik ve çift süreçlerini birlikte değerlendiren danışmanlık.",
    },
    {
      icon: ShieldCheck,
      title: "Bireysel Danışmanlık",
      description: "Yetişkinlerin duygu, düşünce, ilişki ve yaşam olaylarıyla baş etme süreçlerini destekleyen görüşmeler.",
    },
    {
      icon: Puzzle,
      title: "Oyun Terapisi",
      description: "Çocukların duygularını oyun diliyle ifade etmesine alan açan, güvenli ve yapılandırılmış terapi süreci.",
    },
    {
      icon: Users,
      title: "Ergen Danışmanlığı",
      description: "Kimlik gelişimi, sınırlar, aile ilişkileri, kaygı, akran ilişkileri ve okul süreçlerinde ergenlere destek.",
    },
    {
      icon: Brain,
      title: "Ebeveyn Danışmanlığı",
      description: "Ebeveynlerin çocuğun ihtiyaçlarını anlamasına ve ev içi iletişimi güçlendirmesine yönelik danışmanlık.",
    },
    {
      icon: BookOpen,
      title: "Attentioner Dikkat Programı",
      description: "Çocuk ve ergenlerde odaklanma, seçici dikkat ve dürtü kontrolünü nöropsikolojik egzersizlerle geliştiren yapılandırılmış program.",
      highlight: true,
      badge: "Özel Uygulayıcı Programı",
    },
    {
      icon: Sparkles,
      title: "PEERS® Sosyal Beceri",
      description: "Çocuk ve gençlerde arkadaşlık ilişkilerini kurma ve sürdürme becerilerini geliştiren, kanıta dayalı grup programı.",
      highlight: true,
      badge: "Kanıta Dayalı Özel Program",
    },
  ];

  const trainings = [
    { name: "Çocuk Merkezli Oyun Terapisi Eğitimi" },
    { name: "Yetişkinlerde Bilişsel ve Davranışçı Terapiler Eğitimi" },
    { name: "Yetişkinlerde Şema Terapi Eğitimi" },
    { name: "WISC-4 Eğitimi" },
    { name: "Objektif Çocuk Değerlendirme Testleri Eğitimi" },
    { name: "Çocuk ve Ergenlerde Bilişsel Davranışçı Terapi Eğitimi" },
    { name: "Çocuklarda Özgül Öğrenme Bozukluğu Bataryası" },
    { name: "Yaratıcı Drama ile Akran Zorbalığı Eğitimi" },
    { name: "Aile Danışmanlığı Eğitimi" },
    { name: "PEERS Sosyal Beceri Eğitimi" },
    { name: "Çocuklarda Bilişsel Davranışçı Oyun Terapisi ve Sanat Terapisi" },
  ];

  return (
    <section id="services" className="relative bg-background py-20 overflow-hidden">
      {/* Background Blur Blobs */}
      <div className="absolute top-1/4 -left-32 -z-10 h-96 w-96 rounded-full bg-primary/8 blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 -z-10 h-[400px] w-[400px] rounded-full bg-accent/8 blur-[120px]" style={{ animation: "pulse 8s infinite alternate" }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-gradient mb-6 text-4xl font-extrabold md:text-5xl">
            Uzmanlık Alanlarım
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Çağ Psikoloji'de çocuk, genç, yetişkin, çift ve ailelere yönelik psikolojik danışmanlık ve değerlendirme hizmetleri sunuyorum.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const isHighlighted = service.highlight;
            return (
              <Card
                key={service.title}
                className={`card-professional group relative h-full transition-all duration-500 ${
                  isHighlighted
                    ? "border-2 border-primary bg-primary/[0.04] ring-1 ring-primary/20 scale-[1.03] shadow-md shadow-primary/5 hover:scale-[1.05] hover:shadow-lg hover:shadow-primary/10"
                    : "border-white/70 bg-card/85 hover:shadow-card"
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-3.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white shadow-md whitespace-nowrap">
                    {service.badge}
                  </div>
                )}
                <CardHeader className="pb-4 text-center">
                  <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg transition-all duration-300 ${
                    isHighlighted ? "bg-primary text-white scale-110 shadow-md" : "bg-primary/10 text-primary group-hover:bg-primary/15"
                  }`}>
                    <service.icon className={`h-8 w-8 ${isHighlighted ? "text-white animate-pulse" : "text-primary"}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground font-extrabold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="leading-relaxed text-muted-foreground text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="rounded-lg bg-gradient-card p-8 shadow-card sm:p-10 lg:p-12">
          <div className="mb-8 flex flex-col gap-4 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div>
              <h3 className="text-gradient mb-3 text-3xl font-extrabold">
                Aldığım Eğitimler
              </h3>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Klinik tecrübeyi destekleyen eğitimler ve çocuk değerlendirme alanındaki uygulama yetkinlikleri.
              </p>
            </div>
            <a
              href="https://wa.me/905537754455"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick("whatsapp")}
            >
              <Button variant="outline" size="lg" className="btn-outline-cta">
                <BookOpen className="mr-2 h-5 w-5" />
                Bilgi Al
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {trainings.map((training) => (
              <div
                key={training.name}
                className={`flex flex-col justify-between rounded-lg border px-4 py-3 shadow-soft transition-all duration-300 ${
                  training.highlight
                    ? "border-primary bg-primary/5 ring-1 ring-primary/20 scale-[1.02]"
                    : "border-border/70 bg-white"
                }`}
              >
                <div className="flex items-start text-sm font-medium text-foreground/85">
                  <Sparkles className={`mr-3 mt-0.5 h-4 w-4 flex-shrink-0 ${training.highlight ? "text-primary animate-pulse" : "text-primary"}`} />
                  <span>{training.name}</span>
                </div>
                {training.badge && (
                  <div className="mt-2 text-xs font-semibold text-primary pl-7">
                    ★ {training.badge}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
