import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),

	// Silo 1 — Accidentes de tránsito (AMBA)
	route('accidentes-de-transito', 'routes/seo-transito.tsx'),
	route('accidentes-de-transito/:slug', 'routes/seo-transito-slug.tsx'),

	// Silo 2 — Accidentes laborales / ART (todo el país)
	route('accidentes-laborales', 'routes/seo-laboral.tsx'),
	route('accidentes-laborales/calculadora-indemnizacion-art', 'routes/seo-calculadora.tsx'),
	route('accidentes-laborales/:slug', 'routes/seo-laboral-slug.tsx'),

	// Silo 3 — Guías y recursos
	route('guias', 'routes/seo-guias.tsx'),
	route('guias/:slug', 'routes/seo-guias-slug.tsx'),

	route('sitemap.xml', 'routes/sitemap.xml.ts'),
	route('robots.txt', 'routes/robots.txt.ts'),
	route('indexnow.txt', 'routes/indexnow.txt.ts'),
	route('api/health', 'routes/api.health.ts'),
	route('api/*', 'routes/api.$.ts'),
] satisfies RouteConfig;
