import {defineCollection, reference, z} from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Anonymous'),
    image: z.string().optional(),
    audioUrl: z.string().url().optional(),
    audioUrls: z.array(z.string().url()).optional(),
    videoUrl: z.string().url().optional(),
  }),
});

const masters = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/contents/masters" }),
  schema: z.object({
    name: z.string(),
    name_en: z.string() || null,
    name_vi: z.string() || null,
    name_zh: z.string() || null,
    name_jp: z.string() || null,
    life_time: z.array(z.string()) || null,
    dynasty: z.string() || null,
    sect: z.string() || null, // e.g. Linji (Rinzai), Caodong (Soto), Yunmen (Unmon), Fayan (Hogen), Guiyang (Igyō (潙仰宗)),
    color: z.string() || null,
    disciples: z.array(z.string()) || null,
    image: z.object({
      src: z.string() || null,
      alt: z.string() || null,
    }),
  }),
});

const teachings = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/contents/teachings" }),
  schema: z.object({
    name: z.string(),
    name_en: z.string() || null,
    name_vi: z.string() || null,
    name_zh: z.string() || null,
    name_jp: z.string() || null,
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.date(), // e.g. 2024-09-17
    chapters: z.array(z.string()),
    master: reference('masters'),
  }),
});
export const collections = { blog, masters, teachings };
