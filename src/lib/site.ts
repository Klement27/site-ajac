import { existsSync } from 'node:fs';
import { join } from 'node:path';
import data from '../data/site.json';
import nav from '../data/navigation.json';

export const { siteConfig, seo, ui, footer, mentionsLegales } = data;
export const navigation = nav;

export const facebookUrl =
  siteConfig.social.find((s) => s.icon === 'facebook')?.url ?? '#';

/** Les liens notés "facebook" dans les données pointent vers la page Facebook. */
export function resolveHref(href: string): string {
  return href === 'facebook' ? facebookUrl : href;
}

export const telHref = `tel:${siteConfig.contact.phoneHref}`;
export const mailHref = `mailto:${siteConfig.contact.email}`;

/** Vérifie au build qu'une image de public/ existe, pour afficher un repli sinon. */
export function imageExists(publicPath: string): boolean {
  return existsSync(join(process.cwd(), 'public', publicPath));
}

/**
 * Indexation par les moteurs de recherche : seulement si "indexable" vaut true dans
 * site.json ET qu'on n'est pas sur une préversion Vercel (branches de test).
 */
export const isIndexable =
  siteConfig.indexable && (process.env.VERCEL_ENV ?? 'production') === 'production';

/** Pages listées dans le sitemap (les pages provisoires y sont incluses). */
export const sitemapPaths = ['/', '/qui-sommes-nous/', '/activites/', '/suivez-nous/', '/contact/', '/mentions-legales/'];

/** Adresse de la fiche d'une activité (pages créées quand "galerie" vaut true). */
export const activitePath = (slug: string) => `/activites/${slug}/`;

export type Photo = { src: string; alt: string; video?: boolean };
