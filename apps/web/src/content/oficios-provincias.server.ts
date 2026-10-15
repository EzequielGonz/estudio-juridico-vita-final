import type { Page } from './types';

const D = '2026-09-28';
const L = '/accidentes-laborales';

/* ================================ OFICIOS ================================ */

type Oficio = {
  slug: string;
  nombre: string;
  titulo: string;
  h1Em: string;
  intro: string;
  riesgos: string[];
  particularidad: { title: string; text: string };
  related: string[];
};

const oficios: Oficio[] = [
  {
    slug: 'construccion',
    nombre: 'Construcción',
    titulo: 'Accidentes laborales en la construcción',
    h1Em: 'en la construcción.',
    intro:
      'La construcción es una de las actividades con más accidentes de trabajo en el país. Caídas de altura, golpes, cortes y lesiones por cargar peso son parte del riesgo diario en una obra.',
    riesgos: [
      'Caídas desde andamios, escaleras o losas.',
      'Golpes por caída de materiales o herramientas.',
      'Cortes y lesiones con máquinas.',
      'Lesiones de columna por levantar peso, como la [hernia de disco](/accidentes-laborales/hernia-de-disco-laboral).',
      'Pérdida de audición por el ruido de las máquinas.',
    ],
    particularidad: {
      title: 'Trabajo no registrado y subcontratación',
      text: 'En la construcción son frecuentes la informalidad y las cadenas de subcontratistas. Si no estabas registrado, igual podés reclamar: mirá [trabajador no registrado](/accidentes-laborales/trabajador-no-registrado). Cuando hay contratistas y subcontratistas, puede analizarse la responsabilidad de más de una empresa.',
    },
    related: [`${L}/hernia-de-disco-laboral`, `${L}/trabajador-no-registrado`, `${L}/que-hacer-tras-un-accidente-de-trabajo`],
  },
  {
    slug: 'repartidores-y-apps',
    nombre: 'Repartidores y apps',
    titulo: 'Accidentes de repartidores y trabajadores de apps',
    h1Em: 'de repartidores y apps.',
    intro:
      'Repartidores en moto o bicicleta, cadetes y conductores pasan el día en la calle, expuestos al tránsito. Un accidente puede dejarte sin poder trabajar de un día para el otro.',
    riesgos: [
      'Choques con autos, colectivos o camiones.',
      'Caídas por el estado de las calles o la lluvia.',
      'Robos con lesiones durante el reparto.',
      'Lesiones por cargar pedidos pesados.',
    ],
    particularidad: {
      title: 'Qué reclamos son posibles',
      text: 'Depende de cómo trabajabas. Si eras empleado de una empresa o cadetería, el accidente se reclama a la ART. Si trabajabas por una aplicación, la situación es más compleja y conviene analizarla en detalle. En cualquier caso, si otro vehículo causó el accidente, podés reclamar a su conductor y a su aseguradora como en cualquier [accidente de moto](/accidentes-de-transito/accidente-de-moto).',
    },
    related: ['/accidentes-de-transito/accidente-de-moto', `${L}/accidente-in-itinere`, `${L}/trabajador-no-registrado`],
  },
  {
    slug: 'gastronomia',
    nombre: 'Gastronomía',
    titulo: 'Accidentes laborales en gastronomía',
    h1Em: 'en gastronomía.',
    intro:
      'Cocinas, bares y restaurantes combinan calor, cuchillos, pisos resbalosos y ritmo intenso. Quemaduras, cortes y caídas son accidentes de trabajo que se pueden reclamar.',
    riesgos: [
      'Quemaduras con aceite, hornos o vapor.',
      'Cortes con cuchillos y máquinas.',
      'Caídas por pisos mojados o con grasa.',
      'Lesiones por movimientos repetitivos, como el [túnel carpiano](/accidentes-laborales/tunel-carpiano).',
      'Lesiones de espalda por cargar cajones y bolsas.',
    ],
    particularidad: {
      title: 'Horarios extensos y trabajo informal',
      text: 'La gastronomía tiene muchos trabajadores sin registrar o registrados por menos horas de las reales. Eso no te quita el derecho a reclamar por un accidente, y puede impactar en cómo se calcula tu salario base.',
    },
    related: [`${L}/tunel-carpiano`, `${L}/trabajador-no-registrado`, `${L}/salarios-caidos-ilt`],
  },
  {
    slug: 'comercio',
    nombre: 'Comercio',
    titulo: 'Accidentes laborales en el comercio',
    h1Em: 'en el comercio.',
    intro:
      'Cajeros, repositores, vendedores y personal de depósitos también sufren accidentes y enfermedades laborales, muchas veces por esfuerzos y tareas repetitivas.',
    riesgos: [
      'Lesiones por levantar cajas y mercadería.',
      'Caídas desde escaleras en depósitos.',
      '[Túnel carpiano](/accidentes-laborales/tunel-carpiano) y tendinitis en cajeros y repositores.',
      'Várices por estar muchas horas de pie.',
      'Robos con lesiones en el local.',
    ],
    particularidad: {
      title: 'Enfermedades que aparecen con los años',
      text: 'En el comercio son muy comunes las [enfermedades profesionales](/accidentes-laborales/enfermedad-profesional) que se desarrollan de a poco. La ART suele rechazarlas como inculpables, pero se pueden discutir.',
    },
    related: [`${L}/tunel-carpiano`, `${L}/enfermedad-profesional`, `${L}/hernia-de-disco-laboral`],
  },
  {
    slug: 'salud',
    nombre: 'Salud',
    titulo: 'Accidentes laborales de enfermeros y personal de salud',
    h1Em: 'en el sector salud.',
    intro:
      'Enfermeros, médicos, camilleros y personal de limpieza de hospitales y clínicas están expuestos a riesgos físicos, biológicos y psicológicos todos los días.',
    riesgos: [
      'Lesiones de columna al movilizar pacientes.',
      'Pinchazos y cortes con material contaminado.',
      'Contagios de enfermedades en el trabajo.',
      'Agresiones de pacientes o acompañantes.',
      'Estrés y agotamiento por guardias extensas.',
    ],
    particularidad: {
      title: 'Riesgo biológico y salud mental',
      text: 'Un pinchazo con una aguja tiene que denunciarse de inmediato a la ART para el seguimiento correspondiente. Las secuelas psicológicas de situaciones de violencia o sobrecarga también pueden evaluarse en un reclamo.',
    },
    related: [`${L}/hernia-de-disco-laboral`, `${L}/enfermedad-profesional`, `${L}/que-hacer-tras-un-accidente-de-trabajo`],
  },
  {
    slug: 'transporte',
    nombre: 'Transporte',
    titulo: 'Accidentes laborales de choferes y transportistas',
    h1Em: 'de choferes y transportistas.',
    intro:
      'Choferes de colectivos, camioneros, taxistas y conductores de utilitarios trabajan en la calle. Un choque durante la jornada es un accidente de trabajo cubierto por la ART.',
    riesgos: [
      'Choques durante el recorrido o la entrega.',
      'Lesiones de columna por vibraciones y muchas horas sentado.',
      'Lesiones al cargar y descargar.',
      'Agresiones y robos.',
      'Pérdida de audición por el ruido del motor.',
    ],
    particularidad: {
      title: 'Doble reclamo cuando hay otro vehículo',
      text: 'Si un tercero causó el choque, además de la cobertura de la ART puede existir un reclamo contra ese conductor y su aseguradora. Mirá [choque de auto](/accidentes-de-transito/choque-de-auto).',
    },
    related: ['/accidentes-de-transito/choque-de-auto', `${L}/hernia-de-disco-laboral`, `${L}/hipoacusia-laboral`],
  },
];

