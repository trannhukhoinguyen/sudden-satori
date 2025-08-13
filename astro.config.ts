// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import AutoImport from "astro-auto-import";
import path from 'path';
import fs from 'fs';
import starlight from '@astrojs/starlight';
import type { StarlightUserConfig } from '@astrojs/starlight/types';
import tailwindcss from '@tailwindcss/vite';

// Hàm lấy danh sách file từ thư mục
function getSidebarItems(dir: string, basePath: string) {
  const fullDir = path.resolve(`./src/content/${dir}`);
  if (!fs.existsSync(fullDir)) return [];

  return fs
      .readdirSync(fullDir)
      .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
      .map((file) => {
        const name = file.replace(/\.(md|mdx)$/, '');
        return {
          label: name.replace(/-/g, ' '), // đổi tên file thành tiêu đề
          link: `/docs/${basePath}/${name}`,
        };
      });
}

// Sidebar auto generate
const starlightConfig: StarlightUserConfig = {
  title: 'Tham Thiền Phá Tam Quan',
  customCss: [
    // Path to your Tailwind base styles:
    './src/styles/docs.css',
  ],
  components: {
    Layout: './src/components/starlight/DocsLayout.astro'
  },
  plugins: [],
  sidebar: [
    {
      label: 'Giới thiệu',
      autogenerate: { directory: 'docs' }
    },
  ],
};

// https://astro.build/config
export default defineConfig({
  // The site property should be your final deployed URL
  site: process.env.SITE || 'https://sudden-satori.vercel.app',

  // Only use base path for GitHub Pages deployments
  // For Netlify/Vercel, leave this undefined (no base path)
  base: process.env.BASE_PATH || undefined,

  integrations: [
    // starlight(starlightConfig),
    react(),
    AutoImport({
      imports: [

      ]
    }),

    sitemap(),

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
    plugins: [tailwindcss()],
  },
});
