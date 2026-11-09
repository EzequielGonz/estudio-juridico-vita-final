const pasos = [
  { titulo: 'Contanos tu situación', texto: 'Compartí brevemente qué pasó a través del formulario o por WhatsApp.' },
  { titulo: 'Analizamos tu caso', texto: 'Revisamos la información para comprender tu situación particular.' },
  { titulo: 'Te orientamos sobre los próximos pasos', texto: 'Conversamos sobre tus derechos y las alternativas disponibles.' },
];

export function Process() {
  return (
    <section className="seccion consulta" id="proceso">
      <div className="shell">
        <div className="consulta-cabeza">
          <h2 className="revela">Cómo es la consulta</h2>
          <p className="seccion-bajada">Un proceso simple para que puedas dar el primer paso con tranquilidad.</p>
        </div>
        <div className="pasos">
          <span className="pasos-riel" aria-hidden="true"><span className="pasos-avance" /></span>
          <ol>
            {pasos.map((paso, i) => (
              <li className="paso" key={paso.titulo}>
                <span className="paso-num" aria-hidden="true">{i + 1}</span>
                <h3>{paso.titulo}</h3>
                <p>{paso.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