function oficioToPage(o: Oficio): Page {
  return {
    silo: 'laboral',
    kind: 'oficio',
    tipo: 'Accidente laboral',
    published: D,
    updated: D,
    path: `${L}/${o.slug}`,
    title: o.titulo,
    description: `${o.intro.split('. ')[0]}. Qué cubre la ART y cómo reclamar tu indemnización.`.slice(0, 160),
    label: `Accidentes laborales en ${o.nombre.toLowerCase()}`,
    h1: 'Accidentes laborales',
    h1Em: o.h1Em,
    lead: o.intro,
    nav: o.nombre,
    sections: [
      { title: 'Los riesgos más frecuentes', blocks: [{ list: o.riesgos }] },
      { title: o.particularidad.title, blocks: [{ p: o.particularidad.text }] },
      {
        title: 'Qué te corresponde',
        blocks: [
          { list: [
            'Atención médica completa a cargo de la ART.',
            'Tu sueldo mientras no puedas trabajar. Mirá [sueldo durante la baja](/accidentes-laborales/salarios-caidos-ilt).',
            'Una indemnización si te queda una incapacidad. Podés estimarla con la [calculadora](/accidentes-laborales/calculadora-indemnizacion-art).',
          ] },
          { note: 'Si la ART rechazó tu accidente o te dio el alta antes de tiempo, se puede discutir. Consultanos con tu caso.' },
        ],
      },
    ],
    faqs: [
      { q: '¿El reclamo es contra mi empleador?', a: 'En general se dirige contra la ART. Si el empleador no tenía ART o no estabas registrado, responde el empleador.' },
      { q: '¿Me pueden despedir por reclamar?', a: 'Reclamar es un derecho. Si hay un despido vinculado al reclamo, eso genera derechos adicionales que conviene analizar.' },
    ],
    related: o.related,
  };
}

