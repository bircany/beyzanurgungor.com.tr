import { BookOpen, Brain, Layers3, MessageCircle, ShieldCheck, Target, TestTube2, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'KPSS Eğitim Danışmanlığı',
      description: 'Sınav temposunu, odaklanmayı ve düzenli ilerlemeyi destekleyen yapılandırılmış bir süreç.',
    },
    {
      icon: BookOpen,
      title: 'AGS Eğitim Danışmanlığı',
      description: 'Öğrencinin hedefe göre çalışma düzeni kurmasına yardımcı olan bireysel danışmanlık.',
    },
    {
      icon: Users,
      title: 'YKS Eğitim Danışmanlığı',
      description: 'Sınav kaygısı, motivasyon ve performans yönetimini birlikte ele alan öğrenci süreci.',
    },
    {
      icon: Layers3,
      title: 'LGS Eğitim Danışmanlığı',
      description: 'Yaş dönemine uygun, aile ile iş birliği içeren destekleyici çalışma planı.',
    },
    {
      icon: TestTube2,
      title: 'MOXO Dikkat Testi Uygulaması',
      description: 'Dikkat ve odaklanma süreçlerini değerlendirmeye yardımcı uygulama desteği.',
    },
    {
      icon: ShieldCheck,
      title: 'Kaygı ve Stres Yönetimi',
      description: 'Sınav döneminde yoğunlaşan kaygı, baskı ve stres döngülerini yönetmeye odaklı çalışma.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hizmetler
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Öğrencinin ihtiyacına göre şekillenen, psikolojik temelli ve süreç odaklı danışmanlık hizmetleri sunuyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="card-professional hover:shadow-card transition-all duration-300 group h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-card rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Çalışma odağını birlikte belirleyelim
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Online ya da yüz yüze görüşme seçenekleriyle öğrencinin ihtiyacına uygun bir takip sistemi kurabiliriz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/905442150995" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="btn-outline-cta">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp İletişim
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
