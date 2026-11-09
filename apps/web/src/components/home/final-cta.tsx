import { whatsappUrl } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

export function FinalCta() {
  return (
    <section className="cierre">
      <div className="shell cierre-inner">
        <div>
          <h2 className="revela">Tu situación merece ser escuchada</h2>
          <p>Contanos qué ocurrió y te orientamos sobre las alternativas disponibles para tu caso.</p>
        </div>
        <div className="cierre-acciones">
          <a className="boton boton-oro" href={whatsappUrl('Hola VITA Abogados, quiero que revisen mi caso.')} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon size={18} /> Escribinos por WhatsApp
          </a>
          <a className="boton boton-linea" href="#contacto">Dejar mis datos</a>
        </div>
      </div>
    </section>
  );
}
