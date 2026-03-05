import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useState, useMemo, useCallback } from "react";
import { ArrowRight } from "lucide-react";

// Placeholder articles - will be replaced with Contentful data
const PLACEHOLDER_ARTICLES = [
  {
    slug: "estrategias-expansion-digital-b2b-2026",
    title: "Estrategias de Expansión Digital para B2B en 2026",
    excerpt: "Descubre las tendencias clave que están transformando el comercio B2B y cómo aprovecharlas para tu negocio.",
    category: "Expansión Digital",
    date: "4 Mar 2026",
    readTime: "8 min",
  },
  {
    slug: "inteligencia-artificial-ecommerce",
    title: "Inteligencia Artificial en eCommerce: Guía Práctica",
    excerpt: "Cómo implementar IA en tu estrategia de comercio electrónico para mejorar conversiones y experiencia de usuario.",
    category: "Inteligencia Artificial",
    date: "28 Feb 2026",
    readTime: "10 min",
  },
  {
    slug: "marketing-digital-b2b-leads",
    title: "Marketing Digital B2B: De Leads a Clientes",
    excerpt: "Estrategias probadas para convertir leads en clientes fieles a través del marketing digital B2B.",
    category: "Marketing Digital B2B",
    date: "20 Feb 2026",
    readTime: "7 min",
  },
  {
    slug: "transformacion-digital-legacy-nube",
    title: "Transformación Digital: De Legacy a la Nube",
    excerpt: "Guía paso a paso para migrar sistemas legacy a arquitecturas cloud-native sin interrumpir operaciones.",
    category: "Expansión Digital",
    date: "15 Feb 2026",
    readTime: "12 min",
  },
  {
    slug: "marketplaces-b2b-comercio-electronico",
    title: "Marketplaces B2B: El Futuro del Comercio Electrónico",
    excerpt: "Cómo los marketplaces B2B están revolucionando las cadenas de suministro y la distribución mayorista.",
    category: "Expansión Digital",
    date: "10 Feb 2026",
    readTime: "9 min",
  },
  {
    slug: "seo-b2b-posicionamiento-organico",
    title: "SEO B2B: Posicionamiento Orgánico que Genera Ventas",
    excerpt: "Estrategias de SEO específicas para empresas B2B que buscan generar leads calificados de forma orgánica.",
    category: "Marketing Digital B2B",
    date: "5 Feb 2026",
    readTime: "11 min",
  },
];

const CATEGORIES = [
  { label: "Todos", value: "all" },
  { label: "Expansión Digital", value: "Expansión Digital" },
  { label: "Inteligencia Artificial", value: "Inteligencia Artificial" },
  { label: "Marketing Digital B2B", value: "Marketing Digital B2B" },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    let articles = PLACEHOLDER_ARTICLES;
    if (activeCategory !== "all") {
      articles = articles.filter((a) => a.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      articles = articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.category.toLowerCase().includes(query)
      );
    }
    return articles;
  }, [activeCategory, searchQuery]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: PLACEHOLDER_ARTICLES.length };
    PLACEHOLDER_ARTICLES.forEach((a) => {
      counts[a.category] = (counts[a.category] || 0) + 1;
    });
    return counts;
  }, []);

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
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.value;
              const count = categoryCounts[cat.value] || 0;
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
                  <span
                    className={`
                      inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full text-xs font-semibold
                      ${isActive ? "bg-white/20 text-white" : "bg-secondary text-muted-foreground"}
                    `}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground">
              Mostrando{" "}
              <span className="font-semibold text-foreground">
                {filteredArticles.length}
              </span>{" "}
              artículo{filteredArticles.length !== 1 ? "s" : ""}
              {activeCategory !== "all" && (
                <>
                  {" "}en{" "}
                  <span className="font-semibold text-primary">
                    {activeCategory}
                  </span>
                </>
              )}
              {searchQuery && (
                <>
                  {" "}para &quot;
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
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="group cursor-pointer bg-white border border-border/60 rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="p-5 md:p-6">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <span>{article.date}</span>
                    <span className="text-muted-foreground/40">&middot;</span>
                    <span>{article.readTime} de lectura</span>
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
            ))}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
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

          {/* Contentful Integration Notice */}
          <div className="mt-16 p-8 bg-secondary rounded-xl text-center">
            <p className="text-muted-foreground text-sm">
              Los artículos del blog se integrarán con Contentful CMS para gestión dinámica de contenido.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
