import { ArrowUpRight, CarFront, HardHat } from 'lucide-react';

const specialties = [
  { icon: CarFront, id: 'transito', title: 'Accidentes de tránsito', description: 'Si sufriste un accidente de tránsito, podemos ayudarte a comprender tus derechos y las alternativas legales disponibles para tu situación.' },
  { icon: HardHat, id: 'laborales', title: 'Accidentes laborales', description: 'Si sufriste un accidente durante tu actividad laboral, podemos asesorarte sobre los pasos a seguir y las opciones disponibles.' },
];

export function Specialties() {
  return (
    <section className="specialties section-space" id="especialidades">
      <div className="shell">
        <div className="section-heading">
          <p className="section-label">Lo que hacemos</p>
          <h2>Áreas de <em>especialización</em></h2>
          <p>Un enfoque atento a cada historia, con la claridad que necesitás para tomar decisiones informadas.</p>
        </div>
        <div className="specialty-list">
          {specialties.map(item => (
            <article className="specialty-row" key={item.id}>
              <div className="specialty-icon"><item.icon size={32} strokeWidth={1.25} /></div>
              <div className="specialty-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <a className="specialty-link" href={`#${item.id}`}>Ver esta especialidad <ArrowUpRight size={18} strokeWidth={1.5} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
