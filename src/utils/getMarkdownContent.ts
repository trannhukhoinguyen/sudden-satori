const allCategories = new Set<string>();
const allTags = new Set<string>();
const categoryMap: Record<string, any[]> = {};
const tagMap: Record<string, any[]> = {};

// Blog posts
const blog = await import.meta.glob('../content/blogs/*.md', { eager: true });
const blogX = await import.meta.glob('../content/blogs/*.mdx', { eager: true });
const blogLz = await import.meta.glob('../content/blogs/*.md');
const blogXLz = await import.meta.glob('../content/blogs/*.mdx');

// Book posts
const book = await import.meta.glob('../content/books/*.md', { eager: true });
const bookX = await import.meta.glob('../content/books/*.mdx', { eager: true });
const bookLz = await import.meta.glob('../content/books/*.md');
const bookXLz = await import.meta.glob('../content/books/*.mdx');

// Interpretation posts
const interpretation = await import.meta.glob('../content/interpretations/*.md', { eager: true });
const interpretationX = await import.meta.glob('../content/interpretations/*.mdx', { eager: true });
const interpretationLz = await import.meta.glob('../content/interpretations/*.md');
const interpretationXLz = await import.meta.glob('../content/interpretations/*.mdx');

// Koan posts
const koan = await import.meta.glob('../content/koans/*.md', { eager: true });
const koanX = await import.meta.glob('../content/koans/*.mdx', { eager: true });
const koanLz = await import.meta.glob('../content/koans/*.md');
const koanXLz = await import.meta.glob('../content/koans/*.mdx');

// Poem posts
const poem = await import.meta.glob('../content/poems/*.md', { eager: true });
const poemX = await import.meta.glob('../content/poems/*.mdx', { eager: true });
const poemLz = await import.meta.glob('../content/poems/*.md');
const poemXLz = await import.meta.glob('../content/poems/*.mdx');

// Sutra posts
const sutra = await import.meta.glob('../content/sutras/*.md', { eager: true });
const sutraX = await import.meta.glob('../content/sutras/*.mdx', { eager: true });
const sutraLz = await import.meta.glob('../content/sutras/*.md');
const sutraXLz = await import.meta.glob('../content/sutras/*.mdx');

// Zongjinglu posts
const zongjinglu = await import.meta.glob('../content/zongjinglus/*.md', { eager: true });
const zongjingluX = await import.meta.glob('../content/zongjinglus/*.mdx', { eager: true });
const zongjingluLz = await import.meta.glob('../content/zongjinglus/*.md');
const zongjingluXLz = await import.meta.glob('../content/zongjinglus/*.mdx');

// ALL POSTS
const allPosts = [
  ...Object.values(blog),
  ...Object.values(blogX),
  ...Object.values(book),
  ...Object.values(bookX),
  ...Object.values(interpretation),
  ...Object.values(interpretationX),
  ...Object.values(koan),
  ...Object.values(koanX),
  ...Object.values(poem),
  ...Object.values(poemX),
  ...Object.values(sutra),
  ...Object.values(sutraX),
  ...Object.values(zongjinglu),
  ...Object.values(zongjingluX),
] as any[];

const allPostsForSearchJson = [
  blog,
  blogX,
  book,
  bookX,
  interpretation,
  interpretationX,
  koan,
  koanX,
  poem,
  poemX,
  sutra,
  sutraX,
  zongjinglu,
  zongjingluX,
] as any[];

// Get all categories, tags
allPosts.forEach((post: any) => {
  if (post.frontmatter.categories) {
    post.frontmatter.categories.forEach((category: string) => {
      allCategories.add(category);
    });
  }
  if (post.frontmatter.tags) {
    post.frontmatter.tags.forEach((tag: string) => {
      allTags.add(tag);
    });
  }
});

// Create category map with post counts
Array.from(allCategories).forEach((category: string) => {
  categoryMap[category] = allPosts.filter((post: any) =>
      post.frontmatter.categories && post.frontmatter.categories.includes(category)
  );
});

// Sort categories by post count (descending) then alphabetically
const sortedCategories = Object.entries(categoryMap)
    .sort((a: any, b: any) => {
      if (b[1].length !== a[1].length) {
        return b[1].length - a[1].length;
      }
      return a[0].localeCompare(b[0]);
    });

// Create tag map with post counts
Array.from(allTags).forEach((tag: string) => {
  tagMap[tag] = allPosts.filter((post: any) =>
      post.frontmatter.tags && post.frontmatter.tags.includes(tag)
  );
});

// Sort tags by post count (descending) then alphabetically
const sortedTags = Object.entries(tagMap)
    .sort((a: any, b: any) => {
      if (b[1].length !== a[1].length) {
        return b[1].length - a[1].length;
      }
      return a[0].localeCompare(b[0]);
    });

export {
  allPosts,
allPostsForSearchJson,
  allCategories,
  allTags,
  sortedCategories,
  sortedTags,
};
