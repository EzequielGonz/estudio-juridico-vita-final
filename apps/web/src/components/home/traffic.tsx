import { whatsappUrl } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

const topics = ['Accidentes de auto', 'Accidentes de moto', 'Lesiones', 'Reclamos', 'Indemnizaciones'];

export function Traffic() {
  return (
    <section className="feature-section feature-traffic" id="transito">
      <div className="shell feature-grid">
        <div className="feature-image">
          <img src="/img/avenida-anochecer.webp" width="1280" height="832" alt="Avenida tranquila al anochecer con un auto estacionado" loading="lazy" />
        </div>
        <div className="feature-copy">
          <p className="section-label">Accidentes de tránsito</p>
          <h2>¿Tuviste un accidente <em>de tránsito?</em></h2>
          <p className="feature-lead">Conocé tus derechos y recibí orientación sobre las alternativas disponibles para tu caso.</p>
          <div className="topic-list">
            {topics.map(topic => <span key={topic}>{topic}</span>)}
          </div>
          <a className="button button-whatsapp" href={whatsappUrl('Hola VITA Abogados, tuve un accidente de tránsito y quiero consultar mi caso.')} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} /> Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
