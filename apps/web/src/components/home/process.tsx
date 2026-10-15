const steps = [
  { title: 'Contanos tu situación', copy: 'Compartí brevemente qué pasó a través del formulario o por WhatsApp.' },
  { title: 'Analizamos tu caso', copy: 'Revisamos la información para comprender tu situación particular.' },
  { title: 'Te orientamos sobre los próximos pasos', copy: 'Conversamos sobre tus derechos y las alternativas disponibles.' },
];

export function Process() {
  return (
    <section className="process section-space" id="proceso">
      <div className="shell">
        <div className="section-heading">
          <p className="section-label">Cómo trabajamos</p>
          <h2>¿Cómo funciona <em>la consulta?</em></h2>
          <p>Un proceso simple para que puedas dar el primer paso con tranquilidad.</p>
        </div>
        <div className="steps">
          {steps.map((step, i) => (
            <div className="step" key={step.title}>
              <span className="step-marker">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
