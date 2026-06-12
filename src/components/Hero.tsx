import { ArrowDown, CheckCircle2, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactClick } from "@/lib/analytics";

const specialties = [
  "Çocuk Terapisi",
  "Çift ve Aile Danışmanlığı",
  "Bireysel Danışmanlık",
  "Oyun Terapisi",
  "Ergen Danışmanlığı",
  "Ebeveyn Danışmanlığı",
  "Moxo Dikkat Testi",
  "Dikkat Programı",
];

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center hero-gradient">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="animate-fade-in-up order-2 flex justify-center lg:order-1 lg:justify-start">
            <div className="relative w-full max-w-[460px]">
              <div className="aspect-[4/5] overflow-hidden rounded-lg border border-white/80 bg-white shadow-card">
                <img
                  src="/beyzanur-portrait.jpg"
                  alt="Psikolog Beyzanur Özgüngör"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up order-1 text-center lg:order-2 lg:text-left">
            <div className="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-sm font-medium text-primary shadow-soft">
              <Sparkles className="mr-2 h-4 w-4" />
              Çağ Psikoloji
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-dark md:text-6xl">
              Merhaba! Ben Psikolog
              <br />
              <span className="text-primary">Beyzanur Özgüngör.</span>
            </h1>

            <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Çağ Psikoloji'de, çocuk, genç ve yetişkinlerin ruh sağlığını desteklemek ve yaşam kalitelerini artırmak için psikolojik danışmanlık hizmetleri sunuyorum. Sizinle birlikte bu yolculukta ilerlemekten mutluluk duyarım.
            </p>

            <div className="mb-8">
              <h2 className="mb-5 text-2xl font-semibold text-foreground">Uzmanlık Alanlarım</h2>
              <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
                {specialties.map((specialty) => (
                  <div key={specialty} className="flex items-center gap-3 text-base font-semibold text-foreground">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>{specialty}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="https://wa.me/905537754455"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactClick("whatsapp")}
              >
                <Button size="lg" className="btn-cta px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Randevu Al
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" size="lg" className="btn-outline-cta px-8 py-4 text-lg">
                  Uzmanlık Alanları
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
