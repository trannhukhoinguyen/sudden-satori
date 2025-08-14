export async function GET() {
  // Blog posts
  const postsBlogGlobMd = await import.meta.glob('../content/blogs/*.md', { eager: true });
  const postsBlogGlobMdx = await import.meta.glob('../content/blogs/*.mdx', { eager: true });

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

// get searchData
  const searchData = [];

  const posts = [
    ...Object.values(postsBlogGlobMd),
    ...Object.values(postsBlogGlobMdx),
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

  for (const path in posts) {
    const post = await posts[path]();
    const url = path.replace('../content', '').replace('.md', '');

    searchData.push({
      title: post.frontmatter.title || 'Untitled',
      url: url,
      date: post.frontmatter.date || new Date().toISOString(),
      excerpt: post.frontmatter.excerpt || post.frontmatter.description || '',
      categories: post.frontmatter.categories || []
    });
  }

  // Sort by date (newest first)
  searchData.sort((a, b) => new Date(b.date) - new Date(a.date));

  return new Response(JSON.stringify(searchData), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
