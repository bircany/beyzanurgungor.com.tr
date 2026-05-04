import { ArrowDown, BriefcaseBusiness, Instagram, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center hero-gradient">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-in-up text-center lg:text-left">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-primary-dark md:text-6xl">
              Psk. Dan.
              <br />
              <span className="text-primary">Ruveyda Özdemir</span>
            </h1>

            <p className="mb-4 text-xl font-medium text-foreground/80">
              Sınav Süreci ve Öğrenci Danışmanlığı
            </p>

            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Yaklaşık 8 yıldır öğrencilerle çalışıyor, sınav sürecinde yaşanan kaygı, dikkat, erteleme ve motivasyon
              döngülerini anlamaya ve yönetmeye odaklanıyorum.
            </p>

            <div className="flex flex-col gap-4 justify-center sm:flex-row lg:justify-start">
              <a href="https://wa.me/905442150995" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-cta px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Randevu Al
                </Button>
              </a>
              <a href="https://www.instagram.com/pd.rehberinden/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="btn-outline-cta px-8 py-4 text-lg">
                  <Instagram className="mr-2 h-5 w-5" />
                  Instagram
                </Button>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-muted-foreground">Yıl Deneyim</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">6</div>
                <div className="text-muted-foreground">Hizmet Alanı</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">Samsun</div>
                <div className="text-muted-foreground">Online + Yüz Yüze</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative">
              <div className="flex h-80 w-80 items-center justify-center rounded-full border-4 border-primary/20 bg-white shadow-card backdrop-blur-sm lg:h-96 lg:w-96 overflow-hidden">
                <img 
                  src="/ruveyda.png" 
                  alt="Psk. Dan. Ruveyda Özdemir" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 h-16 w-16 rounded-full bg-primary/10 backdrop-blur-sm"></div>
              <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-primary-light backdrop-blur-sm shadow-sm"></div>
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
