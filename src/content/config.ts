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
  // loader: glob({ pattern: '**/*.{md, mdx}', base: "./src/content/masters" }),
  type: 'content',
  schema: z.object({
    name: z.string(),
    stage_name: z.string(),
    genre: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

const teachings = defineCollection({
  // loader: glob({ pattern: '**/*.{md, mdx}', base: "./src/content/teachings" }),
  type: 'content',
  schema: z.object({
    name: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.date(), // e.g. 2024-09-17
    tracks: z.array(z.string()),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    master: reference('masters'),
  }),
});
export const collections = { blog, masters, teachings };
