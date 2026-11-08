import { whatsappUrl } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

const topics = ['Accidentes laborales', 'Lesiones', 'Incapacidad', 'Reclamos', 'Asesoramiento'];

export function Workplace() {
  return (
    <section className="feature-section feature-workplace" id="laborales">
      <div className="shell feature-grid">
        <div className="feature-copy">
          <p className="section-label">Accidentes laborales</p>
          <h2>¿Tuviste un accidente <em>en el trabajo?</em></h2>
          <p className="feature-lead">Recibí orientación legal para comprender tus derechos y los pasos que podés seguir.</p>
          <div className="topic-list">
            {topics.map(topic => <span key={topic}>{topic}</span>)}
          </div>
          <a className="button button-whatsapp" href={whatsappUrl('Hola VITA Abogados, tuve un accidente laboral y quiero consultar por mi reclamo a la ART.')} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} /> Consultar por WhatsApp
          </a>
        </div>
        <div className="feature-image">
          <img src="/img/casco-seguridad.webp" width="1280" height="832" alt="Casco de seguridad y chaleco sobre un banco de trabajo" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
