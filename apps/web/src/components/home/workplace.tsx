import { WHATSAPP_URL } from '@/constants/brand';
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
          <a className="button button-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} /> Consultar por WhatsApp
          </a>
        </div>
        <div className="feature-image">
          <img src="https://images.unsplash.com/photo-1586151140119-e251698be8dd?w=1280&h=832&fit=crop&q=80" alt="Casco de seguridad y chaleco sobre un banco de trabajo" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
