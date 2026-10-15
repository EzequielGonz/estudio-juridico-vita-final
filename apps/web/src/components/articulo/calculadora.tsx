import { useId, useState } from 'react';

/**
 * Estimación de la indemnización por incapacidad permanente parcial (hasta 66%),
 * según la fórmula de la Ley de Riesgos del Trabajo:
 *   53 × ingreso base mensual × (65 / edad) × porcentaje
 * más el 20% adicional cuando el accidente no es in itinere.
 *
 * PISO_POR_PUNTO: si el estudio quiere aplicar el piso mínimo vigente, cargar el
 * monto por cada punto de incapacidad que publica la SRT para el período
 * (piso para 100% ÷ 100). En 0 no se aplica. Revisarlo cada semestre.
 */
const PISO_POR_PUNTO = 0;
const ADICIONAL = 0.2;

const pesos = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });

type Tipo = 'trabajo' | 'itinere';

export function Calculadora() {
  const uid = useId();
  const [salario, setSalario] = useState('');
  const [edad, setEdad] = useState('');
  const [porcentaje, setPorcentaje] = useState('');
  const [tipo, setTipo] = useState<Tipo>('trabajo');

  const salarioNum = Number(salario.replace(/\./g, '').replace(',', '.'));
  const edadNum = Number(edad);
  const porcentajeNum = Number(porcentaje.replace(',', '.'));

  const errores: string[] = [];
  if (salario && !(salarioNum > 0)) errores.push('Ingresá un ingreso mensual válido.');
  if (edad && (edadNum < 16 || edadNum > 80)) errores.push('La edad debe estar entre 16 y 80 años.');
  if (porcentaje && (porcentajeNum <= 0 || porcentajeNum > 66)) errores.push('La calculadora estima incapacidades de hasta el 66%.');

  const completo = salarioNum > 0 && edadNum >= 16 && edadNum <= 80 && porcentajeNum > 0 && porcentajeNum <= 66;

  let base = 0;
  let adicional = 0;
  let piso = 0;
  if (completo) {
    base = 53 * salarioNum * (65 / edadNum) * (porcentajeNum / 100);
    piso = PISO_POR_PUNTO * porcentajeNum;
    base = Math.max(base, piso);
    adicional = tipo === 'trabajo' ? base * ADICIONAL : 0;
  }
  const total = base + adicional;

  return (
    <section className="doc-calc" aria-labelledby={`${uid}-titulo`}>
      <p className="form-title" id={`${uid}-titulo`}>Calculá tu estimación</p>
      <div className="form-fields">
        <div className="form-pair">
          <div className="form-field">
            <label htmlFor={`${uid}-salario`}>Ingreso base mensual (bruto)</label>
            <input id={`${uid}-salario`} inputMode="numeric" placeholder="Ej: 1.200.000" value={salario} onChange={event => setSalario(event.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor={`${uid}-edad`}>Edad al momento del accidente</label>
            <input id={`${uid}-edad`} inputMode="numeric" placeholder="Ej: 38" value={edad} onChange={event => setEdad(event.target.value)} />
          </div>
        </div>
        <div className="form-pair">
          <div className="form-field">
            <label htmlFor={`${uid}-porcentaje`}>Porcentaje de incapacidad</label>
            <input id={`${uid}-porcentaje`} inputMode="decimal" placeholder="Ej: 12" value={porcentaje} onChange={event => setPorcentaje(event.target.value)} />
          </div>
          <div className="form-field">
            <label htmlFor={`${uid}-tipo`}>Cómo ocurrió</label>
            <select id={`${uid}-tipo`} value={tipo} onChange={event => setTipo(event.target.value as Tipo)}>
              <option value="trabajo">En el trabajo o enfermedad laboral</option>
              <option value="itinere">In itinere (en el trayecto)</option>
            </select>
          </div>
        </div>
      </div>

      {errores.length > 0 && (
        <div role="alert">
          {errores.map(error => <p className="field-error" key={error}>{error}</p>)}
        </div>
      )}

      <div className="doc-calc-result" aria-live="polite">
        {completo ? (
          <>
            <dl>
              <div><dt>Fórmula base</dt><dd>{pesos.format(base)}</dd></div>
              <div><dt>Adicional del 20%</dt><dd>{tipo === 'trabajo' ? pesos.format(adicional) : 'No aplica (in itinere)'}</dd></div>
            </dl>
            <p className="doc-calc-total"><span>Estimación total</span>{pesos.format(total)}</p>
            <p className="doc-calc-note">
              Estimación orientativa. No incluye {PISO_POR_PUNTO ? '' : 'pisos mínimos vigentes, '}compensaciones adicionales, intereses ni actualización. Consultanos para calcular tu caso con precisión.
            </p>
          </>
        ) : (
          <p className="doc-calc-note">Completá los cuatro datos para ver la estimación.</p>
        )}
      </div>
    </section>
  );
}