export const oficioPages: Page[] = oficios.map(oficioToPage);

/* =============================== PROVINCIAS ============================== */

type Provincia = {
  slug: string;
  nombre: string;
  en: string;
  ciudades: string[];
  actividades: string[];
  status: 'publicado' | 'borrador';
};

/**
 * Primera tanda publicada: las jurisdicciones con más volumen de consultas.
 * Las demás quedan como 'borrador'. Antes de publicarlas, sumá información
 * específica verificada de cada provincia (régimen aplicable, dónde funciona
 * la Comisión Médica, experiencia del estudio allí) para que no sean páginas finas.
 */
const provincias: Provincia[] = [
  { slug: 'caba', nombre: 'CABA', en: 'en la Ciudad de Buenos Aires', ciudades: ['Palermo', 'Microcentro', 'Puerto Madero', 'Barracas', 'Mataderos'], actividades: ['comercio y servicios', 'construcción', 'gastronomía', 'salud', 'transporte y reparto'], status: 'publicado' },
  { slug: 'provincia-de-buenos-aires', nombre: 'Provincia de Buenos Aires', en: 'en la Provincia de Buenos Aires', ciudades: ['La Plata', 'Mar del Plata', 'Bahía Blanca', 'La Matanza', 'Lomas de Zamora', 'San Martín'], actividades: ['industria', 'logística', 'construcción', 'actividad portuaria', 'agro'], status: 'publicado' },
  { slug: 'cordoba', nombre: 'Córdoba', en: 'en Córdoba', ciudades: ['Córdoba capital', 'Río Cuarto', 'Villa María', 'Villa Carlos Paz', 'San Francisco'], actividades: ['industria automotriz y autopartista', 'agro', 'construcción', 'comercio'], status: 'publicado' },
  { slug: 'santa-fe', nombre: 'Santa Fe', en: 'en Santa Fe', ciudades: ['Rosario', 'Santa Fe capital', 'Rafaela', 'Venado Tuerto', 'Reconquista'], actividades: ['agroindustria', 'actividad portuaria', 'metalmecánica', 'transporte'], status: 'publicado' },
  { slug: 'mendoza', nombre: 'Mendoza', en: 'en Mendoza', ciudades: ['Mendoza capital', 'Godoy Cruz', 'Guaymallén', 'Las Heras', 'San Rafael', 'Maipú'], actividades: ['vitivinicultura', 'agro', 'petróleo', 'construcción', 'turismo'], status: 'publicado' },
  { slug: 'tucuman', nombre: 'Tucumán', en: 'en Tucumán', ciudades: ['San Miguel de Tucumán', 'Yerba Buena', 'Concepción', 'Banda del Río Salí', 'Tafí Viejo'], actividades: ['industria azucarera', 'citricultura', 'agro', 'comercio'], status: 'publicado' },
  { slug: 'entre-rios', nombre: 'Entre Ríos', en: 'en Entre Ríos', ciudades: ['Paraná', 'Concordia', 'Gualeguaychú'], actividades: ['avicultura', 'agro', 'citricultura'], status: 'borrador' },
  { slug: 'salta', nombre: 'Salta', en: 'en Salta', ciudades: ['Salta capital', 'Orán', 'Tartagal'], actividades: ['agro', 'minería', 'turismo'], status: 'borrador' },
  { slug: 'neuquen', nombre: 'Neuquén', en: 'en Neuquén', ciudades: ['Neuquén capital', 'Cutral Có', 'Añelo'], actividades: ['petróleo y gas', 'construcción', 'transporte'], status: 'borrador' },
  { slug: 'chaco', nombre: 'Chaco', en: 'en Chaco', ciudades: ['Resistencia', 'Presidencia Roque Sáenz Peña'], actividades: ['agro', 'industria forestal'], status: 'borrador' },
  { slug: 'corrientes', nombre: 'Corrientes', en: 'en Corrientes', ciudades: ['Corrientes capital', 'Goya'], actividades: ['forestal', 'agro'], status: 'borrador' },
  { slug: 'misiones', nombre: 'Misiones', en: 'en Misiones', ciudades: ['Posadas', 'Oberá', 'Eldorado'], actividades: ['yerba mate', 'forestal', 'turismo'], status: 'borrador' },
  { slug: 'santiago-del-estero', nombre: 'Santiago del Estero', en: 'en Santiago del Estero', ciudades: ['Santiago del Estero capital', 'La Banda'], actividades: ['agro', 'construcción'], status: 'borrador' },
  { slug: 'jujuy', nombre: 'Jujuy', en: 'en Jujuy', ciudades: ['San Salvador de Jujuy', 'Palpalá'], actividades: ['minería', 'industria azucarera'], status: 'borrador' },
  { slug: 'rio-negro', nombre: 'Río Negro', en: 'en Río Negro', ciudades: ['Viedma', 'General Roca', 'Bariloche', 'Cipolletti'], actividades: ['fruticultura', 'turismo', 'petróleo'], status: 'borrador' },
  { slug: 'chubut', nombre: 'Chubut', en: 'en Chubut', ciudades: ['Rawson', 'Comodoro Rivadavia', 'Trelew', 'Puerto Madryn'], actividades: ['petróleo', 'pesca', 'aluminio'], status: 'borrador' },
  { slug: 'san-juan', nombre: 'San Juan', en: 'en San Juan', ciudades: ['San Juan capital', 'Rawson', 'Rivadavia'], actividades: ['minería', 'vitivinicultura'], status: 'borrador' },
  { slug: 'san-luis', nombre: 'San Luis', en: 'en San Luis', ciudades: ['San Luis capital', 'Villa Mercedes'], actividades: ['industria', 'agro'], status: 'borrador' },
  { slug: 'la-pampa', nombre: 'La Pampa', en: 'en La Pampa', ciudades: ['Santa Rosa', 'General Pico'], actividades: ['agro', 'ganadería'], status: 'borrador' },
  { slug: 'catamarca', nombre: 'Catamarca', en: 'en Catamarca', ciudades: ['San Fernando del Valle de Catamarca'], actividades: ['minería', 'agro'], status: 'borrador' },
  { slug: 'la-rioja', nombre: 'La Rioja', en: 'en La Rioja', ciudades: ['La Rioja capital', 'Chilecito'], actividades: ['agro', 'industria'], status: 'borrador' },
  { slug: 'formosa', nombre: 'Formosa', en: 'en Formosa', ciudades: ['Formosa capital', 'Clorinda'], actividades: ['agro', 'comercio'], status: 'borrador' },
  { slug: 'santa-cruz', nombre: 'Santa Cruz', en: 'en Santa Cruz', ciudades: ['Río Gallegos', 'Caleta Olivia'], actividades: ['petróleo', 'minería', 'pesca'], status: 'borrador' },
  { slug: 'tierra-del-fuego', nombre: 'Tierra del Fuego', en: 'en Tierra del Fuego', ciudades: ['Ushuaia', 'Río Grande'], actividades: ['industria electrónica', 'turismo', 'pesca'], status: 'borrador' },
];

