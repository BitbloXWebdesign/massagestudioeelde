import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.massagestudioeelde.nl',
  integrations: [sitemap()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
