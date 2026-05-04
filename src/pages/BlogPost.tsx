import { useParams, Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Yazı Bulunamadı</h1>
          <Link to="/">
            <Button>Anasayfaya Dön</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/#blog">
            <Button variant="ghost" className="mb-8 -ml-4 text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Geri Dön
            </Button>
          </Link>

          <div className="mb-10">
            <div className="flex items-center gap-4 text-sm text-primary font-medium mb-4">
              <span className="flex items-center gap-1.5 bg-primary/10 px-3 py-1 rounded-full">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <User className="h-4 w-4" />
                Ruveyda Özdemir
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {post.title}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none prose-primary">
            <div className="whitespace-pre-line text-foreground/80 leading-relaxed text-lg">
              {post.content}
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-border">
            <div className="bg-secondary/30 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Bu süreçte desteğe mi ihtiyacın var?</h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Sınav sürecini yönetmekte zorlanıyorsan, birlikte bir yol haritası çıkarabiliriz. 
                Online veya yüz yüze danışmanlık için hemen iletişime geçebilirsin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/905442150995" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="btn-cta w-full sm:w-auto">
                    WhatsApp ile Görüş
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      <footer className="bg-foreground text-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">
            © 2026 Psk. Dan. Ruveyda Özdemir. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