const lista = (items: string[]) =>
  items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} y ${items[items.length - 1]}`;

function provinciaToPage(p: Provincia): Page {
  return {
    silo: 'laboral',
    kind: 'provincia',
    status: p.status,
    tipo: 'Accidente laboral',
    published: D,
    updated: D,
    path: `${L}/${p.slug}`,
    title: `Abogados ART y accidentes laborales en ${p.nombre}`,
    description: `Reclamos a la ART ${p.en}: accidentes de trabajo, in itinere y enfermedades profesionales en ${lista(p.ciudades.slice(0, 2))}. Consultá tu caso.`,
    label: `Accidentes laborales en ${p.nombre}`,
    h1: 'Accidentes laborales',
    h1Em: `${p.en}.`,
    lead: `Si te lastimaste trabajando ${p.en}, en el trayecto al trabajo o te enfermaste por tus tareas, tenés derecho a atención médica y a una indemnización. Te explicamos cómo es el reclamo.`,
    nav: p.nombre,
    sections: [
      {
        title: `Reclamos a la ART ${p.en}`,
        blocks: [
          { p: `Recibimos consultas de trabajadores de ${lista(p.ciudades)}. Las actividades con más accidentes y enfermedades laborales en la zona incluyen ${lista(p.actividades)}.` },
          { p: 'El sistema de riesgos del trabajo es nacional: tu empleador tiene que tener una ART que cubra tu atención médica, tu sueldo durante la baja y una indemnización si te queda una incapacidad.' },
        ],
      },
      {
        title: 'La Comisión Médica y el camino judicial',
        blocks: [
          { p: `Según el régimen que aplique ${p.en}, antes de ir a juicio puede ser obligatorio pasar por una [Comisión Médica](/accidentes-laborales/comision-medica) de la Superintendencia de Riesgos del Trabajo. Podés elegir la Comisión Médica de tu domicilio, la del lugar donde trabajás o la del lugar donde te reportás.` },
          { p: 'Si el dictamen no refleja tus secuelas, puede revisarse en la justicia laboral. En cada caso te explicamos qué camino corresponde.' },
        ],
      },
      {
        title: 'Situaciones que atendemos',
        blocks: [
          { list: [
            '[Accidentes de trabajo](/accidentes-laborales/que-hacer-tras-un-accidente-de-trabajo) y [accidentes in itinere](/accidentes-laborales/accidente-in-itinere).',
            '[Enfermedades profesionales](/accidentes-laborales/enfermedad-profesional), incluso las no listadas.',
            'Casos en que [la ART rechazó el accidente](/accidentes-laborales/art-rechazo-el-accidente).',
            '[Altas médicas](/accidentes-laborales/alta-medica-art) prematuras o sin incapacidad.',
            'Revisión del [porcentaje de incapacidad](/accidentes-laborales/porcentaje-de-incapacidad).',
          ] },
          { note: 'Podés iniciar la consulta a distancia, por teléfono o WhatsApp, y enviar tu documentación de forma digital.' },
        ],
      },
    ],
    faqs: [
      { q: `¿Atienden casos ${p.en}?`, a: `Sí. Recibimos consultas de trabajadores ${p.en} y te explicamos qué procedimiento corresponde a tu caso.` },
      { q: '¿Tengo que viajar?', a: 'La consulta inicial y buena parte del trámite pueden hacerse a distancia. Si hace falta una revisación o audiencia, se coordina según la Comisión Médica que corresponda.' },
    ],
    related: [`${L}/comision-medica`, `${L}/como-se-calcula-la-indemnizacion-art`, `${L}/accidente-in-itinere`],
  };
}

export const provinciaPages: Page[] = provincias.map(provinciaToPage);
