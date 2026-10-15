import { Link } from 'react-router';
import { FIRM_NAME, REVIEWER } from '@/constants/brand';
import { CTA } from '@/constants/cta';
import { formatDate } from '@/lib/text';
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
export function DocHero({ label, h1, h1Em, lead, breadcrumbs, updated, origen, whatsappMessage }: Props) {
  const byline = REVIEWER.name
    ? `Revisado por ${REVIEWER.name}${REVIEWER.matricula ? `, ${REVIEWER.matricula}` : ''}`
    : `Equipo legal de ${FIRM_NAME}`;

  return (
    <section className="doc-hero">
      <div className="shell">
        <div className="doc-hero-inner">
        <nav className="doc-breadcrumb" aria-label="Ruta de navegación">
          <ol>
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path}>
                {index < breadcrumbs.length - 1 ? <Link to={crumb.path}>{crumb.name}</Link> : <span aria-current="page">{crumb.name}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <p className="hero-label"><span className="label-line" /> {label}</p>
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
      <div className="doc-meta shell">
        <span>{byline}</span>
        {updated && <span>Actualizado el <time dateTime={updated}>{formatDate(updated)}</time></span>}
      </div>
    </section>
  );
}
