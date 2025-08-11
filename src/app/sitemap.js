export default async function sitemap() {
  const baseUrl = 'https://webstroke.ru';

  const staticPages = [
    '',
    'privacy-policy',
    'terms-of-use',
    'cookies-policy',
  ];

  const services = [
    'corporate-sites',
    'ecommerce',
    'web-apps',
    'seo',
    'marketing',
  ];

  const caseStudies = [
    'business-coach',
    'mattress-store',
    'game-server',
    'lawyer-landing',
    'connectmax',
    'maxflow',
  ];

  const urls = [
    ...staticPages.map((p) => ({ url: `${baseUrl}/${p}`, priority: 0.8 })),
    { url: `${baseUrl}/services`, priority: 0.9 },
    ...services.map((s) => ({ url: `${baseUrl}/services/${s}`, priority: 0.8 })),
    { url: `${baseUrl}/case-studies`, priority: 0.8 },
    ...caseStudies.map((c) => ({ url: `${baseUrl}/case-studies/${c}`, priority: 0.7 })),
  ];

  return urls;
}


