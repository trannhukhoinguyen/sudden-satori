import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const TODAY = () => new Date();

const blogs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blogs" }),
  schema: z.object({
    type: z.string().default("blogs"),
    schemaType: z.string().default("Article"),
    title: z.string().default("Bài nghiên cứu"),
    description: z.string().optional(),
    date: z.coerce.date().default(TODAY),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

const places = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blogs" }),
  schema: z.object({
    type: z.string().default("places"),
    schemaType: z.string().default("Article"),
    title: z.string().default("Địa điểm"),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/books" }),
  schema: z.object({
    type: z.string().default("books"),
    schemaType: z.string().default("Books"),
    title: z.string().default("Sách"),
    description: z.string().optional(),
    date: z.coerce.date().default(TODAY),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

/*NHÓM CÔNG ÁN*/
const koans = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/koans" }),
  schema: z.object({
    type: z.string().default("koans"),
    schemaType: z.string().default("Article"),
    title: z.string().default("Công án"),
    description: z.string().optional(),
    date: z.coerce.date().default(TODAY),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

/*NHÓM KINH*/
const sutras = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/sutras" }),
  schema: z.object({
    type: z.string().default("sutras"),
    schemaType: z.string().default("Article"),
    title: z.string().default("Kinh"),
    description: z.string().optional(),
    date: z.coerce.date().default(TODAY),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

const interpretations = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/interpretations",
  }),
  schema: z.object({
    type: z.string().default("interpretations"),
    schemaType: z.string().default("Article"),
    title: z.string().default("Luận"),
    description: z.string().optional(),
    date: z.coerce.date().default(TODAY),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional().default("/images/backgrounds/unknown-zen-master-on-moon.jpg"),
  }),
});

const practices = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/practices",
  }),
  schema: z.object({
    type: z.string().default("practices"),
    schemaType: z.string().default("Article"),
    title: z.string().default("Thực hành"),
    description: z.string().optional(),
    date: z.coerce.date().default(TODAY),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
  }),
});

const speeches = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}",
    base: "./src/content/speeches",
  }),
  schema: z.object({
    type: z.string().default("speeches"),
    schemaType: z.string().default("Article"),
    title: z.string().default("Ngữ lục"),
    description: z.string().optional(),
    date: z.coerce.date().default(TODAY),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const masters = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/masters" }),
  schema: z.object({
    type: z.string().default("masters"),
    schemaType: z.string().default("Person"),
    title: z.string().default("Thiền sư"),
    description: z.string().optional(),
    date: z.coerce.date().default(TODAY),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/faqs" }),
  schema: z.object({
    type: z.string().default("faqs"),
    schemaType: z.string().default("FAQPage"),
    title: z.string().default("Hỏi đáp"),
    description: z.string().optional(),
    date: z.coerce.date().default(TODAY),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  blogs,
  places,
  books,
  koans,
  sutras,
  interpretations,
  practices,
  masters,
  speeches,
  faqs,
};
