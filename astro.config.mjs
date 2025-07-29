// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // The site property should be your final deployed URL
  site: process.env.SITE || 'https://sudden-satori.vercel.app',
  // Only use base path for GitHub Pages deployments
  // For Netlify/Vercel, leave this undefined (no base path)
  base: process.env.BASE_PATH || undefined,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
