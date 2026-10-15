import { data } from 'react-router';
import type { Route } from './+types/seo-calculadora';
import { ArticlePage } from '@/components/articulo/article-page';
import { Calculadora } from '@/components/articulo/calculadora';
import { getPageData } from '@/content/index.server';
import { pageMeta } from '@/lib/page-meta';

export function loader() {
  const pageData = getPageData('/accidentes-laborales/calculadora-indemnizacion-art');
  if (!pageData) throw data(null, { status: 404 });
  return pageData;
}

export function meta({ loaderData, matches, location }: Route.MetaArgs) {
  return pageMeta({ matches, location }, loaderData);
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return (
    <ArticlePage data={loaderData}>
      <Calculadora />
    </ArticlePage>
  );
}
