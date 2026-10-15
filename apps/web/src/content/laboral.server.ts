import type { Page } from './types';

const D = '2026-09-28';
const L = '/accidentes-laborales';

const base = {
  silo: 'laboral',
  kind: 'guia',
  published: D,
  updated: D,
  tipo: 'Accidente laboral',
} as const;

export const laboralPilar: Page = {
  ...base,
  kind: 'pilar',
  path: L,
  title: 'Abogados de accidentes laborales y reclamos a ART',
  description:
    'Reclamos por accidentes de trabajo, in itinere y enfermedades profesionales en todo el país. Qué cubre la ART, Comisión Médica, incapacidad e indemnización.',
  label: 'Accidentes laborales en todo el país',
  h1: 'Abogados de accidentes laborales',
  h1Em: 'y reclamos a la ART.',
  lead:
    'Si te lastimaste trabajando, en el camino al trabajo o te enfermaste por tus tareas, la ley te protege. Te explicamos cómo funciona el sistema de riesgos del trabajo y qué podés reclamar, estés donde estés en Argentina.',
  nav: 'Accidentes laborales',
  sections: [
    {
      title: 'Qué es un accidente laboral',
      blocks: [
        { p: 'La Ley de Riesgos del Trabajo cubre tres situaciones distintas. Las tres dan derecho a atención médica y a una indemnización si queda una incapacidad:' },
        { list: [
          'Accidente de trabajo: el que ocurre por el hecho o en ocasión del trabajo, dentro o fuera del lugar donde trabajás.',
          'Accidente in itinere: el que ocurre en el trayecto entre tu casa y el trabajo, ida o vuelta. Lo explicamos en [accidente in itinere](/accidentes-laborales/accidente-in-itinere).',
          'Enfermedad profesional: la que se produce por las tareas o el ambiente de trabajo, como problemas de columna, hipoacusia o túnel carpiano. Mirá [enfermedad profesional](/accidentes-laborales/enfermedad-profesional).',
        ] },
      ],
    },
    {
      title: 'Qué tiene que darte la ART',
      blocks: [
        { p: 'Tu empleador está obligado a tener contratada una Aseguradora de Riesgos del Trabajo (ART). Cuando ocurre un accidente o aparece una enfermedad laboral, la ART tiene que brindarte:' },
        { list: [
          'Atención médica, estudios, medicamentos, prótesis y rehabilitación, sin costo para vos.',
          'El pago de tus salarios mientras no puedas trabajar: la [incapacidad laboral temporaria](/accidentes-laborales/salarios-caidos-ilt).',
          'Una indemnización si te queda una incapacidad permanente. Te explicamos [cómo se calcula](/accidentes-laborales/como-se-calcula-la-indemnizacion-art).',
          'Recalificación profesional, si no podés volver a tu tarea habitual.',
        ] },
        { p: 'Si trabajabas sin registrar o tu empleador no tenía ART, el empleador responde directamente. Lo explicamos en [trabajador no registrado](/accidentes-laborales/trabajador-no-registrado).' },
      ],
    },
    {
      title: 'Cómo es el reclamo',
      blocks: [
        { steps: [
          { title: 'Denuncia del accidente', text: 'El empleador tiene que denunciarlo a la ART. Si no lo hace, podés hacerlo vos directamente. Mirá [qué hacer tras un accidente de trabajo](/accidentes-laborales/que-hacer-tras-un-accidente-de-trabajo).' },
          { title: 'Respuesta de la ART', text: 'La ART tiene un plazo para aceptar o rechazar. Si [rechaza el accidente](/accidentes-laborales/art-rechazo-el-accidente), hay caminos para discutirlo.' },
          { title: 'Tratamiento y alta', text: 'Recibís atención médica hasta el alta. Si no estás de acuerdo con el [alta médica](/accidentes-laborales/alta-medica-art), se puede cuestionar.' },
          { title: 'Comisión Médica', text: 'En la mayoría de las provincias, la incapacidad se determina primero ante la [Comisión Médica](/accidentes-laborales/comision-medica), con abogado.' },
          { title: 'Justicia', text: 'Si el resultado no es justo, se puede recurrir a la justicia laboral para revisar el porcentaje y el monto.' },
        ] },
      ],
    },
    {
      title: 'Por qué conviene asesorarse',
      blocks: [
        { p: 'Las ART trabajan con este sistema todos los días. El trabajador, en cambio, suele pasar por un accidente una sola vez. Es frecuente que el [porcentaje de incapacidad](/accidentes-laborales/porcentaje-de-incapacidad) quede por debajo de las secuelas reales, o que se omitan secuelas psicológicas. Un buen asesoramiento desde el principio puede cambiar el resultado.' },
        { note: 'Podés estimar cuánto te correspondería con nuestra [calculadora de indemnización ART](/accidentes-laborales/calculadora-indemnizacion-art). Es orientativa: cada caso tiene particularidades.' },
      ],
    },
    {
      title: 'Atendemos casos de todo el país',
      blocks: [
        { p: 'El sistema de riesgos del trabajo es nacional, aunque el procedimiento cambia según la provincia. Tenemos guías específicas por provincia y por actividad, para que encuentres la información que aplica a tu caso.' },
      ],
    },
  ],
  faqs: [
    { q: '¿Me pueden despedir por reclamarle a la ART?', a: 'El reclamo es un derecho. Si hay represalias o un despido, eso genera derechos adicionales que conviene analizar con un abogado.' },
    { q: '¿El reclamo es contra mi empleador?', a: 'En general, el reclamo se dirige contra la ART, no contra el empleador. La excepción es cuando el empleador no tenía ART o no te tenía registrado.' },
    { q: '¿Cuánto tiempo tengo para reclamar?', a: 'Como regla general, el plazo es de dos años, pero el momento desde el que se cuenta depende de cada caso. Conviene consultar cuanto antes.' },
    { q: '¿Puedo reclamar si ya volví a trabajar?', a: 'Sí. Haber vuelto a trabajar no impide reclamar por la incapacidad que te haya quedado.' },
  ],
  related: [`${L}/accidente-in-itinere`, `${L}/art-rechazo-el-accidente`, `${L}/como-se-calcula-la-indemnizacion-art`],
};

