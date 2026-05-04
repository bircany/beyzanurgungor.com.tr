import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Phone } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  type?: "text" | "whatsapp-cta";
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Merhaba. Ben Ruveyda Özdemir'in dijital asistanıyım. Danışmanlık süreci, hizmetler ve Mentora hakkında size nasıl yardımcı olabilirim?",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [interactionCount, setInteractionCount] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
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
        text: interactionCount === 0 
          ? "İsterseniz kısa bir ön görüşme ile hangi hizmetin uygun olduğunu birlikte netleştirebiliriz. Online ve yüz yüze seçenekler için WhatsApp üzerinden de ulaşabilirsiniz."
          : "Dilerseniz WhatsApp hattı üzerinden doğrudan iletişime geçerek randevu oluşturabilirsiniz.",
        isUser: false,
      };

      const ctaMessage: Message = {
        id: messages.length + 3,
        text: "Hemen WhatsApp üzerinden iletişime geçmek için aşağıdaki butona tıklayabilirsiniz:",
        isUser: false,
        type: "whatsapp-cta",
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botResponse, ctaMessage]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
      {isOpen && (
        <Card className="mb-4 w-[350px] h-[500px] flex flex-col shadow-card border-border/60 animate-fade-in-up origin-bottom-right overflow-hidden bg-white/95 backdrop-blur-sm">
          <div className="bg-gradient-to-r from-primary to-primary-dark p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-accent rounded-full absolute bottom-0 right-0 border-2 border-primary shadow-sm z-10"></div>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm tracking-wide">Dijital Asistan</h3>
                <p className="text-xs opacity-90 font-light">Online</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/20 h-8 w-8 rounded-full transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/30">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.isUser
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-white text-foreground border border-border/50 rounded-bl-none"
                  }`}
                >
                  {msg.text}

                  {msg.type === "whatsapp-cta" && (
                    <div className="mt-4 pt-3 border-t border-border/30">
                      <Button
                        className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-sm transition-all hover:scale-[1.02] font-semibold"
                        onClick={() => window.open("https://wa.me/905442150995", "_blank")}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        WhatsApp ile Görüş
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white shadow-sm border border-border/50 p-4 rounded-2xl rounded-bl-none">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-border/50">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <Input
                placeholder="Mesajınızı yazın..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={false}
                className="flex-1 bg-secondary/30 border-border/50 focus-visible:ring-primary rounded-xl"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!inputValue.trim()}
                className="bg-primary text-white hover:bg-primary-dark rounded-xl shadow-sm w-10 h-10 transition-transform hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </Card>
      )}

      {!isOpen && showTooltip && (
        <div
          className="absolute bottom-24 right-0 bg-white text-foreground px-5 py-4 rounded-2xl shadow-card border border-primary/20 animate-fade-in-up cursor-pointer flex items-center whitespace-nowrap z-40 hover:scale-[1.02] transition-transform max-w-[300px]"
          onClick={() => {
            setIsOpen(true);
            setShowTooltip(false);
          }}
        >
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 animate-pulse">
            <MessageCircle className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-heading font-semibold text-primary mb-0.5">Randevu Planlayalım</p>
            <p className="text-xs text-muted-foreground">Size uygun görüşme biçimini birlikte belirleyelim.</p>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute -top-2 -right-2 bg-white text-muted-foreground rounded-full w-6 h-6 flex items-center justify-center shadow-md border border-border hover:bg-destructive hover:text-white transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      <div className="relative group">
        {!isOpen && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-20 animate-ping"></span>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className={`rounded-full w-16 h-16 shadow-lg shadow-primary/20 relative z-10 transition-all duration-500 ${
            isOpen
              ? "bg-secondary text-primary hover:bg-white rotate-90 border-2 border-primary/20"
              : "bg-primary text-white hover:bg-primary-dark hover:scale-110"
          }`}
        >
          {isOpen ? <X className="w-7 h-7" /> : <MessageCircle className="w-7 h-7" />}

          {!isOpen && (
            <span className="absolute top-1 right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-accent border-2 border-white"></span>
            </span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Chatbot;
