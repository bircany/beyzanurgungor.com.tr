import { useState } from "react";
import { BriefcaseBusiness, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Ana Sayfa", href: "/#hero" },
    { name: "Hakkımda", href: "/#about" },
    { name: "Hizmetler", href: "/#services" },
    { name: "Blog", href: "/#blog" },
    { name: "İletişim", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary sm:text-2xl">Psk. Dan. Ruveyda Özdemir</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) =>
                item.isRoute ? (
                  <a
                    key={item.name}
                    href={item.href}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
                  >
                    <BriefcaseBusiness className="mr-2 h-4 w-4" />
                    {item.name}
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>

          <div className="hidden items-center space-x-4 md:flex">
            <a href="https://wa.me/905442150995" target="_blank" rel="noopener noreferrer">
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
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="border-b border-border/50 bg-background md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-foreground transition-colors duration-200 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.isRoute ? (
                  <span className="inline-flex items-center">
                    <BriefcaseBusiness className="mr-2 h-4 w-4" />
                    {item.name}
                  </span>
                ) : (
                  item.name
                )}
              </a>
            ))}
            <div className="flex flex-col space-y-2 px-3 pt-4">
              <a href="https://wa.me/905442150995" target="_blank" rel="noopener noreferrer" className="w-full">
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
