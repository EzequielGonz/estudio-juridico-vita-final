import { CTA } from '@/constants/cta';
import { ContactButtons } from './contact-buttons';

/** Banda azul de cierre: misma estructura y clases que la de la home. */
export function ArticleFinalCta({ whatsappMessage, origen }: { whatsappMessage: string; origen: string }) {
  return (
    <section className="final-cta">
      <div className="shell final-cta-inner">
        <div>
          <p className="section-label section-label-light">{CTA.final.label}</p>
          <h2>{CTA.final.title} <em>{CTA.final.titleEm}</em></h2>
          <p>{CTA.final.text}</p>
        </div>
        <div className="final-cta-actions">
          <ContactButtons
            tone="light"
            whatsappMessage={whatsappMessage}
            origen={origen}
            whatsappLabel={CTA.final.whatsappLabel}
            formLabel={CTA.final.formLabel}
            callLabel={CTA.final.callLabel}
          />
        </div>
      </div>
    </section>
  );
}
