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
  plugins: [],
  sidebar: [
    {
      label: 'Giới thiệu',
      items: [{ label: 'Trang chính', link: '/docs/' }],
    },
    {
      label: '📺 Video',
      items: getSidebarItems('video', 'video'),
    },
    {
      label: '🎧 Audio',
      items: getSidebarItems('audio', 'audio'),
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
    starlight(starlightConfig),
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
});
