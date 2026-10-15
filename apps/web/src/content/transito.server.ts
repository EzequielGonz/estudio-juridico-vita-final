import type { Page } from './types';

const D = '2026-09-28';
const T = '/accidentes-de-transito';

const base = {
  silo: 'transito',
  kind: 'guia',
  published: D,
  updated: D,
  tipo: 'Accidente de tránsito',
} as const;

export const transitoPilar: Page = {
  ...base,
  kind: 'pilar',
  path: T,
  title: 'Abogados de accidentes de tránsito en CABA y GBA',
  description:
    'Reclamos por accidentes de tránsito en CABA y el conurbano: choques, motos, peatones y colectivos. Qué podés reclamar, plazos y cómo sigue el proceso.',
  label: 'Accidentes de tránsito en CABA y GBA',
  h1: 'Abogados de accidentes de tránsito',
  h1Em: 'en Buenos Aires.',
  lead:
    'Si sufriste un choque, te atropellaron o viajabas como pasajero, tenés derecho a reclamar por tus lesiones y por los daños. Te explicamos cómo funciona el reclamo en la Ciudad y en el conurbano bonaerense, paso a paso.',
  nav: 'Accidentes de tránsito',
  sections: [
    {
      title: 'Qué cubre un reclamo por accidente de tránsito',
      blocks: [
        { p: 'Cuando un accidente de tránsito te causa lesiones o daños, el conductor responsable, el titular del vehículo y su compañía de seguros deben responder. En Argentina todo vehículo que circula tiene que tener un seguro de responsabilidad civil hacia terceros, y ese seguro es el que normalmente termina pagando la indemnización.' },
        { p: 'El reclamo puede resolverse con un acuerdo con la aseguradora o, si la oferta no alcanza, en un juicio. En los dos casos, el objetivo es el mismo: que se reconozca todo lo que el accidente te hizo perder.' },
        { list: [
          'Lesiones físicas y la incapacidad que dejen, aunque sea parcial.',
          'Daño psicológico, cuando el hecho deja secuelas emocionales.',
          'Daño moral: el sufrimiento y la alteración de tu vida cotidiana.',
          'Gastos médicos, de farmacia, kinesiología y traslados.',
          'Ingresos que dejaste de cobrar mientras no pudiste trabajar.',
          'Reparación del vehículo y el tiempo que no pudiste usarlo.',
        ] },
        { p: 'Cada uno de estos conceptos se explica en detalle en nuestra guía sobre [cuánto se cobra por un accidente de tránsito](/accidentes-de-transito/indemnizacion-por-accidente-de-transito).' },
      ],
    },
    {
      title: 'Quién responde por el accidente',
      blocks: [
        { p: 'El Código Civil y Comercial establece que quien conduce un vehículo y su dueño responden por los daños que ese vehículo causa. Es una responsabilidad objetiva: la víctima no tiene que demostrar que el otro conductor actuó con mala intención, alcanza con probar el accidente, el daño y la relación entre ambos.' },
        { p: 'Para liberarse, el responsable tiene que probar algo concreto, como que la culpa fue de la propia víctima o de un tercero. Por eso es tan importante reunir pruebas desde el primer día.' },
        { p: 'La compañía de seguros del responsable se incorpora al reclamo y responde dentro de los límites de la póliza. Si el otro vehículo [no tenía seguro](/accidentes-de-transito/choque-con-auto-sin-seguro), el reclamo se dirige contra el conductor y el titular directamente.' },
      ],
    },
    {
      title: 'Cómo es el reclamo paso a paso',
      blocks: [
        { steps: [
          { title: 'Atención médica y pruebas', text: 'Lo primero es tu salud. Después, guardá todo: fotos, datos del otro vehículo, testigos, certificados médicos. Te lo explicamos en [qué hacer después de un choque](/accidentes-de-transito/que-hacer-despues-de-un-choque).' },
          { title: 'Denuncia del siniestro', text: 'Si tenés seguro, tenés que denunciar el accidente a tu compañía dentro de los tres días. Si hubo lesionados, suele intervenir la policía y se abre una causa penal.' },
          { title: 'Reclamo a la aseguradora', text: 'Se presenta el reclamo formal ante la compañía del responsable, con la documentación médica y de los daños.' },
          { title: 'Mediación', text: 'Antes de ir a juicio, en la Ciudad y en la Provincia de Buenos Aires hay una [mediación previa obligatoria](/accidentes-de-transito/mediacion-previa). Muchos casos se cierran ahí.' },
          { title: 'Juicio, si hace falta', text: 'Si no hay acuerdo, se inicia la demanda. Un perito médico evalúa tu incapacidad y el juez fija la indemnización.' },
        ] },
      ],
    },
    {
      title: 'Plazos que no hay que dejar pasar',
      blocks: [
        { p: 'El plazo general para reclamar daños por un accidente de tránsito es de tres años desde el hecho. Parece mucho tiempo, pero las pruebas se pierden rápido: las cámaras de seguridad se borran en días y los testigos se olvidan. En nuestra guía sobre el [plazo para reclamar](/accidentes-de-transito/plazo-para-reclamar) te contamos qué situaciones pueden cambiar ese cómputo.' },
        { note: 'Antes de firmar cualquier acuerdo o recibo de la aseguradora, hacelo revisar. Una firma apurada puede cerrar el reclamo por mucho menos de lo que corresponde.' },
      ],
    },
    {
      title: 'Dónde trabajamos',
      blocks: [
        { p: 'Atendemos reclamos por accidentes ocurridos en la Ciudad Autónoma de Buenos Aires y en los partidos del conurbano bonaerense. En cada página de zona vas a encontrar información sobre esa localidad y las vías donde más consultas recibimos.' },
      ],
    },
  ],
  faqs: [
    { q: '¿Puedo reclamar si el accidente fue leve?', a: 'Sí. Aunque no haya fracturas, un golpe puede dejar secuelas como cervicalgias o lumbalgias, y además hay gastos y daños al vehículo. Lo importante es tener el registro médico desde el principio.' },
    { q: '¿Tengo que pagar para iniciar el reclamo?', a: 'Depende del acuerdo que hagas con el estudio. Consultanos y te explicamos cómo trabajamos antes de que tomes cualquier decisión.' },
    { q: '¿Cuánto tarda un reclamo?', a: 'Un acuerdo con la aseguradora o en mediación puede resolverse en meses. Si el caso va a juicio, suele llevar más tiempo, según la complejidad y la prueba.' },
    { q: '¿Qué pasa si yo también tuve algo de culpa?', a: 'Igual podés reclamar. Si hubo culpa compartida, la indemnización se reduce en proporción, pero no se pierde el derecho.' },
  ],
  related: [
    `${T}/accidente-de-moto`,
    `${T}/peaton-atropellado`,
    `${T}/indemnizacion-por-accidente-de-transito`,
  ],
};

