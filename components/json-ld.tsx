export function JsonLd() {
  const graph = [
    {
      '@type': 'Person',
      '@id': 'https://heshiha.com/#person',
      name: 'Heshiha Thangamani',
      jobTitle: 'SEO Content Writer & Analyst',
      url: 'https://heshiha.com/',
      email: 'mailto:heshihaprakash21@gmail.com',
      address: { '@type': 'PostalAddress', addressLocality: 'Chennai', addressCountry: 'IN' },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://heshiha.com/#business',
      name: 'Heshi Consultancy',
      url: 'https://heshiha.com/',
      areaServed: 'India',
      provider: { '@id': 'https://heshiha.com/#person' },
      serviceType: ['SEO content strategy', 'Editorial writing', 'Technical SEO audits'],
    },
    { '@type': 'WebSite', '@id': 'https://heshiha.com/#website', name: 'Heshi Consultancy', url: 'https://heshiha.com/', publisher: { '@id': 'https://heshiha.com/#person' } },
  ]

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }} />
}
