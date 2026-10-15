import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { submitLead } from '@/lib/leads';
import { track } from '@/lib/track';
import { WHATSAPP_URL } from '@/constants/brand';
import { WhatsAppIcon } from '@/components/whatsapp-icon';

type FormValues = { nombre: string; apellido: string; telefono: string; email: string; tipo: string; descripcion: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;
const initialValues: FormValues = { nombre: '', apellido: '', telefono: '', email: '', tipo: '', descripcion: '' };
const fieldLabels: Record<keyof FormValues, string> = {
  nombre: 'Nombre', apellido: 'Apellido', telefono: 'Número de teléfono', email: 'Email', tipo: 'Tipo de consulta', descripcion: 'Breve descripción de la consulta',
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  for (const key of Object.keys(values) as (keyof FormValues)[]) {
    if (!values[key].trim()) errors[key] = `Completá ${fieldLabels[key].toLowerCase()}.`;
  }
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Ingresá un email válido.';
  if (values.telefono.trim() && values.telefono.replace(/\D/g, '').length < 7) errors.telefono = 'Ingresá un número de teléfono válido.';
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const update = (key: keyof FormValues, value: string) => {
    setValues(previous => ({ ...previous, [key]: value }));
    setErrors(previous => ({ ...previous, [key]: undefined }));
    if (status === 'error') setStatus('idle');
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus('sending');
    try {
      await submitLead({
        nombre: values.nombre.trim(), apellido: values.apellido.trim(), telefono: values.telefono.trim(),
        email: values.email.trim(), tipo: values.tipo, descripcion: values.descripcion.trim(), origen: '/',
      });
      track('lead_enviado', { origen: '/', tipo: values.tipo });
      setValues(initialValues);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const input = (key: keyof FormValues, type = 'text') => (
    <div className="form-field" key={key}>
      <label htmlFor={key}>{fieldLabels[key]}</label>
      <input
        id={key} name={key} type={type} value={values[key]}
        onChange={event => update(key, event.target.value)}
        aria-invalid={Boolean(errors[key])}
        aria-describedby={errors[key] ? `${key}-error` : undefined}
        autoComplete={key === 'nombre' ? 'given-name' : key === 'apellido' ? 'family-name' : key === 'telefono' ? 'tel' : key === 'email' ? 'email' : undefined}
        placeholder={key === 'telefono' ? 'Tu número de contacto' : key === 'email' ? 'tu@email.com' : fieldLabels[key]}
      />
      {errors[key] && <span className="field-error" id={`${key}-error`}>{errors[key]}</span>}
    </div>
  );

  return (
    <section className="contact section-space" id="contacto">
      <div className="shell contact-grid">
        <div className="contact-intro">
          <p className="section-label">Contacto</p>
          <h2>Contanos <em>tu caso.</em></h2>
          <p>Completá el formulario y nos pondremos en contacto para conocer tu situación.</p>
          <div className="contact-aside">
            <span className="aside-line" />
            <p>El primer paso es poder conversar sobre lo que te pasó.</p>
          </div>
          <div className="whatsapp-option">
            <span>¿Preferís escribirnos directamente?</span>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon size={18} /> Consultar por WhatsApp <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        <div className="form-panel">
          {status === 'success' ? (
            <div className="form-success" role="status">
              <span className="success-icon"><Check size={26} strokeWidth={1.5} /></span>
              <h3>Gracias por contactarnos.</h3>
              <p>Recibimos tu consulta y nos pondremos en contacto con vos a la brevedad.</p>
              <button type="button" className="text-link" onClick={() => setStatus('idle')}>Enviar otra consulta <ArrowUpRight size={16} /></button>
            </div>
          ) : (
            <form noValidate onSubmit={submit}>
              <p className="form-title">Contanos tu caso</p>
              <div className="form-fields">
                <div className="form-pair">{input('nombre')}{input('apellido')}</div>
                <div className="form-pair">{input('telefono', 'tel')}{input('email', 'email')}</div>
                <div className="form-field">
                  <label htmlFor="tipo">Tipo de consulta</label>
                  <select id="tipo" name="tipo" value={values.tipo} onChange={event => update('tipo', event.target.value)} aria-invalid={Boolean(errors.tipo)} aria-describedby={errors.tipo ? 'tipo-error' : undefined}>
                    <option value="" disabled>Seleccioná una opción</option>
                    <option value="Accidente de tránsito">Accidente de tránsito</option>
                    <option value="Accidente laboral">Accidente laboral</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.tipo && <span className="field-error" id="tipo-error">{errors.tipo}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor="descripcion">Breve descripción de la consulta</label>
                  <textarea id="descripcion" name="descripcion" rows={6} value={values.descripcion} onChange={event => update('descripcion', event.target.value)} aria-invalid={Boolean(errors.descripcion)} aria-describedby={errors.descripcion ? 'descripcion-error' : undefined} placeholder="Contanos brevemente qué ocurrió y cuándo sucedió." />
                  {errors.descripcion && <span className="field-error" id="descripcion-error">{errors.descripcion}</span>}
                </div>
              </div>
              {status === 'error' && <p className="submit-error" role="alert">No pudimos enviar tu consulta. Por favor, intentá nuevamente.</p>}
              <div className="form-bottom">
                <span>Tu información será tratada con confidencialidad.</span>
                <button className="button button-dark" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Enviando…' : 'Enviar consulta'} <ArrowUpRight size={17} strokeWidth={1.5} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
