/**
 * Registro central de las páginas SEO. Solo se usa en el servidor (loaders y
 * sitemap), así el contenido no se suma al JavaScript que descarga el visitante.
 *
 * Para agregar un artículo: sumalo al array del silo que corresponda
 * (transito.server.ts, laboral.server.ts, etc.) y agregá su ruta a un grupo
 * del hub del pilar (HUBS, abajo) para que quede enlazado.
 */
import type { HubGroup, Page, PageData, RelatedLink } from './types';
import { transitoArticulos, transitoPilar } from './transito.server';
import { zonaPages } from './zonas.server';
import { calculadoraPage, laboralArticulos, laboralPilar } from './laboral.server';
import { oficioPages, provinciaPages } from './oficios-provincias.server';
import { guiaPages } from './guias.server';

const T = '/accidentes-de-transito';
const L = '/accidentes-laborales';

const ALL: Page[] = [
  transitoPilar,
  ...transitoArticulos,
  ...zonaPages,
  laboralPilar,
  ...laboralArticulos,
  calculadoraPage,
  ...oficioPages,
  ...provinciaPages,
  ...guiaPages,
];

const isPublished = (page: Page) => page.status !== 'borrador';

const PUBLISHED = ALL.filter(isPublished);
const BY_PATH = new Map(PUBLISHED.map(page => [page.path, page]));

const toLink = (page: Page): RelatedLink => ({ path: page.path, nav: page.nav, description: page.description });

const linksFor = (paths: string[]) =>
  paths.map(path => BY_PATH.get(path)).filter((page): page is Page => Boolean(page)).map(toLink);

/** Grupos de enlaces que se muestran en cada pilar (y en /guias). */
const HUBS: Record<string, { title: string; paths: string[] }[]> = {
  [T]: [
    {
      title: 'Según cómo fue el accidente',
      paths: [
        `${T}/accidente-de-moto`,
        `${T}/choque-de-auto`,
        `${T}/peaton-atropellado`,
        `${T}/accidente-de-colectivo`,
        `${T}/accidente-en-bicicleta`,
        `${T}/accidente-en-uber-o-app`,
        `${T}/choque-con-auto-sin-seguro`,
      ],
    },
    {
      title: 'El reclamo, paso a paso',
      paths: [
        `${T}/que-hacer-despues-de-un-choque`,
        `${T}/indemnizacion-por-accidente-de-transito`,
        `${T}/plazo-para-reclamar`,
        `${T}/mediacion-previa`,
        `${T}/aseguradora-oferta-baja`,
      ],
    },
    { title: 'Por zona', paths: zonaPages.map(page => page.path) },
  ],
  [L]: [
    {
      title: 'Según tu situación',
      paths: [
        `${L}/que-hacer-tras-un-accidente-de-trabajo`,
        `${L}/accidente-in-itinere`,
        `${L}/art-rechazo-el-accidente`,
        `${L}/alta-medica-art`,
        `${L}/trabajador-no-registrado`,
        `${L}/salarios-caidos-ilt`,
        `${L}/accidente-laboral-fatal`,
      ],
    },
    {
      title: 'Incapacidad e indemnización',
      paths: [
        `${L}/comision-medica`,
        `${L}/porcentaje-de-incapacidad`,
        `${L}/como-se-calcula-la-indemnizacion-art`,
        `${L}/calculadora-indemnizacion-art`,
      ],
    },
    {
      title: 'Enfermedades y lesiones',
      paths: [
        `${L}/enfermedad-profesional`,
        `${L}/hernia-de-disco-laboral`,
        `${L}/hipoacusia-laboral`,
        `${L}/tunel-carpiano`,
      ],
    },
    { title: 'Por actividad', paths: oficioPages.map(page => page.path) },
    { title: 'Por provincia', paths: provinciaPages.map(page => page.path) },
  ],
};

const resolveHub = (groups: { title: string; paths: string[] }[]): HubGroup[] =>
  groups
    .map(group => ({ title: group.title, links: linksFor(group.paths) }))
    .filter(group => group.links.length > 0);

const PILLAR_BY_SILO: Record<Page['silo'], { name: string; path: string }> = {
  transito: { name: 'Accidentes de tránsito', path: T },
  laboral: { name: 'Accidentes laborales', path: L },
  guias: { name: 'Guías', path: '/guias' },
};

function relatedFor(page: Page): RelatedLink[] {
  const chosen = linksFor(page.related ?? []).filter(link => link.path !== page.path);
  if (chosen.length >= 3) return chosen.slice(0, 3);

  const taken = new Set([page.path, ...chosen.map(link => link.path)]);
  const siblings = PUBLISHED.filter(
    other => other.silo === page.silo && other.kind === 'guia' && !taken.has(other.path),
  ).map(toLink);

  return [...chosen, ...siblings].slice(0, 3);
}

export function getPageData(path: string): PageData | null {
  const page = BY_PATH.get(path.replace(/\/+$/, '') || '/');
  if (!page) return null;

  const pillar = PILLAR_BY_SILO[page.silo];
  const breadcrumbs = [{ name: 'Inicio', path: '/' }];
  if (page.kind !== 'pilar') breadcrumbs.push(pillar);
  breadcrumbs.push({ name: page.nav, path: page.path });

  return {
    page,
    breadcrumbs,
    related: page.kind === 'pilar' ? [] : relatedFor(page),
    hub: page.kind === 'pilar' ? resolveHub(HUBS[page.path] ?? []) : [],
  };
}

/** Todo el contenido publicado, agrupado, para la página /guias. */
export function getGuiasHub(): HubGroup[] {
  const guias = PUBLISHED.filter(page => page.silo === 'guias');
  return [
    { title: 'Accidentes de tránsito', links: linksFor([T, ...(HUBS[T] ?? []).flatMap(group => group.paths)]) },
    { title: 'Accidentes laborales', links: linksFor([L, ...(HUBS[L] ?? []).flatMap(group => group.paths)]) },
    { title: 'Recursos', links: guias.map(toLink) },
  ].filter(group => group.links.length > 0);
}

/** Rutas publicadas para el sitemap. */
export function sitemapEntries(): { path: string; lastmod: string }[] {
  const latest = PUBLISHED.reduce((max, page) => (page.updated > max ? page.updated : max), '');
  return [
    ...PUBLISHED.map(page => ({ path: page.path, lastmod: page.updated })),
    { path: '/guias', lastmod: latest },
  ];
}
