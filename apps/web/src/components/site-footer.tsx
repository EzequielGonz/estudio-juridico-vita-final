import { Link } from 'react-router';
import { LOGO_URL, WHATSAPP_URL, PHONE, PHONE_URL, EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE, FACEBOOK_URL, FIRM_NAME } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-brand">
          <a className="footer-logo" href="/#inicio" aria-label={`${FIRM_NAME} — inicio`}>
            <img src={LOGO_URL} alt={FIRM_NAME} />
          </a>
          <p>Orientación legal clara y cercana en accidentes de tránsito y accidentes laborales.</p>
        </div>
        <div className="footer-column">
          <h3>Navegación</h3>
          <a href="/#especialidades">Especialidades</a>
          <a href="/#nosotros">Nuestro enfoque</a>
          <a href="/#proceso">Cómo trabajamos</a>
          <a href="/#contacto">Contacto</a>
        </div>
        <div className="footer-column">
          <h3>Especialidades</h3>
          <Link to="/accidentes-de-transito">Accidentes de tránsito</Link>
          <Link to="/accidentes-laborales">Accidentes laborales</Link>
          <Link to="/accidentes-laborales/calculadora-indemnizacion-art">Calculadora ART</Link>
          <Link to="/guias">Guías y recursos</Link>
        </div>
        <div className="footer-column">
          <h3>Contacto</h3>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer-whatsapp">
            <WhatsAppIcon size={15} /> Consultar por WhatsApp
          </a>
          {PHONE && (PHONE_URL ? <a href={PHONE_URL}>{PHONE}</a> : <span>{PHONE}</span>)}
          {EMAIL && <a href={`mailto:${EMAIL}`}>{EMAIL}</a>}
          {INSTAGRAM_URL && <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">{INSTAGRAM_HANDLE || 'Instagram'}</a>}
          {FACEBOOK_URL && <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a>}
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} {FIRM_NAME}. Todos los derechos reservados.</span>
        <span>Un espacio para ser escuchado.</span>
      </div>
    </footer>
  );
}
