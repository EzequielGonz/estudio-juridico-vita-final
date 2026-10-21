/* ============================================================================
 * ENVÍO DE FORMULARIOS (home y artículos)
 *
 * Cambiá LEADS_PROVIDER para elegir a dónde van las consultas:
 *  - 'pocketbase' → la base que ya trae el hosting (colección "consultas"). Activo hoy.
 *  - 'supabase'   → completar SUPABASE_CONFIG (url + anon key). Tabla: ver /supabase/consultas.sql
 *  - 'webhook'    → cualquier endpoint que reciba JSON por POST (Make, Zapier, n8n, backend propio).
 *  - 'none'       → no guarda nada; muestra el mensaje de éxito (solo para pruebas).
 * ========================================================================== */

export type LeadsProvider = 'pocketbase' | 'supabase' | 'webhook' | 'none';

/** Desde el 21/10 las consultas van al CRM (Supabase); el agente escribe por WhatsApp a los 5 minutos. */
export const LEADS_PROVIDER: LeadsProvider = 'webhook';

/** La anon key es pública por diseño: la seguridad la da la política RLS (solo permite insertar). */
export const SUPABASE_CONFIG = {
  url: '',      // Ej: 'https://xxxxxxxx.supabase.co'
  anonKey: '',
  table: 'consultas',
};

export const WEBHOOK_URL = 'https://legal-crm-nine.vercel.app/api/landing?perfil=juridico';

export type Lead = {
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  tipo: string;
  descripcion: string;
  /** Página desde la que llegó la consulta (ej. /accidentes-laborales/accidente-in-itinere). */
  origen?: string;
};

async function postJson(url: string, body: unknown, headers: Record<string, string> = {}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`Error ${response.status} al enviar la consulta`);
}

export async function submitLead(lead: Lead): Promise<void> {
  const payload = { ...lead, origen: lead.origen || '/' };

  switch (LEADS_PROVIDER) {
    case 'pocketbase': {
      const { default: pocketbaseClient } = await import('@/lib/pocketbase-client');
      await pocketbaseClient.collection('consultas').create(payload);
      return;
    }
    case 'supabase': {
      const { url, anonKey, table } = SUPABASE_CONFIG;
      if (!url || !anonKey) throw new Error('Supabase sin configurar');
      await postJson(`${url}/rest/v1/${table}`, payload, {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        Prefer: 'return=minimal',
      });
      return;
    }
    case 'webhook': {
      if (!WEBHOOK_URL) throw new Error('Webhook sin configurar');
      await postJson(WEBHOOK_URL, { ...payload, llegada: typeof document === 'undefined' ? '' : document.referrer });
      return;
    }
    default:
      console.info('[leads] Proveedor "none": la consulta no se guardó.', payload);
  }
}
