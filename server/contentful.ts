import { createClient } from "contentful";
import { ENV } from "./_core/env";

// Contentful client singleton
let _client: ReturnType<typeof createClient> | null = null;

export function getContentfulClient() {
  if (!_client) {
    if (!ENV.contentfulSpaceId || !ENV.contentfulAccessToken) {
      console.warn("[Contentful] Missing credentials - blog will use placeholder data");
      return null;
    }
    _client = createClient({
      space: ENV.contentfulSpaceId,
      accessToken: ENV.contentfulAccessToken,
      environment: ENV.contentfulEnvironment || "master",
    });
  }
  return _client;
}

// Parsed blog post shape (after extracting from Contentful entry)
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: any; // Rich Text Document
  category: string;
  featuredImageUrl?: string;
  featuredImageAlt?: string;
  publishDate?: string;
  author?: string;
  readTime?: string;
}

// Helper to extract fields safely from a Contentful entry
function parseBlogEntry(item: any): BlogPost {
  const fields = item.fields ?? {};
  const img = fields.featuredImage?.fields?.file;
  return {
    slug: fields.slug ?? "",
    title: fields.title ?? "",
    excerpt: fields.excerpt ?? "",
    content: fields.content ?? null,
    category: fields.category ?? "",
    featuredImageUrl: img?.url ? `https:${img.url}` : undefined,
    featuredImageAlt: fields.featuredImage?.fields?.title ?? fields.title ?? "",
    publishDate: fields.publishDate ?? item.sys?.createdAt ?? "",
    author: fields.author ?? "Juan Pablo Franco",
    readTime: fields.readTime ?? "",
  };
}

// Fetch all blog posts
export async function getBlogPosts(options?: {
  category?: string;
  limit?: number;
  skip?: number;
  search?: string;
}): Promise<{ items: BlogPost[]; total: number }> {
  const client = getContentfulClient();
  if (!client) {
    return { items: [], total: 0 };
  }

  try {
    const query: Record<string, any> = {
      content_type: "blogPost",
      order: ["-fields.publishDate", "-sys.createdAt"],
      limit: options?.limit || 12,
      skip: options?.skip || 0,
    };

    if (options?.category && options.category !== "all") {
      query["fields.category"] = options.category;
    }

    if (options?.search) {
      query["query"] = options.search;
    }

    const entries = await client.getEntries(query);
    return {
      items: entries.items.map(parseBlogEntry),
      total: entries.total,
    };
  } catch (error) {
    console.error("[Contentful] Failed to fetch blog posts:", error);
    return { items: [], total: 0 };
  }
}

// Fetch a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const client = getContentfulClient();
  if (!client) {
    return null;
  }

  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
      include: 2, // Include linked assets (images)
    });

    return entries.items.length > 0 ? parseBlogEntry(entries.items[0]) : null;
  } catch (error) {
    console.error("[Contentful] Failed to fetch blog post:", error);
    return null;
  }
}

// Get all unique categories
export async function getBlogCategories(): Promise<string[]> {
  const client = getContentfulClient();
  if (!client) {
    return [];
  }

  try {
    const entries = await client.getEntries({
      content_type: "blogPost",
      select: ["fields.category"],
      limit: 1000,
    });

    const categories = new Set<string>();
    entries.items.forEach((item: any) => {
      const cat = item.fields?.category;
      if (cat) categories.add(cat);
    });

    return Array.from(categories).sort();
  } catch (error) {
    console.error("[Contentful] Failed to fetch categories:", error);
    return [];
  }
}
