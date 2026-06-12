import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactClick } from "@/lib/analytics";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Ana Sayfa", href: "/#hero" },
    { name: "Uzmanlıklar", href: "/#services" },
    { name: "Biyografi", href: "/#about" },
    { name: "Yazılar", href: "/#blog" },
    { name: "İletişim", href: "/#contact" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-background/92 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="min-w-0 flex-shrink">
            <h1 className="truncate text-lg font-bold text-primary sm:text-2xl">Psikolog Beyzanur Özgüngör</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-8 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-2 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            <a
              href="https://wa.me/905537754455"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick("whatsapp")}
            >
              <Button size="sm" className="btn-cta !px-4 !py-2">
                <Phone className="mr-2 h-4 w-4" />
                Randevu Al
              </Button>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground transition-colors duration-200 hover:text-primary"
              aria-label="Menüyü aç veya kapat"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-border/60 bg-background md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground transition-colors duration-200 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col space-y-2 px-3 pt-4">
              <a
                href="https://wa.me/905537754455"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
                onClick={() => trackContactClick("whatsapp")}
              >
                <Button size="sm" className="btn-cta w-full">
                  <Phone className="mr-2 h-4 w-4" />
                  Randevu Al
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
