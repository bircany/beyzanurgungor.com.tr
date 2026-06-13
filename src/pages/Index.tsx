import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Blog />
      <Contact />

      <footer className="bg-foreground py-8 text-background">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm">
            © 2026 Psikolog Beyzanur Özgüngör. Tüm hakları saklıdır.
          </p>
          <p className="mt-2 text-xs opacity-80">
            Çağ Psikoloji | Çocuk, genç, yetişkin, çift ve aile danışmanlığı
          </p>
          <p className="mt-4 text-xs text-background/55">
            Present by Softart Studios
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
