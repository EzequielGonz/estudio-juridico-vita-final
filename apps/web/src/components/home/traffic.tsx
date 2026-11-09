import { Link } from 'react-router';
import { whatsappUrl } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

// Mismos conceptos que el pilar de tránsito (content/transito.server.ts), resumidos.
const conceptos = [
  'Lesiones e incapacidad, aunque sea parcial.',
  'Gastos médicos, de farmacia, kinesiología y traslados.',
  'Ingresos que dejaste de cobrar mientras no pudiste trabajar.',
  'Reparación del vehículo y el tiempo que no pudiste usarlo.',
  'Daño psicológico y daño moral.',
];

function Auto() {
  return (
    <g className="cq-auto">
      <rect x="-29" y="-14" width="58" height="28" rx="8" />
      <path className="cq-vidrio" d="M6 -10.5 L13.5 -9 Q16 0 13.5 9 L6 10.5 Z" />
      <path className="cq-vidrio" d="M-15 -10 L-20 -8.5 Q-22 0 -20 8.5 L-15 10 Z" />
      <path className="cq-espejo" d="M4 -14 v-3.5 h3 v3.5 M4 14 v3.5 h3 v-3.5" />
    </g>
  );
}

// Croquis como el de la denuncia del siniestro: dos calles, dos vehículos y el punto de impacto.
function Croquis() {
  return (
    <svg className="croquis" viewBox="0 0 640 480" role="img" aria-labelledby="croquis-titulo">
      <title id="croquis-titulo">Croquis ilustrativo de un choque en un cruce de calles entre el vehículo A y el vehículo B</title>
      <defs>
        <pattern id="cq-cuadricula" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#c9d0dc" strokeWidth=".6" />
        </pattern>
        <marker id="cq-flecha" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M1 1 L9 5 L1 9" fill="none" stroke="#1d2a52" strokeWidth="1.4" />
        </marker>
      </defs>
      <rect className="cq-grilla" width="640" height="480" fill="url(#cq-cuadricula)" />
      <g className="cq-calzada">
        <rect y="190" width="640" height="100" />
        <rect x="270" width="100" height="480" />
      </g>
      <g className="cq-cordones">
        <path className="cq-cordon" d="M0 190 H248 Q270 190 270 168 V0" />
        <path className="cq-cordon" d="M640 190 H392 Q370 190 370 168 V0" />
        <path className="cq-cordon" d="M0 290 H248 Q270 290 270 312 V480" />
        <path className="cq-cordon" d="M640 290 H392 Q370 290 370 312 V480" />
      </g>
      <g className="cq-ejes">
        <path d="M0 240 H232 M408 240 H640 M320 0 V152 M320 328 V480" />
      </g>
      <g className="cq-sendas">
        <path d="M246 196 V284" />
        <path d="M394 196 V284" />
        <path d="M276 166 H364" />
        <path d="M276 314 H364" />
      </g>
      <path className="cq-trayecto" d="M34 265 H224" markerEnd="url(#cq-flecha)" />
      <path className="cq-trayecto" d="M295 22 V186" markerEnd="url(#cq-flecha)" />
      <g transform="translate(262 265)"><g className="cq-a"><Auto /></g></g>
      <g transform="translate(295 222) rotate(90)"><g className="cq-b"><Auto /></g></g>
      <polygon className="cq-impacto" points="291.0,236.0 293.5,245.0 301.6,240.4 297.0,248.5 306.0,251.0 297.0,253.5 301.6,261.6 293.5,257.0 291.0,266.0 288.5,257.0 280.4,261.6 285.0,253.5 276.0,251.0 285.0,248.5 280.4,240.4 288.5,245.0" />
      <g className="cq-rotulo">
        <circle cx="238" cy="304" r="11" />
        <text x="238" y="308.5">A</text>
      </g>
      <g className="cq-rotulo">
        <circle cx="332" cy="200" r="11" />
        <text x="332" y="204.5">B</text>
      </g>
      <g className="cq-norte">
        <path d="M598 32 L604 54 L598 49 L592 54 Z" />
        <text x="598" y="26">N</text>
      </g>
    </svg>
  );
}

export function Traffic() {
  return (
    <section className="seccion transito" id="transito">
      <div className="shell transito-grid">
        <div className="transito-texto">
          <h2 className="revela">Qué podés reclamar después de un choque</h2>
          <p className="seccion-bajada">Responden el conductor, el dueño del vehículo y su aseguradora. Trabajamos casos en CABA y GBA.</p>
          <ul className="conceptos">
            {conceptos.map(concepto => <li key={concepto}>{concepto}</li>)}
          </ul>
          <div className="seccion-acciones">
            <a className="boton boton-noche" href={whatsappUrl('Hola VITA Abogados, tuve un accidente de tránsito y quiero consultar mi caso.')} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={18} /> Consultar por un choque
            </a>
            <Link className="enlace-guia" to="/accidentes-de-transito/que-hacer-despues-de-un-choque" prefetch="intent">Qué hacer después de un choque</Link>
          </div>
        </div>
        <figure className="transito-croquis">
          <Croquis />
        </figure>
      </div>
    </section>
  );
}
