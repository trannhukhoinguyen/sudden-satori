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
  blogs: "blog",
  books: "book",
  interpretations: "interpretation",
  koans: "koan",
  poems: "poem",
  practices: "practice",
  sutras: "sutra",
  zongjinglus: "zongjinglu",
  remedies: "remedy",
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

function getRecentPosts(posts: any[], limit = 5) {
  return [...posts]
      .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
      .slice(0, limit);
}

// ===== 5. Hàm chung getSorted... =====
function getSortedPostsByType(type?: string) {
  const filtered = type ? allPosts.filter(p => p.frontmatter.type === type) : allPosts;
  return filtered.sort(
      (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

function getSortedTermsByType(
    posts: Post[],
    termField: "categories" | "tags"
) {
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

// ===== 6. Build CONTENT_MAP động =====
const CONTENT_MAP: Record<
    string,
    {
      posts: Post[];
      categories: [string, Post[]][];
      tags: [string, Post[]][];
      flatCategories: string[];
      flatTags: string[];
      recentPosts: any[];
    }
> = Object.fromEntries(
    Object.entries(collections).map(([name, type]) => {
      const posts = getSortedPostsByType(type);
      return [
        name,
        {
          posts,
          categories: getSortedTermsByType(posts, "categories"),
          tags: getSortedTermsByType(posts, "tags"),
          flatCategories: [...new Set(posts.flatMap(p => p.frontmatter.categories || []))],
          flatTags: [...new Set(posts.flatMap(p => p.frontmatter.tags || []))],
          recentPosts: getRecentPosts(posts), // ✅ thêm recentPosts theo collection
        },
      ];
    })
);

// ===== 7. Helper chung =====
function getCategoryData(category: string) {
  const data = CONTENT_MAP[category];
  if (!data) throw new Error(`Category "${category}" not found in CONTENT_MAP`);
  return data;
}

// ===== 8. Export tiện ích =====
export {
  allPosts,
  allPostsLazy,
  getRecentPosts,
  getSortedPostsByType,
  getCategoryData,
  CONTENT_MAP
};
