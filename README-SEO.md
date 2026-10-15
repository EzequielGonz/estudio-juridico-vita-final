# Estrategia SEO — guía de uso

Este proyecto suma **64 páginas de contenido** organizadas en tres silos, sin cambiar el diseño de la home. Todas usan la misma tipografía, colores, botones y formulario que el inicio.

## 1. Qué se agregó

| Silo | URL pilar | Páginas |
|---|---|---|
| Accidentes de tránsito (AMBA) | `/accidentes-de-transito` | 12 guías + 20 zonas (CABA y 19 partidos) |
| Accidentes laborales / ART (todo el país) | `/accidentes-laborales` | 14 guías + calculadora + 6 oficios + 6 provincias |
| Guías y recursos | `/guias` | Índice general + glosario + documentos |

Cada página tiene: título y descripción propios para Google, migas de pan, índice lateral, **CTA en la mitad** (teléfono o formulario + WhatsApp), preguntas frecuentes, guías relacionadas, **formulario "te contactamos"** y banda final con teléfono y WhatsApp. También lleva datos estructurados (LegalService, Article, BreadcrumbList y FAQPage) y entra automáticamente en `/sitemap.xml`.

## 2. Dónde completar los datos (un solo archivo)

**`apps/web/src/constants/brand.ts`** — todo el sitio lee de acá. Mientras un dato esté vacío, su botón no aparece.

- `FIRM_NAME`: nombre comercial del estudio.
- `SITE_URL`: dominio definitivo (`https://www.tuestudio.com.ar`). Fija la URL canónica.
- `PHONE` y `PHONE_E164`: teléfono visible y para marcar. Al completarlo, todos los CTA muestran el número para llamar.
- `WHATSAPP_NUMBER`: solo números (`5491140000000`). Cada artículo manda un mensaje precargado propio, así sabés desde qué guía escriben.
- `INSTAGRAM_URL`, `INSTAGRAM_HANDLE`, `FACEBOOK_URL`, `EMAIL`, `ADDRESS`.
- `REVIEWER`: nombre y matrícula del profesional que revisa los artículos (suma mucha confianza para Google en temas legales).
- `VERIFICATION`: códigos de Google Search Console y Bing.
- `INDEXNOW_KEY`: clave de 32 caracteres para indexación instantánea en Bing y otros.

**`apps/web/src/constants/cta.ts`** — textos de todos los llamados a la acción de los artículos.

## 3. A dónde van las consultas del formulario

**`apps/web/src/lib/leads.ts`** → `LEADS_PROVIDER`. Aplica al formulario de la home y al de los artículos.

- `'pocketbase'` (activo): la base que ya trae el hosting, colección `consultas`. Se agregó el campo `origen` (página de donde vino la consulta) con una migración nueva.
- `'supabase'`: ejecutar `supabase/consultas.sql` en el SQL Editor, completar `SUPABASE_CONFIG` y cambiar el proveedor. La tabla ya trae `estado` y `notas` para el seguimiento del asesor, y el sitio solo puede insertar.
- `'webhook'`: cualquier URL que reciba JSON (Make, Zapier, n8n, un CRM).

Si instalan Google Tag Manager, quedan listos los eventos `click_llamar`, `click_whatsapp` y `lead_enviado` para medir conversiones.

## 4. Cambios en la home (mínimos, sin tocar el diseño)

- **Header**: se reemplazó el ancla "Especialidades" por los accesos a las dos áreas. En pantallas medianas se muestran como "Tránsito" y "Laborales" para que el menú no se apile. Las anclas ahora empiezan con `/#` para funcionar desde cualquier página.
- **Footer**: la columna Especialidades enlaza a los pilares, la calculadora y las guías. Se sumó Facebook.
- **Metadatos**: título optimizado y datos estructurados del estudio (invisibles).
- **Formulario**: mismo diseño y campos; solo cambió a dónde envía (usa `leads.ts`).

## 5. Contenido: cómo crecer

- **Agregar un artículo**: sumarlo al archivo del silo en `apps/web/src/content/` y agregar su ruta a un grupo de `HUBS` en `index.server.ts`. Para enlaces internos dentro del texto: `[texto](/ruta)`.
- **Publicar provincias en borrador**: en `oficios-provincias.server.ts` hay 18 provincias con `status: 'borrador'` (no se publican ni entran al sitemap). Antes de pasarlas a `'publicado'`, sumales información propia y verificada para que no sean páginas finas.
- **Potenciar las zonas**: cada zona acepta `extra` con párrafos propios (casos atendidos, testimonios, datos del estudio en la zona). Es lo que más las diferencia.
- **Fechas**: al revisar un artículo, actualizá su `updated`. Google valora el contenido al día.

## 6. Antes de publicar — revisión legal obligatoria

El contenido fue redactado con criterio orientativo y sin prometer resultados, pero **debe revisarlo un abogado del estudio antes de publicarse**. En particular: normas y plazos citados, régimen de Comisiones Médicas por provincia, la fórmula de la calculadora y cualquier reforma laboral o previsional reciente. Revisar también las normas de publicidad del Colegio de Abogados correspondiente.

En la calculadora, `PISO_POR_PUNTO` (en `components/articulo/calculadora.tsx`) permite aplicar el piso mínimo vigente que publica la SRT cada semestre.

## 7. Checklist de lanzamiento

1. Completar `brand.ts` (dominio, teléfono, WhatsApp, redes).
2. Revisión legal del contenido.
3. Publicar y verificar el dominio en **Google Search Console**; enviar `https://tudominio/sitemap.xml`.
4. Lo mismo en **Bing Webmaster Tools** (alimenta también a ChatGPT y Copilot).
5. Generar la clave IndexNow, cargarla en `INDEXNOW_KEY`, publicar y correr `node scripts/indexnow.mjs https://tudominio`. Repetir cada vez que se publiquen páginas.
6. Crear el **Google Business Profile** con el mismo nombre, dirección y teléfono que el sitio, y empezar a pedir reseñas.
7. Cargar el estudio en directorios jurídicos con los mismos datos (NAP consistente).
8. En Search Console, pedir la indexación manual de los pilares y las guías principales.

> Mientras el sitio esté en un dominio temporal de Hostinger, `robots.txt` bloquea la indexación a propósito. Se habilita solo al conectar el dominio propio.