export const transitoArticulos: Page[] = [
  {
    ...base,
    path: `${T}/que-hacer-despues-de-un-choque`,
    title: 'Qué hacer después de un choque: guía paso a paso',
    description:
      'Qué hacer después de un accidente de tránsito en Buenos Aires: atención médica, pruebas, datos del otro conductor, denuncia al seguro y errores a evitar.',
    label: 'Primeros pasos',
    h1: 'Qué hacer después',
    h1Em: 'de un choque.',
    lead:
      'Las primeras horas después de un accidente de tránsito son las que más pesan en un reclamo. Esta es la lista de lo que conviene hacer, en orden, para cuidar tu salud y tus derechos.',
    nav: 'Qué hacer después de un choque',
    sections: [
      {
        title: 'En el lugar del accidente',
        blocks: [
          { steps: [
            { title: 'Ponete a salvo y pedí ayuda', text: 'Si hay heridos, llamá al 107 (SAME en la Ciudad) o al 911. No muevas a una persona lesionada salvo que haya un peligro inmediato.' },
            { title: 'Sacá fotos de todo', text: 'Posición de los vehículos, daños, patentes, semáforos, señales, marcas en el piso y el entorno. Cuantas más, mejor.' },
            { title: 'Pedí los datos del otro conductor', text: 'Nombre, DNI, registro, patente, compañía de seguros y número de póliza. Si es posible, fotografiá la cédula del vehículo y el comprobante del seguro.' },
            { title: 'Anotá testigos', text: 'Nombre y teléfono de quienes vieron el accidente. Son una prueba muy valiosa y después es difícil encontrarlos.' },
            { title: 'Buscá cámaras', text: 'Comercios, edificios y cámaras municipales pueden haber grabado el hecho. Esas imágenes se sobrescriben en pocos días.' },
          ] },
        ],
      },
      {
        title: 'En los días siguientes',
        blocks: [
          { p: 'Aunque te sientas bien, hacete ver por un médico. Muchas lesiones, como las cervicales, aparecen horas o días después. El registro de esa primera atención es la base de cualquier reclamo por lesiones.' },
          { list: [
            'Guardá certificados, estudios, recetas y comprobantes de gastos.',
            'Si tenés seguro, hacé la denuncia del siniestro a tu compañía dentro de los tres días.',
            'Si hubo lesionados, puede haber una causa penal: pedí el número de la actuación.',
            'Anotá cómo el accidente afecta tu trabajo y tu vida diaria.',
          ] },
        ],
      },
      {
        title: 'Errores comunes que después cuestan caro',
        blocks: [
          { list: [
            'Aceptar un acuerdo "de palabra" en el lugar y no pedir datos.',
            'No ir al médico porque "no fue nada".',
            'Hacer declaraciones escritas que te atribuyan culpa sin asesorarte.',
            'Firmar recibos o convenios de la aseguradora sin leerlos con un abogado.',
            'Reparar el auto antes de que se registren los daños.',
          ] },
          { note: 'Si la aseguradora del otro conductor te llama para ofrecerte un arreglo rápido, no firmes nada sin asesorarte. Te contamos por qué en [la aseguradora ofrece poco](/accidentes-de-transito/aseguradora-oferta-baja).' },
        ],
      },
      {
        title: 'Cuándo conviene consultar',
        blocks: [
          { p: 'Lo antes posible, sobre todo si hubo lesiones. Un abogado puede ayudarte a preservar la prueba, hacer la denuncia correctamente y evitar que el reclamo se complique. El plazo legal existe, pero el tiempo juega en contra de las pruebas.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Es obligatorio llamar a la policía?', a: 'Si hay heridos, sí conviene dar aviso y normalmente interviene la policía. Si solo hubo daños materiales, alcanza con intercambiar datos y denunciar el siniestro a tu seguro.' },
      { q: '¿Qué pasa si el otro conductor se fue?', a: 'Anotá la patente, aunque sea parcial, y buscá testigos y cámaras. Con esos datos se puede identificar al vehículo y a su aseguradora.' },
      { q: '¿Tengo que ir al médico aunque no me duela nada?', a: 'Es muy recomendable. Algunas lesiones se manifiestan después, y sin un registro médico cercano al accidente es más difícil demostrar que fueron causadas por el choque.' },
    ],
    related: [`${T}/plazo-para-reclamar`, `${T}/indemnizacion-por-accidente-de-transito`, `${T}/choque-de-auto`],
  },
  {
    ...base,
    path: `${T}/accidente-de-moto`,
    title: 'Abogados para accidentes de moto en CABA y GBA',
    description:
      'Si tuviste un accidente en moto en Buenos Aires, podés reclamar por lesiones, incapacidad y daños. Cómo funciona el reclamo y qué pruebas necesitás.',
    label: 'Accidentes de moto',
    h1: '¿Tuviste un accidente',
    h1Em: 'en moto?',
    lead:
      'Los motociclistas son de los más expuestos en el tránsito de Buenos Aires y suelen sufrir lesiones más graves. Te explicamos qué podés reclamar y cómo se prueba un accidente de moto.',
    nav: 'Accidente de moto',
    sections: [
      {
        title: 'Por qué los accidentes de moto son distintos',
        blocks: [
          { p: 'En un choque, quien va en moto no tiene la protección de una carrocería. Por eso las lesiones suelen ser más serias: fracturas de miembros, lesiones de rodilla y hombro, traumatismos y secuelas que pueden dejar una incapacidad permanente.' },
          { p: 'Esa gravedad se refleja en el reclamo. La indemnización tiene en cuenta el porcentaje de incapacidad, tu edad, tus ingresos y cómo el accidente cambió tu vida diaria.' },
        ],
      },
      {
        title: 'Situaciones frecuentes',
        blocks: [
          { list: [
            'Un auto que gira sin ver la moto o dobla en U de forma imprevista.',
            'Apertura de puerta de un vehículo estacionado.',
            'Un vehículo que cambia de carril o cruza en rojo.',
            'Choques con colectivos, camiones o utilitarios.',
            'Accidentes de repartidores mientras trabajan.',
          ] },
          { p: 'Si el accidente ocurrió mientras trabajabas, por ejemplo haciendo entregas, también puede ser un [accidente laboral](/accidentes-laborales/repartidores-y-apps) y tener cobertura de ART. Son dos reclamos que pueden convivir.' },
        ],
      },
      {
        title: 'El casco y la discusión sobre la culpa',
        blocks: [
          { p: 'Es frecuente que la aseguradora intente reducir la indemnización argumentando que el motociclista no usaba casco o circulaba a exceso de velocidad. Esa discusión no te quita el derecho a reclamar: en todo caso, puede incidir en la proporción si se demuestra que esa conducta influyó en el daño.' },
          { note: 'Guardá el casco, la ropa y la moto sin reparar hasta que se registren los daños. Son pruebas del impacto.' },
        ],
      },
      {
        title: 'Qué se puede reclamar',
        blocks: [
          { list: [
            'Incapacidad física y psicológica, según la evaluación médica.',
            'Daño moral por el sufrimiento y los cambios en tu vida.',
            'Gastos médicos, de rehabilitación y traslados.',
            'Lo que dejaste de ganar durante la recuperación.',
            'Reparación de la moto, del casco y del equipo.',
          ] },
          { p: 'Más detalle en [cuánto se cobra por un accidente de tránsito](/accidentes-de-transito/indemnizacion-por-accidente-de-transito).' },
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo reclamar si no tenía el seguro de la moto al día?', a: 'Sí. La falta de seguro propio no te impide reclamar al responsable y a su aseguradora por tus lesiones. Puede traer otras consecuencias administrativas, pero no elimina tu derecho.' },
      { q: '¿Y si el accidente fue con un repartidor de aplicación?', a: 'Se reclama al conductor, al titular del vehículo y a la aseguradora. Según el caso, puede analizarse también la responsabilidad de terceros.' },
      { q: '¿Cuánto tiempo tengo para reclamar?', a: 'El plazo general es de tres años desde el accidente, pero conviene empezar cuanto antes para no perder pruebas.' },
    ],
    related: [`${T}/que-hacer-despues-de-un-choque`, `${T}/choque-de-auto`, `${T}/aseguradora-oferta-baja`],
  },
  {
    ...base,
    path: `${T}/peaton-atropellado`,
    title: 'Peatón atropellado: cómo reclamar la indemnización',
    description:
      'Si te atropellaron en Buenos Aires, el conductor y su seguro responden por tus lesiones. Qué se reclama, cómo se prueba y qué plazos hay.',
    label: 'Peatones',
    h1: '¿Te atropellaron',
    h1Em: 'cruzando la calle?',
    lead:
      'El peatón es la parte más protegida por la ley en un accidente de tránsito. Si te atropelló un auto, una moto o un colectivo, tenés derecho a una indemnización por todo el daño sufrido.',
    nav: 'Peatón atropellado',
    sections: [
      {
        title: 'La ley protege especialmente al peatón',
        blocks: [
          { p: 'Quien conduce un vehículo maneja una cosa riesgosa y responde por los daños que causa. Para el peatón esto significa que no necesita probar que el conductor fue imprudente: alcanza con demostrar el atropello y las lesiones.' },
          { p: 'Para no pagar, el conductor tendría que demostrar que la culpa fue exclusivamente de la víctima o de un tercero. Y aun cuando el peatón haya cruzado mal, eso no elimina automáticamente su derecho: los jueces analizan cómo ocurrió todo el hecho.' },
        ],
      },
      {
        title: 'Qué hacer si te atropellaron',
        blocks: [
          { list: [
            'Recibí atención médica y pedí copia de la historia clínica.',
            'Conseguí la patente del vehículo y los datos del seguro.',
            'Anotá testigos: vecinos, comerciantes, otros peatones.',
            'Pedí que se preserven las grabaciones de cámaras cercanas.',
            'Si intervino la policía, anotá la comisaría y el número de actuación.',
          ] },
        ],
      },
      {
        title: 'Qué indemnización corresponde',
        blocks: [
          { p: 'Los atropellos suelen causar lesiones importantes: fracturas de cadera y piernas, traumatismos de cráneo, lesiones de columna. La indemnización contempla la incapacidad que quede, el daño moral, los gastos de tratamiento y los ingresos perdidos.' },
          { p: 'Si la víctima falleció, sus familiares pueden reclamar por la pérdida. Es un tema delicado que conviene hablar con un abogado.' },
        ],
      },
      {
        title: 'Si el vehículo se dio a la fuga',
        blocks: [
          { p: 'Aunque el conductor se haya ido, con la patente o con imágenes de cámaras es posible identificar el vehículo y a su aseguradora. Por eso es tan importante buscar esas grabaciones en los primeros días.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo reclamar si crucé fuera de la senda peatonal?', a: 'Sí. Puede discutirse si esa conducta influyó en el accidente y reducir la indemnización en alguna proporción, pero en general no elimina el derecho a reclamar.' },
      { q: '¿Contra quién se reclama?', a: 'Contra el conductor, el titular del vehículo y su compañía de seguros. Si era un colectivo, contra la empresa de transporte y su aseguradora.' },
      { q: '¿Cuánto tiempo tengo?', a: 'El plazo general es de tres años desde el accidente.' },
    ],
    related: [`${T}/accidente-de-colectivo`, `${T}/indemnizacion-por-accidente-de-transito`, `${T}/plazo-para-reclamar`],
  },
  {
    ...base,
    path: `${T}/accidente-de-colectivo`,
    title: 'Accidente de colectivo: reclamo como pasajero o tercero',
    description:
      'Si te lastimaste viajando en colectivo o te chocó uno, la empresa y su aseguradora responden. Cómo reclamar en CABA y el conurbano.',
    label: 'Transporte público',
    h1: 'Accidentes de colectivo',
    h1Em: 'y transporte público.',
    lead:
      'Una frenada brusca, una caída al subir o bajar, un choque con otro vehículo. Si te lastimaste en un colectivo, la empresa de transporte tiene la obligación de llevarte sano y salvo a destino.',
    nav: 'Accidente de colectivo',
    sections: [
      {
        title: 'Si viajabas como pasajero',
        blocks: [
          { p: 'Cuando subís a un colectivo se forma un contrato de transporte: la empresa se compromete a llevarte a destino sin daños. Si te lastimás durante el viaje, incluso al subir o bajar, la empresa responde aunque el accidente haya sido causado por otro vehículo.' },
          { list: [
            'Caídas dentro de la unidad por frenadas o arranques bruscos.',
            'Lesiones al subir o bajar, por ejemplo si la puerta se cierra o el colectivo arranca.',
            'Choques del colectivo con otros vehículos.',
          ] },
        ],
      },
      {
        title: 'Si el colectivo te chocó',
        blocks: [
          { p: 'Si ibas en auto, moto o bicicleta, o caminando, y te chocó un colectivo, el reclamo se dirige contra la empresa, el conductor y la aseguradora del transporte, como en cualquier otro accidente de tránsito. Si eras peatón, mirá también [peatón atropellado](/accidentes-de-transito/peaton-atropellado).' },
        ],
      },
      {
        title: 'Cómo probar el accidente',
        blocks: [
          { p: 'En los accidentes dentro del colectivo, la prueba es clave porque muchas veces el chofer sigue viaje. Conviene:' },
          { list: [
            'Anotar la línea, el número de interno, la hora y el recorrido.',
            'Pedir datos a otros pasajeros que hayan visto lo ocurrido.',
            'Guardar la tarjeta SUBE que usaste: registra el viaje.',
            'Ir a un centro médico en el día y contar cómo te lastimaste.',
          ] },
          { note: 'Muchas unidades tienen cámaras. Si se pide rápido, es posible que esas grabaciones se preserven.' },
        ],
      },
      {
        title: 'Qué se reclama',
        blocks: [
          { p: 'Los mismos conceptos que en cualquier accidente de tránsito: incapacidad, daño moral, gastos médicos y pérdida de ingresos. Te lo explicamos en [indemnización por accidente de tránsito](/accidentes-de-transito/indemnizacion-por-accidente-de-transito).' },
        ],
      },
    ],
    faqs: [
      { q: '¿Tengo que probar que el chofer tuvo la culpa?', a: 'Como pasajero, no. Alcanza con probar que te lastimaste durante el viaje. La empresa solo podría liberarse demostrando alguna causa ajena muy específica.' },
      { q: '¿Qué pasa si no tengo testigos?', a: 'La tarjeta SUBE, la atención médica inmediata y las cámaras pueden ayudar a acreditar el hecho. Cada caso se analiza con las pruebas disponibles.' },
      { q: '¿Es lo mismo en tren o subte?', a: 'La lógica es similar: quien transporta pasajeros debe llevarlos sin daños. Consultanos con los detalles de tu caso.' },
    ],
    related: [`${T}/peaton-atropellado`, `${T}/que-hacer-despues-de-un-choque`, `${T}/plazo-para-reclamar`],
  },
  {
    ...base,
    path: `${T}/accidente-en-bicicleta`,
    title: 'Accidente en bicicleta: cómo reclamar en Buenos Aires',
    description:
      'Si tuviste un accidente en bicicleta en CABA o el conurbano, podés reclamar al conductor y a su seguro. Qué hacer, qué pruebas guardar y qué se cobra.',
    label: 'Ciclistas',
    h1: 'Accidentes',
    h1Em: 'en bicicleta.',
    lead:
      'Cada vez más personas se mueven en bicicleta por la Ciudad y el conurbano. Si un vehículo te chocó mientras pedaleabas, podés reclamar como cualquier otra víctima de un accidente de tránsito.',
    nav: 'Accidente en bicicleta',
    sections: [
      {
        title: 'El ciclista frente a un vehículo a motor',
        blocks: [
          { p: 'Cuando una bicicleta choca con un auto, una moto o un colectivo, el conductor del vehículo a motor responde por los daños que causa. Como con los peatones, la víctima no necesita probar que el conductor actuó con imprudencia.' },
          { list: [
            'Autos que giran a la derecha sin mirar la bicicleta.',
            'Apertura de puertas sobre la ciclovía o el carril.',
            'Vehículos que invaden la bicisenda.',
            'Sobrepasos demasiado cercanos.',
          ] },
        ],
      },
      {
        title: 'Si usabas la bici para trabajar',
        blocks: [
          { p: 'Si el accidente ocurrió haciendo entregas o yendo o volviendo del trabajo, también puede estar cubierto por la ART. Mirá [accidente in itinere](/accidentes-laborales/accidente-in-itinere) y [repartidores y trabajadores de apps](/accidentes-laborales/repartidores-y-apps).' },
        ],
      },
      {
        title: 'Pruebas que conviene guardar',
        blocks: [
          { list: [
            'Fotos de la bicicleta, el lugar y el vehículo.',
            'Datos del conductor, la patente y el seguro.',
            'Testigos y cámaras cercanas.',
            'Atención médica el mismo día.',
            'Registros de aplicaciones de recorrido, si las usabas.',
          ] },
          { note: 'No repares la bicicleta hasta registrar el daño con fotos y, si es posible, un presupuesto.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo reclamar si no llevaba casco?', a: 'Sí. La aseguradora puede intentar discutir que eso agravó las lesiones, pero no te quita el derecho a reclamar.' },
      { q: '¿La bicicleta también se indemniza?', a: 'Sí. La reparación o el valor de la bicicleta y de los accesorios dañados forma parte del reclamo.' },
    ],
    related: [`${T}/accidente-de-moto`, `${T}/peaton-atropellado`, `${T}/que-hacer-despues-de-un-choque`],
  },
  {
    ...base,
    path: `${T}/choque-de-auto`,
    title: 'Choque de auto: reclamo por daños y lesiones',
    description:
      'Choque entre autos en Buenos Aires: cómo reclamar daños al vehículo, lesiones y privación de uso ante la aseguradora del responsable.',
    label: 'Choques entre vehículos',
    h1: 'Choque de auto:',
    h1Em: 'cómo reclamar.',
    lead:
      'Un choque de atrás, un cruce de esquina, un cambio de carril. En un choque entre autos se pueden reclamar tanto las lesiones de las personas como los daños al vehículo.',
    nav: 'Choque de auto',
    sections: [
      {
        title: 'Dos reclamos en uno: personas y vehículo',
        blocks: [
          { p: 'En un choque entre autos suele haber dos tipos de daños. Por un lado, los del vehículo: reparación, desvalorización y el tiempo que estuvo en el taller. Por otro, los de las personas: lesiones, incapacidad, gastos médicos y daño moral.' },
          { p: 'También pueden reclamar los acompañantes del auto, aunque no manejaran. Ellos tienen un reclamo propio contra el responsable y, según el caso, contra los dos conductores.' },
        ],
      },
      {
        title: 'Quién tiene la culpa en los choques más comunes',
        blocks: [
          { h3: 'Choque desde atrás' },
          { p: 'En general se presume responsable a quien embiste desde atrás, porque debía mantener la distancia y tener el control del vehículo.' },
          { h3: 'Choque en una esquina' },
          { p: 'La regla general es la prioridad de quien viene por la derecha, aunque hay excepciones, como las avenidas o las calles con semáforo. Cada caso se analiza con las pruebas.' },
          { h3: 'Cambio de carril y giros' },
          { p: 'Quien cambia de carril o gira debe hacerlo con precaución y señalizando. Las fotos de la posición final de los autos suelen ser decisivas.' },
        ],
      },
      {
        title: 'Si tenés cobertura por daño propio',
        blocks: [
          { p: 'Si tu póliza cubre daños propios, podés reparar el auto con tu seguro y reclamar al responsable lo que no te cubra, como la franquicia o los días sin vehículo. Si solo tenés responsabilidad civil, el reclamo por el auto se hace a la aseguradora del otro conductor.' },
          { note: 'Guardá el presupuesto, las facturas y las fotos del auto antes de repararlo. Sin esa documentación es difícil reclamar el daño material.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo reclamar los días que no usé el auto?', a: 'Sí. Se conoce como privación de uso y compensa el tiempo en que no pudiste usar el vehículo mientras estaba en reparación.' },
      { q: '¿El acompañante puede reclamar?', a: 'Sí. El acompañante tiene un reclamo propio por sus lesiones, independiente del que tenga el conductor.' },
      { q: '¿Qué hago si el otro auto no tenía seguro?', a: 'Se reclama directamente al conductor y al titular. Te lo explicamos en la guía de choque con auto sin seguro.' },
    ],
    related: [`${T}/choque-con-auto-sin-seguro`, `${T}/aseguradora-oferta-baja`, `${T}/mediacion-previa`],
  },
  {
    ...base,
    path: `${T}/indemnizacion-por-accidente-de-transito`,
    title: 'Cuánto se cobra por un accidente de tránsito',
    description:
      'Qué conceptos forman la indemnización por accidente de tránsito en Argentina: incapacidad, daño moral, gastos, lucro cesante y daños al vehículo.',
    label: 'Indemnización',
    h1: '¿Cuánto se cobra',
    h1Em: 'por un accidente de tránsito?',
    lead:
      'No existe una cifra fija: cada indemnización se arma sumando distintos conceptos según el caso. Te explicamos cuáles son y qué factores hacen que un reclamo valga más o menos.',
    nav: 'Cuánto se cobra por un accidente',
    sections: [
      {
        title: 'Cómo se arma una indemnización',
        blocks: [
          { p: 'La ley busca que la víctima quede, en lo posible, como estaba antes del accidente. Para eso, la indemnización suma distintos rubros. Cada uno se prueba y se calcula por separado.' },
        ],
      },
      {
        title: 'Los conceptos que se pueden reclamar',
        blocks: [
          { h3: 'Incapacidad sobreviniente' },
          { p: 'Es el rubro más importante cuando hay lesiones. Compensa la pérdida de capacidad física o psíquica que deja el accidente. Un perito médico determina un porcentaje de incapacidad, y con ese porcentaje, tu edad y tus ingresos se calcula el monto.' },
          { h3: 'Daño moral' },
          { p: 'Compensa el sufrimiento, el miedo, el dolor y los cambios en tu vida diaria. No depende de tus ingresos y se reconoce aunque la incapacidad sea baja.' },
          { h3: 'Daño psicológico' },
          { p: 'Si el accidente te dejó secuelas emocionales, como ansiedad o miedo a viajar, pueden evaluarse y sumarse al reclamo, junto con el costo del tratamiento.' },
          { h3: 'Gastos médicos y de traslado' },
          { p: 'Consultas, medicamentos, kinesiología, estudios y viajes. Aunque no tengas todos los comprobantes, la ley permite reconocer gastos razonables según la lesión.' },
          { h3: 'Lucro cesante' },
          { p: 'Lo que dejaste de ganar mientras no pudiste trabajar.' },
          { h3: 'Daños al vehículo' },
          { p: 'Reparación, desvalorización y privación de uso del vehículo.' },
        ],
      },
      {
        title: 'Qué hace que una indemnización sea mayor o menor',
        blocks: [
          { list: [
            'La gravedad de las lesiones y el porcentaje de incapacidad.',
            'La edad: a menor edad, más años de vida con la secuela.',
            'Los ingresos y el tipo de trabajo.',
            'La calidad de la prueba: médica, testigos, fotos.',
            'Si hubo culpa compartida.',
          ] },
          { note: 'La primera oferta de una aseguradora rara vez contempla todos estos rubros. Te contamos por qué en [la aseguradora ofrece poco](/accidentes-de-transito/aseguradora-oferta-baja).' },
        ],
      },
    ],
    faqs: [
      { q: '¿Hay una tabla con montos fijos?', a: 'No. Cada caso se calcula según sus circunstancias. Por eso es importante que un profesional revise tu situación antes de aceptar una oferta.' },
      { q: '¿Se reclama también el daño psicológico?', a: 'Sí, si el accidente dejó secuelas emocionales que puedan acreditarse con una evaluación profesional.' },
      { q: '¿Qué pasa si no tengo todos los tickets de gastos?', a: 'La ley presume ciertos gastos médicos y de traslado según la lesión, aunque siempre conviene guardar la mayor cantidad de comprobantes.' },
    ],
    related: [`${T}/aseguradora-oferta-baja`, `${T}/mediacion-previa`, `${T}/plazo-para-reclamar`],
  },
  {
    ...base,
    path: `${T}/plazo-para-reclamar`,
    title: 'Plazo para reclamar un accidente de tránsito',
    description:
      'Cuánto tiempo hay para reclamar un accidente de tránsito en Argentina: el plazo de tres años, desde cuándo se cuenta y por qué conviene no esperar.',
    label: 'Plazos',
    h1: '¿Hasta cuándo puedo reclamar',
    h1Em: 'un accidente de tránsito?',
    lead:
      'El reclamo por daños de un accidente de tránsito tiene un plazo legal. Si se vence, se pierde el derecho a cobrar. Te explicamos cuál es y por qué no conviene acercarse al límite.',
    nav: 'Plazo para reclamar',
    sections: [
      {
        title: 'El plazo general: tres años',
        blocks: [
          { p: 'El Código Civil y Comercial fija en tres años el plazo para reclamar la indemnización de daños por responsabilidad civil. En un accidente de tránsito, ese plazo se cuenta en general desde el día del hecho.' },
          { p: 'Hay situaciones que pueden modificar el cómputo, por ejemplo ciertos reclamos formales o la existencia de una causa penal. Por eso cada caso tiene que analizarse en concreto.' },
        ],
      },
      {
        title: 'Otros plazos más cortos que importan',
        blocks: [
          { list: [
            'Denuncia del siniestro a tu propia aseguradora: dentro de los tres días de conocido el hecho.',
            'Preservación de cámaras: muchas se sobrescriben en días.',
            'Atención médica: cuanto más cerca del accidente, más sólido el vínculo entre el hecho y la lesión.',
          ] },
        ],
      },
      {
        title: 'Por qué no conviene esperar',
        blocks: [
          { p: 'Aunque el plazo legal sea de años, las pruebas se pierden mucho antes. Los testigos cambian de domicilio, los recuerdos se vuelven imprecisos y las grabaciones desaparecen. Un reclamo iniciado a tiempo, con buena prueba, tiene muchas más posibilidades.' },
          { note: 'Si pasaron meses o años desde tu accidente, consultá igual: puede que todavía estés a tiempo.' },
        ],
      },
    ],
    faqs: [
      { q: '¿El plazo corre igual si estuve internado?', a: 'En general se cuenta desde el hecho, pero hay situaciones particulares. Consultanos con las fechas de tu caso.' },
      { q: '¿La causa penal interrumpe el plazo civil?', a: 'Puede tener efectos sobre el reclamo, pero depende de la situación concreta. Es un punto a revisar con un abogado.' },
    ],
    related: [`${T}/que-hacer-despues-de-un-choque`, `${T}/mediacion-previa`, `${T}/indemnizacion-por-accidente-de-transito`],
  },
  {
    ...base,
    path: `${T}/mediacion-previa`,
    title: 'Mediación por accidente de tránsito en CABA y PBA',
    description:
      'Cómo funciona la mediación previa obligatoria en reclamos por accidentes de tránsito en la Ciudad y la Provincia de Buenos Aires.',
    label: 'Mediación',
    h1: 'La mediación',
    h1Em: 'en accidentes de tránsito.',
    lead:
      'Antes de iniciar un juicio por un accidente de tránsito, en la Ciudad y en la Provincia de Buenos Aires hay que pasar por una mediación. Es una instancia para intentar llegar a un acuerdo.',
    nav: 'Mediación previa',
    sections: [
      {
        title: 'Qué es y por qué es obligatoria',
        blocks: [
          { p: 'La mediación es una reunión, o una serie de reuniones, entre la víctima, el responsable y su aseguradora, con un mediador neutral. Busca que las partes lleguen a un acuerdo sin necesidad de un juicio.' },
          { p: 'En los reclamos patrimoniales que tramitan ante la justicia civil de la Ciudad de Buenos Aires y en la Provincia de Buenos Aires, la mediación es un paso previo obligatorio. Sin haberla intentado, en general no se puede iniciar la demanda.' },
        ],
      },
      {
        title: 'Cómo es el proceso',
        blocks: [
          { steps: [
            { title: 'Inicio', text: 'Se presenta el reclamo y se designa un mediador. Se cita al responsable y a su aseguradora.' },
            { title: 'Audiencias', text: 'Las partes exponen su postura. Es habitual que la aseguradora haga una oferta.' },
            { title: 'Acuerdo o cierre', text: 'Si hay acuerdo, se firma y se paga en los plazos pactados. Si no, se cierra la mediación y queda habilitado el juicio.' },
          ] },
        ],
      },
      {
        title: 'Cómo llegar bien preparado',
        blocks: [
          { p: 'La oferta que se obtiene en una mediación depende mucho de la documentación que se presenta: historia clínica, estudios, evaluación de la incapacidad y comprobantes de los daños. Llegar con el caso bien armado cambia la negociación.' },
          { note: 'En la mediación tenés que ir con abogado. No aceptes un acuerdo sin comparar la oferta con lo que realmente vale tu caso.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Estoy obligado a aceptar la oferta?', a: 'No. Si la oferta no es adecuada, se puede cerrar la mediación sin acuerdo e iniciar el juicio.' },
      { q: '¿Cuánto dura la mediación?', a: 'Suele resolverse en pocas audiencias, aunque depende de la voluntad de las partes y de la complejidad del caso.' },
    ],
    related: [`${T}/aseguradora-oferta-baja`, `${T}/indemnizacion-por-accidente-de-transito`, `${T}/plazo-para-reclamar`],
  },
  {
    ...base,
    path: `${T}/aseguradora-oferta-baja`,
    title: 'La aseguradora ofrece poco o no paga: qué hacer',
    description:
      'Si la aseguradora te ofrece poco o rechaza tu reclamo por un accidente de tránsito, podés negociar, ir a mediación o iniciar un juicio. Te explicamos cómo.',
    label: 'Aseguradoras',
    h1: 'La aseguradora',
    h1Em: 'ofrece poco o no paga.',
    lead:
      'Es muy común que la primera respuesta de la compañía de seguros sea una oferta baja, una demora o un rechazo. No es la última palabra. Estas son tus alternativas.',
    nav: 'La aseguradora ofrece poco',
    sections: [
      {
        title: 'Por qué la primera oferta suele ser baja',
        blocks: [
          { p: 'La aseguradora calcula su oferta con la información que tiene, que muchas veces no incluye todas tus lesiones, la incapacidad que te queda ni el daño moral. Además, una víctima sin asesoramiento suele aceptar rápido para cerrar el tema.' },
          { list: [
            'Ofertas que solo cubren el arreglo del vehículo.',
            'Montos que no consideran la incapacidad permanente.',
            'Presión para firmar un recibo "por todo concepto".',
            'Demoras largas sin respuesta.',
          ] },
        ],
      },
      {
        title: 'Qué alternativas tenés',
        blocks: [
          { steps: [
            { title: 'Revisar la oferta', text: 'Compararla con lo que corresponde según tus lesiones y pérdidas. Mirá [cuánto se cobra por un accidente de tránsito](/accidentes-de-transito/indemnizacion-por-accidente-de-transito).' },
            { title: 'Negociar con documentación', text: 'Presentar la historia clínica, la evaluación de incapacidad y los comprobantes cambia la base de la negociación.' },
            { title: 'Mediación', text: 'Si no hay acuerdo directo, la [mediación previa](/accidentes-de-transito/mediacion-previa) es la siguiente instancia.' },
            { title: 'Juicio', text: 'Si la oferta sigue siendo insuficiente, se inicia la demanda y un juez fija la indemnización.' },
          ] },
        ],
      },
      {
        title: 'Si la aseguradora rechaza el siniestro',
        blocks: [
          { p: 'A veces la compañía rechaza el reclamo diciendo que su asegurado no tuvo culpa o que la póliza no cubre el hecho. Aun así, el conductor y el titular del vehículo siguen siendo responsables, y el rechazo puede discutirse.' },
          { note: 'No firmes un recibo que diga "por todo concepto" sin asesorarte: puede impedirte reclamar después.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo reclamar si ya firmé un acuerdo?', a: 'Depende de lo que firmaste. En algunos casos puede revisarse; en otros el reclamo queda cerrado. Traenos el documento y lo analizamos.' },
      { q: '¿Qué pasa si la aseguradora quebró o está liquidada?', a: 'Es una situación particular que requiere revisar el caso. El conductor y el titular del vehículo siguen respondiendo.' },
    ],
    related: [`${T}/mediacion-previa`, `${T}/indemnizacion-por-accidente-de-transito`, `${T}/choque-con-auto-sin-seguro`],
  },
  {
    ...base,
    path: `${T}/choque-con-auto-sin-seguro`,
    title: 'Choque con un auto sin seguro: cómo reclamar',
    description:
      'Si te chocó un vehículo sin seguro en Buenos Aires, podés reclamar al conductor y al titular. Qué opciones hay y cómo revisar tu propia póliza.',
    label: 'Responsable sin seguro',
    h1: 'Me chocó un auto',
    h1Em: 'sin seguro.',
    lead:
      'Circular sin seguro es una infracción, pero sigue pasando. Si te chocó un vehículo sin cobertura, tu derecho a reclamar no desaparece: cambia contra quién se dirige el reclamo.',
    nav: 'Choque con auto sin seguro',
    sections: [
      {
        title: 'Contra quién se reclama',
        blocks: [
          { p: 'Aunque no haya aseguradora, el conductor y el titular registral del vehículo responden por los daños. El reclamo se dirige contra ellos y, si hay sentencia a favor, se puede ejecutar sobre sus bienes.' },
          { p: 'Por eso es importante identificar bien al titular del vehículo con la patente, que puede no ser la misma persona que manejaba.' },
        ],
      },
      {
        title: 'Revisá tu propia póliza',
        blocks: [
          { p: 'Si tenés un seguro con cobertura de daños propios, tu compañía puede reparar tu vehículo y luego repetir contra el responsable. Algunas pólizas tienen además coberturas adicionales para las personas transportadas. Vale la pena leer las condiciones.' },
        ],
      },
      {
        title: 'Si hubo lesiones',
        blocks: [
          { p: 'Si el accidente ocurrió trabajando o en el trayecto al trabajo, la ART cubre las lesiones, más allá de que el otro vehículo no tuviera seguro. Mirá [accidente in itinere](/accidentes-laborales/accidente-in-itinere).' },
          { note: 'Aunque el reclamo sea contra un particular, las pruebas se reúnen igual: fotos, testigos, datos y atención médica.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Vale la pena reclamar si el responsable no tiene bienes?', a: 'Hay que evaluarlo en cada caso. A veces el titular del vehículo no es quien manejaba y sí tiene bienes, o existen otras coberturas que pueden aplicarse.' },
      { q: '¿Cómo sé si el otro auto tenía seguro?', a: 'Con la patente se puede consultar la titularidad del vehículo y, en el reclamo, requerir la información de la póliza.' },
    ],
    related: [`${T}/choque-de-auto`, `${T}/aseguradora-oferta-baja`, `${T}/que-hacer-despues-de-un-choque`],
  },
  {
    ...base,
    path: `${T}/accidente-en-uber-o-app`,
    title: 'Accidente en Uber, Cabify, DiDi o remis: cómo reclamar',
    description:
      'Si tuviste un accidente como pasajero de Uber, DiDi, Cabify o remís, o te chocó un conductor de app, te explicamos contra quién reclamar.',
    label: 'Viajes por aplicación',
    h1: 'Accidente viajando',
    h1Em: 'en Uber o una app.',
    lead:
      'Los viajes por aplicación son parte de la vida cotidiana en Buenos Aires. Si tuviste un accidente como pasajero o te chocó un conductor de app, tenés derecho a reclamar por tus lesiones.',
    nav: 'Accidente en Uber o app',
    sections: [
      {
        title: 'Si eras pasajero',
        blocks: [
          { p: 'Como pasajero, no manejabas ni tenías control del vehículo. Por eso podés reclamar por tus lesiones contra el conductor del auto en el que viajabas, el titular de ese vehículo y, si fue un choque con otro auto, contra el otro conductor. Cada uno responde junto con su aseguradora.' },
        ],
      },
      {
        title: 'La discusión sobre la cobertura del seguro',
        blocks: [
          { p: 'Muchas pólizas de autos particulares excluyen el uso comercial del vehículo. Por eso, en estos casos la aseguradora a veces intenta rechazar la cobertura. Esa discusión no deja a la víctima sin reclamo: el conductor y el titular siguen respondiendo, y la exclusión puede analizarse según la póliza y el caso.' },
          { note: 'Guardá la captura del viaje en la aplicación: datos del conductor, patente, recorrido, fecha y hora. Es la prueba principal de que viajabas en ese auto.' },
        ],
      },
      {
        title: 'Si sos conductor de aplicación',
        blocks: [
          { p: 'Si manejás para una app y tuviste un accidente, tu situación puede combinar un reclamo por accidente de tránsito con temas laborales. Mirá [repartidores y trabajadores de apps](/accidentes-laborales/repartidores-y-apps).' },
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo reclamarle a la aplicación?', a: 'Depende del caso y de cómo funciona el servicio. El reclamo principal suele dirigirse al conductor, al titular del vehículo y a las aseguradoras involucradas.' },
      { q: '¿Qué pasa con un remís o un taxi?', a: 'Los remises y taxis habilitados deben tener seguros específicos para transportar pasajeros, lo que suele facilitar el reclamo.' },
    ],
    related: [`${T}/accidente-de-colectivo`, `${T}/choque-de-auto`, `${T}/aseguradora-oferta-baja`],
  },
];