export const laboralArticulos: Page[] = [
  {
    ...base,
    path: `${L}/que-hacer-tras-un-accidente-de-trabajo`,
    title: 'Qué hacer después de un accidente de trabajo',
    description:
      'Guía paso a paso después de un accidente laboral: aviso al empleador, denuncia a la ART, atención médica, documentación y errores que conviene evitar.',
    label: 'Primeros pasos',
    h1: 'Qué hacer después',
    h1Em: 'de un accidente de trabajo.',
    lead:
      'Lo que hacés en los primeros días después de un accidente laboral define cómo va a seguir tu reclamo. Esta es la lista de pasos, en orden.',
    nav: 'Qué hacer tras un accidente laboral',
    sections: [
      {
        title: 'Los primeros pasos',
        blocks: [
          { steps: [
            { title: 'Avisá a tu empleador', text: 'Informá el accidente lo antes posible, idealmente por escrito o por un medio que deje registro, como un mensaje o un correo.' },
            { title: 'Pedí atención de la ART', text: 'La atención tiene que ser a través de la ART. Pedí el número de siniestro y el nombre del prestador médico.' },
            { title: 'Si el empleador no denuncia', text: 'Podés denunciar el accidente directamente ante la ART. Necesitás saber cuál es: podés consultarlo en la Superintendencia de Riesgos del Trabajo (SRT).' },
            { title: 'Guardá toda la documentación', text: 'Número de siniestro, certificados, estudios, recetas y cualquier comunicación con la ART o el empleador.' },
            { title: 'Anotá testigos', text: 'Compañeros que vieron el accidente o que pueden confirmar cómo eran tus tareas.' },
          ] },
        ],
      },
      {
        title: 'Si te atendés por obra social',
        blocks: [
          { p: 'A veces, por urgencia o desconocimiento, la primera atención es en una guardia común o por obra social. Eso no te hace perder derechos, pero es importante que después se haga la denuncia a la ART y que quede registrado que la lesión fue por el trabajo.' },
        ],
      },
      {
        title: 'Errores que conviene evitar',
        blocks: [
          { list: [
            'No denunciar porque el empleador dice que "no hace falta".',
            'Firmar el alta sin estar recuperado.',
            'Aceptar que el accidente se registre como enfermedad inculpable.',
            'Perder los papeles de la atención médica.',
            'Dejar pasar mucho tiempo antes de consultar.',
          ] },
          { note: 'Si la ART rechaza el accidente o no responde, no es el final. Mirá [la ART rechazó el accidente](/accidentes-laborales/art-rechazo-el-accidente).' },
        ],
      },
    ],
    faqs: [
      { q: '¿Tengo que ir al médico de la ART?', a: 'Sí, la atención de un accidente laboral corresponde a la ART y a sus prestadores. Si en una urgencia te atendiste en otro lado, igual hay que hacer la denuncia.' },
      { q: '¿Qué pasa si mi jefe no quiere denunciar?', a: 'Podés hacer la denuncia vos. El empleador no puede impedir que accedas a las prestaciones de la ART.' },
      { q: '¿Me pagan el sueldo mientras estoy de baja?', a: 'Sí. Los primeros días los paga el empleador y después la ART, mientras dure la incapacidad temporaria.' },
    ],
    related: [`${L}/art-rechazo-el-accidente`, `${L}/salarios-caidos-ilt`, `${L}/alta-medica-art`],
  },
  {
    ...base,
    path: `${L}/accidente-in-itinere`,
    title: 'Accidente in itinere: qué es y cómo reclamar a la ART',
    description:
      'El accidente in itinere es el que ocurre yendo o volviendo del trabajo. Qué cubre la ART, qué requisitos hay y qué pasa si te desviaste del recorrido.',
    label: 'Accidente in itinere',
    h1: 'Accidente in itinere:',
    h1Em: 'yendo o volviendo del trabajo.',
    lead:
      'Si tuviste un accidente en el camino entre tu casa y el trabajo, la ART tiene que cubrirte igual que si hubiera pasado trabajando. Te explicamos cuándo aplica y cómo se reclama.',
    nav: 'Accidente in itinere',
    sections: [
      {
        title: 'Qué es un accidente in itinere',
        blocks: [
          { p: 'Es el accidente que ocurre en el trayecto entre tu domicilio y el lugar de trabajo, a la ida o a la vuelta. Puede ser un choque, una caída en la vereda, un accidente en colectivo o incluso un robo con lesiones en el camino.' },
          { p: 'No importa el medio de transporte: a pie, en colectivo, tren, bicicleta, moto o auto propio.' },
        ],
      },
      {
        title: 'Los requisitos',
        blocks: [
          { list: [
            'Que ocurra en el trayecto habitual entre tu casa y el trabajo.',
            'Que el recorrido no se haya interrumpido o alterado por un interés personal ajeno al trabajo.',
            'Que puedas acreditar el hecho: denuncia, atención médica, testigos o constancias.',
          ] },
          { p: 'La ley permite declarar recorridos alternativos por motivos justificados, como ir a estudiar, a otro empleo o a cuidar a un familiar. Conviene que esa información esté informada al empleador.' },
        ],
      },
      {
        title: 'Si además fue un accidente de tránsito',
        blocks: [
          { p: 'Si el accidente in itinere fue un choque, tenés dos reclamos posibles que pueden convivir: el de la ART por la vía laboral y el reclamo por [accidente de tránsito](/accidentes-de-transito) contra el responsable del choque y su aseguradora. Cómo combinarlos depende del caso.' },
          { note: 'Hacé la denuncia a la ART aunque el choque haya sido culpa de otro. La ART cubre tu atención médica y tus salarios desde el primer momento.' },
        ],
      },
      {
        title: 'Cómo se calcula la indemnización',
        blocks: [
          { p: 'Se usa la misma fórmula que para los accidentes de trabajo. La diferencia es que en los accidentes in itinere no se aplica el adicional del 20% que corresponde a los accidentes ocurridos trabajando. Podés estimarlo con la [calculadora de indemnización ART](/accidentes-laborales/calculadora-indemnizacion-art).' },
        ],
      },
    ],
    faqs: [
      { q: '¿Cubre si paré a comprar algo en el camino?', a: 'Depende. Una detención breve no siempre corta la cobertura, pero un desvío importante por un motivo personal puede hacerlo. Cada caso se analiza en concreto.' },
      { q: '¿Cubre si me caí en la vereda?', a: 'Sí, si ocurrió en el trayecto entre tu casa y el trabajo y se cumplen los requisitos.' },
      { q: '¿Y si me asaltaron en el camino?', a: 'Si sufriste lesiones en un robo durante el trayecto, puede considerarse accidente in itinere. Hacé la denuncia policial y la denuncia a la ART.' },
    ],
    related: [`${L}/que-hacer-tras-un-accidente-de-trabajo`, `${L}/como-se-calcula-la-indemnizacion-art`, '/accidentes-de-transito/accidente-de-moto'],
  },
  {
    ...base,
    path: `${L}/enfermedad-profesional`,
    title: 'Enfermedad profesional: cómo reclamar a la ART',
    description:
      'Si tu trabajo te causó una enfermedad (columna, hipoacusia, túnel carpiano, respiratorias), podés reclamar a la ART. Enfermedades listadas y no listadas.',
    label: 'Enfermedades profesionales',
    h1: 'Enfermedades',
    h1Em: 'causadas por el trabajo.',
    lead:
      'No todas las lesiones laborales son de un día para el otro. Años de esfuerzo, ruido, posturas o movimientos repetitivos pueden causar una enfermedad. Si es así, la ART tiene que cubrirla.',
    nav: 'Enfermedad profesional',
    sections: [
      {
        title: 'Qué es una enfermedad profesional',
        blocks: [
          { p: 'Es una enfermedad causada por las tareas que hacés o por el ambiente en el que trabajás. A diferencia de un accidente, aparece de forma progresiva, muchas veces después de años de exposición.' },
          { list: [
            'Problemas de columna, como [hernia de disco](/accidentes-laborales/hernia-de-disco-laboral), por esfuerzos o posturas.',
            '[Hipoacusia](/accidentes-laborales/hipoacusia-laboral) por exposición a ruido.',
            '[Síndrome del túnel carpiano](/accidentes-laborales/tunel-carpiano) y tendinitis por movimientos repetitivos.',
            'Enfermedades respiratorias por polvo, humo o químicos.',
            'Dermatitis por contacto con sustancias.',
            'Várices o problemas circulatorios por estar muchas horas de pie.',
          ] },
        ],
      },
      {
        title: 'Enfermedades listadas y no listadas',
        blocks: [
          { p: 'Existe un listado oficial de enfermedades profesionales que relaciona cada enfermedad con los agentes de riesgo que la causan. Si tu enfermedad está en el listado y trabajás expuesto a ese agente, el reconocimiento es más directo.' },
          { p: 'Si tu enfermedad no está en el listado, igual se puede reclamar. En ese caso hay que demostrar que fue causada por el trabajo, y la Comisión Médica lo evalúa caso por caso.' },
        ],
      },
      {
        title: 'Por qué la ART suele rechazarlas',
        blocks: [
          { p: 'Es muy común que la ART diga que la enfermedad es "inculpable", es decir, que no tiene relación con el trabajo, o que ya existía antes. Por eso importan mucho los exámenes preocupacionales y periódicos, la descripción de tus tareas y los testimonios de compañeros.' },
          { note: 'Si la ART rechazó tu enfermedad, podés discutirlo. Mirá [la ART rechazó el accidente](/accidentes-laborales/art-rechazo-el-accidente): el camino es similar.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo reclamar si ya no trabajo en esa empresa?', a: 'Sí, dentro de los plazos legales. La enfermedad puede manifestarse después de dejar el trabajo que la causó.' },
      { q: '¿Qué pasa si la enfermedad empeoró con el tiempo?', a: 'Si el trabajo agravó una condición previa, puede reclamarse la parte del daño atribuible al trabajo.' },
    ],
    related: [`${L}/hernia-de-disco-laboral`, `${L}/hipoacusia-laboral`, `${L}/tunel-carpiano`],
  },
  {
    ...base,
    path: `${L}/art-rechazo-el-accidente`,
    title: 'La ART rechazó mi accidente: qué hacer',
    description:
      'Si la ART rechazó tu accidente o enfermedad laboral, podés recurrir a la Comisión Médica y a la justicia. Motivos habituales de rechazo y cómo actuar.',
    label: 'Rechazo de la ART',
    h1: 'La ART rechazó',
    h1Em: 'mi accidente.',
    lead:
      'Un rechazo de la ART no significa que no tengas derecho. Es una decisión de la aseguradora, y se puede discutir. Te explicamos por qué rechazan y qué podés hacer.',
    nav: 'La ART rechazó el accidente',
    sections: [
      {
        title: 'Motivos frecuentes de rechazo',
        blocks: [
          { list: [
            'Que la lesión "no tiene relación con el trabajo" o es una enfermedad inculpable.',
            'Que la lesión ya existía antes del accidente.',
            'Que el accidente in itinere no ocurrió en el trayecto habitual.',
            'Que la denuncia se hizo tarde o faltan datos.',
            'Que no hay pruebas suficientes del hecho.',
          ] },
        ],
      },
      {
        title: 'Plazos de la ART',
        blocks: [
          { p: 'La ART tiene un plazo breve para aceptar o rechazar la denuncia, que puede prorrogarse en ciertos casos. Si no responde en término, en general se considera que aceptó. Por eso es importante saber la fecha exacta de la denuncia.' },
        ],
      },
      {
        title: 'Qué podés hacer',
        blocks: [
          { steps: [
            { title: 'Pedí el rechazo por escrito', text: 'Con el motivo. Es la base para discutirlo.' },
            { title: 'Seguí atendiéndote', text: 'Por obra social o en el sistema público, guardando toda la documentación de la lesión.' },
            { title: 'Presentación ante la Comisión Médica', text: 'Se puede iniciar un trámite de divergencia en la contingencia ante la [Comisión Médica](/accidentes-laborales/comision-medica), que determina si el accidente o la enfermedad es laboral.' },
            { title: 'Justicia', text: 'Si la Comisión Médica confirma el rechazo, la decisión puede recurrirse judicialmente.' },
          ] },
          { note: 'En la Comisión Médica tenés que ir con abogado. Es una exigencia legal, no una formalidad.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Quién me paga el sueldo si la ART rechazó?', a: 'Mientras se discute, la situación puede encuadrarse como enfermedad inculpable a cargo del empleador. Si luego se reconoce como laboral, se regularizan las prestaciones.' },
      { q: '¿Cuánto tarda la Comisión Médica?', a: 'La ley fija un plazo para que resuelva, aunque en la práctica puede variar según la jurisdicción.' },
    ],
    related: [`${L}/comision-medica`, `${L}/enfermedad-profesional`, `${L}/trabajador-no-registrado`],
  },
  {
    ...base,
    path: `${L}/alta-medica-art`,
    title: 'Alta médica de la ART: qué hacer si no estás bien',
    description:
      'Si la ART te dio el alta pero seguís con dolor o secuelas, podés cuestionarla. Alta sin incapacidad, reingreso y qué pasa con tu sueldo.',
    label: 'Alta médica',
    h1: 'La ART me dio el alta',
    h1Em: 'y no estoy bien.',
    lead:
      'Es una de las situaciones más frecuentes: la ART da el alta y el trabajador sigue con dolor, limitaciones o sin poder hacer su tarea. El alta se puede cuestionar.',
    nav: 'Alta médica de la ART',
    sections: [
      {
        title: 'Qué significa el alta',
        blocks: [
          { p: 'El alta médica pone fin al tratamiento y a la incapacidad temporaria. A partir de ahí, dejás de cobrar a través de la ART y tenés que volver a trabajar. Si quedaron secuelas, corresponde evaluar si tenés una incapacidad permanente.' },
          { p: 'El problema aparece cuando el alta es prematura o dice "sin incapacidad" aunque sigas con limitaciones.' },
        ],
      },
      {
        title: 'Qué podés hacer',
        blocks: [
          { list: [
            'No firmes el alta como conforme si no estás de acuerdo; podés dejar constancia.',
            'Hacete ver por un médico de tu confianza y pedí un informe.',
            'Iniciá un trámite ante la [Comisión Médica](/accidentes-laborales/comision-medica) por divergencia en el alta o para que se determine tu incapacidad.',
            'Si las secuelas persisten, reclamá la evaluación del [porcentaje de incapacidad](/accidentes-laborales/porcentaje-de-incapacidad).',
          ] },
        ],
      },
      {
        title: 'Si volviste a trabajar y empeoraste',
        blocks: [
          { p: 'Si después del alta la lesión vuelve a manifestarse, se puede pedir el reingreso a la ART. Es importante que quede registrado que se trata de la misma lesión del accidente original.' },
          { note: 'El "alta sin incapacidad" no es definitiva: la incapacidad puede evaluarse ante la Comisión Médica y, si corresponde, en la justicia.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Me pueden obligar a volver a trabajar?', a: 'Con el alta, el empleador puede requerir que te reincorpores. Si no estás en condiciones, conviene documentarlo con informes médicos y asesorarte.' },
      { q: '¿Puedo cambiar de tareas?', a: 'Si las secuelas te impiden hacer tu tarea habitual, puede corresponder un cambio de tareas o la recalificación profesional.' },
    ],
    related: [`${L}/comision-medica`, `${L}/porcentaje-de-incapacidad`, `${L}/salarios-caidos-ilt`],
  },
  {
    ...base,
    path: `${L}/comision-medica`,
    title: 'Comisión Médica: cómo es el trámite contra la ART',
    description:
      'Qué es la Comisión Médica, cuándo interviene, qué se discute, por qué necesitás abogado y qué pasa si no estás de acuerdo con su dictamen.',
    label: 'Comisión Médica',
    h1: 'Qué es la Comisión Médica',
    h1Em: 'y cómo es el trámite.',
    lead:
      'En la mayoría de las provincias, antes de ir a juicio contra la ART, el reclamo pasa por una Comisión Médica de la Superintendencia de Riesgos del Trabajo. Te explicamos cómo funciona.',
    nav: 'Comisión Médica',
    sections: [
      {
        title: 'Qué son las Comisiones Médicas',
        blocks: [
          { p: 'Son organismos que dependen de la Superintendencia de Riesgos del Trabajo (SRT). Desde la reforma de 2017, en las jurisdicciones que adhirieron al sistema, el paso por la Comisión Médica es una instancia administrativa previa y obligatoria antes de reclamar judicialmente.' },
          { p: 'En las provincias que no adhirieron, el camino puede ser distinto. Por eso es importante saber qué régimen aplica en tu caso: mirá nuestras [guías por provincia](/accidentes-laborales).' },
        ],
      },
      {
        title: 'Qué se discute ante la Comisión Médica',
        blocks: [
          { list: [
            'Si el accidente o la enfermedad es laboral, cuando la ART lo rechazó.',
            'Si el alta médica fue correcta.',
            'El porcentaje de incapacidad permanente.',
            'Las prestaciones médicas que te corresponden.',
          ] },
        ],
      },
      {
        title: 'Qué Comisión Médica te corresponde',
        blocks: [
          { p: 'Podés elegir entre la Comisión Médica correspondiente a tu domicilio, la del lugar donde trabajás o la del lugar donde habitualmente te reportás. Esa elección puede tener impacto práctico, por ejemplo en la distancia o en los tiempos.' },
        ],
      },
      {
        title: 'Cómo es el trámite',
        blocks: [
          { steps: [
            { title: 'Presentación', text: 'Se inicia el trámite con abogado, que es obligatorio en esta instancia.' },
            { title: 'Audiencia y revisación', text: 'Un médico de la Comisión te revisa. Podés presentar estudios e informes de tus propios médicos.' },
            { title: 'Dictamen', text: 'La Comisión emite un dictamen sobre lo discutido: carácter laboral, alta o porcentaje de incapacidad.' },
            { title: 'Revisión', text: 'Si no estás de acuerdo, el dictamen puede recurrirse ante la Comisión Médica Central o ante la justicia laboral, según corresponda.' },
          ] },
          { note: 'El dictamen de la Comisión Médica no siempre refleja todas tus secuelas. La revisión judicial existe justamente para corregir esos casos.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo ir solo a la Comisión Médica?', a: 'No. La ley exige que el trabajador tenga patrocinio de un abogado en esta instancia.' },
      { q: '¿Qué llevo a la audiencia?', a: 'DNI, estudios médicos, informes de tus médicos, historia clínica y toda la documentación del siniestro.' },
    ],
    related: [`${L}/porcentaje-de-incapacidad`, `${L}/art-rechazo-el-accidente`, `${L}/alta-medica-art`],
  },
  {
    ...base,
    path: `${L}/porcentaje-de-incapacidad`,
    title: 'Porcentaje de incapacidad laboral: cómo se determina',
    description:
      'Cómo se determina el porcentaje de incapacidad por un accidente laboral, qué es el baremo, los factores de ponderación y cómo impacta en la indemnización.',
    label: 'Incapacidad',
    h1: 'Cómo se determina',
    h1Em: 'el porcentaje de incapacidad.',
    lead:
      'El porcentaje de incapacidad es el número que más impacta en la indemnización de la ART. Un par de puntos de diferencia puede cambiar mucho el monto final.',
    nav: 'Porcentaje de incapacidad',
    sections: [
      {
        title: 'Qué es el porcentaje de incapacidad',
        blocks: [
          { p: 'Es la medida de cuánto se redujo tu capacidad para trabajar como consecuencia del accidente o la enfermedad. Se expresa en un porcentaje sobre una capacidad total del 100%.' },
          { list: [
            'Menos del 50%: incapacidad parcial.',
            'Entre el 50% y el 66%: incapacidad parcial con prestaciones adicionales.',
            'Más del 66%: incapacidad total.',
          ] },
        ],
      },
      {
        title: 'Cómo se calcula',
        blocks: [
          { p: 'Los médicos usan una tabla oficial de evaluación de incapacidades laborales, conocida como baremo, que asigna rangos de porcentaje a cada tipo de secuela. A ese valor se le suman factores de ponderación que tienen en cuenta tu situación:' },
          { list: [
            'La dificultad para hacer tus tareas habituales.',
            'Si necesitás recalificación profesional.',
            'Tu edad.',
          ] },
        ],
      },
      {
        title: 'Por qué el porcentaje suele quedar bajo',
        blocks: [
          { p: 'Es frecuente que no se evalúen todas las secuelas, que se omita el daño psicológico o que no se apliquen correctamente los factores de ponderación. También pasa que se evalúa antes de que la lesión se estabilice.' },
          { note: 'Revisar el porcentaje con un abogado y un médico de confianza es una de las cosas que más impacto tienen en el resultado final.' },
        ],
      },
      {
        title: 'Del porcentaje a la indemnización',
        blocks: [
          { p: 'Con el porcentaje, tu edad y tus ingresos se calcula el monto. Te lo explicamos en [cómo se calcula la indemnización ART](/accidentes-laborales/como-se-calcula-la-indemnizacion-art) y podés hacer una estimación con la [calculadora](/accidentes-laborales/calculadora-indemnizacion-art).' },
        ],
      },
    ],
    faqs: [
      { q: '¿Se suman las incapacidades de varias lesiones?', a: 'Se combinan con un método específico que no es una suma directa. Por eso es importante que se evalúen todas las secuelas.' },
      { q: '¿Se evalúa el daño psicológico?', a: 'Sí, puede evaluarse cuando está vinculado al accidente o la enfermedad laboral.' },
    ],
    related: [`${L}/como-se-calcula-la-indemnizacion-art`, `${L}/comision-medica`, `${L}/calculadora-indemnizacion-art`],
  },
  {
    ...base,
    path: `${L}/como-se-calcula-la-indemnizacion-art`,
    title: 'Cómo se calcula la indemnización de la ART',
    description:
      'La fórmula de la indemnización por incapacidad laboral: salario, edad, porcentaje, adicional del 20% y pisos mínimos. Explicado con ejemplos simples.',
    label: 'Indemnización ART',
    h1: 'Cómo se calcula',
    h1Em: 'la indemnización de la ART.',
    lead:
      'La indemnización por incapacidad laboral se calcula con una fórmula que establece la ley. Te explicamos cada componente para que entiendas de dónde sale el número.',
    nav: 'Cómo se calcula la indemnización',
    sections: [
      {
        title: 'La fórmula',
        blocks: [
          { p: 'Para una incapacidad permanente parcial, la ley establece una fórmula que combina cuatro datos:' },
          { note: '53 × ingreso base mensual × (65 ÷ edad) × porcentaje de incapacidad' },
          { list: [
            '53: un coeficiente fijo que establece la ley.',
            'Ingreso base mensual: el promedio de tus salarios de los últimos doce meses, actualizados.',
            '65 ÷ edad: un coeficiente por edad. Cuanto más joven sos, mayor es la indemnización.',
            'Porcentaje de incapacidad: el que determina la Comisión Médica o la justicia.',
          ] },
        ],
      },
      {
        title: 'El adicional del 20%',
        blocks: [
          { p: 'Si el accidente ocurrió trabajando o se trata de una enfermedad profesional, al resultado se le suma un adicional del 20%. Ese adicional no se aplica a los [accidentes in itinere](/accidentes-laborales/accidente-in-itinere).' },
        ],
      },
      {
        title: 'Pisos mínimos y compensaciones adicionales',
        blocks: [
          { p: 'La ley fija montos mínimos que la indemnización no puede perforar. Se actualizan periódicamente y los publica la Superintendencia de Riesgos del Trabajo. Además, para incapacidades superiores al 50%, y para los casos de incapacidad total, gran invalidez o fallecimiento, hay compensaciones adicionales de pago único.' },
        ],
      },
      {
        title: 'Un ejemplo simple',
        blocks: [
          { p: 'Una persona de 40 años, con un ingreso base de $1.000.000 y una incapacidad del 10% por un accidente en el trabajo:' },
          { list: [
            '53 × 1.000.000 × (65 ÷ 40) × 10% = $8.612.500.',
            'Más el 20% adicional: $1.722.500.',
            'Total estimado: $10.335.000, sujeto a los pisos mínimos vigentes.',
          ] },
          { note: 'El ejemplo es ilustrativo. Probá tus propios datos en la [calculadora de indemnización ART](/accidentes-laborales/calculadora-indemnizacion-art).' },
        ],
      },
    ],
    faqs: [
      { q: '¿La indemnización se actualiza?', a: 'El ingreso base se actualiza según la evolución de los salarios, y los pisos mínimos se ajustan periódicamente. Cómo se actualiza el monto hasta el pago es un punto que conviene revisar en cada caso.' },
      { q: '¿Puedo cobrar más que la fórmula?', a: 'En ciertos casos existen otras vías de reclamo, como la acción civil. Es una decisión estratégica que tiene ventajas y riesgos, y requiere asesoramiento.' },
    ],
    related: [`${L}/calculadora-indemnizacion-art`, `${L}/porcentaje-de-incapacidad`, `${L}/accidente-in-itinere`],
  },
  {
    ...base,
    path: `${L}/trabajador-no-registrado`,
    title: 'Accidente laboral trabajando en negro o sin ART',
    description:
      'Si tuviste un accidente trabajando sin registrar o tu empleador no tenía ART, el empleador responde directamente. Qué podés reclamar y cómo.',
    label: 'Trabajo no registrado',
    h1: 'Accidente trabajando',
    h1Em: 'en negro o sin ART.',
    lead:
      'Trabajar sin registrar no te deja sin derechos. Si tuviste un accidente y no estabas registrado, o tu empleador no tenía ART, podés reclamar igual.',
    nav: 'Trabajador no registrado',
    sections: [
      {
        title: 'Quién responde',
        blocks: [
          { p: 'Si el empleador no tenía contratada una ART, responde directamente por todas las prestaciones que habría tenido que darte la aseguradora: atención médica, salarios durante la recuperación e indemnización por incapacidad.' },
          { p: 'Existe además un fondo de garantía del sistema de riesgos del trabajo para los casos en que el empleador no puede pagar.' },
        ],
      },
      {
        title: 'Cómo se prueba la relación laboral',
        blocks: [
          { list: [
            'Testigos: compañeros, clientes o vecinos que te veían trabajar.',
            'Mensajes, audios y grupos de chat con el empleador.',
            'Transferencias o comprobantes de pago.',
            'Fotos o videos en el lugar de trabajo.',
          ] },
        ],
      },
      {
        title: 'Más de un reclamo',
        blocks: [
          { p: 'Además del reclamo por el accidente, el trabajo no registrado puede dar lugar a otros reclamos laborales, como las diferencias salariales y las multas por falta de registro. Conviene analizar todo en conjunto.' },
          { note: 'Guardá todo lo que demuestre que trabajabas ahí, incluso antes de consultar. Esa prueba es la base del reclamo.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Me atienden en un hospital aunque no tenga ART?', a: 'Sí. La atención de urgencia no depende de la ART. Después, los gastos se reclaman al empleador.' },
      { q: '¿Y si trabajaba como monotributista?', a: 'Depende de cómo era realmente la relación. Si cumplías horarios, órdenes y tareas como empleado, puede tratarse de una relación laboral encubierta.' },
    ],
    related: [`${L}/que-hacer-tras-un-accidente-de-trabajo`, `${L}/construccion`, `${L}/gastronomia`],
  },
  {
    ...base,
    path: `${L}/accidente-laboral-fatal`,
    title: 'Fallecimiento por accidente laboral: derechos de la familia',
    description:
      'Si un familiar falleció por un accidente de trabajo o in itinere, sus derechohabientes pueden reclamar a la ART. Quiénes tienen derecho y qué se cobra.',
    label: 'Accidente fatal',
    h1: 'Fallecimiento por',
    h1Em: 'un accidente de trabajo.',
    lead:
      'Perder a un familiar en un accidente laboral es devastador. Además del duelo, la familia tiene derechos que conviene conocer. Te acompañamos con respeto en este proceso.',
    nav: 'Accidente laboral fatal',
    sections: [
      {
        title: 'Quiénes pueden reclamar',
        blocks: [
          { p: 'Los derechohabientes del trabajador fallecido, que la ley define por remisión al régimen previsional. En general comprende al cónyuge o conviviente y a los hijos, con ciertos requisitos. Si no los hay, pueden existir otros familiares con derecho.' },
        ],
      },
      {
        title: 'Qué corresponde',
        blocks: [
          { list: [
            'Una indemnización calculada según la ley de riesgos del trabajo.',
            'Una compensación adicional de pago único.',
            'Los gastos de sepelio, dentro de los límites legales.',
          ] },
          { p: 'También puede analizarse, según el caso, un reclamo civil contra otros responsables, por ejemplo si el fallecimiento fue por un accidente de tránsito.' },
        ],
      },
      {
        title: 'Primeros pasos',
        blocks: [
          { list: [
            'Reunir la partida de defunción y la documentación que acredite el vínculo.',
            'Identificar la ART del empleador.',
            'Guardar toda la información sobre cómo ocurrió el accidente.',
          ] },
          { note: 'No hace falta que lo resuelvan solos ni de inmediato. Una consulta puede ayudar a ordenar los pasos sin sumar peso.' },
        ],
      },
    ],
    faqs: [
      { q: '¿El conviviente tiene derecho?', a: 'En general sí, si acredita la convivencia en los términos que exige la ley.' },
      { q: '¿Hay plazo para reclamar?', a: 'Sí. Hay plazos legales, por eso conviene consultar cuando la familia esté en condiciones.' },
    ],
    related: [`${L}/accidente-in-itinere`, `${L}/trabajador-no-registrado`, `${L}/como-se-calcula-la-indemnizacion-art`],
  },
  {
    ...base,
    path: `${L}/hernia-de-disco-laboral`,
    title: 'Hernia de disco por el trabajo: reclamo a la ART',
    description:
      'La hernia de disco puede ser un accidente o una enfermedad laboral. Por qué la ART suele rechazarla y cómo se demuestra que fue causada por el trabajo.',
    label: 'Lesiones de columna',
    h1: 'Hernia de disco',
    h1Em: 'por el trabajo.',
    lead:
      'La hernia de disco es una de las lesiones más reclamadas y también una de las más rechazadas por las ART. Te explicamos cuándo es laboral y cómo se prueba.',
    nav: 'Hernia de disco laboral',
    sections: [
      {
        title: 'Accidente o enfermedad',
        blocks: [
          { p: 'Una hernia de disco puede aparecer de golpe, por ejemplo al levantar un peso, o desarrollarse con el tiempo por esfuerzos repetidos, vibraciones o malas posturas. En el primer caso se reclama como accidente de trabajo; en el segundo, como [enfermedad profesional](/accidentes-laborales/enfermedad-profesional).' },
        ],
      },
      {
        title: 'Por qué la ART la rechaza',
        blocks: [
          { p: 'El argumento habitual es que se trata de una enfermedad degenerativa o inculpable, sin relación con el trabajo. Para discutirlo, se analizan las tareas concretas: peso que manipulabas, frecuencia, posturas, vibraciones y años de exposición.' },
          { list: [
            'Descripción detallada de tus tareas.',
            'Exámenes preocupacionales y periódicos.',
            'Resonancias y estudios que muestren la evolución.',
            'Testimonios de compañeros.',
          ] },
        ],
      },
      {
        title: 'Actividades con más riesgo',
        blocks: [
          { p: 'Es frecuente en [construcción](/accidentes-laborales/construccion), logística y depósitos, [salud](/accidentes-laborales/salud) (movilización de pacientes), [transporte](/accidentes-laborales/transporte) y en cualquier tarea con carga de peso.' },
          { note: 'Aunque la ART la haya rechazado, podés discutirlo ante la Comisión Médica. Mirá [la ART rechazó el accidente](/accidentes-laborales/art-rechazo-el-accidente).' },
        ],
      },
    ],
    faqs: [
      { q: '¿Y si ya tenía problemas de columna antes?', a: 'Si el trabajo agravó una condición previa, puede reclamarse la parte del daño atribuible al trabajo.' },
      { q: '¿La lumbalgia también se reclama?', a: 'Sí, cuando está vinculada al trabajo y deja secuelas evaluables.' },
    ],
    related: [`${L}/enfermedad-profesional`, `${L}/art-rechazo-el-accidente`, `${L}/porcentaje-de-incapacidad`],
  },
  {
    ...base,
    path: `${L}/hipoacusia-laboral`,
    title: 'Hipoacusia laboral: pérdida de audición por ruido',
    description:
      'La pérdida de audición por exposición a ruido en el trabajo es una enfermedad profesional. Cómo se reclama a la ART y qué pruebas se necesitan.',
    label: 'Hipoacusia',
    h1: 'Pérdida de audición',
    h1Em: 'por ruido en el trabajo.',
    lead:
      'Años de exposición a ruido en fábricas, talleres, obras o transporte pueden dañar la audición de forma permanente. La hipoacusia por ruido es una enfermedad profesional reconocida.',
    nav: 'Hipoacusia laboral',
    sections: [
      {
        title: 'Cómo aparece',
        blocks: [
          { p: 'La hipoacusia por ruido avanza lentamente y muchas veces el trabajador no la nota hasta que es importante. Suele acompañarse de zumbidos en los oídos. Una vez que se produce, el daño es permanente.' },
        ],
      },
      {
        title: 'Cómo se demuestra',
        blocks: [
          { list: [
            'Audiometrías: la del examen preocupacional y las periódicas permiten comparar la evolución.',
            'Mediciones de ruido del lugar de trabajo.',
            'Descripción de las máquinas y herramientas que usabas.',
            'Si se entregaban o no protectores auditivos.',
          ] },
        ],
      },
      {
        title: 'Actividades frecuentes',
        blocks: [
          { p: 'Industria metalúrgica y textil, construcción, aeropuertos, talleres mecánicos, imprentas, transporte y cualquier puesto con máquinas ruidosas.' },
          { note: 'Si la audiometría preocupacional era normal y hoy tenés una pérdida, ese dato es una prueba muy fuerte. Pedí copia de tus exámenes.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo reclamar si ya me fui de la empresa?', a: 'Sí, dentro de los plazos legales, que en las enfermedades se cuentan de forma particular.' },
      { q: '¿El uso de protectores me quita el derecho?', a: 'No. Si igual se produjo la pérdida, puede reclamarse.' },
    ],
    related: [`${L}/enfermedad-profesional`, `${L}/tunel-carpiano`, `${L}/comision-medica`],
  },
  {
    ...base,
    path: `${L}/tunel-carpiano`,
    title: 'Túnel carpiano y tendinitis laboral: reclamo a la ART',
    description:
      'El síndrome del túnel carpiano y las tendinitis por movimientos repetitivos pueden ser enfermedades profesionales. Cómo reclamarlas a la ART.',
    label: 'Movimientos repetitivos',
    h1: 'Túnel carpiano y tendinitis',
    h1Em: 'por el trabajo.',
    lead:
      'Tareas repetitivas con las manos y los brazos, durante horas, pueden causar lesiones como el síndrome del túnel carpiano o tendinitis. Son enfermedades laborales que se pueden reclamar.',
    nav: 'Túnel carpiano laboral',
    sections: [
      {
        title: 'Qué tareas las causan',
        blocks: [
          { list: [
            'Cajeros, repositores y tareas de comercio.',
            'Operarios de línea, empaque y armado.',
            'Costura y trabajo textil.',
            'Limpieza y gastronomía.',
            'Trabajo administrativo intensivo con teclado y mouse.',
          ] },
        ],
      },
      {
        title: 'Síntomas',
        blocks: [
          { p: 'Hormigueo o adormecimiento en los dedos, dolor en la muñeca que empeora de noche, pérdida de fuerza para agarrar objetos. En las tendinitis, dolor en el hombro, el codo o la muñeca al mover el brazo.' },
        ],
      },
      {
        title: 'Cómo se reclama',
        blocks: [
          { p: 'Se denuncia a la ART como enfermedad profesional. Si la rechaza, se discute ante la [Comisión Médica](/accidentes-laborales/comision-medica). La clave es probar la relación entre tus tareas y la lesión.' },
          { note: 'Un electromiograma es el estudio que suele confirmar el túnel carpiano. Guardá todos tus estudios.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Si me operaron, igual puedo reclamar?', a: 'Sí. La cirugía no elimina el derecho: puede quedar una incapacidad que se evalúa después del tratamiento.' },
    ],
    related: [`${L}/enfermedad-profesional`, `${L}/comercio`, `${L}/porcentaje-de-incapacidad`],
  },
  {
    ...base,
    path: `${L}/salarios-caidos-ilt`,
    title: 'Incapacidad laboral temporaria (ILT): tu sueldo de baja',
    description:
      'Qué es la incapacidad laboral temporaria, quién te paga el sueldo mientras estás de baja por un accidente laboral y hasta cuándo.',
    label: 'Sueldo durante la baja',
    h1: 'Quién te paga el sueldo',
    h1Em: 'mientras estás de baja.',
    lead:
      'Después de un accidente laboral, mientras no puedas trabajar, tenés derecho a seguir cobrando. Te explicamos cómo funciona la incapacidad laboral temporaria.',
    nav: 'Sueldo durante la baja (ILT)',
    sections: [
      {
        title: 'Qué es la ILT',
        blocks: [
          { p: 'La incapacidad laboral temporaria es el período en el que, por el accidente o la enfermedad, no podés trabajar mientras recibís tratamiento. Durante ese tiempo, cobrás una prestación equivalente a tu salario.' },
        ],
      },
      {
        title: 'Quién paga',
        blocks: [
          { list: [
            'Los primeros diez días, el empleador.',
            'A partir del día once, la ART.',
            'Se paga en los mismos plazos que el sueldo.',
          ] },
        ],
      },
      {
        title: 'Hasta cuándo',
        blocks: [
          { p: 'La ILT termina con el alta médica, cuando se declara una incapacidad permanente, por el paso de un año desde el accidente, o por fallecimiento.' },
          { note: 'Si la ART deja de pagarte o paga menos de lo que corresponde, se puede reclamar. Guardá tus recibos de sueldo anteriores al accidente.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Cobro el mismo sueldo que antes?', a: 'La prestación busca reemplazar tu salario. Si notás diferencias, conviene revisarlas con tus recibos.' },
      { q: '¿Y si trabajaba en negro?', a: 'El empleador responde directamente. Mirá la guía de trabajador no registrado.' },
    ],
    related: [`${L}/alta-medica-art`, `${L}/que-hacer-tras-un-accidente-de-trabajo`, `${L}/trabajador-no-registrado`],
  },
];

export const calculadoraPage: Page = {
  ...base,
  kind: 'herramienta',
  path: `${L}/calculadora-indemnizacion-art`,
  title: 'Calculadora de indemnización ART por incapacidad',
  description:
    'Calculá una estimación de tu indemnización por accidente laboral o in itinere con la fórmula de la ley: salario, edad y porcentaje de incapacidad.',
  label: 'Calculadora',
  h1: 'Calculadora de',
  h1Em: 'indemnización ART.',
  lead:
    'Ingresá tus datos y obtené una estimación de la indemnización por incapacidad permanente parcial, según la fórmula de la Ley de Riesgos del Trabajo.',
  nav: 'Calculadora de indemnización ART',
  sections: [
    {
      title: 'Cómo usar la calculadora',
      blocks: [
        { list: [
          'Ingreso base mensual: el promedio de tus salarios brutos del último año. Si no lo sabés, usá tu sueldo bruto actual como aproximación.',
          'Edad: tu edad al momento del accidente o de la primera manifestación de la enfermedad.',
          'Porcentaje de incapacidad: el que te asignó la Comisión Médica o una estimación médica.',
          'Tipo: si fue trabajando, una enfermedad profesional o in itinere.',
        ] },
      ],
    },
    {
      title: 'Qué no incluye esta estimación',
      blocks: [
        { p: 'La calculadora aplica la fórmula básica y el adicional del 20% cuando corresponde. No incluye los pisos mínimos vigentes, las compensaciones adicionales para incapacidades mayores al 50%, intereses ni actualizaciones hasta el pago. Por eso el monto real puede ser distinto.' },
        { p: 'Si querés entender cada componente, leé [cómo se calcula la indemnización ART](/accidentes-laborales/como-se-calcula-la-indemnizacion-art).' },
      ],
    },
  ],
  faqs: [
    { q: '¿El resultado es lo que voy a cobrar?', a: 'No necesariamente. Es una estimación orientativa. El monto final depende del porcentaje definitivo, los pisos vigentes, la actualización y otros factores.' },
    { q: '¿Sirve para incapacidades totales?', a: 'No. Para incapacidades superiores al 66% la fórmula y las prestaciones son distintas.' },
  ],
  related: [`${L}/como-se-calcula-la-indemnizacion-art`, `${L}/porcentaje-de-incapacidad`, `${L}/comision-medica`],
};
