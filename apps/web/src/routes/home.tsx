import type { Route } from './+types/home';
import { seo, siteOriginFrom } from '@/lib/seo';
import { FIRM_NAME, LOGO_URL } from '@/constants/brand';
import { legalServiceSchema, websiteSchema } from '@/lib/schema';
import { Hero } from '@/components/home/hero';
import { Specialties } from '@/components/home/specialties';
import { Traffic } from '@/components/home/traffic';
import { Workplace } from '@/components/home/workplace';
import { Approach } from '@/components/home/approach';
import { Process } from '@/components/home/process';
import { Contact } from '@/components/home/contact';
import { FinalCta } from '@/components/home/final-cta';
import { ScrollReveal } from '@/components/home/scroll-reveal';

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  return seo({ matches, location }, {
    title: `Abogados de accidentes de tránsito y laborales | ${FIRM_NAME}`,
    description: 'Abogados de accidentes de tránsito en CABA y GBA y de accidentes laborales y reclamos a la ART en todo el país. Conocé tus derechos y consultá tu caso.',
    image: LOGO_URL,
    jsonLd: [legalServiceSchema(origin), websiteSchema(origin)],
  });
}

export default function HomePage() {
  return <main><ScrollReveal /><Hero /><Specialties /><Traffic /><Workplace /><Approach /><Process /><Contact /><FinalCta /></main>;
}
