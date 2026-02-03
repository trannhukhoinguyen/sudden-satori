// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import AutoImport from "astro-auto-import";
import vercel from "@astrojs/vercel";   // 🔥 Thêm adapter
import starcard from "./src/utils/qr/starcard.js";

// https://astro.build/config
export default defineConfig({
  // The site property should be your final deployed URL
  site: process.env.SITE || 'https://tosuthien.org',

  // Only use base path for GitHub Pages deployments
  // For Netlify/Vercel, leave this undefined (no base path)
  base: undefined,

  output: "static",             // 🔥 Quan trọng cho static deploy
  adapter: vercel({}),            // 🔥 Bắt buộc cho Vercel

  integrations: [
    AutoImport({
      imports: [{}],
    }),

    // Sitemap cho pages
    sitemap({
      filter: (page) => !page.includes("/drafts/"), // bỏ qua thư mục nháp (nếu có)
      serialize(item) {
        return {
          ...item,
          lastmod: new Date().toISOString(), // thêm ngày build
          changefreq: "daily",              // tần suất crawl
          priority: item.url === "/" ? 1.0 : 0.8, // trang chủ ưu tiên cao hơn
        };
      },
    }),

    // Always integrate mdx() in the last position
    mdx(),

    starcard({
      meta: {
        title: "Offering",
        description: "Short bio or tagline",
        keywords: ["astro-template", "profile", "vcard", "portfolio"],
        favicon: "/favicon.svg",
      },
      profile: {
        displayName: "Your Name",
        firstName: "Your",
        middleName: "",
        lastName: "Name",
        title: "Full‑stack Developer",
        company: "Your Company",
        companyUrl: "https://company.example",
        avatarUrl: "https://github.com/your-avatar.png",
        avatarRounded: "full",
        email: "you@example.com",
        homePage: "https://example.com",
        location: "City, Country",
        vcard: true,
        sections: [
          {
            order: 1,
            id: "socials",
            title: "Socials",
            icon: "chatbot",
            items: [
              {
                id: "github",
                icon: "github",
                url: "https://github.com/you",
              },
            ],
          },
          {
            order: 1,
            id: "presence",
            title: "Presence",
            icon: "chromewebstore",
            items: [
              {
                id: "youtube",
                icon: "youtube",
                url: "https://www.youtube.com/@your-channel",
              },
            ],
          },
          {
            order: 3,
            id: "support",
            title: "Support",
            icon: "buymeacoffee",
            items: [
              {
                id: "buymeacoffee",
                icon: "buymeacoffee",
                url: "https://buymeacoffee.com/you",
              },
            ],
          },
        ],
      },
    }),
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
