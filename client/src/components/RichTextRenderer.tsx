import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type { ReactNode } from "react";

interface RichTextRendererProps {
  document: any;
  className?: string;
}

// Custom rendering options for Contentful Rich Text
// Styles match the .blog-content CSS classes defined in index.css
const renderOptions = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => (
      <strong className="font-bold" style={{ color: "oklch(0.20 0.01 310)" }}>
        {text}
      </strong>
    ),
    [MARKS.ITALIC]: (text: ReactNode) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text: ReactNode) => <u>{text}</u>,
    [MARKS.CODE]: (text: ReactNode) => (
      <code className="px-1.5 py-0.5 rounded bg-gray-100 text-sm font-mono">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: ReactNode) => (
      <p
        className="mb-7 leading-[1.85]"
        style={{ fontSize: "1.125rem", color: "oklch(0.30 0.01 310)" }}
      >
        {children}
      </p>
    ),
    [BLOCKS.HEADING_2]: (_node: any, children: ReactNode) => (
      <h2
        className="font-bold leading-[1.3] mt-14 mb-5 pb-3"
        style={{
          fontSize: "1.75rem",
          letterSpacing: "-0.01em",
          color: "oklch(0.18 0.01 310)",
          borderBottom: "2px solid oklch(0.92 0.008 310)",
        }}
      >
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (_node: any, children: ReactNode) => (
      <h3
        className="font-semibold leading-[1.35] mt-10 mb-4"
        style={{ fontSize: "1.375rem", color: "oklch(0.20 0.01 310)" }}
      >
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (_node: any, children: ReactNode) => (
      <h4
        className="font-semibold leading-snug mt-8 mb-3"
        style={{ fontSize: "1.25rem", color: "oklch(0.22 0.01 310)" }}
      >
        {children}
      </h4>
    ),
    [BLOCKS.UL_LIST]: (_node: any, children: ReactNode) => (
      <ul className="my-6 pl-0 list-none">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_node: any, children: ReactNode) => (
      <ol className="my-6 pl-0 list-none" style={{ counterReset: "ol-counter" }}>
        {children}
      </ol>
    ),
    [BLOCKS.LIST_ITEM]: (node: any, children: ReactNode) => {
      // Determine if parent is ordered or unordered based on content
      return (
        <li
          className="relative pl-7 mb-3 leading-[1.75]"
          style={{ fontSize: "1.1rem", color: "oklch(0.30 0.01 310)" }}
        >
          {children}
        </li>
      );
    },
    [BLOCKS.QUOTE]: (_node: any, children: ReactNode) => (
      <blockquote
        className="my-10 py-6 px-7 rounded-r-lg"
        style={{
          borderLeft: "4px solid oklch(0.65 0.18 50)",
          backgroundColor: "oklch(0.97 0.005 310)",
        }}
      >
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => (
      <hr className="my-10 border-t-2 border-gray-200" />
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
      const file = node.data?.target?.fields?.file;
      const title = node.data?.target?.fields?.title || "";
      const description = node.data?.target?.fields?.description || "";

      if (!file) return null;

      const url = file.url?.startsWith("//") ? `https:${file.url}` : file.url;
      const isImage = file.contentType?.startsWith("image/");

      if (!isImage) {
        return (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2"
          >
            {title || "Descargar archivo"}
          </a>
        );
      }

      // Optimized image with responsive sizing
      const width = file.details?.image?.width || 800;
      const optimizedUrl = `${url}?w=${Math.min(width, 1200)}&q=85&fm=webp`;

      return (
        <figure className="my-10">
          <img
            src={optimizedUrl}
            alt={description || title}
            loading="lazy"
            decoding="async"
            className="w-full rounded-lg shadow-md"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          {(description || title) && (
            <figcaption className="mt-3 text-center text-sm text-muted-foreground italic">
              {description || title}
            </figcaption>
          )}
        </figure>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
      // Handle embedded entries (e.g., code blocks, callouts)
      const entry = node.data?.target;
      if (!entry) return null;

      return (
        <div className="my-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-muted-foreground">
            Contenido embebido: {entry.sys?.contentType?.sys?.id || "desconocido"}
          </p>
        </div>
      );
    },
    [INLINES.HYPERLINK]: (node: any, children: ReactNode) => {
      const url = node.data?.uri || "#";
      const isExternal = url.startsWith("http");
      return (
        <a
          href={url}
          className="underline underline-offset-2 transition-colors duration-200"
          style={{
            color: "oklch(0.65 0.18 50)",
            textDecorationThickness: "1px",
          }}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    },
    [INLINES.ENTRY_HYPERLINK]: (node: any, children: ReactNode) => {
      const slug = node.data?.target?.fields?.slug;
      if (!slug) return <span>{children}</span>;
      return (
        <a
          href={`/blog/${slug}`}
          className="underline underline-offset-2 transition-colors duration-200"
          style={{ color: "oklch(0.65 0.18 50)" }}
        >
          {children}
        </a>
      );
    },
    [INLINES.ASSET_HYPERLINK]: (node: any, children: ReactNode) => {
      const url = node.data?.target?.fields?.file?.url;
      if (!url) return <span>{children}</span>;
      const fullUrl = url.startsWith("//") ? `https:${url}` : url;
      return (
        <a
          href={fullUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors duration-200"
          style={{ color: "oklch(0.65 0.18 50)" }}
        >
          {children}
        </a>
      );
    },
  },
};

export default function RichTextRenderer({
  document,
  className = "",
}: RichTextRendererProps) {
  if (!document) {
    return null;
  }

  return (
    <div className={`blog-content ${className}`}>
      {documentToReactComponents(document, renderOptions)}
    </div>
  );
}
