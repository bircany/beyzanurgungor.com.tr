import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Blog />
      <Contact />

      <footer className="bg-foreground text-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2026 Psk. Dan. Ruveyda Özdemir. Tüm hakları saklıdır.
          </p>
          <p className="text-xs mt-2 opacity-80">
            Öğrencilerin zihinsel süreçlerini anlamaya ve yönetmeye odaklanan danışmanlık yaklaşımı
          </p>
          <p className="text-xs mt-4 text-muted-foreground/60">
            Present by SoftArtStudio
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
