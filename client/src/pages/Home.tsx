import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Award,
  BarChart3,
  CheckCircle2,
  Globe,
  Linkedin,
  MapPin,
  ShoppingCart,
  Target,
  TrendingUp,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Juan Pablo Franco - Estratega de Expansión Digital"
        description="Estratega de Expansión Digital especializado en eCommerce, VTEX, marketplaces B2B y transformación digital. +15 años de experiencia con marcas como Coca-Cola, Nestlé, Unilever y Amazon."
        path="/"
      />
      <Header />

      {/* Hero Section - Purple gradient background with asymmetric layout */}
      <section
        id="hero"
        className="min-h-screen relative overflow-hidden text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.40 0.18 310) 0%, oklch(0.50 0.20 310) 40%, oklch(0.55 0.18 330) 70%, oklch(0.60 0.16 50) 100%)",
        }}
      >
        <div className="container relative z-10 flex items-end min-h-screen pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end w-full">
            {/* Left: Text Content */}
            <div className="space-y-6 lg:space-y-8 pb-0 lg:pb-24 pt-20">
              <h1 className="text-white text-center lg:text-left">
                Estratega de Expansión Digital
              </h1>
              <p className="text-lg md:text-2xl text-white/90 leading-relaxed text-center lg:text-left">
                Transformando negocios a través de estrategias de comercio digital
                basadas en datos en Colombia y el mundo.
              </p>
              <div className="pt-4 pb-4 flex justify-center lg:justify-start">
                <button
                  onClick={() =>
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="corp-button-outline text-lg px-8 py-4"
                >
                  Agendar Consultoría Gratuita
                </button>
              </div>
              {/* Mobile Hero Image */}
              <div className="lg:hidden flex justify-center pt-4">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663334573136/tqHoMdHlBsLGwZGk.png"
                  alt="Juan Pablo Franco"
                  loading="eager"
                  className="w-auto object-contain object-bottom drop-shadow-2xl"
                  style={{ height: "320px", marginBottom: "-1px" }}
                />
              </div>
            </div>

            {/* Right: Professional Image - Desktop only */}
            <div className="hidden lg:flex justify-end items-end self-end">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663334573136/tqHoMdHlBsLGwZGk.png"
                alt="Juan Pablo Franco"
                loading="eager"
                className="w-auto object-contain object-bottom drop-shadow-2xl"
                style={{ height: "calc(100vh - 80px)", maxHeight: "900px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats - White section */}
      <section className="corp-white-section py-16">
        <div className="container">
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <p className="text-5xl font-bold text-primary mb-2">+15</p>
              <p className="text-base text-muted-foreground">Años Experiencia</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary mb-2">+100</p>
              <p className="text-base text-muted-foreground">Proyectos</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary mb-2">Global</p>
              <p className="text-base text-muted-foreground">Alcance</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Gray background */}
      <section id="about" className="corp-gray-section corp-section">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <p className="corp-label text-primary mb-4">Sobre Mí</p>
              <h2>Experto en Comercio Digital y Marketplaces</h2>
            </div>
            <div className="space-y-6 text-center">
              <p className="text-xl leading-relaxed">
                Con más de 15 años de experiencia en eCommerce y transformación
                digital, me especializo en implementaciones VTEX, desarrollo de
                marketplaces B2B y estrategias de generación de leads para empresas
                en Colombia y el mundo.
              </p>
              <p className="text-xl leading-relaxed">
                He liderado proyectos para marcas globales como Coca-Cola, Nestlé,
                Unilever y Amazon, generando resultados medibles en crecimiento de
                ventas, optimización de procesos y expansión de mercado.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Enfoque en Resultados</h3>
                <p className="text-muted-foreground">
                  Estrategias basadas en datos con KPIs claros y ROI medible
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Crecimiento Escalable</h3>
                <p className="text-muted-foreground">
                  Soluciones diseñadas para crecer con tu negocio
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Experiencia Global</h3>
                <p className="text-muted-foreground">
                  Proyectos exitosos en 3 continentes con marcas líderes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - White background */}
      <section id="servicios" className="corp-white-section corp-section">
        <div className="container">
          <div className="text-center mb-16">
            <p className="corp-label text-primary mb-4">Servicios</p>
            <h2>Soluciones de Comercio Digital</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 - Consultoría eCommerce */}
            <Card className="corp-card">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Consultoría eCommerce</h3>
                <p className="text-muted-foreground">
                  Implementación y optimización de plataformas de comercio electrónico para
                  maximizar conversiones y mejorar la experiencia del usuario.
                </p>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Auditoría y estrategia eCommerce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Implementación VTEX end-to-end</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Optimización de conversión (CRO)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 2 - Marketplaces B2B */}
            <Card className="corp-card">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Marketplaces B2B</h3>
                <p className="text-muted-foreground">
                  Estrategias de entrada a nuevos mercados, localización y adaptación
                  cultural para llevar tu eCommerce B2B más allá de fronteras.
                </p>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Análisis de mercados internacionales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Localización y adaptación cultural</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Logística y operaciones cross-border</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 3 - Estrategia Digital y Marketing */}
            <Card className="corp-card">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Estrategia Digital y Marketing</h3>
                <p className="text-muted-foreground">
                  Implementación de dashboards y análisis de datos para toma de
                  decisiones basadas en métricas clave.
                </p>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Dashboards personalizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Análisis de comportamiento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Reportes de performance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 4 - Transformación Digital */}
            <Card className="corp-card">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Transformación Digital</h3>
                <p className="text-muted-foreground">
                  Acompañamiento en procesos de digitalización empresarial y
                  adopción de nuevas tecnologías.
                </p>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Roadmap de digitalización</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Change management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Capacitación de equipos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 5 - Generación de Leads B2B */}
            <Card className="corp-card">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Generación de Leads B2B</h3>
                <p className="text-muted-foreground">
                  Estrategias de marketing digital y automatización para generar
                  leads calificados y aumentar conversiones B2B.
                </p>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Estrategia de contenido B2B</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Marketing automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Optimización de funnel de ventas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Service 6 - Estrategia Omnicanal */}
            <Card className="corp-card">
              <CardContent className="pt-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Estrategia Omnicanal</h3>
                <p className="text-muted-foreground">
                  Integración de canales online y offline para experiencia de
                  cliente unificada y sin fricciones.
                </p>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Integración de sistemas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Unified commerce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                    <span>Customer journey mapping</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Teaser Section */}
      <section id="blog" className="corp-gray-section corp-section">
        <div className="container">
          <div className="text-center mb-12">
            <p className="corp-label text-primary mb-4">Blog</p>
            <h2 className="mb-6">Insights de Expansión Digital</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Artículos sobre transformación digital, inteligencia artificial y
              marketing B2B para empresas que buscan crecer en el mundo digital.
            </p>
          </div>

          {/* Placeholder blog cards - will be replaced with Contentful data */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Estrategias de Expansión Digital para B2B en 2026",
                category: "Expansión Digital",
                excerpt:
                  "Descubre las tendencias clave que están transformando el comercio B2B y cómo aprovecharlas para tu negocio.",
              },
              {
                title: "Inteligencia Artificial en eCommerce: Guía Práctica",
                category: "Inteligencia Artificial",
                excerpt:
                  "Cómo implementar IA en tu estrategia de comercio electrónico para mejorar conversiones y experiencia de usuario.",
              },
              {
                title: "Marketing Digital B2B: De Leads a Clientes",
                category: "Marketing Digital B2B",
                excerpt:
                  "Estrategias probadas para convertir leads en clientes fieles a través del marketing digital B2B.",
              },
            ].map((article, index) => (
              <Card key={index} className="corp-card group cursor-pointer hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6 space-y-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                  <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                    Leer artículo
                    <ArrowRight size={14} />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/blog" className="corp-button-solid inline-block">
              Ver Todos los Artículos
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Purple gradient background */}
      <section
        id="contacto"
        className="corp-section text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.40 0.18 310) 0%, oklch(0.50 0.20 310) 40%, oklch(0.55 0.18 330) 70%, oklch(0.60 0.16 50) 100%)",
        }}
      >
        <div className="container">
          <div className="text-center mb-16">
            <p className="corp-label text-white/80 mb-4">Contacto</p>
            <h2 className="text-white">Trabajemos Juntos</h2>
            <p className="text-xl text-white/90 mt-6 max-w-2xl mx-auto">
              ¿Listo para llevar tu negocio al siguiente nivel? Agenda una
              consulta gratuita de 30 minutos.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* HubSpot Meetings Embed */}
            <div className="bg-white rounded-lg overflow-hidden" style={{ minHeight: "660px" }}>
              <iframe
                src="https://meetings.hubspot.com/juanpablo321?embed=true"
                width="100%"
                height="660"
                frameBorder="0"
                style={{ border: "none", minHeight: "660px" }}
                title="Agendar Reunión con Juan Pablo Franco"
                allow="camera; microphone"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-8 text-white">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-white/80">
                        Whatsapp
                      </p>
                      <a
                        href="https://wa.me/573235812748"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl hover:underline"
                      >
                        +57 323 581 2748
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-white/80">
                        Ubicación
                      </p>
                      <p className="text-xl">Bogotá D.C., Colombia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Linkedin size={24} className="flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider mb-2 text-white/80">
                        LinkedIn
                      </p>
                      <a
                        href="https://www.linkedin.com/in/juanpablo321/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl hover:underline"
                      >
                        /in/juanpablo321
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
