import { allPostsForSearchJson, allPosts } from "../utils/getMarkdownContent";

export async function GET() {
// get searchData
  const searchData = [];

  for (const posts in allPosts) {
   for (const path in posts) {
    const post = await posts[path];
    const url = path.replace('../content', '').replace('.md', '');

    searchData.push({
      title: post.frontmatter.title || 'Untitled',
      url: url,
      date: post.frontmatter.date || new Date().toISOString(),
      excerpt: post.frontmatter.excerpt || post.frontmatter.description || '',
      categories: post.frontmatter.categories || []
    });
  }
}

  // Sort by date (newest first)
  searchData.sort((a, b) => new Date(b.date) - new Date(a.date));

  return new Response(JSON.stringify(searchData), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}