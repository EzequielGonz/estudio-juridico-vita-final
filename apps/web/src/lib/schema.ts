/**
 * Datos estructurados (JSON-LD) para Google y otros buscadores. No se ven en la
 * página: le dicen al buscador qué es el estudio, dónde trabaja y qué es cada artículo.
 */
import { ADDRESS, EMAIL, FIRM_NAME, LOGO_URL, PHONE, REVIEWER, SOCIAL_LINKS } from '@/constants/brand';

const CONTEXT = 'https://schema.org';

export const firmId = (origin: string) => `${origin}/#estudio`;

export function legalServiceSchema(origin: string) {
  const hasAddress = Boolean(ADDRESS.street && ADDRESS.locality);
  return {
    '@context': CONTEXT,
    '@type': 'LegalService',
    '@id': firmId(origin),
    name: FIRM_NAME,
    url: `${origin}/`,
    logo: LOGO_URL,
    image: LOGO_URL,
    telephone: PHONE || undefined,
    email: EMAIL || undefined,
    priceRange: '$$',
    address: hasAddress
      ? {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.locality,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode || undefined,
          addressCountry: ADDRESS.country,
        }
      : undefined,
    areaServed: [
      { '@type': 'City', name: 'Ciudad Autónoma de Buenos Aires' },
      { '@type': 'AdministrativeArea', name: 'Provincia de Buenos Aires' },
      { '@type': 'Country', name: 'Argentina' },
    ],
    knowsAbout: [
      'Accidentes de tránsito',
      'Accidentes laborales',
      'Reclamos a ART',
      'Accidentes in itinere',
      'Enfermedades profesionales',
      'Indemnizaciones por lesiones',
    ],
    sameAs: SOCIAL_LINKS.length ? SOCIAL_LINKS : undefined,
  };
}

export function websiteSchema(origin: string) {
  return {
    '@context': CONTEXT,
    '@type': 'WebSite',
    '@id': `${origin}/#sitio`,
    url: `${origin}/`,
    name: FIRM_NAME,
    inLanguage: 'es-AR',
    publisher: { '@id': firmId(origin) },
  };
}

export function breadcrumbSchema(origin: string, items: { name: string; path: string }[]) {
  return {
    '@context': CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${origin}${item.path}`,
    })),
  };
}

export function articleSchema(
  origin: string,
  article: { path: string; title: string; description: string; updated: string; published: string },
) {
  const url = `${origin}${article.path}`;
  return {
    '@context': CONTEXT,
    '@type': 'Article',
    '@id': `${url}#articulo`,
    mainEntityOfPage: url,
    headline: article.title.slice(0, 110),
    description: article.description,
    inLanguage: 'es-AR',
    datePublished: article.published,
    dateModified: article.updated,
    image: LOGO_URL,
    author: REVIEWER.name
      ? { '@type': 'Person', name: REVIEWER.name, worksFor: { '@id': firmId(origin) } }
      : { '@id': firmId(origin) },
    publisher: { '@id': firmId(origin) },
    about: { '@id': firmId(origin) },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': CONTEXT,
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') },
    })),
  };
}
