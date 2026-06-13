import { useState } from "react";
import { Clock, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { trackContactClick } from "@/lib/analytics";

const PHONE_DISPLAY = "+90 553 775 44 55";
const PHONE_TEL = "+905537754455";
const WHATSAPP_URL = "https://wa.me/905537754455";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    message: "",
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
      title: "Telefon",
      content: PHONE_DISPLAY,
      description: "Randevu ve detaylı bilgi için ulaşabilirsiniz",
    },
    {
      icon: MapPin,
      title: "Görüşme",
      content: "Çağ Psikoloji",
      description: "Çocuk, genç ve yetişkin danışmanlığı",
    },
    {
      icon: Clock,
      title: "Süreç",
      content: "Ön görüşme ile başlar",
      description: "İhtiyaca uygun çalışma alanı birlikte belirlenir",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackContactClick("form");

    const message = `Danışmanlık Talebi
Ad: ${formData.firstName}
Soyad: ${formData.lastName}
Telefon: ${formData.phone}
İlgilendiği Hizmet: ${formData.service}

Mesaj:
${formData.message}`;

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      {/* Background Blur Blobs */}
      <div className="absolute top-1/3 -left-32 -z-10 h-96 w-96 rounded-full bg-primary/6 blur-[110px]" />
      <div className="absolute bottom-10 -right-32 -z-10 h-80 w-80 rounded-full bg-accent/6 blur-[90px] animate-pulse" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-gradient mb-6 text-4xl font-extrabold md:text-5xl">
            İletişim
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Detaylı bilgi almak ve randevu oluşturmak için lütfen iletişime geçiniz.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          <Card className="card-professional">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">
                Randevu Talep Formu
              </CardTitle>
              <p className="text-muted-foreground">
                Formu doldurduğunuzda bilgileriniz WhatsApp mesajı olarak hazırlanır.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                  <Label htmlFor="service">İlgilendiğiniz Alan</Label>
                  <select
                    id="service"
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Bir alan seçin</option>
                    <option value="Çocuk Terapisi">Çocuk Terapisi</option>
                    <option value="Çift ve Aile Danışmanlığı">Çift ve Aile Danışmanlığı</option>
                    <option value="Bireysel Danışmanlık">Bireysel Danışmanlık</option>
                    <option value="Oyun Terapisi">Oyun Terapisi</option>
                    <option value="Ergen Danışmanlığı">Ergen Danışmanlığı</option>
                    <option value="Ebeveyn Danışmanlığı">Ebeveyn Danışmanlığı</option>
                    <option value="Attentioner Dikkat Programı">Attentioner Dikkat Programı</option>
                    <option value="PEERS Sosyal Beceri Eğitimi">PEERS Sosyal Beceri Eğitimi</option>
                    <option value="Diğer">Diğer</option>
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

                <Button type="submit" size="lg" className="btn-cta w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Randevu Talep Et
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {contactInfo.map((info) => (
                <Card key={info.title} className="card-professional text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold text-foreground">
                      {info.title}
                    </h3>
                    <p className="mb-1 font-medium text-foreground">
                      {info.content}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Card className="mb-12 card-professional w-full">
          <CardHeader className="pb-3 text-center">
            <CardTitle className="text-xl text-foreground">
              Hızlı İletişim
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a href={`tel:${PHONE_TEL}`} className="block" onClick={() => trackContactClick("phone")}>
                <Button variant="outline" size="lg" className="btn-outline-cta w-full justify-start">
                  <Phone className="mr-3 h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-medium text-foreground">Hemen Ara</div>
                    <div className="text-sm text-muted-foreground">{PHONE_DISPLAY}</div>
                  </div>
                </Button>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                onClick={() => trackContactClick("whatsapp")}
              >
                <Button variant="outline" size="lg" className="btn-outline-cta w-full justify-start">
                  <MessageCircle className="mr-3 h-5 w-5 text-primary" />
                  <div className="text-left">
                    <div className="font-medium text-foreground">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">Doğrudan mesaj gönderin</div>
                  </div>
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="mb-12 rounded-lg bg-gradient-card p-8 shadow-card w-full text-center sm:p-10">
          <h3 className="text-gradient mb-3 text-2xl font-extrabold sm:text-3xl">
            İlk adımı birlikte atalım
          </h3>
          <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-muted-foreground">
            Çocuğunuz, aileniz ya da kendi süreciniz için hangi çalışma alanının uygun olduğunu kısa bir ön görüşmeyle netleştirebiliriz.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackContactClick("whatsapp")}>
            <Button size="lg" className="btn-cta">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Randevu
            </Button>
          </a>
        </div>

        <Card className="card-professional overflow-hidden w-full">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl text-foreground flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Konumumuz
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Körfez, Atakum bulvarı no:21/11, 55200 Atakum/Samsun
            </p>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              title="Çağ Psikoloji Google Haritası"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.492022067756!2d36.2301094!3d41.3713444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40887ff283c267b9%3A0xe7dc52a28ec21bc9!2zw4dhxJ8gUHNpa29sb2pp!5e0!3m2!1str!2str!4v1718228000000!5m2!1str!2str"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale opacity-85 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
