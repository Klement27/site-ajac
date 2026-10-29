// @ts-check
import { defineConfig } from 'astro/config';
import site from './src/data/site.json' with { type: 'json' };

// Adresse publique du site : celle de site.json en priorité, sinon celle que
// Vercel fournit automatiquement au build (ex. ajac.vercel.app).
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = site.siteConfig.url || (vercelUrl ? `https://${vercelUrl}` : undefined);

// https://docs.astro.build/fr/reference/configuration-reference/
export default defineConfig({
  site: siteUrl,
  output: 'static',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'auto' },
});
