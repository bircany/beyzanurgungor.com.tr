import { Brain, Clock3, ShieldCheck, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const principles = [
    {
      icon: Brain,
      title: 'Düşünce Kalıpları',
      description: 'Öğrencinin kendini sabote eden düşüncelerini fark etmesine ve yeniden yapılandırmasına yardımcı olurum.',
    },
    {
      icon: ShieldCheck,
      title: 'Duygu Düzenleme',
      description: 'Kaygı, stres ve baskı anlarında duyguların nasıl yönetileceği üzerine çalışırım.',
    },
    {
      icon: Users,
      title: 'Bireysel Takip',
      description: 'Her öğrencinin ihtiyacına göre yapılandırılmış, düzenli takip edilen bir süreç kurarım.',
    },
    {
      icon: Clock3,
      title: 'Sürdürülebilir Sistem',
      description: 'Kısa süreli motivasyondan çok, kendi kendini sürdürebilen bir çalışma yapısı hedeflerim.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Hakkımda
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ben Psikolojik Danışman Ruveyda Özdemir. Öğrencilerin sınav sürecinde yalnızca ders değil,
            zihin yönetimi de geliştirmesi gerektiğine inanıyorum.
          </p>
        </div>

        <div className="mb-16">
          <Card className="card-professional max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Yaklaşık 8 yıldır öğrencilerle çalışıyorum. Özellikle sınav sürecinde yaşanan psikolojik
                süreçleri anlamaya ve yönetmeye odaklanıyorum. Çünkü sınav süreci sadece bilgiyle ilgili
                değildir; öğrencinin zihniyle kurduğu ilişki, duygularını nasıl düzenlediği ve zorlandığı
                anlarda nasıl tepki verdiği sürecin gidişatını belirler.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Görüşmelerimde öğrencinin yalnızca ders programını değil; düşünce kalıplarını, duygu
                düzenleme becerilerini, dikkat ve odaklanma süreçlerini, erteleme davranışının altında
                yatan mekanizmaları ve performans anındaki zihinsel tepkilerini birlikte ele alırım.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Amacım öğrenciyi geçici olarak motive etmek değil; kendi zihinsel süreçlerini tanıyan,
                yöneten ve sürdürebilen bir yapı kurmasını sağlamaktır.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Çalışma Odaklarım
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((item, index) => (
              <Card key={index} className="card-professional hover:shadow-card transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
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
