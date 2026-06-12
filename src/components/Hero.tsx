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
  "Attentioner Dikkat Programı",
  "PEERS Sosyal Beceri Eğitimi",
];

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center hero-gradient pt-16 overflow-hidden">
      {/* Background Blur Blobs */}
      <div className="absolute top-1/4 -left-12 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[85px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-12 -z-10 h-80 w-80 rounded-full bg-accent/8 blur-[100px]" style={{ animation: "pulse 6s infinite alternate" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Top on Mobile/Tablet, Right on Desktop: Portrait image */}
          <div className="animate-fade-in-up flex justify-center lg:order-2 lg:justify-end">
            <div className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[400px]">
              <div className="image-soft-motion aspect-[4/5] overflow-hidden rounded-2xl border-4 border-white bg-white shadow-card">
                <img
                  src="/beyzanur-portrait.jpg"
                  alt="Psikolog Beyzanur Özgüngör"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Bottom on Mobile/Tablet, Left on Desktop: Text and CTA buttons */}
          <div className="animate-fade-in-up text-center lg:order-1 lg:text-left">
            <div className="glass-surface mb-5 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="mr-2 h-4 w-4" />
              Çağ Psikoloji
            </div>

            <h1 className="text-gradient mb-6 text-4xl font-extrabold leading-tight md:text-5xl">
              Merhaba! Ben Psikolog
              <br />
              <span>Beyzanur Özgüngör.</span>
            </h1>

            <p className="mx-auto lg:mx-0 mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Çağ Psikoloji'de, çocuk, genç ve yetişkinlerin ruh sağlığını desteklemek ve yaşam kalitelerini artırmak için psikolojik danışmanlık hizmetleri sunuyorum. Sizinle birlikte bu yolculukta ilerlemekten mutluluk duyarım.
            </p>

            <div className="mb-8">
              <h2 className="mb-5 text-2xl font-semibold text-foreground">Uzmanlık Alanlarım</h2>
              <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 max-w-md mx-auto lg:mx-0">
                {specialties.map((specialty) => (
                  <div key={specialty} className="group flex items-center gap-3 rounded-lg px-1 py-1 text-base font-semibold text-foreground transition-all duration-300 hover:translate-x-1 hover:text-primary">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-110" />
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
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform animate-bounce hidden md:block">
        <ArrowDown className="h-6 w-6 text-primary/70" />
      </div>
    </section>
  );
};

export default Hero;
