import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Términos y Condiciones</h1>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Al acceder y utilizar el sitio web franco.com.co, aceptas cumplir con
                estos términos y condiciones de uso.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Uso del Sitio
              </h2>
              <p className="text-base leading-relaxed">
                Este sitio web es propiedad de Juan Pablo Franco y se proporciona con
                fines informativos sobre servicios de consultoría en comercio digital y
                transformación digital.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Propiedad Intelectual
              </h2>
              <p className="text-base leading-relaxed">
                Todo el contenido publicado en este sitio, incluyendo textos, imágenes,
                logotipos y diseño, está protegido por derechos de autor y es propiedad
                de Juan Pablo Franco.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                Contacto
              </h2>
              <p className="text-base leading-relaxed">
                Para consultas sobre estos términos, contáctanos vía WhatsApp al
                +57 323 581 2748 o a través de nuestro formulario de contacto.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
