import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { WHATSAPP_URL } from '@/constants/brand';

// Botón flotante de WhatsApp: discreto, pequeño, fijo abajo a la derecha.
export function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
    >
      <WhatsAppIcon size={22} />
    </a>
  );
}
