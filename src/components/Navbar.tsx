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
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/70 bg-background/78 shadow-soft backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="min-w-0 flex-shrink">
            <h1 className="text-gradient text-sm sm:text-base md:text-lg lg:text-2xl font-extrabold whitespace-nowrap">
              <span className="inline sm:hidden">Psk. Beyzanur Özgüngör</span>
              <span className="hidden sm:inline">Psikolog Beyzanur Özgüngör</span>
            </h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:block">
            <div className="ml-8 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-2 py-2 text-sm font-semibold text-foreground transition-colors duration-200 hover:text-primary"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Always visible Randevu Al Button */}
            <a
              href="https://wa.me/905537754455"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackContactClick("whatsapp")}
              className="flex-shrink-0"
            >
              <Button size="sm" className="btn-cta !px-3 sm:!px-4 !py-2 text-xs sm:text-sm">
                <Phone className="mr-1.5 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Randevu Al
              </Button>
            </a>

            {/* Hamburger Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors duration-200 hover:text-primary focus:outline-none"
                aria-label="Menüyü aç veya kapat"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-white/70 bg-background/92 backdrop-blur-xl lg:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-semibold text-foreground transition-colors duration-200 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
