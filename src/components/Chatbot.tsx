import { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { trackContactClick } from "@/lib/analytics";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  type?: "text" | "whatsapp-cta";
}

const WHATSAPP_URL = "https://wa.me/905537754455";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Merhaba. Ben Psikolog Beyzanur Özgüngör'ün dijital asistanıyım. Çağ Psikoloji'deki danışmanlık hizmetleri ve randevu süreci hakkında nasıl yardımcı olabilirim?",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);
    setInteractionCount((prev) => prev + 1);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text:
          interactionCount === 0
            ? "İsterseniz kısa bir ön görüşme ile çocuk terapisi, ergen danışmanlığı, bireysel danışmanlık, çift ve aile danışmanlığı ya da dikkat değerlendirme alanlarından hangisinin uygun olduğunu birlikte netleştirebiliriz."
            : "Dilerseniz WhatsApp hattı üzerinden doğrudan iletişime geçerek randevu oluşturabilirsiniz.",
        isUser: false,
      };

      const ctaMessage: Message = {
        id: messages.length + 3,
        text: "WhatsApp üzerinden iletişime geçmek için aşağıdaki butonu kullanabilirsiniz:",
        isUser: false,
        type: "whatsapp-cta",
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botResponse, ctaMessage]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
      {isOpen && (
        <Card className="mb-4 flex h-[500px] w-[350px] origin-bottom-right animate-fade-in-up flex-col overflow-hidden border-border/60 bg-white/95 shadow-card backdrop-blur-sm">
          <div className="flex items-center justify-between bg-gradient-to-r from-primary to-primary-dark p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 rounded-full border-2 border-primary bg-accent shadow-sm"></div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold tracking-wide">Dijital Asistan</h3>
                <p className="text-xs font-light opacity-90">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-white transition-colors hover:bg-white/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-secondary/30 p-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-lg p-3.5 text-sm leading-relaxed shadow-sm ${
                    msg.isUser
                      ? "bg-primary text-primary-foreground"
                      : "border border-border/50 bg-white text-foreground"
                  }`}
                >
                  {msg.text}

                  {msg.type === "whatsapp-cta" && (
                    <div className="mt-4 border-t border-border/30 pt-3">
                      <Button
                        className="w-full bg-[#25D366] font-semibold text-white shadow-sm transition-all hover:scale-[1.02] hover:bg-[#128C7E]"
                        onClick={() => {
                          trackContactClick("whatsapp");
                          window.open(WHATSAPP_URL, "_blank");
                        }}
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        WhatsApp ile Görüş
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-lg border border-border/50 bg-white p-4 shadow-sm">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary/40"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary/40 [animation-delay:-0.15s]"></span>
                    <span className="h-2 w-2 animate-bounce rounded-full bg-primary/40 [animation-delay:-0.3s]"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-border/50 bg-white p-4">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                placeholder="Mesajınızı yazın..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 rounded-md border-border/50 bg-secondary/30 focus-visible:ring-primary"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!inputValue.trim()}
                className="h-10 w-10 rounded-md bg-primary text-white shadow-sm transition-transform hover:scale-105 hover:bg-primary-dark"
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      )}

      {!isOpen && showTooltip && (
        <div className="absolute bottom-24 right-0 z-40 animate-float-tooltip">
          <div
            className="flex w-[min(330px,calc(100vw-2rem))] cursor-pointer items-start rounded-lg border border-white/50 bg-white/70 px-4 py-4 pr-9 text-foreground shadow-card backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:bg-white/80 animate-fade-in-up"
            onClick={() => {
              setIsOpen(true);
              setShowTooltip(false);
            }}
          >
            <div className="mr-3 flex h-10 w-10 flex-shrink-0 animate-pulse items-center justify-center rounded-lg bg-primary/10">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="mb-0.5 font-heading text-sm font-semibold text-primary">Randevu Planlayalım</p>
              <p className="text-xs text-muted-foreground">Size uygun görüşme biçimini birlikte belirleyelim.</p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-white text-muted-foreground shadow-md transition-colors hover:bg-destructive hover:text-white"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}

      <div className="group relative">
        {!isOpen && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-20"></span>}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className={`relative z-10 h-16 w-16 rounded-full shadow-lg shadow-primary/20 transition-all duration-500 ${
            isOpen
              ? "rotate-90 border-2 border-primary/20 bg-secondary text-primary hover:bg-white"
              : "bg-primary text-white hover:scale-110 hover:bg-primary-dark"
          }`}
        >
          {isOpen ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}

          {!isOpen && (
            <span className="absolute right-1 top-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-accent"></span>
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Chatbot;
