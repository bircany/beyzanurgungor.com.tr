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
      icon: TestTube2,
      title: "Moxo Dikkat Testi",
      description: "Dikkat, zamanlama, dürtüsellik ve hiperaktivite alanlarını değerlendirmeye yardımcı bilgisayar destekli test.",
    },
    {
      icon: BookOpen,
      title: "Dikkat Programı",
      description: "Dikkat ve odaklanma becerilerini desteklemeye yönelik yapılandırılmış program ve takip süreci.",
    },
  ];

  const trainings = [
    "Çocuk Merkezli Oyun Terapisi Eğitimi",
    "Yetişkinlerde Bilişsel Davranışçı Terapiler Eğitimi",
    "Yetişkinlerde Şema Terapi Eğitimi",
    "WISC-4 Eğitimi",
    "Objektif Çocuk Değerlendirme Testleri Eğitimi",
    "Çocuk ve Ergenlerde Bilişsel Davranışçı Terapi Eğitimi",
    "Çocuklarda Özgül Öğrenme Bozukluğu Eğitimi",
    "Yaratıcı Drama ile Akran Zorbalığı Eğitimi",
    "Aile Danışmanlığı Eğitimi",
  ];

  return (
    <section id="services" className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-gradient mb-6 text-4xl font-extrabold md:text-5xl">
            Uzmanlık Alanlarım
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Çağ Psikoloji'de çocuk, genç, yetişkin, çift ve ailelere yönelik psikolojik danışmanlık ve değerlendirme hizmetleri sunuyorum.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="card-professional group h-full transition-all duration-300 hover:shadow-card">
              <CardHeader className="pb-4 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
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
                key={training}
                className="flex items-start rounded-lg border border-border/70 bg-white px-4 py-3 text-sm font-medium text-foreground/85 shadow-soft"
              >
                <Sparkles className="mr-3 mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>{training}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
