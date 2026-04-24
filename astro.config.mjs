// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://techandbeyond-oesterle.github.io/geraldinelutz.ch',// 'https://geraldinelutz.ch',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
