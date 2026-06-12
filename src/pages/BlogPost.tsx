import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Yazı Bulunamadı</h1>
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
      <article className="px-4 pb-20 pt-32">
        <div className="mx-auto max-w-3xl">
          <Link to="/#blog">
            <Button variant="ghost" className="-ml-4 mb-8 text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Geri Dön
            </Button>
          </Link>

          <div className="mb-10">
            <div className="mb-4 flex items-center gap-4 text-sm font-medium text-primary">
              <span className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground">
                <User className="h-4 w-4" />
                Psikolog Beyzanur Özgüngör
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              {post.title}
            </h1>
          </div>

          <div className="prose prose-lg max-w-none prose-primary">
            <div className="whitespace-pre-line text-lg leading-relaxed text-foreground/80">
              {post.content}
            </div>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <div className="rounded-lg bg-secondary/45 p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold">Bu süreçte desteğe mi ihtiyacınız var?</h3>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                Size veya çocuğunuza uygun danışmanlık alanını birlikte değerlendirmek için iletişime geçebilirsiniz.
              </p>
              <a href="https://wa.me/905537754455" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-cta w-full sm:w-auto">
                  WhatsApp ile Görüş
                </Button>
              </a>
            </div>
          </div>
        </div>
      </article>

      <footer className="bg-foreground py-8 text-background">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm">
            © 2026 Psikolog Beyzanur Özgüngör. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
