import { LOGO_URL, whatsappUrl } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <h1>¿Te chocaron <em>o tuviste un accidente laboral?</em></h1>
          <p className="hero-description">Te explicamos qué podés reclamar antes de que firmes cualquier acuerdo. Accidentes de tránsito en CABA y GBA, y reclamos a la ART en todo el país.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contacto">Realizar una consulta</a>
            <a className="button button-whatsapp" href={whatsappUrl('Hola VITA Abogados, quiero hacer una consulta sobre mi caso.')} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={18} /> Consultar por WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Emblema de la Justicia">
          <div className="hero-visual-frame"><img src={LOGO_URL} alt="Emblema dorado de la Justicia" width="266" height="358" fetchPriority="high" /></div>
        </div>
      </div>
    </section>
  );
}
