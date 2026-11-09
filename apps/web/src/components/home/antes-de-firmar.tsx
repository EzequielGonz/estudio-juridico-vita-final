import { whatsappUrl } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

// Renglones del convenio de ejemplo: solo forma, sin texto ni montos.
const renglones = ['94%', '100%', '88%', '97%', '62%'];
const renglonesFinales = ['100%', '91%', '74%'];

function Documento() {
  return (
    <div className="documento" aria-hidden="true">
      <div className="documento-hoja">
        <p className="documento-titulo">Convenio de pago</p>
        {renglones.map((ancho, i) => <span key={`a${i}`} className="documento-renglon" style={{ width: ancho }} />)}
        <div className="documento-monto"><span>Monto ofrecido</span><span className="documento-blanco" /></div>
        {renglonesFinales.map((ancho, i) => <span key={`b${i}`} className="documento-renglon" style={{ width: ancho }} />)}
        <div className="documento-firma">
          <svg viewBox="0 0 260 96" focusable="false">
            <path className="firma-trazo" d="M14 70 C 26 40, 40 16, 50 22 C 60 28, 44 66, 36 74 C 30 80, 28 70, 36 60 C 48 44, 66 38, 70 52 C 73 62, 64 70, 72 66 C 82 60, 90 40, 98 44 C 104 48, 96 64, 104 64 C 114 64, 120 34, 130 36 C 138 38, 130 60, 138 62 C 148 64, 156 40, 166 42 C 174 44, 168 60, 178 58 C 192 55, 198 36, 210 40 M 40 84 C 96 76, 166 72, 248 66" />
          </svg>
          <span className="documento-linea" />
          <span className="documento-etiqueta">Firma</span>
        </div>
      </div>
    </div>
  );
}

export function AntesDeFirmar() {
  return (
    <section className="seccion firma" id="antes-de-firmar">
      <div className="shell firma-grid">
        <Documento />
        <div className="firma-texto">
          <h2 className="revela">Antes de firmar un acuerdo, consultanos</h2>
          <p className="seccion-bajada">Después de un choque, la aseguradora del otro conductor puede ofrecerte un arreglo rápido. Lo que firmás puede cerrar tu reclamo.</p>
          <ol className="consejos">
            <li><strong>Pedí la oferta por escrito.</strong> Con el monto y lo que incluye.</li>
            <li><strong>No firmes el mismo día.</strong> Tomate el tiempo de leerla con calma.</li>
            <li><strong>Consultanos antes de aceptar.</strong> Revisamos si contempla todo lo que perdiste.</li>
          </ol>
          <a className="boton boton-noche" href={whatsappUrl('Hola VITA Abogados, me ofrecieron un acuerdo y quiero consultar antes de firmar.')} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} /> Consultar antes de firmar
          </a>
        </div>
      </div>
    </section>
  );
}
