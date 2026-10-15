import { ArrowUpRight, Check, Phone } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import { PHONE, PHONE_URL, whatsappUrl } from '@/constants/brand';
import { CTA } from '@/constants/cta';
import type { ConsultaTipo } from '@/content/types';
import { WhatsAppIcon } from '@/components/whatsapp-icon';
import { submitLead } from '@/lib/leads';
import { track } from '@/lib/track';

type FormValues = { nombre: string; apellido: string; telefono: string; email: string; tipo: string; descripcion: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

const fieldLabels: Record<keyof FormValues, string> = {
  nombre: 'Nombre',
  apellido: 'Apellido',
  telefono: 'Número de teléfono',
  email: 'Email',
  tipo: 'Tipo de consulta',
  descripcion: 'Breve descripción de la consulta',
};

const autoComplete: Partial<Record<keyof FormValues, string>> = {
  nombre: 'given-name',
  apellido: 'family-name',
  telefono: 'tel',
  email: 'email',
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

type Props = { tipo: ConsultaTipo; origen: string; whatsappMessage: string };

/**
 * Formulario "te contactamos" de los artículos. Mismo diseño y campos que el de
 * la home; además registra desde qué página llegó la consulta (campo `origen`).
 */
export function LeadForm({ tipo, origen, whatsappMessage }: Props) {
  const initialValues: FormValues = { nombre: '', apellido: '', telefono: '', email: '', tipo, descripcion: '' };
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
        nombre: values.nombre.trim(),
        apellido: values.apellido.trim(),
        telefono: values.telefono.trim(),
        email: values.email.trim(),
        tipo: values.tipo,
        descripcion: values.descripcion.trim(),
        origen,
      });
      track('lead_enviado', { origen, tipo: values.tipo });
      setValues(initialValues);
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const id = (key: keyof FormValues) => `lead-${key}`;

  const input = (key: keyof FormValues, type = 'text') => (
    <div className="form-field" key={key}>
      <label htmlFor={id(key)}>{fieldLabels[key]}</label>
      <input
        id={id(key)}
        name={key}
        type={type}
        value={values[key]}
        onChange={event => update(key, event.target.value)}
        aria-invalid={Boolean(errors[key])}
        aria-describedby={errors[key] ? `${id(key)}-error` : undefined}
        autoComplete={autoComplete[key]}
        placeholder={key === 'telefono' ? 'Tu número de contacto' : key === 'email' ? 'tu@email.com' : fieldLabels[key]}
      />
      {errors[key] && <span className="field-error" id={`${id(key)}-error`}>{errors[key]}</span>}
    </div>
  );

  return (
    <section className="contact section-space" id="consulta">
      <div className="shell contact-grid">
        <div className="contact-intro">
          <p className="section-label">{CTA.form.label}</p>
          <h2>{CTA.form.title} <em>{CTA.form.titleEm}</em></h2>
          <p>{CTA.form.intro}</p>
          <div className="contact-aside">
            <span className="aside-line" />
            <p>{CTA.form.aside}</p>
          </div>
          <div className="whatsapp-option">
            <span>{CTA.form.whatsappIntro}</span>
            <a href={whatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" onClick={() => track('click_whatsapp', { origen })}>
              <WhatsAppIcon size={18} /> {CTA.final.whatsappLabel} <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
            {PHONE_URL && (
              <a className="doc-phone-link" href={PHONE_URL} onClick={() => track('click_llamar', { origen })}>
                <Phone size={17} strokeWidth={1.5} /> {PHONE} <ArrowUpRight size={16} strokeWidth={1.5} />
              </a>
            )}
          </div>
        </div>

        <div className="form-panel">
          {status === 'success' ? (
            <div className="form-success" role="status">
              <span className="success-icon"><Check size={26} strokeWidth={1.5} /></span>
              <h3>{CTA.form.successTitle}</h3>
              <p>{CTA.form.successText}</p>
              <button type="button" className="text-link" onClick={() => setStatus('idle')}>Enviar otra consulta <ArrowUpRight size={16} /></button>
            </div>
          ) : (
            <form noValidate onSubmit={submit}>
              <p className="form-title">Contanos tu caso</p>
              <div className="form-fields">
                <div className="form-pair">{input('nombre')}{input('apellido')}</div>
                <div className="form-pair">{input('telefono', 'tel')}{input('email', 'email')}</div>
                <div className="form-field">
                  <label htmlFor={id('tipo')}>Tipo de consulta</label>
                  <select id={id('tipo')} name="tipo" value={values.tipo} onChange={event => update('tipo', event.target.value)} aria-invalid={Boolean(errors.tipo)} aria-describedby={errors.tipo ? `${id('tipo')}-error` : undefined}>
                    <option value="" disabled>Seleccioná una opción</option>
                    <option value="Accidente de tránsito">Accidente de tránsito</option>
                    <option value="Accidente laboral">Accidente laboral</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {errors.tipo && <span className="field-error" id={`${id('tipo')}-error`}>{errors.tipo}</span>}
                </div>
                <div className="form-field">
                  <label htmlFor={id('descripcion')}>Breve descripción de la consulta</label>
                  <textarea id={id('descripcion')} name="descripcion" rows={6} value={values.descripcion} onChange={event => update('descripcion', event.target.value)} aria-invalid={Boolean(errors.descripcion)} aria-describedby={errors.descripcion ? `${id('descripcion')}-error` : undefined} placeholder="Contanos brevemente qué ocurrió y cuándo sucedió." />
                  {errors.descripcion && <span className="field-error" id={`${id('descripcion')}-error`}>{errors.descripcion}</span>}
                </div>
              </div>
              {status === 'error' && <p className="submit-error" role="alert">No pudimos enviar tu consulta. Por favor, intentá nuevamente o escribinos por WhatsApp.</p>}
              <div className="form-bottom">
                <span>{CTA.form.privacy}</span>
                <button className="button button-dark" type="submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Enviando…' : CTA.form.submit} <ArrowUpRight size={17} strokeWidth={1.5} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
