import { CTA } from '@/constants/cta';
import { ContactButtons } from './contact-buttons';

export function MidCta({ whatsappMessage, origen }: { whatsappMessage: string; origen: string }) {
  return (
    <aside className="doc-cta" aria-label="Consultá tu caso">
      <div className="doc-cta-copy">
        <p className="doc-cta-title">{CTA.mid.title}</p>
        <p>{CTA.mid.text}</p>
      </div>
      <div className="doc-cta-actions">
        <ContactButtons
          whatsappMessage={whatsappMessage}
          origen={origen}
          whatsappLabel={CTA.mid.whatsappLabel}
          formLabel={CTA.mid.formLabel}
          callLabel={CTA.mid.callLabel}
        />
      </div>
    </aside>
  );
}
