import { Phone } from 'lucide-react';
import { PHONE, PHONE_URL, whatsappUrl } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { track } from '@/lib/track';

type Props = {
  /** Mensaje precargado de WhatsApp (identifica desde qué artículo escriben). */
  whatsappMessage: string;
  origen: string;
  whatsappLabel: string;
  /** Texto del botón al formulario cuando todavía no hay teléfono cargado. */
  formLabel: string;
  callLabel: string;
  /** 'dark' sobre fondo claro, 'light' sobre la banda azul. */
  tone?: 'dark' | 'light';
};

/**
 * Botones de contacto de los artículos. Con teléfono cargado muestra el número
 * para llamar; sin teléfono, ofrece ir al formulario. WhatsApp siempre visible,
 * igual que en la home.
 */
export function ContactButtons({ whatsappMessage, origen, whatsappLabel, formLabel, callLabel, tone = 'dark' }: Props) {
  const primary = tone === 'dark' ? 'button button-dark' : 'button button-light';

  return (
    <>
      {PHONE_URL ? (
        <a className={primary} href={PHONE_URL} aria-label={`${callLabel}: ${PHONE}`} onClick={() => track('click_llamar', { origen })}>
          <Phone size={17} strokeWidth={1.5} /> {PHONE}
        </a>
      ) : (
        <a className={primary} href="#consulta">{formLabel}</a>
      )}
      <a
        className="button button-whatsapp"
        href={whatsappUrl(whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('click_whatsapp', { origen })}
      >
        <WhatsAppIcon size={18} /> {whatsappLabel}
      </a>
    </>
  );
}
