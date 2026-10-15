export const LOGO_URL = 'https://horizons-cdn.hostinger.com/add5b810-45d5-469b-9c77-e0a496f798a9/c7b97c5a33b71ed336e8f7a4c5f77c60.png';
export const LOGO_TRANSPARENT_URL = 'https://images.hostinger.com/bc3f1cef-f13c-432a-99e4-ec494e9da23f.png';
export const PALETTE_REFERENCE_URL = 'https://horizons-cdn.hostinger.com/add5b810-45d5-469b-9c77-e0a496f798a9/ddd7e84fe0a32a41c4ca25ed88766b20.jpg';
export const BLUE_REFERENCE_URL = 'https://horizons-cdn.hostinger.com/add5b810-45d5-469b-9c77-e0a496f798a9/30f015740ddfb8ac65a5c0d3e3a062f3.png';
// Referencias de identidad: PALETTE_REFERENCE_URL y BLUE_REFERENCE_URL definen los tonos CSS, no son contenido visual de la página.

/* ============================================================================
 * DATOS DEL ESTUDIO — ÚNICO LUGAR PARA COMPLETAR
 * Todo el sitio (home, artículos, footer, botones, schema para Google) lee de
 * acá. Cuando un valor está vacío, ese botón o dato simplemente no se muestra.
 * ========================================================================== */

/** Nombre comercial de la firma. Aparece en títulos de Google, schema y footer. */
export const FIRM_NAME = 'Estudio Jurídico';

/**
 * Dominio definitivo, con https y sin barra final. Ej: 'https://www.tuestudio.com.ar'.
 * Si queda vacío se usa el dominio desde el que se visita el sitio.
 * Completarlo fija la URL canónica (evita duplicados www / sin www).
 */
export const SITE_URL = '';

/** Teléfono tal como se muestra. Ej: '(011) 4000-0000'. */
export const PHONE = '';
/** Teléfono para marcar desde el celular, formato internacional. Ej: '+541140000000'. */
export const PHONE_E164 = '';

/** WhatsApp: solo números, con código de país y 9. Ej: '5491140000000'. */
export const WHATSAPP_NUMBER = '';
/** Mensaje precargado por defecto al abrir WhatsApp. */
export const WHATSAPP_DEFAULT_MESSAGE = 'Hola, quiero realizar una consulta.';

export const EMAIL = '';
export const INSTAGRAM_HANDLE = ''; // Ej: '@tuestudio'
export const INSTAGRAM_URL = '';    // Ej: 'https://www.instagram.com/tuestudio'
export const FACEBOOK_URL = '';     // Ej: 'https://www.facebook.com/tuestudio'

/** Dirección del estudio (opcional, mejora el SEO local si coincide con Google Business). */
export const ADDRESS = {
  street: '',
  locality: '',
  region: 'Buenos Aires',
  postalCode: '',
  country: 'AR',
};

/**
 * Profesional que revisa los artículos (opcional). Si se completa, cada artículo
 * muestra "Revisado por ..." — Google lo valora mucho en temas legales.
 */
export const REVIEWER = { name: '', matricula: '' };

/** Códigos de verificación de Google Search Console y Bing Webmaster Tools (solo el valor "content"). */
export const VERIFICATION = { google: '', bing: '' };

/** Clave de IndexNow (Bing, Yandex y otros indexan al instante). Letras y números, 32 caracteres. */
export const INDEXNOW_KEY = '';

/* ======================= Derivados — no hace falta editar ======================= */

/** Link de WhatsApp con un mensaje precargado (cada artículo manda uno propio). */
export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  const text = encodeURIComponent(message);
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://api.whatsapp.com/send?text=${text}`;
}

export const WHATSAPP_URL = whatsappUrl();

export const PHONE_URL = PHONE_E164
  ? `tel:${PHONE_E164}`
  : PHONE
    ? `tel:${PHONE.replace(/[^\d+]/g, '')}`
    : '';

export const SOCIAL_LINKS = [INSTAGRAM_URL, FACEBOOK_URL].filter(Boolean);
