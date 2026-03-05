import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import {
  Award,
  CheckCircle2,
  Target,
  TrendingUp,
  Briefcase,
  Linkedin,
} from "lucide-react";

export default function SobreMi() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sobre Mí - Juan Pablo Franco | Estratega de Expansión Digital"
        description="Con más de 15 años de experiencia en eCommerce y transformación digital. Especialista en VTEX, marketplaces B2B y estrategias de crecimiento para marcas globales."
        path="/sobre-mi"
        type="profile"
      />
      <Header />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 text-white relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.40 0.18 310) 0%, oklch(0.50 0.20 310) 40%, oklch(0.55 0.18 330) 70%, oklch(0.60 0.16 50) 100%)",
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-4">
              Sobre Mí
            </p>
            <h1 className="text-white mb-6">Juan Pablo Franco</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Estratega de Expansión Digital con más de 15 años transformando
              negocios a través del comercio electrónico en Colombia y el mundo.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="corp-white-section corp-section">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="flex justify-center">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663334573136/tqHoMdHlBsLGwZGk.png"
                  alt="Juan Pablo Franco"
                  className="w-auto max-h-[500px] object-contain rounded-lg drop-shadow-xl"
                />
              </div>

              {/* Bio */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Experto en Comercio Digital y Marketplaces
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Con más de 15 años de experiencia en eCommerce y transformación
                  digital, me especializo en implementaciones VTEX, desarrollo de
                  marketplaces B2B y estrategias de generación de leads para
                  empresas en Colombia y el mundo.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  He liderado proyectos para marcas globales como Coca-Cola,
                  Nestlé, Unilever y Amazon, generando resultados medibles en
                  crecimiento de ventas, optimización de procesos y expansión de
                  mercado.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="text-3xl font-bold text-primary">+15</p>
                    <p className="text-sm text-muted-foreground mt-1">Años Experiencia</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="text-3xl font-bold text-primary">+100</p>
                    <p className="text-sm text-muted-foreground mt-1">Proyectos</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <p className="text-3xl font-bold text-primary">3</p>
                    <p className="text-sm text-muted-foreground mt-1">Continentes</p>
                  </div>
                </div>
              </div>
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

      {/* Experience Timeline Section */}
      <section className="corp-gray-section corp-section">
        <div className="container">
          <div className="text-center mb-16">
            <p className="corp-label text-primary mb-4">Trayectoria</p>
            <h2>Experiencia Profesional</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="corp-card">
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:flex w-14 h-14 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="corp-label text-primary mb-2">2020 - Presente</p>
                    <h3 className="text-2xl font-semibold mb-2">Consultor Independiente</h3>
                    <p className="text-muted-foreground mb-4 text-lg">Estrategia Digital & eCommerce</p>
                    <ul className="space-y-3 text-base">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                        <span>Liderazgo de +50 proyectos de implementación VTEX para empresas Fortune 500</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                        <span>Desarrollo de marketplaces B2B con GMV superior a $10M USD</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                        <span>Generación de +5,000 leads calificados para clientes B2B</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="corp-card">
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:flex w-14 h-14 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="corp-label text-primary mb-2">2015 - 2020</p>
                    <h3 className="text-2xl font-semibold mb-2">Director de eCommerce</h3>
                    <p className="text-muted-foreground mb-4 text-lg">Empresa Multinacional FMCG</p>
                    <ul className="space-y-3 text-base">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                        <span>Gestión de equipo de 15 personas en 3 países de LATAM</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                        <span>Crecimiento de ventas online del 300% en 3 años</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                        <span>Implementación de estrategia omnicanal en 50+ tiendas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="corp-card">
              <CardContent className="pt-8">
                <div className="flex items-start gap-6">
                  <div className="hidden sm:flex w-14 h-14 rounded-full bg-primary/10 items-center justify-center flex-shrink-0">
                    <Briefcase className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="corp-label text-primary mb-2">2010 - 2015</p>
                    <h3 className="text-2xl font-semibold mb-2">Gerente de Marketing Digital</h3>
                    <p className="text-muted-foreground mb-4 text-lg">Agencia de Marketing Digital</p>
                    <ul className="space-y-3 text-base">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                        <span>Gestión de portafolio de 30+ clientes en retail y eCommerce</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                        <span>Desarrollo de estrategias SEO/SEM con ROI promedio del 400%</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-primary" />
                        <span>Capacitación de equipos en herramientas de analytics y CRO</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="corp-white-section corp-section">
        <div className="container">
          <div className="text-center mb-16">
            <p className="corp-label text-primary mb-4">Portfolio</p>
            <h2>Clientes Destacados</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              "Coca-Cola",
              "Nestlé",
              "Unilever",
              "Amazon",
              "Mercado Libre",
              "Rappi",
              "Falabella",
              "Grupo Éxito",
            ].map((client) => (
              <div
                key={client}
                className="corp-card text-center flex items-center justify-center h-24"
              >
                <p className="font-semibold text-foreground text-lg">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="corp-gray-section py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">¿Listo para trabajar juntos?</h2>
            <p className="text-lg text-muted-foreground">
              Agenda una consulta gratuita de 30 minutos para explorar cómo puedo
              ayudarte a alcanzar tus objetivos de negocio digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Agendar Consultoría
              </a>
              <a
                href="https://www.linkedin.com/in/juanpablo321/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors"
              >
                <Linkedin size={18} />
                Conectar en LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
