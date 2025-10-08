import { blogPosts } from "@@/data/blogPosts";

export default async function sitemap() {
  const baseUrl = "https://webstroke.ru";

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "services", priority: 0.9 },
    { path: "case-studies", priority: 0.8 },
    { path: "blog", priority: 0.8 },
    { path: "privacy-policy", priority: 0.5 },
    { path: "terms-of-use", priority: 0.5 },
    { path: "cookies-policy", priority: 0.4 },
  ];

  const services = [
    "corporate-sites",
    "ecommerce",
    "web-apps",
    "seo",
    "marketing",
  ];

  const caseStudies = [
    "business-coach",
    "mattress-store",
    "game-server",
    "lawyer-landing",
    "connectmax",
    "maxflow",
  ];

  const blog = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    priority: 0.6,
  }));

  const urls = [
    ...staticPages.map(({ path, priority }) => ({
      url: `${baseUrl}/${path}`.replace(/\/$/, ""),
      priority,
    })),
    ...services.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      priority: 0.8,
    })),
    ...caseStudies.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      priority: 0.7,
    })),
    ...blog,
  ];

  return urls;
}


