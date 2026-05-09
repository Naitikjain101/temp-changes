export default function sitemap() {
  const baseUrl = 'https://www.hackersunity.com';

  const routes = [
    { path: '', changeFrequency: 'daily', priority: 1.0 },
    { path: '/hackathons', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/events', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/community', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/projects', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/sponsors', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/brand-kit', changeFrequency: 'monthly', priority: 0.5 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
    priority,
  }));
}
