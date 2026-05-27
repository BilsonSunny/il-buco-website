import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://BilsonSunny.github.io',
  base: import.meta.env.PROD ? '/il-buco-website' : '/',
});