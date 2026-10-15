import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { FIRM_NAME, LOGO_URL, WHATSAPP_URL } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

// Las anclas llevan "/" adelante para que funcionen también desde los artículos.
// Las dos áreas (route: true) llevan a los pilares de cada silo.
// `short` se muestra en pantallas medianas; `hide` indica desde qué ancho se
// oculta en la barra de escritorio para que el menú nunca se apile (sigue
// disponible en el menú mobile y en el footer).
type NavLink = { href: string; label: string; short?: string; route?: boolean; hide?: 'lg' | 'md' };

const links: NavLink[] = [
  { href: '/accidentes-de-transito', label: 'Accidentes de tránsito', short: 'Tránsito', route: true },
  { href: '/accidentes-laborales', label: 'Accidentes laborales', short: 'Laborales', route: true },
  { href: '/#nosotros', label: 'Nuestro enfoque', hide: 'lg' },
  { href: '/#proceso', label: 'Cómo trabajamos', hide: 'md' },
  { href: '/#contacto', label: 'Contacto' },
];

export function SiteHeader() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 24);
      if (Math.abs(current - previous) > 4) setVisible(current < 80 || current < previous);
      previous = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);
  const renderLink = (link: NavLink, mobile = false) => {
    const onClick = mobile ? close : undefined;
    const className = !mobile && link.hide ? `nav-hide-${link.hide}` : undefined;
    const content = !mobile && link.short
      ? <><span className="nav-full">{link.label}</span><span className="nav-short">{link.short}</span></>
      : link.label;
    return link.route
      ? <Link key={link.href} className={className} to={link.href} prefetch="intent" onClick={onClick}>{content}</Link>
      : <a key={link.href} className={className} href={link.href} onClick={onClick}>{content}</a>;
  };

  return (
    <header className={`site-header ${visible || menuOpen ? 'is-visible' : 'is-hidden'} ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a className="header-logo" href="/#inicio" aria-label={`${FIRM_NAME} — inicio`} onClick={close}>
          <img src={LOGO_URL} alt={FIRM_NAME} />
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(link => renderLink(link))}
        </nav>
        <a className="header-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={17} /> Consultar por WhatsApp
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </div>
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {links.map(link => renderLink(link, true))}
          <a className="mobile-nav-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={close}>
            <WhatsAppIcon size={18} /> Consultar por WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
