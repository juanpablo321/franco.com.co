import { trpc } from "@/lib/trpc";
import { useRoute, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import RichTextRenderer from "@/components/RichTextRenderer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";

  const { data: post, isLoading, error } = trpc.blog.bySlug.useQuery(
    { slug },
    { enabled: !!slug }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <div className="animate-pulse space-y-6">
                <div className="h-4 bg-gray-200 rounded w-24" />
                <div className="h-10 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
                <div className="h-64 bg-gray-200 rounded-lg" />
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded" />
                  <div className="h-4 bg-gray-200 rounded" />
                  <div className="h-4 bg-gray-200 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <SEO
          title="Artículo no encontrado - Juan Pablo Franco"
          description="El artículo que buscas no está disponible."
          path={`/blog/${slug}`}
        />
        <main className="pt-32 pb-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center py-20">
              <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
              <p className="text-muted-foreground mb-8">
                El artículo que buscas no está disponible o ha sido removido.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-white transition-colors"
                style={{ backgroundColor: "oklch(0.65 0.18 50)" }}
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al Blog
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDate = post.publishDate
    ? new Date(post.publishDate).toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic SEO from Contentful fields */}
      <SEO
        title={`${post.title} - Juan Pablo Franco`}
        description={post.excerpt || `Lee sobre ${post.title} en el blog de Juan Pablo Franco.`}
        path={`/blog/${slug}`}
        type="article"
      />
      <Header />

      <main className="pt-28 md:pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors hover:opacity-80"
              style={{ color: "oklch(0.65 0.18 50)" }}
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al Blog
            </Link>

            {/* Category badge */}
            {post.category && (
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
                style={{
                  backgroundColor: "oklch(0.97 0.02 50)",
                  color: "oklch(0.55 0.18 50)",
                }}
              >
                {post.category}
              </span>
            )}

            {/* Title */}
            <h1
              className="font-bold leading-tight mb-6"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "oklch(0.18 0.01 310)",
                letterSpacing: "-0.02em",
              }}
            >
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-5 mb-8 pb-8 border-b border-gray-200">
              {post.author && (
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              )}
              {formattedDate && (
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {formattedDate}
                </span>
              )}
              {post.readTime && (
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              )}
            </div>

            {/* Featured Image */}
            {post.featuredImageUrl && (
              <figure className="mb-10">
                <img
                  src={`${post.featuredImageUrl}?w=1200&q=85&fm=webp`}
                  alt={post.featuredImageAlt || post.title}
                  loading="eager"
                  className="w-full rounded-lg shadow-md"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </figure>
            )}

            {/* Rich Text Content */}
            {post.content && <RichTextRenderer document={post.content} />}

            {/* CTA at bottom */}
            <div
              className="mt-16 p-8 rounded-xl text-center"
              style={{
                background: "linear-gradient(135deg, oklch(0.40 0.18 300), oklch(0.50 0.18 320))",
              }}
            >
              <h3 className="text-xl font-bold text-white mb-3">
                ¿Te interesa este tema?
              </h3>
              <p className="text-white/80 mb-6 max-w-md mx-auto">
                Agenda una consultoría gratuita y conversemos sobre cómo aplicar
                estas estrategias en tu negocio.
              </p>
              <Link
                href="/contacto"
                className="inline-block px-8 py-3 rounded-lg font-semibold text-white border-2 border-white transition-all hover:bg-white/10"
              >
                Agendar Consultoría Gratuita
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
