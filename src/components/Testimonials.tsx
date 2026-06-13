import { useState, useEffect } from "react";
import { Star, MessageSquare, PlusCircle, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { trackContactClick } from "@/lib/analytics";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  date: string;
  isCustom?: boolean;
}

const WHATSAPP_URL = "https://wa.me/905537754455";

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Seda Y. (Ebeveyn)",
    role: "Çocuk Oyun Terapisi",
    rating: 5,
    text: "Beyzanur Hanım ile 6 yaşındaki oğlumuzun kaygıları için oyun terapisine başladık. Süreç boyunca hem bizimle kurduğu iletişim hem de oğlumuzdaki olumlu değişimler bizi çok mutlu etti. Kendisine çok teşekkür ederiz.",
    date: "Mayıs 2026",
  },
  {
    id: "2",
    name: "Murat A. (Ebeveyn)",
    role: "Attentioner Dikkat Programı",
    rating: 5,
    text: "Oğlumun okulda odaklanma problemi vardı ve derslerde sürekli dikkat dağınıklığı yaşıyordu. Beyzanur Hanım'dan aldığımız Attentioner Dikkat Programı sayesinde odaklanma süresi çok arttı ve ders başarısı olumlu yönde etkilendi.",
    date: "Haziran 2026",
  },
  {
    id: "3",
    name: "Gizem B.",
    role: "Bireysel Danışmanlık",
    rating: 5,
    text: "Yaşadığım yoğun stres ve kaygı süreçleriyle başa çıkmakta zorlandığım bir dönemde bireysel danışmanlık almaya başladım. Şema Terapi odaklı yaklaşımı ve empati dolu tutumu sayesinde kendimi çok daha güçlü hissediyorum.",
    date: "Nisan 2026",
  },
  {
    id: "4",
    name: "Zeynep K. (Ebeveyn)",
    role: "PEERS® Sosyal Beceri Eğitimi",
    rating: 5,
    text: "Kızımızın akranlarıyla iletişim kurmakta ve arkadaşlık sürdürmekte yaşadığı zorluklar için PEERS programına katıldık. Sosyal ortamlarda artık çok daha özgüvenli ve girişken. Kesinlikle tavsiye ederim.",
    date: "Haziran 2026",
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  // Load custom testimonials from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("beyzanur_testimonials");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Testimonial[];
        setTestimonials([...defaultTestimonials, ...parsed]);
      } catch (e) {
        console.error("Error parsing testimonials from localStorage", e);
      }
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) {
      toast.error("Lütfen adınızı ve görüşünüzü doldurun.");
      return;
    }

    const newReview: Testimonial = {
      id: Date.now().toString(),
      name: name.trim(),
      role: role.trim() || "Danışan",
      rating,
      text: text.trim(),
      date: "Yeni Görüş",
      isCustom: true,
    };

    // 1. Save to local storage for instant feedback
    const saved = localStorage.getItem("beyzanur_testimonials");
    let savedList: Testimonial[] = [];
    if (saved) {
      try {
        savedList = JSON.parse(saved) as Testimonial[];
      } catch (e) {}
    }
    const updatedSavedList = [...savedList, newReview];
    localStorage.setItem("beyzanur_testimonials", JSON.stringify(updatedSavedList));

    // Update state to render immediately for the user
    setTestimonials([...defaultTestimonials, ...updatedSavedList]);

    // 2. Prepare WhatsApp message for psychologist moderation
    const starsText = "★".repeat(rating) + "☆".repeat(5 - rating);
    const waMessage = `*YENİ DANIŞAN GÖRÜŞÜ (WEB SİTESİ)*\n\n*Ad Soyad:* ${name}\n*Hizmet/Alan:* ${role || "Belirtilmedi"}\n*Puan:* ${starsText} (${rating}/5)\n*Görüş:* ${text}\n\n_Bu yorumu onaylayıp web sitesinin koduna eklemek için lütfen bu mesajı saklayın._`;
    
    trackContactClick("testimonial_submit");
    toast.success("Görüşünüz kaydedildi ve onay için hazırlandı! WhatsApp üzerinden gönderiliyor...");

    setTimeout(() => {
      window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(waMessage)}`, "_blank");
    }, 1500);

    // Reset Form
    setName("");
    setRole("");
    setRating(5);
    setText("");
    setIsModalOpen(false);
  };

  return (
    <section id="testimonials" className="relative bg-secondary/35 py-20 overflow-hidden">
      {/* Background Blur Blobs */}
      <div className="absolute top-1/4 -right-24 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[90px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-24 -z-10 h-80 w-80 rounded-full bg-accent/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-gradient mb-4 text-4xl font-extrabold md:text-5xl">
              Danışan Yorumları
            </h2>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Çağ Psikoloji'den psikolojik danışmanlık, oyun terapisi ve özel eğitim programları alan danışanlarımızın tecrübeleri.
            </p>
          </div>
          <Button onClick={() => setIsOpenModal(true)} className="btn-cta whitespace-nowrap">
            <PlusCircle className="mr-2 h-5 w-5" />
            Görüşünü Paylaş
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-professional h-full flex flex-col justify-between relative bg-white/80 backdrop-blur-sm border border-white/60">
              {testimonial.isCustom && (
                <div className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-semibold text-primary bg-primary/10 rounded-full px-2 py-0.5">
                  <ShieldCheck className="h-3 w-3" />
                  Sizin Yorumunuz
                </div>
              )}
              <CardContent className="pt-6">
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed text-foreground/80 italic font-medium">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between border-t border-border/40 pt-4 mt-auto">
                  <div>
                    <h4 className="font-heading text-base font-extrabold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-primary font-semibold">
                      {testimonial.role}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Box about moderation */}
        <div className="mt-8 flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 text-xs text-primary max-w-2xl mx-auto justify-center">
          <ShieldCheck className="h-4 w-4 flex-shrink-0" />
          <p className="text-center font-medium">
            Gizlilik ve güvenlik hakları gereği danışan yorumları onay sürecinden geçerek yayına alınmaktadır.
          </p>
        </div>
      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 p-4 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg rounded-xl border border-white/60 bg-white/95 p-6 shadow-card backdrop-blur-md animate-scale-in">
            <button
              onClick={() => setIsOpenModal(false)}
              className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="font-heading text-2xl font-extrabold text-primary mb-2">Deneyiminizi Paylaşın</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Görüşleriniz, çocuk danışmanlığı ve oyun terapisi arayan diğer ailelere yol göstermektedir.
            </p>

            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <Label htmlFor="modal-name">Adınız Soyadınız (Veya rumuz örn: Seda Y. (Ebeveyn))</Label>
                <Input
                  id="modal-name"
                  placeholder="örn: Seda Y. (Ebeveyn) veya Gizem B."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5"
                  required
                />
              </div>

              <div>
                <Label htmlFor="modal-role">Aldığınız Hizmet / Konu</Label>
                <Input
                  id="modal-role"
                  placeholder="örn: Çocuk Oyun Terapisi, Bireysel Terapi, Attentioner"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="mt-1.5"
                />
              </div>

              <div>
                <Label>Puanınız</Label>
                <div className="mt-2 flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((stars) => (
                    <button
                      type="button"
                      key={stars}
                      onClick={() => setRating(stars)}
                      className="text-amber-500 transition-transform hover:scale-110 focus:outline-none"
                    >
                      <Star
                        className={`h-7 w-7 ${
                          stars <= rating ? "fill-amber-500" : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="modal-text">Görüşünüz</Label>
                <Textarea
                  id="modal-text"
                  placeholder="Süreç hakkındaki değerlendirmeniz..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="mt-1.5 min-h-[100px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full btn-cta mt-2">
                Gönder (WhatsApp Onayına Gönder)
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  );

  // Helper function because of variable scope naming
  function setIsOpenModal(val: boolean) {
    setIsModalOpen(val);
  }
};

export default Testimonials;
