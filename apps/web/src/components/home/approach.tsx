import { MessageCircle, SearchCheck, Scale, Waypoints } from 'lucide-react';

const values = [
  { icon: MessageCircle, title: 'Atención personalizada', copy: 'Cada situación merece ser comprendida de manera particular.' },
  { icon: SearchCheck, title: 'Orientación clara', copy: 'Explicamos las alternativas legales de forma simple y comprensible.' },
  { icon: Scale, title: 'Profesionalismo', copy: 'Seriedad y compromiso en cada consulta.' },
  { icon: Waypoints, title: 'Seguimiento', copy: 'Acompañamiento durante las distintas etapas del proceso.' },
];

export function Approach() {
  return (
    <section className="approach section-space" id="nosotros">
      <div className="shell approach-inner">
        <div className="approach-heading">
          <p className="section-label">Nuestro enfoque</p>
          <h2>Un acompañamiento legal <em>claro, profesional y cercano.</em></h2>
          <p>Sabemos que cada situación es distinta. Por eso, empezamos por escucharte.</p>
        </div>
        <div className="values-grid">
          {values.map(value => (
            <div className="value-item" key={value.title}>
              <value.icon size={30} strokeWidth={1.2} />
              <h3>{value.title}</h3>
              <p>{value.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
