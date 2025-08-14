const allCategories = new Set<string>();
const allTags = new Set<string>();
const categoryMap: Record<string, any[]> = {};
const tagMap: Record<string, any[]> = {};

// Blog posts
const postsBlogGlobMd = await import.meta.glob('../content/blogs/*.md', { eager: true });
const postsBlogGlobMdx = await import.meta.glob('../content/blogs/*.mdx', { eager: true });

// Book posts
const postsBookGlobMd = await import.meta.glob('../content/books/*.md', { eager: true });
const postsBookGlobMdx = await import.meta.glob('../content/books/*.mdx', { eager: true });

// Interpretation posts
const postsInterpretationGlobMd = await import.meta.glob('../content/interpretations/*.md', { eager: true });
const postsInterpretationGlobMdx = await import.meta.glob('../content/interpretations/*.mdx', { eager: true });

// Koan posts
const postsKoanGlobMd = await import.meta.glob('../content/koans/*.md', { eager: true });
const postsKoanGlobMdx = await import.meta.glob('../content/koans/*.mdx', { eager: true });

// Poem posts
const postsPoemGlobMd = await import.meta.glob('../content/poems/*.md', { eager: true });
const postsPoemGlobMdx = await import.meta.glob('../content/poems/*.mdx', { eager: true });

// Sutra posts
const postsSutraGlobMd = await import.meta.glob('../content/sutras/*.md', { eager: true });
const postsSutraGlobMdx = await import.meta.glob('../content/sutras/*.mdx', { eager: true });

// Zongjinglu posts
const postsZongjingluGlobMd = await import.meta.glob('../content/zongjinglus/*.md', { eager: true });
const postsZongjingluGlobMdx = await import.meta.glob('../content/zongjinglus/*.mdx', { eager: true });

// ALL POSTS
const allPosts = [
  ...Object.values(postsBlogGlobMd),
  ...Object.values(postsBlogGlobMdx),
  ...Object.values(postsBookGlobMd),
  ...Object.values(postsBookGlobMdx),
  ...Object.values(postsInterpretationGlobMd),
  ...Object.values(postsInterpretationGlobMdx),
  ...Object.values(postsKoanGlobMd),
  ...Object.values(postsKoanGlobMdx),
  ...Object.values(postsPoemGlobMd),
  ...Object.values(postsPoemGlobMdx),
  ...Object.values(postsSutraGlobMd),
  ...Object.values(postsSutraGlobMdx),
  ...Object.values(postsZongjingluGlobMd),
  ...Object.values(postsZongjingluGlobMdx),
];

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
  allCategories,
  allTags,
  sortedCategories,
  sortedTags,
};
