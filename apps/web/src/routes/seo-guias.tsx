import type { Route } from './+types/seo-guias';
import { HubGroups } from '@/components/articulo/article-page';
import { DocHero } from '@/components/articulo/doc-hero';
import { ArticleFinalCta } from '@/components/articulo/final-cta';
import { LeadForm } from '@/components/articulo/lead-form';
import { getGuiasHub } from '@/content/index.server';
import { withBrand } from '@/lib/page-meta';
import { breadcrumbSchema, legalServiceSchema } from '@/lib/schema';
import { seo, siteOriginFrom } from '@/lib/seo';

const PATH = '/guias';
const BREADCRUMBS = [{ name: 'Inicio', path: '/' }, { name: 'Guías', path: PATH }];
const WHATSAPP_MESSAGE = 'Hola, leí las guías de su web y quiero consultar mi caso.';

export function loader() {
  return { groups: getGuiasHub() };
}

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  return seo({ matches, location }, {
    title: withBrand('Guías sobre accidentes de tránsito y laborales'),
    description: 'Guías claras sobre accidentes de tránsito en Buenos Aires y accidentes laborales en todo el país: ART, indemnizaciones, plazos y cómo reclamar.',
    path: PATH,
    jsonLd: [legalServiceSchema(origin), breadcrumbSchema(origin, BREADCRUMBS)],
  });
}

export default function GuiasPage({ loaderData }: Route.ComponentProps) {
  return (
    <main className="doc-page">
      <DocHero
        label="Guías y recursos"
        h1="Todo lo que necesitás saber"
        h1Em="para reclamar por un accidente."
        lead="Explicaciones simples sobre accidentes de tránsito y laborales: qué hacer, qué podés reclamar, qué plazos hay y cómo sigue el proceso."
        breadcrumbs={BREADCRUMBS}
        origen={PATH}
        whatsappMessage={WHATSAPP_MESSAGE}
      />
      <div className="doc-body">
        <div className="shell">
          <div className="doc-article doc-article-wide">
            <HubGroups groups={loaderData.groups} />
          </div>
        </div>
      </div>
      <LeadForm tipo="Accidente de tránsito" origen={PATH} whatsappMessage={WHATSAPP_MESSAGE} />
      <ArticleFinalCta whatsappMessage={WHATSAPP_MESSAGE} origen={PATH} />
    </main>
  );
}
