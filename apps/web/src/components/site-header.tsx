import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { PHONE, PHONE_URL, WHATSAPP_URL } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

// Las anclas llevan "/" adelante para que funcionen también desde los artículos.
// `corto` se usa en pantallas medianas para que la barra nunca se apile.
type Enlace = { href: string; texto: string; corto?: string; ruta?: boolean };

const enlaces: Enlace[] = [
  { href: '/accidentes-de-transito', texto: 'Accidentes de tránsito', corto: 'Tránsito', ruta: true },
  { href: '/accidentes-laborales', texto: 'Accidentes laborales', corto: 'Laborales', ruta: true },
  { href: '/#antes-de-firmar', texto: 'Antes de firmar' },
  { href: '/#contacto', texto: 'Contacto' },
];

export function SiteHeader() {
  const { pathname } = useLocation();
  const enPortada = pathname === '/';
  const [visible, setVisible] = useState(true);
  const [abierto, setAbierto] = useState(false);
  const [desplazado, setDesplazado] = useState(false);
  const boton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anterior = window.scrollY;
    const alDesplazar = () => {
      const actual = window.scrollY;
      setDesplazado(actual > 24);
      if (Math.abs(actual - anterior) > 4) setVisible(actual < 120 || actual < anterior);
      anterior = actual;
    };
    alDesplazar();
    window.addEventListener('scroll', alDesplazar, { passive: true });
    return () => window.removeEventListener('scroll', alDesplazar);
  }, []);

  // Menú del celular: bloquea el desplazamiento de fondo, se cierra con Escape
  // y devuelve el foco al botón.
  useEffect(() => {
    if (!abierto) return;
    const raiz = document.documentElement;
    raiz.classList.add('menu-abierto');
    menu.current?.querySelector<HTMLElement>('a')?.focus();
    const alTeclear = (evento: KeyboardEvent) => { if (evento.key === 'Escape') setAbierto(false); };
    window.addEventListener('keydown', alTeclear);
    return () => {
      raiz.classList.remove('menu-abierto');
      window.removeEventListener('keydown', alTeclear);
      boton.current?.focus();
    };
  }, [abierto]);

  const cerrar = () => setAbierto(false);
  const enlace = (item: Enlace, movil = false) => {
    const contenido = !movil && item.corto
      ? <><span className="nav-largo">{item.texto}</span><span className="nav-corto">{item.corto}</span></>
      : item.texto;
    const alHacerClic = movil ? cerrar : undefined;
    return item.ruta
      ? <Link key={item.href} to={item.href} prefetch="intent" onClick={alHacerClic}>{contenido}</Link>
      : <a key={item.href} href={item.href} onClick={alHacerClic}>{contenido}</a>;
  };

  const clases = [
    'cabecera',
    visible || abierto ? 'is-visible' : 'is-oculta',
    desplazado || !enPortada || abierto ? 'is-solida' : '',
  ].join(' ');

  return (
    <>
    <header className={clases}>
      <div className="cabecera-barra">
        <a className="cabecera-marca" href="/#inicio" onClick={cerrar} aria-label="VITA Abogados, ir al inicio">
          <img src="/img/justicia-chica.webp" alt="" width="71" height="96" />
          <span className="cabecera-nombre">VITA Abogados<small>Estudio jurídico</small></span>
        </a>
        <nav className="cabecera-nav" aria-label="Navegación principal">
          {enlaces.map(item => enlace(item))}
        </nav>
        <a className="cabecera-wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon size={17} /> <span>WhatsApp</span>
        </a>
        <button
          ref={boton}
          className={`cabecera-menu ${abierto ? 'is-abierto' : ''}`}
          type="button"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          onClick={() => setAbierto(!abierto)}
        >
          <span /><span />
        </button>
      </div>
    </header>
      <div id="menu-movil" ref={menu} className={`menu-movil ${abierto ? 'is-abierto' : ''}`} hidden={!abierto}>
        <nav aria-label="Navegación móvil">
          {enlaces.map(item => enlace(item, true))}
        </nav>
        <div className="menu-movil-pie">
          <a className="menu-movil-wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={cerrar}>
            <WhatsAppIcon size={19} /> Escribinos por WhatsApp
          </a>
          {PHONE && PHONE_URL && <a className="menu-movil-tel" href={PHONE_URL}>{PHONE}</a>}
        </div>
      </div>
    </>
  );
}
