// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import AutoImport from "astro-auto-import";

// https://astro.build/config
export default defineConfig({
  // The site property should be your final deployed URL
  site: process.env.SITE || 'https://tosuthien.org',

  // Only use base path for GitHub Pages deployments
  // For Netlify/Vercel, leave this undefined (no base path)
  base: process.env.BASE_PATH || undefined,

  integrations: [
    AutoImport({
      imports: [
        {
          "@/components/blocks": ["Poem", "Quote", "Block"],
        },
      ],
    }),

    // Sitemap cho pages
    sitemap({
      filter: (page) => !page.includes("/drafts/"), // bỏ qua thư mục nháp (nếu có)
      serialize(item) {
        return {
          ...item,
          lastmod: new Date().toISOString(), // thêm ngày build
          changefreq: "monthly",              // tần suất crawl
          priority: item.url === "/" ? 1.0 : 0.8, // trang chủ ưu tiên cao hơn
        };
      },
    }),

    // Always integrate mdx() in the last position
    mdx(),
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  vite: {
    plugins: [],
  },
});
