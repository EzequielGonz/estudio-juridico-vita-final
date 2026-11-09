import { Link } from 'react-router';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { WHATSAPP_URL, PHONE, PHONE_URL, EMAIL, INSTAGRAM_URL, INSTAGRAM_HANDLE, FACEBOOK_URL, FIRM_NAME } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main shell">
        <div className="footer-brand">
          <a className="footer-logo" href="/#inicio" aria-label={`${FIRM_NAME}, volver al inicio`}>
            <img src="/img/justicia-chica.webp" alt="" width="71" height="96" loading="lazy" />
            <span className="footer-name">VITA Abogados<small>Estudio jurídico</small></span>
          </a>
          <p>Accidentes de tránsito en CABA y GBA. Accidentes laborales y reclamos a la ART en todo el país.</p>
          <a className="footer-cta" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} /> Escribinos por WhatsApp
          </a>
        </div>
        <nav className="footer-column" aria-label="Especialidades">
          <h3>Especialidades</h3>
          <Link to="/accidentes-de-transito">Accidentes de tránsito</Link>
          <Link to="/accidentes-laborales">Accidentes laborales</Link>
          <Link to="/accidentes-laborales/calculadora-indemnizacion-art">Calculadora ART</Link>
          <Link to="/guias">Guías</Link>
        </nav>
        <nav className="footer-column" aria-label="El estudio">
          <h3>El estudio</h3>
          <a href="/#antes-de-firmar">Antes de firmar</a>
          <a href="/#proceso">Cómo trabajamos</a>
          <a href="/#contacto">Hacer una consulta</a>
        </nav>
        <div className="footer-column footer-contact">
          <h3>Contacto</h3>
          {PHONE && PHONE_URL && <a href={PHONE_URL}><Phone size={16} strokeWidth={1.6} aria-hidden="true" /> {PHONE}</a>}
          {EMAIL && <a href={`mailto:${EMAIL}`}><Mail size={16} strokeWidth={1.6} aria-hidden="true" /> {EMAIL}</a>}
          {INSTAGRAM_URL && <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Instagram size={16} strokeWidth={1.6} aria-hidden="true" /> {INSTAGRAM_HANDLE || 'Instagram'}</a>}
          {FACEBOOK_URL && <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><Facebook size={16} strokeWidth={1.6} aria-hidden="true" /> Facebook</a>}
        </div>
      </div>
      <div className="footer-bottom shell">
        <span>© {new Date().getFullYear()} VITA Abogados. Estudio jurídico.</span>
        <a href="#inicio" className="footer-top">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
