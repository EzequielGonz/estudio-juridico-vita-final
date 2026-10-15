import type { Page } from './types';

/**
 * Páginas locales del silo de tránsito (AMBA).
 *
 * Cada zona tiene datos propios (localidades, vías, contexto) para que Google no
 * las considere páginas duplicadas. Para potenciarlas: sumá casos reales,
 * testimonios o datos del estudio en esa zona en `extra`.
 * Una zona en 'borrador' no se publica ni entra al sitemap.
 */

type Zona = {
  slug: string;
  nombre: string;
  /** Cómo se nombra dentro de una frase: "en La Matanza", "en la Ciudad". */
  en: string;
  region: 'CABA' | 'Zona Oeste' | 'Zona Sur' | 'Zona Norte' | 'Gran La Plata';
  localidades: string[];
  vias: string[];
  contexto: string;
  extra?: string[];
  status?: 'publicado' | 'borrador';
};

export const zonas: Zona[] = [
  {
    slug: 'caba',
    nombre: 'CABA',
    en: 'en la Ciudad de Buenos Aires',
    region: 'CABA',
    localidades: ['Palermo', 'Caballito', 'Flores', 'Belgrano', 'Almagro', 'Villa Urquiza', 'Balvanera', 'Mataderos', 'Barracas', 'Villa Lugano'],
    vias: ['Av. General Paz', 'Av. 9 de Julio', 'Av. Rivadavia', 'Av. Corrientes', 'Av. Juan B. Justo', 'Autopista 25 de Mayo', 'Av. Lugones', 'Av. Cabildo'],
    contexto:
      'La Ciudad concentra un volumen de tránsito enorme: autos particulares, colectivos, motos de reparto, bicicletas y peatones comparten las mismas calles. Esa convivencia explica que muchos de los reclamos que recibimos sean de motociclistas, ciclistas y peatones.',
  },
  {
    slug: 'la-matanza',
    nombre: 'La Matanza',
    en: 'en La Matanza',
    region: 'Zona Oeste',
    localidades: ['San Justo', 'Ramos Mejía', 'Isidro Casanova', 'González Catán', 'Gregorio de Laferrere', 'Villa Luzuriaga', 'Lomas del Mirador', 'Tapiales', 'Virrey del Pino'],
    vias: ['Ruta Nacional 3 (Av. Brig. Gral. Juan Manuel de Rosas)', 'Camino de Cintura', 'Av. Crovara', 'Av. de Mayo'],
    contexto:
      'Es el partido más poblado del conurbano y uno de los de mayor extensión. La Ruta 3 y el Camino de Cintura lo atraviesan con tránsito pesado, colectivos y un gran movimiento de motos.',
  },
  {
    slug: 'lomas-de-zamora',
    nombre: 'Lomas de Zamora',
    en: 'en Lomas de Zamora',
    region: 'Zona Sur',
    localidades: ['Lomas de Zamora centro', 'Banfield', 'Temperley', 'Turdera', 'Llavallol', 'Villa Fiorito', 'Ingeniero Budge', 'Villa Centenario'],
    vias: ['Av. Hipólito Yrigoyen', 'Camino Negro', 'Av. Meeks'],
    contexto:
      'Lomas combina zonas comerciales muy transitadas con corredores que conectan el sur del conurbano con la Ciudad. La Av. Hipólito Yrigoyen es uno de los ejes con más movimiento de colectivos de la zona sur.',
  },
  {
    slug: 'quilmes',
    nombre: 'Quilmes',
    en: 'en Quilmes',
    region: 'Zona Sur',
    localidades: ['Quilmes centro', 'Quilmes Oeste', 'Bernal', 'Don Bosco', 'Ezpeleta', 'San Francisco Solano'],
    vias: ['Autopista Buenos Aires–La Plata', 'Av. Calchaquí', 'Av. Mitre', 'Camino General Belgrano'],
    contexto:
      'Quilmes está atravesado por la Autopista Buenos Aires–La Plata y por la Av. Calchaquí, dos vías de alta velocidad y mucho tránsito diario hacia la Ciudad y hacia La Plata.',
  },
  {
    slug: 'lanus',
    nombre: 'Lanús',
    en: 'en Lanús',
    region: 'Zona Sur',
    localidades: ['Lanús Este', 'Lanús Oeste', 'Remedios de Escalada', 'Valentín Alsina', 'Gerli', 'Monte Chingolo'],
    vias: ['Av. Hipólito Yrigoyen', 'accesos al Riachuelo desde Valentín Alsina', 'Av. Remedios de Escalada de San Martín'],
    contexto:
      'Lanús limita con la Ciudad a través del Riachuelo, y sus accesos concentran mucho tránsito en horas pico. Es una zona densa, con calles angostas y gran circulación de motos y colectivos.',
  },
  {
    slug: 'avellaneda',
    nombre: 'Avellaneda',
    en: 'en Avellaneda',
    region: 'Zona Sur',
    localidades: ['Avellaneda centro', 'Sarandí', 'Wilde', 'Dock Sud', 'Piñeyro', 'Villa Domínico', 'Gerli'],
    vias: ['Av. Mitre', 'Av. Belgrano', 'Puente Pueyrredón', 'Autopista Buenos Aires–La Plata'],
    contexto:
      'Avellaneda es la puerta de entrada del sur del conurbano a la Ciudad. El Puente Pueyrredón y la Av. Mitre tienen un flujo muy intenso de autos, camiones y colectivos durante todo el día.',
  },
  {
    slug: 'moron',
    nombre: 'Morón',
    en: 'en Morón',
    region: 'Zona Oeste',
    localidades: ['Morón centro', 'Castelar', 'Haedo', 'El Palomar', 'Villa Sarmiento'],
    vias: ['Acceso Oeste', 'Av. Rivadavia', 'Av. Gaona', 'Av. Vergara'],
    contexto:
      'Morón es un nodo del oeste: el Acceso Oeste y la Av. Rivadavia lo cruzan de punta a punta y conectan con la Ciudad. La circulación de colectivos y autos es constante en todas sus localidades.',
  },
  {
    slug: 'merlo',
    nombre: 'Merlo',
    en: 'en Merlo',
    region: 'Zona Oeste',
    localidades: ['Merlo centro', 'Parque San Martín', 'Libertad', 'Pontevedra', 'San Antonio de Padua', 'Mariano Acosta'],
    vias: ['Acceso Oeste', 'Av. Rivadavia'],
    contexto:
      'En Merlo, el Acceso Oeste es la vía de mayor velocidad y tránsito. Hacia el interior del partido hay calles con menos señalización, donde los choques en esquinas y con motos son frecuentes.',
  },
  {
    slug: 'moreno',
    nombre: 'Moreno',
    en: 'en Moreno',
    region: 'Zona Oeste',
    localidades: ['Moreno centro', 'Paso del Rey', 'Trujui', 'Francisco Álvarez', 'Cuartel V', 'La Reja'],
    vias: ['Acceso Oeste', 'Ruta Provincial 23', 'Ruta Provincial 25'],
    contexto:
      'Moreno combina el tránsito rápido del Acceso Oeste con rutas provinciales que conectan con el norte y el oeste del conurbano, por donde circulan camiones y transporte de carga.',
  },
  {
    slug: 'san-martin',
    nombre: 'San Martín',
    en: 'en San Martín',
    region: 'Zona Norte',
    localidades: ['San Martín centro', 'Villa Ballester', 'San Andrés', 'José León Suárez', 'Villa Lynch', 'Billinghurst', 'Villa Maipú'],
    vias: ['Av. General Paz', 'Av. Ricardo Balbín', 'Camino del Buen Ayre'],
    contexto:
      'San Martín es un partido con mucha actividad industrial y límite directo con la Ciudad por la General Paz. Por eso hay mucho tránsito de camiones y utilitarios, además de colectivos y motos.',
  },
  {
    slug: 'tres-de-febrero',
    nombre: 'Tres de Febrero',
    en: 'en Tres de Febrero',
    region: 'Zona Oeste',
    localidades: ['Caseros', 'Ciudadela', 'Santos Lugares', 'Sáenz Peña', 'Martín Coronado', 'Ciudad Jardín Lomas del Palomar', 'Pablo Podestá', 'Loma Hermosa'],
    vias: ['Av. General Paz', 'Acceso Oeste', 'Camino del Buen Ayre'],
    contexto:
      'Tres de Febrero limita con la Ciudad y está atravesado por grandes vías de acceso. Sus localidades tienen calles residenciales con mucho movimiento de autos que entran y salen hacia la General Paz.',
  },
  {
    slug: 'vicente-lopez',
    nombre: 'Vicente López',
    en: 'en Vicente López',
    region: 'Zona Norte',
    localidades: ['Olivos', 'Florida', 'Munro', 'Villa Martelli', 'La Lucila', 'Carapachay', 'Vicente López'],
    vias: ['Av. del Libertador', 'Av. Maipú', 'Panamericana', 'Av. General Paz'],
    contexto:
      'Vicente López concentra corredores muy transitados como Libertador, Maipú y la Panamericana, con alto flujo de autos, bicicletas y motos de reparto.',
  },
  {
    slug: 'san-isidro',
    nombre: 'San Isidro',
    en: 'en San Isidro',
    region: 'Zona Norte',
    localidades: ['San Isidro centro', 'Martínez', 'Acassuso', 'Beccar', 'Boulogne', 'Villa Adelina'],
    vias: ['Av. del Libertador', 'Panamericana', 'Av. Centenario', 'Av. Fondo de la Legua'],
    contexto:
      'En San Isidro conviven la Panamericana, de alta velocidad, con avenidas comerciales como Centenario y Libertador, donde el cruce de peatones y ciclistas es permanente.',
  },
  {
    slug: 'tigre',
    nombre: 'Tigre',
    en: 'en Tigre',
    region: 'Zona Norte',
    localidades: ['Tigre centro', 'Don Torcuato', 'General Pacheco', 'El Talar', 'Benavídez', 'Nordelta', 'Rincón de Milberg'],
    vias: ['Panamericana', 'Ruta Provincial 197', 'Av. Cazón'],
    contexto:
      'Tigre combina la Panamericana y la Ruta 197 con zonas industriales como General Pacheco, lo que suma camiones y transporte de personal al tránsito diario.',
  },
  {
    slug: 'pilar',
    nombre: 'Pilar',
    en: 'en Pilar',
    region: 'Zona Norte',
    localidades: ['Pilar centro', 'Del Viso', 'Presidente Derqui', 'Manzanares', 'Villa Rosa', 'Fátima'],
    vias: ['Panamericana (ramal Pilar)', 'Ruta Nacional 8', 'Ruta Provincial 25'],
    contexto:
      'Pilar creció muy rápido y su tránsito depende de pocas vías principales. El ramal Pilar de la Panamericana y la Ruta 8 concentran tránsito de alta velocidad, micros y transporte de carga.',
  },
  {
    slug: 'almirante-brown',
    nombre: 'Almirante Brown',
    en: 'en Almirante Brown',
    region: 'Zona Sur',
    localidades: ['Adrogué', 'Burzaco', 'Longchamps', 'Rafael Calzada', 'José Mármol', 'Claypole', 'San José', 'Glew'],
    vias: ['Av. Hipólito Yrigoyen', 'Av. Espora', 'Ruta Provincial 210'],
    contexto:
      'Almirante Brown está atravesado de norte a sur por la Av. Hipólito Yrigoyen, un corredor con mucho transporte público que conecta sus localidades con Lomas de Zamora y la Ciudad.',
  },
  {
    slug: 'esteban-echeverria',
    nombre: 'Esteban Echeverría',
    en: 'en Esteban Echeverría',
    region: 'Zona Sur',
    localidades: ['Monte Grande', 'Luis Guillón', 'El Jagüel', '9 de Abril', 'Canning'],
    vias: ['Camino de Cintura', 'Autopista Ezeiza–Cañuelas'],
    contexto:
      'El Camino de Cintura y la Autopista Ezeiza–Cañuelas son las vías principales de Esteban Echeverría, con mucho tránsito hacia Ezeiza y el sur del conurbano.',
  },
  {
    slug: 'florencio-varela',
    nombre: 'Florencio Varela',
    en: 'en Florencio Varela',
    region: 'Zona Sur',
    localidades: ['Florencio Varela centro', 'Bosques', 'Zeballos', 'Villa Vatteone', 'Ingeniero Allan', 'La Capilla'],
    vias: ['Av. Calchaquí (Ruta Provincial 36)'],
    contexto:
      'La Av. Calchaquí es el eje principal de Florencio Varela y una de las vías con más tránsito de la zona sur. En las zonas más alejadas del centro predominan calles con menor iluminación y señalización.',
  },
  {
    slug: 'berazategui',
    nombre: 'Berazategui',
    en: 'en Berazategui',
    region: 'Zona Sur',
    localidades: ['Berazategui centro', 'Hudson', 'Ranelagh', 'Plátanos', 'Sourigues', 'Villa España', 'Juan María Gutiérrez'],
    vias: ['Autopista Buenos Aires–La Plata', 'Av. Mitre', 'Camino General Belgrano'],
    contexto:
      'Berazategui queda entre la Ciudad y La Plata, y la autopista que las une lo atraviesa. Eso suma a su tránsito local un gran volumen de vehículos de paso a alta velocidad.',
  },
  {
    slug: 'la-plata',
    nombre: 'La Plata',
    en: 'en La Plata',
    region: 'Gran La Plata',
    localidades: ['La Plata centro', 'City Bell', 'Gonnet', 'Villa Elisa', 'Tolosa', 'Los Hornos', 'Ringuelet', 'Melchor Romero'],
    vias: ['Autopista Buenos Aires–La Plata', 'Camino Centenario', 'Camino General Belgrano', 'Av. 7', 'Av. 32'],
    contexto:
      'La Plata tiene un trazado de diagonales y rotondas que genera cruces complejos, además de un gran movimiento de estudiantes en bicicleta y moto. Camino Centenario y Camino Belgrano la conectan con el resto del conurbano.',
  },
];

