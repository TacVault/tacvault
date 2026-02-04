import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tacvault.io'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Guide pages
  const guides = [
    'best-red-dots-under-300',
    'best-plate-carriers-2026',
  ]

  const guidePages = guides.map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Product pages
  const products = [
    'crye-precision/jpc-2-0',
    'ferro-concepts/slickster',
    'defense-mechanisms/mepc',
    'trex-arms/ac1-5',
    'spiritus-systems/lv-120',
    'condor/sentry',
    'shellback-tactical/banshee-elite-2-0',
  ]

  const productPages = products.map((slug) => ({
    url: `${baseUrl}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...guidePages, ...productPages]
}