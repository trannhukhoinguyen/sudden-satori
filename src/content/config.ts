import {defineCollection, z} from 'astro:content';
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
    author: z.string().default('Zen master'),
    image: z.string().optional(),
    audioUrl: z.string().url().optional(),
    audioUrls: z.array(z.string().url()).optional(),
    videoUrl: z.string().url().optional(),
    videoUrls: z.array(z.string().url()).optional(),
  }),
});

const zongjinglu  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/zongjinglu" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Zen master'),
    image: z.string().optional(),
    audioUrl: z.string().url().optional(),
    audioUrls: z.array(z.string().url()).optional(),
    videoUrl: z.string().url().optional(),
    videoUrls: z.array(z.string().url()).optional(),
  }),
});

const koans  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/koans" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Zen master'),
    image: z.string().optional(),
    audioUrl: z.string().url().optional(),
    audioUrls: z.array(z.string().url()).optional(),
    videoUrl: z.string().url().optional(),
    videoUrls: z.array(z.string().url()).optional(),
  }),
});

export const collections = { blog, zongjinglu, koans };
