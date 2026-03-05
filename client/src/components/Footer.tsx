import { Linkedin, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Juan Pablo Franco</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              Estratega de Expansión Digital especializado en eCommerce, VTEX y
              desarrollo de marketplaces B2B.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-base">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+573235812748"
                  className="hover:text-primary transition-colors"
                >
                  +57 323 581 2748
                </a>
              </li>
              <li className="flex items-center gap-3 text-base">
                <MapPin size={18} className="text-primary flex-shrink-0" />
                <span>Bogotá D.C., Colombia</span>
              </li>
              <li className="flex items-center gap-3 text-base">
                <Linkedin size={18} className="text-primary flex-shrink-0" />
                <a
                  href="https://www.linkedin.com/in/juanpablo321/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Enlaces</h4>
            <ul className="space-y-2 text-base">
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/sobre-mi" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a
                  href="/#servicios"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('servicios');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#servicios';
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-muted-foreground">
            &copy; {new Date().getFullYear()} Juan Pablo Franco. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-base">
            <a href="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
              Privacidad
            </a>
            <a href="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
