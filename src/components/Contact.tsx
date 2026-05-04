import { useState } from 'react';
import { Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: '+90 544 215 09 95',
      description: 'Randevu ve bilgi için ulaşabilirsiniz',
    },
    {
      icon: MapPin,
      title: 'Konum',
      content: 'Atakum, Samsun',
      description: 'Yüz yüze görüşmeler randevu ile planlanır',
    },
    {
      icon: Clock,
      title: 'Çalışma Düzeni',
      content: 'Online ve Yüz Yüze',
      description: 'Haftalık görüşmeler ve süreç takibi',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Danışmanlık Talebi
Ad: ${formData.firstName}
Soyad: ${formData.lastName}
Telefon: ${formData.phone}
İlgilendiği Hizmet: ${formData.service}

Mesaj:
${formData.message}`;

    window.open(`https://wa.me/905442150995?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            İletişim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sınav süreciyle ilgili ihtiyaçlarınızı konuşmak ve size uygun danışmanlık biçimini belirlemek için iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Randevu Talep Formu
              </CardTitle>
              <p className="text-muted-foreground">
                Kısa bir form doldurarak görüşme planı için ilk adımı atabilirsiniz.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Ad</Label>
                    <Input
                      id="firstName"
                      placeholder="Adınız"
                      required
                      className="mt-1"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Soyad</Label>
                    <Input
                      id="lastName"
                      placeholder="Soyadınız"
                      required
                      className="mt-1"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+90 5xx xxx xx xx"
                    required
                    className="mt-1"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="service">İlgilendiğiniz Hizmet</Label>
                  <select
                    id="service"
                    className="mt-1 w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Bir hizmet seçin</option>
                    <option value="KPSS Eğitim Danışmanlığı">KPSS Eğitim Danışmanlığı</option>
                    <option value="AGS Eğitim Danışmanlığı">AGS Eğitim Danışmanlığı</option>
                    <option value="YKS Eğitim Danışmanlığı">YKS Eğitim Danışmanlığı</option>
                    <option value="LGS Eğitim Danışmanlığı">LGS Eğitim Danışmanlığı</option>
                    <option value="MOXO Dikkat Testi Uygulaması">MOXO Dikkat Testi Uygulaması</option>
                    <option value="Kaygı ve Stres Yönetimi">Kaygı ve Stres Yönetimi</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea
                    id="message"
                    placeholder="Kısaca ihtiyacınızı yazabilirsiniz..."
                    rows={4}
                    className="mt-1"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full btn-cta">
                  <Send className="w-5 h-5 mr-2" />
                  Randevu Talep Et
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-professional text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Hızlı İletişim
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a href="tel:+905442150995" className="block">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full btn-outline-cta justify-start"
                    >
                      <Phone className="w-5 h-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">Hemen Ara</div>
                        <div className="text-sm text-muted-foreground">+90 544 215 09 95</div>
                      </div>
                    </Button>
                  </a>

                  <a href="https://wa.me/905442150995" target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full btn-outline-cta justify-start"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      <div className="text-left">
                        <div className="font-medium">WhatsApp</div>
                        <div className="text-sm text-muted-foreground">Doğrudan mesaj gönderin</div>
                      </div>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-24 text-center bg-gradient-card rounded-3xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Süreci birlikte yapılandıralım
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Öğrencinin ihtiyacına göre oluşturulmuş, düzenli takip edilen ve sürdürülebilir bir danışmanlık sistemi kurabiliriz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+905442150995">
              <Button size="lg" className="btn-cta">
                <Phone className="w-5 h-5 mr-2" />
                Hemen Ara
              </Button>
            </a>
            <a href="https://wa.me/905442150995" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="btn-outline-cta">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Randevu
              </Button>
            </a>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-card border border-border/50 h-[400px] w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4172403668856!2d36.24592967675122!3d41.34314249871146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x408879007feb9bf9%3A0xe2dcd31f6cdd728f!2sPd.Rehberinden%20Psikolojik%20Dan%C4%B1%C5%9Fmanl%C4%B1k%20ve%20Rehberlik%20Ofisi!5e0!3m2!1str!2str!4v1746364933930!5m2!1str!2str" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
