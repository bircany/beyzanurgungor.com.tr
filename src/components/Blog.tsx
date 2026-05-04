import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { Card, CardContent } from "@/components/ui/card";

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Zihin ve Başarı Üzerine
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sınav süreçleri, öğrenci psikolojisi ve verimli çalışma stratejileri üzerine paylaşımlarım.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="card-professional flex flex-col h-full hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <post.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs text-primary font-semibold mb-3 tracking-wider uppercase">
                  {post.date}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-primary font-semibold cursor-pointer hover:underline inline-flex items-center"
                  >
                    Devamını Oku
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-foreground italic max-w-2xl mx-auto">
            "Başarı, sadece bilginin değil; zihnin, duyguların ve alışkanlıkların doğru yönetilmesinin sonucudur. Seninle bu yolculuğu birlikte planlayabiliriz."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
