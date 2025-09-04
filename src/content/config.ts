import {defineCollection, z} from 'astro:content';
import { glob } from 'astro/loaders';

const blogs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blogs" }),
  schema: z.object({
    type: z.string().default('blogs'),
    schemaType: z.string().default('Article'),
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
    schemaType: z.string().default('Article'),
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
    schemaType: z.string().default('Books'),
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
    schemaType: z.string().default('Article'),
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Zen master'),
  }),
});

/*NHÓM CÔNG ÁN*/
const koans  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/koans" }),
  schema: z.object({
    type: z.string().default('koans'),
    schemaType: z.string().default('Article'),
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

const BlueCliffRecord  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/koans/BlueCliffRecord" }),
  schema: z.object({
    type: z.string().default('koans'),
    schemaType: z.string().default('Article'),
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

const GatelessGate  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/koans/GatelessGate" }),
  schema: z.object({
    type: z.string().default('koans'),
    schemaType: z.string().default('Article'),
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

const EmptyValleyCollection  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/koans/EmptyValleyCollection" }),
  schema: z.object({
    type: z.string().default('koans'),
    schemaType: z.string().default('Article'),
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

/*NHÓM KINH*/
const sutras  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/sutras" }),
  schema: z.object({
    type: z.string().default('sutras'),
    schemaType: z.string().default('Article'),
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Phật'),
    image: z.string().optional(),
    audioUrl: z.string().url().optional(),
    audioUrls: z.array(z.string().url()).optional(),
    videoUrl: z.string().url().optional(),
    videoStart: z.string().optional(),
    videoUrls: z.array(z.string().url()).optional(),
  }),
});

const Lankavatara  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/sutras/Lankavatara" }),
  schema: z.object({
    type: z.string().default('sutras'),
    schemaType: z.string().default('Article'),
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Phật'),
    image: z.string().optional(),
    audioUrl: z.string().url().optional(),
    audioUrls: z.array(z.string().url()).optional(),
    videoUrl: z.string().url().optional(),
    videoStart: z.string().optional(),
    videoUrls: z.array(z.string().url()).optional(),
  }),
});

const Surangama  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/sutras/Surangama" }),
  schema: z.object({
    type: z.string().default('sutras'),
    schemaType: z.string().default('Article'),
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Phật'),
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
    schemaType: z.string().default('Article'),
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
    schemaType: z.string().default('Article'),
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
    schemaType: z.string().default('Article'),
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Zen master'),
  }),
});

const faqs  = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/faqs" }),
  schema: z.object({
    type: z.string().default('faqs'),
    schemaType: z.string().default('FAQPage'),
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blogs, places, books, zongjinglus,
  koans, BlueCliffRecord, GatelessGate, EmptyValleyCollection,
  sutras, Lankavatara, Surangama,
  interpretations, practices, speeches, faqs,
};
