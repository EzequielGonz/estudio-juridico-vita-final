import { Link } from 'react-router';
import { whatsappUrl } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

// Pasos del reclamo, con el mismo criterio que el pilar laboral (content/laboral.server.ts).
const pasos = [
  { titulo: 'Denuncia del accidente', texto: 'El empleador tiene que denunciarlo a la ART. Si no lo hace, podés hacerlo vos.' },
  { titulo: 'Respuesta de la ART', texto: 'Tiene un plazo para aceptar o rechazar. Si rechaza, hay caminos para discutirlo.' },
  { titulo: 'Tratamiento y alta', texto: 'Recibís atención médica hasta el alta. Si no estás de acuerdo, se puede cuestionar.' },
  { titulo: 'Comisión Médica', texto: 'En la mayoría de las provincias, la incapacidad se determina primero ahí, con abogado.' },
  { titulo: 'Justicia, si hace falta', texto: 'Si el resultado no es justo, se puede recurrir a la justicia laboral.' },
];

export function Workplace() {
  return (
    <section className="seccion laboral" id="laborales">
      <div className="shell">
        <div className="laboral-cabeza">
          <h2 className="revela">Cómo sigue un reclamo a la ART</h2>
          <p className="seccion-bajada">La ART tiene que darte atención médica, pagarte el salario mientras no puedas trabajar y, si queda una incapacidad, indemnizarte. Atendemos casos de todo el país.</p>
        </div>
        <div className="ruta">
          <span className="ruta-riel" aria-hidden="true"><span className="ruta-avance" /></span>
          <ol>
            {pasos.map((paso, i) => (
              <li className="ruta-paso" key={paso.titulo}>
                <span className="ruta-punto" aria-hidden="true">{i + 1}</span>
                <h3>{paso.titulo}</h3>
                <p>{paso.texto}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="seccion-acciones">
          <a className="boton boton-oro" href={whatsappUrl('Hola VITA Abogados, tuve un accidente laboral y quiero consultar por mi reclamo a la ART.')} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} /> Consultar por un accidente laboral
          </a>
          <Link className="enlace-guia" to="/accidentes-laborales/que-hacer-tras-un-accidente-de-trabajo" prefetch="intent">Qué hacer tras un accidente de trabajo</Link>
        </div>
      </div>
    </section>
  );
}
