import type { Page } from './types';

const D = '2026-09-28';

export const guiaPages: Page[] = [
  {
    silo: 'guias',
    kind: 'guia',
    tipo: 'Accidente laboral',
    published: D,
    updated: D,
    path: '/guias/glosario',
    title: 'Glosario de accidentes laborales y de tránsito',
    description:
      'Qué significan ART, ILT, IPP, in itinere, Comisión Médica, baremo, daño moral, lucro cesante y otros términos de los reclamos por accidentes.',
    label: 'Glosario',
    h1: 'Glosario de términos',
    h1Em: 'en reclamos por accidentes.',
    lead:
      'Los reclamos por accidentes usan muchas siglas y palabras técnicas. Acá las explicamos en lenguaje simple, para que entiendas cada paso de tu caso.',
    nav: 'Glosario',
    sections: [
      {
        title: 'Accidentes laborales',
        blocks: [
          { h3: 'ART' },
          { p: 'Aseguradora de Riesgos del Trabajo. Es la compañía que contrata el empleador para cubrir los accidentes y enfermedades laborales de sus trabajadores.' },
          { h3: 'SRT' },
          { p: 'Superintendencia de Riesgos del Trabajo. Es el organismo que controla a las ART y del que dependen las Comisiones Médicas.' },
          { h3: 'Accidente in itinere' },
          { p: 'El que ocurre en el trayecto entre tu casa y el trabajo. Ver [accidente in itinere](/accidentes-laborales/accidente-in-itinere).' },
          { h3: 'ILT' },
          { p: 'Incapacidad laboral temporaria: el período en que no podés trabajar mientras te recuperás. Ver [sueldo durante la baja](/accidentes-laborales/salarios-caidos-ilt).' },
          { h3: 'IPP' },
          { p: 'Incapacidad permanente parcial: la secuela que queda después del alta, expresada en un porcentaje menor al 66%.' },
          { h3: 'IPT' },
          { p: 'Incapacidad permanente total: cuando la incapacidad es del 66% o más.' },
          { h3: 'Baremo' },
          { p: 'La tabla oficial que usan los médicos para asignar un porcentaje a cada secuela. Ver [porcentaje de incapacidad](/accidentes-laborales/porcentaje-de-incapacidad).' },
          { h3: 'Comisión Médica' },
          { p: 'Organismo de la SRT que resuelve las discusiones médicas entre el trabajador y la ART. Ver [Comisión Médica](/accidentes-laborales/comision-medica).' },
          { h3: 'Enfermedad inculpable' },
          { p: 'Enfermedad que no tiene relación con el trabajo. Es el argumento habitual de la ART para rechazar una enfermedad profesional.' },
          { h3: 'Recalificación profesional' },
          { p: 'Capacitación para una nueva tarea cuando las secuelas no te permiten volver a la anterior.' },
        ],
      },
      {
        title: 'Accidentes de tránsito',
        blocks: [
          { h3: 'Responsabilidad objetiva' },
          { p: 'Regla por la cual el conductor y el dueño del vehículo responden por el daño sin que la víctima tenga que probar su culpa.' },
          { h3: 'Citación en garantía' },
          { p: 'Es la forma en que la aseguradora del responsable se incorpora al juicio para responder dentro de los límites de la póliza.' },
          { h3: 'Incapacidad sobreviniente' },
          { p: 'La pérdida de capacidad física o psíquica que deja el accidente. Es el rubro principal cuando hay lesiones.' },
          { h3: 'Daño moral' },
          { p: 'Compensación por el sufrimiento y la alteración de la vida cotidiana causados por el accidente.' },
          { h3: 'Lucro cesante' },
          { p: 'Los ingresos que dejaste de percibir por el accidente.' },
          { h3: 'Privación de uso' },
          { p: 'Compensación por el tiempo en que no pudiste usar tu vehículo.' },
          { h3: 'Mediación prejudicial' },
          { p: 'Instancia obligatoria de negociación antes del juicio. Ver [mediación previa](/accidentes-de-transito/mediacion-previa).' },
          { h3: 'Prescripción' },
          { p: 'La pérdida del derecho a reclamar por el paso del tiempo. Ver [plazo para reclamar](/accidentes-de-transito/plazo-para-reclamar).' },
        ],
      },
    ],
    faqs: [
      { q: '¿Qué diferencia hay entre ILT e IPP?', a: 'La ILT es temporaria: dura mientras te recuperás. La IPP es permanente: es la secuela que queda después del alta.' },
    ],
    related: ['/accidentes-laborales', '/accidentes-de-transito', '/guias/documentos-para-iniciar-un-reclamo'],
  },
  {
    silo: 'guias',
    kind: 'guia',
    tipo: 'Accidente de tránsito',
    published: D,
    updated: D,
    path: '/guias/documentos-para-iniciar-un-reclamo',
    title: 'Qué documentos necesitás para iniciar un reclamo',
    description:
      'La lista de documentos para reclamar por un accidente de tránsito o un accidente laboral: médicos, del siniestro, laborales y personales.',
    label: 'Documentación',
    h1: 'Qué documentos necesitás',
    h1Em: 'para iniciar un reclamo.',
    lead:
      'Tener la documentación ordenada acelera el reclamo y lo hace más sólido. No hace falta tener todo para consultar: empezá con lo que tengas.',
    nav: 'Documentos para iniciar un reclamo',
    sections: [
      {
        title: 'Para cualquier reclamo',
        blocks: [
          { list: [
            'DNI.',
            'Historia clínica, certificados y estudios médicos.',
            'Recetas y comprobantes de gastos médicos y de traslado.',
            'Fotos de las lesiones durante la recuperación.',
            'Datos de testigos.',
          ] },
        ],
      },
      {
        title: 'Accidente de tránsito',
        blocks: [
          { list: [
            'Datos del otro conductor, patente y seguro.',
            'Fotos del lugar y de los vehículos.',
            'Denuncia de siniestro a tu aseguradora, si tenés seguro.',
            'Número de actuación policial o causa penal, si existe.',
            'Presupuestos y facturas de reparación.',
            'Cédula del vehículo y póliza de seguro.',
          ] },
          { p: 'Más información en [qué hacer después de un choque](/accidentes-de-transito/que-hacer-despues-de-un-choque).' },
        ],
      },
      {
        title: 'Accidente laboral',
        blocks: [
          { list: [
            'Número de siniestro de la ART.',
            'Recibos de sueldo de los últimos doce meses.',
            'Constancia de alta médica, si ya la tenés.',
            'Rechazo de la ART por escrito, si lo hubo.',
            'Exámenes preocupacionales y periódicos, si los tenés.',
            'Si no estabas registrado: mensajes, transferencias y testigos.',
          ] },
          { p: 'Más información en [qué hacer tras un accidente de trabajo](/accidentes-laborales/que-hacer-tras-un-accidente-de-trabajo).' },
          { note: 'Si te falta algo, no te preocupes: parte de nuestro trabajo es ayudarte a conseguir la documentación.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo mandar los documentos por WhatsApp?', a: 'Sí, para la consulta inicial podés enviar fotos o archivos. Después te indicamos qué originales hacen falta.' },
    ],
    related: ['/guias/glosario', '/accidentes-de-transito/que-hacer-despues-de-un-choque', '/accidentes-laborales/que-hacer-tras-un-accidente-de-trabajo'],
  },
];
