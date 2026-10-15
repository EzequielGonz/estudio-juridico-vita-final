import { WHATSAPP_URL } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

export function FinalCta() {
  return (
    <section className="final-cta">
      <div className="shell final-cta-inner">
        <div>
          <p className="section-label section-label-light">Estamos para escucharte</p>
          <h2>Tu situación merece <em>ser escuchada.</em></h2>
          <p>Contanos qué ocurrió y recibí orientación sobre las alternativas disponibles para tu caso.</p>
        </div>
        <div className="final-cta-actions">
          <a className="button button-light" href="#contacto">Realizar una consulta</a>
          <a className="button button-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} /> Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
