import { Link } from 'react-router';
import { REVIEWER } from '@/constants/brand';
import { CTA } from '@/constants/cta';
import { ContactButtons } from './contact-buttons';

type Props = {
  label: string;
  h1: string;
  h1Em?: string;
  lead: string;
  breadcrumbs: { name: string; path: string }[];
  updated?: string;
  origen: string;
  whatsappMessage: string;
};

/** Cabecera de artículo: mismas etiquetas, tipografía y botones que el hero de la home. */
export function DocHero({ h1, h1Em, lead, breadcrumbs, origen, whatsappMessage }: Props) {
  // Solo se muestra quién revisó la guía cuando hay una profesional o un profesional cargado en brand.ts.
  const byline = `Revisado por ${REVIEWER.name}${REVIEWER.matricula ? `, ${REVIEWER.matricula}` : ''}`;

  return (
    <section className="doc-hero">
      <div className="shell">
        <div className="doc-hero-inner">
        {breadcrumbs.length > 1 && <Link className="doc-volver" to={breadcrumbs[breadcrumbs.length - 2].path}>← {breadcrumbs[breadcrumbs.length - 2].name}</Link>}
        <h1>{h1} {h1Em && <em>{h1Em}</em>}</h1>
        <p className="doc-lead">{lead}</p>
        <div className="hero-actions">
          <ContactButtons
            whatsappMessage={whatsappMessage}
            origen={origen}
            whatsappLabel={CTA.mid.whatsappLabel}
            formLabel={CTA.final.formLabel}
            callLabel={CTA.mid.callLabel}
          />
        </div>
        </div>
      </div>
      {REVIEWER.name && <div className="doc-meta shell"><span>{byline}</span></div>}
    </section>
  );
}