const D = '2026-09-28';
const T = '/accidentes-de-transito';

const lista = (items: string[]) => {
  if (items.length <= 1) return items.join('');
  return `${items.slice(0, -1).join(', ')} y ${items[items.length - 1]}`;
};

function zonaToPage(z: Zona): Page {
  const vecinas = zonas.filter(o => o.region === z.region && o.slug !== z.slug).slice(0, 2);
  return {
    silo: 'transito',
    kind: 'zona',
    status: z.status ?? 'publicado',
    tipo: 'Accidente de tránsito',
    published: D,
    updated: D,
    path: `${T}/${z.slug}`,
    title: `Abogados de accidentes de tránsito en ${z.nombre}`,
    description: `Reclamos por accidentes de tránsito ${z.en}: choques, motos, peatones y colectivos en ${lista(z.localidades.slice(0, 3))}. Consultá tu caso.`,
    label: `Accidentes de tránsito en ${z.region}`,
    h1: 'Accidentes de tránsito',
    h1Em: `${z.en}.`,
    lead: `Si tuviste un accidente ${z.en}, podés reclamar por tus lesiones y por los daños. Te explicamos cómo funciona el reclamo y cómo te acompañamos desde el primer día.`,
    nav: z.nombre,
    sections: [
      {
        title: `Accidentes de tránsito ${z.en}`,
        blocks: [
          { p: z.contexto },
          { p: `Recibimos consultas de ${lista(z.localidades)}. En todos los casos, el reclamo apunta a lo mismo: que el responsable y su aseguradora reconozcan todo el daño que te causó el accidente.` },
          ...(z.extra ?? []).map(text => ({ p: text })),
        ],
      },
      {
        title: 'Dónde ocurren muchos de los accidentes',
        blocks: [
          { p: `Buena parte de las consultas que recibimos ${z.en} tienen que ver con hechos ocurridos sobre estas vías o en sus cruces:` },
          { list: z.vias },
          { p: 'En avenidas y rutas de alta velocidad son frecuentes los choques desde atrás y los cambios de carril. En calles internas, los choques en esquinas y los accidentes de motos y bicicletas.' },
        ],
      },
      {
        title: 'Qué podés reclamar',
        blocks: [
          { list: [
            'Incapacidad física o psicológica que deje el accidente.',
            'Daño moral por el sufrimiento y los cambios en tu vida.',
            'Gastos médicos, de rehabilitación y traslados.',
            'Ingresos que dejaste de cobrar.',
            'Reparación y privación de uso del vehículo.',
          ] },
          { p: 'Te lo explicamos en detalle en [cuánto se cobra por un accidente de tránsito](/accidentes-de-transito/indemnizacion-por-accidente-de-transito).' },
        ],
      },
      {
        title: 'Cómo sigue el reclamo',
        blocks: [
          { steps: [
            { title: 'Nos contás qué pasó', text: 'Por teléfono, WhatsApp o el formulario. Revisamos cómo fue el accidente y qué pruebas hay.' },
            { title: 'Reclamo a la aseguradora', text: 'Armamos el reclamo con la documentación médica y de los daños.' },
            { title: 'Mediación', text: `Antes del juicio hay una [mediación previa obligatoria](/accidentes-de-transito/mediacion-previa). Muchos casos se resuelven ahí.` },
            { title: 'Juicio, si hace falta', text: 'Si la oferta no es adecuada, se inicia la demanda en la jurisdicción que corresponda según el caso.' },
          ] },
          { note: `Si el accidente ocurrió ${z.en} mientras ibas o volvías del trabajo, también puede ser un [accidente in itinere](/accidentes-laborales/accidente-in-itinere) cubierto por la ART.` },
        ],
      },
    ],
    faqs: [
      { q: `¿Atienden accidentes ocurridos ${z.en}?`, a: `Sí. Trabajamos con reclamos por accidentes de tránsito ${z.en} y en el resto de la Ciudad y el conurbano bonaerense.` },
      { q: '¿Cuánto tiempo tengo para reclamar?', a: 'El plazo general es de tres años desde el accidente, pero conviene empezar cuanto antes para no perder pruebas como cámaras y testigos.' },
      { q: '¿Tengo que ir a una oficina?', a: 'Podés empezar la consulta por teléfono o WhatsApp y enviar la documentación de forma digital.' },
    ],
    related: [
      ...vecinas.map(v => `${T}/${v.slug}`),
      `${T}/que-hacer-despues-de-un-choque`,
    ],
  };
}

export const zonaPages: Page[] = zonas.map(zonaToPage);
