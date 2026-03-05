import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { trpc } from "@/lib/trpc";
import { useState, useMemo, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

// Placeholder articles shown when Contentful has no data
const PLACEHOLDER_ARTICLES = [
  {
    slug: "estrategias-expansion-digital-b2b-2026",
    title: "Estrategias de Expansión Digital para B2B en 2026",
    excerpt:
      "Descubre las tendencias clave que están transformando el comercio B2B y cómo aprovecharlas para tu negocio.",
    category: "Expansión Digital",
    publishDate: "2026-03-04",
    readTime: "8 min",
  },
  {
    slug: "inteligencia-artificial-ecommerce",
    title: "Inteligencia Artificial en eCommerce: Guía Práctica",
    excerpt:
      "Cómo implementar IA en tu estrategia de comercio electrónico para mejorar conversiones y experiencia de usuario.",
    category: "Inteligencia Artificial",
    publishDate: "2026-02-28",
    readTime: "10 min",
  },
  {
    slug: "marketing-digital-b2b-leads",
    title: "Marketing Digital B2B: De Leads a Clientes",
    excerpt:
      "Estrategias probadas para convertir leads en clientes fieles a través del marketing digital B2B.",
    category: "Marketing Digital B2B",
    publishDate: "2026-02-20",
    readTime: "7 min",
  },
  {
    slug: "transformacion-digital-legacy-nube",
    title: "Transformación Digital: De Legacy a la Nube",
    excerpt:
      "Guía paso a paso para migrar sistemas legacy a arquitecturas cloud-native sin interrumpir operaciones.",
    category: "Expansión Digital",
    publishDate: "2026-02-15",
    readTime: "12 min",
  },
  {
    slug: "marketplaces-b2b-comercio-electronico",
    title: "Marketplaces B2B: El Futuro del Comercio Electrónico",
    excerpt:
      "Cómo los marketplaces B2B están revolucionando las cadenas de suministro y la distribución mayorista.",
    category: "Expansión Digital",
    publishDate: "2026-02-10",
    readTime: "9 min",
  },
  {
    slug: "seo-b2b-posicionamiento-organico",
    title: "SEO B2B: Posicionamiento Orgánico que Genera Ventas",
    excerpt:
      "Estrategias de SEO específicas para empresas B2B que buscan generar leads calificados de forma orgánica.",
    category: "Marketing Digital B2B",
    publishDate: "2026-02-05",
    readTime: "11 min",
  },
];

const DEFAULT_CATEGORIES = [
  { label: "Todos", value: "all" },
  { label: "Expansión Digital", value: "Expansión Digital" },
  { label: "Inteligencia Artificial", value: "Inteligencia Artificial" },
  { label: "Marketing Digital B2B", value: "Marketing Digital B2B" },
];

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("es-CO", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch from Contentful via tRPC
  const { data: blogData } = trpc.blog.list.useQuery(
    {
      category: activeCategory !== "all" ? activeCategory : undefined,
      search: searchQuery.trim() || undefined,
      limit: 50,
    },
    { staleTime: 60_000 }
  );

  const { data: serverCategories } = trpc.blog.categories.useQuery(undefined, {
    staleTime: 120_000,
  });

  // Use Contentful data if available, otherwise fallback to placeholders
  const hasContentfulData = blogData && blogData.items.length > 0;

  const articles = useMemo(() => {
    if (hasContentfulData) {
      return blogData.items;
    }
    // Fallback: filter placeholders client-side
    let filtered = PLACEHOLDER_ARTICLES;
    if (activeCategory !== "all") {
      filtered = filtered.filter((a) => a.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      );
    }
    return filtered;
  }, [hasContentfulData, blogData, activeCategory, searchQuery]);

  // Build categories list
  const categories = useMemo(() => {
    if (serverCategories && serverCategories.length > 0) {
      return [
        { label: "Todos", value: "all" },
        ...serverCategories.map((c) => ({ label: c, value: c })),
      ];
    }
    return DEFAULT_CATEGORIES;
  }, [serverCategories]);

  // Counts for category badges
  const totalCount = hasContentfulData
    ? blogData.total
    : PLACEHOLDER_ARTICLES.length;

  const handleCategoryChange = useCallback((value: string) => {
    setActiveCategory(value);
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    },
    []
  );

  const clearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Blog de Expansión Digital - Juan Pablo Franco"
        description="Insights sobre transformación digital, inteligencia artificial y marketing B2B para empresas que buscan crecer en el mundo digital."
        path="/blog"
      />
      <Header />

      <main className="flex-1 pt-28 md:pt-32 pb-20">
        <div className="container">
          {/* Blog Header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Blog de Expansión Digital
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Insights sobre transformación digital, inteligencia artificial y
              marketing B2B para empresas que buscan crecer en el mundo digital.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-muted-foreground/60 group-focus-within:text-primary transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Buscar artículos por título, tema o palabra clave..."
                className="w-full pl-12 pr-12 py-3.5 bg-white border border-border/80 rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 shadow-sm hover:shadow-md focus:shadow-md"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-muted-foreground/60 hover:text-foreground transition-colors"
                  aria-label="Limpiar búsqueda"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => handleCategoryChange(cat.value)}
                  className={`
                    inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm font-medium
                    transition-all duration-200 border
                    ${
                      isActive
                        ? "bg-primary text-white border-primary shadow-md"
                        : "bg-white text-muted-foreground border-border hover:border-primary/40 hover:text-primary hover:bg-primary/5"
                    }
                  `}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">
              Mostrando{" "}
              <span className="font-semibold text-foreground">
                {articles.length}
              </span>{" "}
              artículo{articles.length !== 1 ? "s" : ""}
              {activeCategory !== "all" && (
                <>
                  {" "}
                  en{" "}
                  <span className="font-semibold text-primary">
                    {activeCategory}
                  </span>
                </>
              )}
              {searchQuery && (
                <>
                  {" "}
                  para &quot;
                  <span className="font-semibold text-foreground">
                    {searchQuery}
                  </span>
                  &quot;
                </>
              )}
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={hasContentfulData ? `/blog/${article.slug}` : "#"}
                className="no-underline"
              >
                <article className="group cursor-pointer bg-white border border-border/60 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full">
                  {/* Featured image if available */}
                  {"featuredImageUrl" in article &&
                    (article as any).featuredImageUrl && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={`${(article as any).featuredImageUrl}?w=600&h=340&fit=fill&q=80&fm=webp`}
                          alt={article.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  <div className="p-5 md:p-6">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                        {article.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                      <span>
                        {article.publishDate
                          ? formatDate(article.publishDate)
                          : ""}
                      </span>
                      {"readTime" in article && article.readTime && (
                        <>
                          <span className="text-muted-foreground/40">
                            &middot;
                          </span>
                          <span>{article.readTime} de lectura</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border/40">
                      <span className="text-sm font-semibold text-primary group-hover:underline inline-flex items-center gap-1">
                        Leer artículo
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {articles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground mb-2">
                No se encontraron artículos
              </p>
              <p className="text-sm text-muted-foreground/70 mb-6">
                {searchQuery
                  ? `No hay resultados para "${searchQuery}". Intenta con otros términos.`
                  : "No hay artículos en esta categoría."}
              </p>
              <div className="flex items-center justify-center gap-3">
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    Limpiar búsqueda
                  </button>
                )}
                {activeCategory !== "all" && (
                  <button
                    onClick={() => handleCategoryChange("all")}
                    className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Ver todos los artículos
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
