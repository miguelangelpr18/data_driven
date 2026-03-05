export default function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Data Driven Consulting',
    url: 'https://www.datadriven.com.mx',
    logo: 'https://www.datadriven.com.mx/logoDataDriven.png',
    email: 'mauricio.barrera@datadriven.com.mx',
    telephone: '+528118019331',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Monterrey',
      addressRegion: 'Nuevo León',
      addressCountry: 'MX',
    },
    description:
      'Consultoría de datos para PYMES en México. KPIs, dashboards en Power BI y automatización de reportes.',
    sameAs: ['https://www.linkedin.com/company/datadriven-consulting'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios de Consultoría de Datos',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Limpieza y optimización de datos' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Definición de KPIs' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dashboards en Power BI' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatización de reportes' } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
