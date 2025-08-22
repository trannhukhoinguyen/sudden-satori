// utils/getMarkdownContent.ts

// ===== 1. Glob cố định cho từng collection =====
const globMap = {
  blogs: import.meta.glob('../content/blogs/*.{md,mdx}', { eager: true }),
  books: import.meta.glob('../content/books/*.{md,mdx}', { eager: true }),
  interpretations: import.meta.glob('../content/interpretations/*.{md,mdx}', { eager: true }),
  koans: import.meta.glob('../content/koans/*.{md,mdx}', { eager: true }),
  poems: import.meta.glob('../content/poems/*.{md,mdx}', { eager: true }),
  practices: import.meta.glob('../content/practices/*.{md,mdx}', { eager: true }),
  sutras: import.meta.glob('../content/sutras/*.{md,mdx}', { eager: true }),
  zongjinglus: import.meta.glob('../content/zongjinglus/*.{md,mdx}', { eager: true }),
  remedies: import.meta.glob('../content/remedies/*.{md,mdx}', { eager: true }),
};
const globMapLazy = {
  blogs: import.meta.glob('../content/blogs/*.{md,mdx}'),
  books: import.meta.glob('../content/books/*.{md,mdx}'),
  interpretations: import.meta.glob('../content/interpretations/*.{md,mdx}'),
  koans: import.meta.glob('../content/koans/*.{md,mdx}'),
  poems: import.meta.glob('../content/poems/*.{md,mdx}'),
  practices: import.meta.glob('../content/practices/*.{md,mdx}'),
  sutras: import.meta.glob('../content/sutras/*.{md,mdx}'),
  zongjinglus: import.meta.glob('../content/zongjinglus/*.{md,mdx}'),
  remedies: import.meta.glob('../content/remedies/*.{md,mdx}'),
};

// ===== 2. Mapping name → type =====
const collections = {
  blogs: "blogs",
  books: "books",
  interpretations: "interpretations",
  koans: "koans",
  poems: "poems",
  practices: "practices",
  sutras: "sutras",
  zongjinglus: "zongjinglus",
  remedies: "remedies",
} as const;

type CollectionName = keyof typeof collections;
type Post = any;

// ===== 3. Hàm gán type mặc định =====
function addDefaultType(posts: Post[], defaultType: string) {
  return posts.map(post => ({
    ...post,
    frontmatter: {
      ...post.frontmatter,
      type: post.frontmatter?.type || defaultType,
    },
  }));
}

// ===== 4. Gom tất cả posts =====
const allPosts: Post[] = Object.entries(collections).flatMap(([name, type]) =>
    addDefaultType(Object.values(globMap[name as CollectionName]), type)
);
const allPostsLazy: Post[] = Object.entries(collections).flatMap(([name, type]) =>
    addDefaultType(Object.values(globMapLazy[name as CollectionName]), type)
);

// ===== 5. Helpers =====
function getRecentPosts(posts: any[], limit = 5) {
  return [...posts]
      .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
      .slice(0, limit);
}

function getSortedPostsByType(type?: string) {
  const filtered = type ? allPosts.filter(p => p.frontmatter.type === type) : allPosts;
  return filtered.sort(
      (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

function getSortedTerms(posts: Post[], termField: "categories" | "tags") {
  const termMap: Record<string, Post[]> = {};
  posts.forEach(p => {
    const terms: string[] = p.frontmatter[termField] || [];
    terms.forEach(term => {
      if (!termMap[term]) termMap[term] = [];
      termMap[term].push(p);
    });
  });

  return Object.entries(termMap).sort((a, b) => {
    if (b[1].length !== a[1].length) return b[1].length - a[1].length;
    return a[0].localeCompare(b[0]);
  });
}

// ===== 6. CONTENT_MAP (posts + recentPosts) =====
const CONTENT_MAP: Record<
    string,
    { posts: Post[]; recentPosts: Post[] }
> = Object.fromEntries(
    Object.entries(collections).map(([name, type]) => {
      const posts = getSortedPostsByType(type);
      return [name, { posts, recentPosts: getRecentPosts(posts) }];
    })
);

// ===== 7. CATEGORY_MAP =====
const CATEGORY_MAP: Record<
    string,
    { posts: Post[]; flatCategories: string[] }
> = {};

allPosts.forEach((post) => {
  const categories: string[] = post.frontmatter.categories || [];
  categories.forEach((category) => {
    if (!CATEGORY_MAP[category]) {
      CATEGORY_MAP[category] = { posts: [], flatCategories: [] };
    }
    CATEGORY_MAP[category].posts.push(post);
  });
});

// Sau khi gom xong → bổ sung flatCategories
Object.keys(CATEGORY_MAP).forEach((cat) => {
  CATEGORY_MAP[cat].flatCategories = [...new Set(
      CATEGORY_MAP[cat].posts.flatMap((p) => p.frontmatter.categories || [])
  )];
});

// ===== 8. TAG_MAP =====
const TAG_MAP: Record<
    string,
    { posts: Post[]; flatTags: string[] }
> = {};

allPosts.forEach((post) => {
  const tags: string[] = post.frontmatter.tags || [];
  tags.forEach((tag) => {
    if (!TAG_MAP[tag]) {
      TAG_MAP[tag] = { posts: [], flatTags: [] };
    }
    TAG_MAP[tag].posts.push(post);
  });
});

// Bổ sung flatTags
Object.keys(TAG_MAP).forEach((tag) => {
  TAG_MAP[tag].flatTags = [...new Set(
      TAG_MAP[tag].posts.flatMap((p) => p.frontmatter.tags || [])
  )];
});

// ===== 9. Export =====
export {
  allPosts,
  allPostsLazy,
  getRecentPosts,
  getSortedPostsByType,
  getSortedTerms,
  CONTENT_MAP,
  CATEGORY_MAP,
  TAG_MAP,
  globMapLazy,
  collections,
};
