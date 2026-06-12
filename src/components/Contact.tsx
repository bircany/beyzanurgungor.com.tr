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
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-gradient mb-6 text-4xl font-extrabold md:text-5xl">
            İletişim
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Detaylı bilgi almak ve randevu oluşturmak için lütfen iletişime geçiniz.
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
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
                    <option value="Moxo Dikkat Testi">Moxo Dikkat Testi</option>
                    <option value="Dikkat Programı">Dikkat Programı</option>
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

            <Card className="card-professional">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  Hızlı İletişim
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a href={`tel:${PHONE_TEL}`} className="block" onClick={() => trackContactClick("phone")}>
                    <Button variant="outline" size="lg" className="btn-outline-cta w-full justify-start">
                      <Phone className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <div className="font-medium">Hemen Ara</div>
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
                      <MessageCircle className="mr-3 h-5 w-5" />
                      <div className="text-left">
                        <div className="font-medium">WhatsApp</div>
                        <div className="text-sm text-muted-foreground">Doğrudan mesaj gönderin</div>
                      </div>
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg bg-gradient-card p-8 shadow-card">
              <h3 className="text-gradient mb-3 text-2xl font-extrabold">
                İlk adımı birlikte atalım
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Çocuğunuz, aileniz ya da kendi süreciniz için hangi çalışma alanının uygun olduğunu kısa bir ön görüşmeyle netleştirebiliriz.
              </p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackContactClick("whatsapp")}>
                <Button size="lg" className="btn-cta">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Randevu
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
