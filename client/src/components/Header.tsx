import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }, 100);
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (location === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        isScrolled || isMobileMenuOpen ? "shadow-md" : ""
      }`}
    >
      {/* Secondary Top Bar */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-100">
        <div className="container">
          <div className="flex items-center justify-end gap-6 h-8">
            <a
              href="/sobre-mi"
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre Mí
            </a>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center hover:opacity-80 transition-opacity z-50"
          >
            <span className="text-xl font-bold text-foreground">
              Juan Pablo Franco
            </span>
          </Link>

          {/* Desktop Primary Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/blog"
              className="text-base font-normal text-foreground hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="/contacto"
              className="text-base font-normal text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-white transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center pt-10 px-6">
          <div className="flex items-center gap-6 mb-6">
            <a
              href="/sobre-mi"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Sobre Mí
            </a>
            <span className="text-gray-200">|</span>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <span className="text-gray-200">|</span>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
          </div>

          <div className="w-20 h-px bg-gray-200 mb-8" />

          <div className="flex flex-col items-center gap-7">
            <a
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
            >
              Blog
            </a>
            <a
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-medium text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </a>
          </div>

          <a
            href="https://wa.me/573235812748"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-colors"
          >
            Agendar Consultoría
          </a>
        </div>
      </div>
    </header>
  );
}
