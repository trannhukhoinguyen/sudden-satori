// utils/loadMarkdown.ts
export function loadPosts(category: string) {
  // Lấy tất cả file .md và .mdx trong content/[category]
  const mdGlob = import.meta.glob(`../content/${category}/*.md`, { eager: true });
  const mdxGlob = import.meta.glob(`../content/${category}/*.mdx`, { eager: true });

  const allPosts = [...Object.values(mdGlob), ...Object.values(mdxGlob)] as any[];

  // Sort bài viết theo ngày (mới nhất trước)
  const sortedPosts = allPosts.sort((a, b) => {
    const da = new Date(a.frontmatter.date).getTime();
    const db = new Date(b.frontmatter.date).getTime();
    return db - da;
  });

  // Gom tag
  const tagsMap: Map<string, any[]> = new Map();
  sortedPosts.forEach((post: any) => {
    if (post.frontmatter?.tags) {
      post.frontmatter?.tags.forEach((tag: string) => {
        if (!tagsMap.has(tag)) tagsMap.set(tag, []);
        tagsMap.get(tag)!.push(post);
      });
    }
  });

  const sortedTags = Array.from(tagsMap.entries()).sort(
      (a, b) => b[1].length - a[1].length
  );

  return { posts: sortedPosts, tags: sortedTags };
}
