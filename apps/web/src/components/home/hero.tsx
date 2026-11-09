import { whatsappUrl } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { track } from '@/lib/track';
import { Sello } from './sello';

// El título hace una pregunta y las dos opciones la responden: cada una abre
// WhatsApp con el mensaje de ese caso ya escrito.
const opciones = [
  {
    titulo: 'Accidente de tránsito',
    detalle: 'Choques, motos y peatones en CABA y GBA',
    mensaje: 'Hola VITA Abogados, tuve un accidente de tránsito y quiero consultar mi caso.',
  },
  {
    titulo: 'Accidente laboral',
    detalle: 'Reclamos a la ART en todo el país',
    mensaje: 'Hola VITA Abogados, tuve un accidente laboral y quiero consultar por mi reclamo a la ART.',
  },
];

export function Hero() {
  return (
    <section className="portada" id="inicio">
      <div className="portada-fondo" aria-hidden="true" />
      <div className="shell portada-grid">
        <div className="portada-texto">
          <h1>
            <span className="linea"><span>¿Tuviste un accidente</span></span>{' '}
            <span className="linea"><span>de tránsito o un</span></span>{' '}
            <span className="linea"><span>accidente laboral?</span></span>
          </h1>
          <p className="portada-bajada">Te explicamos qué podés reclamar antes de que firmes cualquier acuerdo.</p>
          <div className="portada-opciones">
            {opciones.map(opcion => (
              <a
                key={opcion.titulo}
                className="opcion"
                href={whatsappUrl(opcion.mensaje)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('click_whatsapp', { origen: 'portada', tipo: opcion.titulo })}
              >
                <span className="opcion-texto">
                  <strong>{opcion.titulo}</strong>
                  <span>{opcion.detalle}</span>
                </span>
                <span className="opcion-accion"><WhatsAppIcon size={18} /> Consultar</span>
              </a>
            ))}
          </div>
          <a className="portada-formulario" href="#contacto">Prefiero dejar mis datos en el formulario</a>
        </div>
        <Sello />
      </div>
    </section>
  );
}
