import { ArrowDownRight } from 'lucide-react';
import { LOGO_URL, WHATSAPP_URL } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell hero-inner">
        <div className="hero-copy">
          <p className="hero-label"><span className="label-line" /> Asesoramiento legal especializado</p>
          <h1>Defendemos tus derechos <em>cuando más lo necesitás.</em></h1>
          <p className="hero-description">Especialistas en accidentes de tránsito y accidentes laborales. Te acompañamos y asesoramos para que conozcas tus derechos y las alternativas disponibles para tu caso.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contacto">Realizar una consulta</a>
            <a className="button button-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={18} /> Consultar por WhatsApp
            </a>
          </div>
          <p className="hero-trust"><span className="trust-mark" /> Orientación profesional y confidencial para tu caso.</p>
        </div>
        <div className="hero-visual" aria-label="Emblema de la Justicia">
          <div className="hero-visual-frame"><img src={LOGO_URL} alt="Emblema dorado de la Justicia" /></div>
        </div>
      </div>
      <div className="hero-bottom shell">
        <span>Estudio jurídico · Asesoramiento personalizado</span>
        <a href="#especialidades" aria-label="Ir a especialidades">Conocé cómo podemos ayudarte <ArrowDownRight size={15} strokeWidth={1.5} /></a>
      </div>
    </section>
  );
}
