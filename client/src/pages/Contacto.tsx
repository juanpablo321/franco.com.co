import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { z } from "zod";

// Zod schema for contact form validation
export const contactSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  email: z
    .string()
    .email("Ingresa un correo electrónico válido"),
  empresa: z
    .string()
    .max(100, "El nombre de la empresa no puede exceder 100 caracteres")
    .optional()
    .or(z.literal("")),
  telefono: z
    .string()
    .max(20, "El teléfono no puede exceder 20 caracteres")
    .optional()
    .or(z.literal("")),
  mensaje: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(2000, "El mensaje no puede exceder 2000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export default function Contacto() {
  const [formData, setFormData] = useState<ContactFormData>({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container">
            <div className="max-w-xl mx-auto text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold">¡Mensaje Enviado!</h1>
              <p className="text-lg text-muted-foreground">
                Gracias por contactarme. Te responderé dentro de las próximas 24
                horas hábiles.
              </p>
              <a
                href="/"
                className="inline-block corp-button-solid mt-4"
              >
                Volver al Inicio
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contacto - Juan Pablo Franco | Consultoría Digital"
        description="Contacta a Juan Pablo Franco para consultoría en eCommerce, marketplaces B2B y transformación digital. Agenda una consulta gratuita de 30 minutos."
        path="/contacto"
      />
      <Header />

      {/* Hero */}
      <section
        className="pt-32 pb-16 text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.40 0.18 310) 0%, oklch(0.50 0.20 310) 40%, oklch(0.55 0.18 330) 70%, oklch(0.60 0.16 50) 100%)",
        }}
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-4">
              Contacto
            </p>
            <h1 className="text-white mb-6">Hablemos de tu Proyecto</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Cuéntame sobre tu negocio y cómo puedo ayudarte a alcanzar tus
              objetivos de crecimiento digital.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="corp-section">
        <div className="container">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="block text-sm font-medium mb-2"
                    >
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.nombre
                          ? "border-destructive"
                          : "border-border"
                      } bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                      placeholder="Tu nombre completo"
                    />
                    {errors.nombre && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.nombre}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? "border-destructive"
                          : "border-border"
                      } bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all`}
                      placeholder="tu@empresa.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="empresa"
                      className="block text-sm font-medium mb-2"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefono"
                      className="block text-sm font-medium mb-2"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.mensaje
                        ? "border-destructive"
                        : "border-border"
                    } bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none`}
                    placeholder="Cuéntame sobre tu proyecto o consulta..."
                  />
                  {errors.mensaje && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.mensaje}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg rounded-full"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="corp-card">
                <h3 className="text-xl font-semibold mb-6">
                  Información de Contacto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider mb-1 text-muted-foreground">
                        Whatsapp
                      </p>
                      <a
                        href="https://wa.me/573235812748"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +57 323 581 2748
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider mb-1 text-muted-foreground">
                        Ubicación
                      </p>
                      <p>Bogotá D.C., Colombia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Linkedin size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider mb-1 text-muted-foreground">
                        LinkedIn
                      </p>
                      <a
                        href="https://www.linkedin.com/in/juanpablo321/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        /in/juanpablo321
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="corp-card bg-primary/5 border border-primary/10">
                <h4 className="font-semibold mb-3">Consultoría Gratuita</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Agenda una llamada de 30 minutos para explorar cómo puedo
                  ayudarte con tu estrategia digital.
                </p>
                <a
                  href="/#contacto"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                >
                  Agendar ahora &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
