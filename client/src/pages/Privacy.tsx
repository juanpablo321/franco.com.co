import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                En franco.com.co, respetamos tu privacidad y nos comprometemos a proteger
                la información personal que compartas con nosotros.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Información que Recopilamos
              </h2>
              <p className="text-base leading-relaxed">
                Recopilamos información que nos proporcionas directamente a través del
                formulario de contacto, incluyendo nombre, correo electrónico, empresa,
                teléfono y mensaje.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Uso de la Información
              </h2>
              <p className="text-base leading-relaxed">
                La información recopilada se utiliza exclusivamente para responder a tus
                consultas y proporcionarte información sobre nuestros servicios de
                consultoría digital.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Contacto
              </h2>
              <p className="text-base leading-relaxed">
                Si tienes preguntas sobre esta política de privacidad, puedes contactarnos
                a través de nuestro formulario de contacto o vía WhatsApp al +57 323 581 2748.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
