import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  type?: "website" | "article" | "profile";
}

// JSON-LD for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Juan Pablo Franco - Estratega de Expansión Digital",
  url: "https://franco.com.co",
  description:
    "Consultoría especializada en eCommerce, VTEX, marketplaces B2B y transformación digital en Colombia y el mundo.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressRegion: "D.C.",
    addressCountry: "CO",
  },
  telephone: "+573235812748",
  sameAs: ["https://www.linkedin.com/in/juanpablo321/"],
  founder: {
    "@type": "Person",
    name: "Juan Pablo Franco",
    jobTitle: "Estratega de Expansión Digital",
    url: "https://franco.com.co/sobre-mi",
  },
};

// JSON-LD for Services
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicios de Consultoría Digital",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Consultoría eCommerce",
      description:
        "Implementación y optimización de plataformas de comercio electrónico, incluyendo VTEX, para maximizar conversiones.",
      provider: { "@type": "Person", name: "Juan Pablo Franco" },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Marketplaces B2B",
      description:
        "Estrategias de entrada a nuevos mercados y desarrollo de marketplaces B2B con localización y adaptación cultural.",
      provider: { "@type": "Person", name: "Juan Pablo Franco" },
    },
    {
      "@type": "Service",
      position: 3,
      name: "Estrategia Digital y Marketing",
      description:
        "Implementación de dashboards y análisis de datos para toma de decisiones basadas en métricas clave.",
      provider: { "@type": "Person", name: "Juan Pablo Franco" },
    },
    {
      "@type": "Service",
      position: 4,
      name: "Transformación Digital",
      description:
        "Acompañamiento en procesos de digitalización empresarial y adopción de nuevas tecnologías.",
      provider: { "@type": "Person", name: "Juan Pablo Franco" },
    },
    {
      "@type": "Service",
      position: 5,
      name: "Generación de Leads B2B",
      description:
        "Estrategias de marketing digital y automatización para generar leads calificados y aumentar conversiones B2B.",
      provider: { "@type": "Person", name: "Juan Pablo Franco" },
    },
  ],
};

export default function SEO({
  title = "Juan Pablo Franco - Estratega de Expansión Digital",
  description = "Estratega de Expansión Digital especializado en eCommerce, VTEX, marketplaces B2B y transformación digital en Colombia y el mundo.",
  path = "/",
  type = "website",
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // Open Graph tags
    const ogTags: Record<string, string> = {
      "og:title": title,
      "og:description": description,
      "og:type": type,
      "og:url": `https://franco.com.co${path}`,
      "og:site_name": "Juan Pablo Franco",
      "og:locale": "es_CO",
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Twitter Card tags
    const twitterTags: Record<string, string> = {
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://franco.com.co${path}`);

    // JSON-LD structured data
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach((s) => s.remove());

    const orgScript = document.createElement("script");
    orgScript.type = "application/ld+json";
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    if (path === "/") {
      const svcScript = document.createElement("script");
      svcScript.type = "application/ld+json";
      svcScript.textContent = JSON.stringify(servicesSchema);
      document.head.appendChild(svcScript);
    }

    return () => {
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach((s) => s.remove());
    };
  }, [title, description, path, type]);

  return null;
}
