import {defineCollection, z} from 'astro:content';
import { glob } from 'astro/loaders';

const blogs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blogs" }),
  schema: z.object({
    type: z.string().default('blogs'),
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Zen master'),
    image: z.string().optional(),
  }),
});

const places = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blogs" }),
  schema: z.object({
    type: z.string().default('places'),
    title: z.string(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/books" }),
  schema: z.object({
    type: z.string().default('books'),
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.array(z.string()).default(['Zen master']),
    image: z.string().optional(),
    videoUrl: z.string().url().optional(),
    videoStart: z.string().optional(),
    videoUrls: z.array(z.string().url()).optional(),
  }),
});

const zongjinglus  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/zongjinglus" }),
  schema: z.object({
    type: z.string().default('zongjinglus'),
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Zen master'),
  }),
});

const koans  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/koans" }),
  schema: z.object({
    type: z.string().default('koans'),
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    audioUrl: z.string().url().optional(),
    audioUrls: z.array(z.string().url()).optional(),
    videoUrl: z.string().url().optional(),
    videoStart: z.string().optional(),
    videoUrls: z.array(z.string().url()).optional(),
  }),
});

const sutras  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/sutras" }),
  schema: z.object({
    type: z.string().default('sutras'),
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
    videoStart: z.string().optional(),
    videoUrls: z.array(z.string().url()).optional(),
  }),
});

const interpretations  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/interpretations" }),
  schema: z.object({
    type: z.string().default('interpretations'),
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Zen master'),
    audioUrl: z.string().url().optional(),
    audioUrls: z.array(z.string().url()).optional(),
    videoUrl: z.string().url().optional(),
    videoStart: z.string().optional(),
    videoUrls: z.array(z.string().url()).optional(),
  }),
});

const practices  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/practices" }),
  schema: z.object({
    type: z.string().default('practices'),
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

const speeches  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/speeches" }),
  schema: z.object({
    type: z.string().default('speeches'),
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Zen master'),
  }),
});

export const collections = {
  blogs, places, books, zongjinglus, koans, sutras, interpretations, practices, speeches,
};
