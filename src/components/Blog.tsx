import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-gradient mb-6 text-4xl font-extrabold md:text-5xl">
            Psikolojik Danışmanlık Yazıları
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Çocuk terapisi, ergen danışmanlığı, aile ilişkileri ve dikkat değerlendirme süreçlerine dair bilgilendirici içerikler.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="card-professional flex h-full flex-col transition-all duration-300 hover:shadow-xl">
              <CardContent className="flex h-full flex-col p-8">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <post.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                  {post.date}
                </div>
                <h3 className="mb-4 text-2xl font-bold leading-tight text-foreground">
                  {post.title}
                </h3>
                <p className="mb-6 flex-grow leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="border-t border-border/50 pt-4">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex cursor-pointer items-center font-semibold text-primary hover:underline"
                  >
                    Devamını Oku
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mx-auto max-w-2xl text-lg italic text-foreground">
            "Psikolojik danışmanlık süreci; kişinin kendini, ilişkilerini ve ihtiyaçlarını güvenli bir zeminde anlamasına eşlik eder."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
