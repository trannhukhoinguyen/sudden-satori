export function calculateReadingTime(text: string): string {
  // Average reading speed: 200 words per minute for technical content
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  if (minutes < 1) return 'Less than 1 min read';
  else if (minutes <= 60) return `${minutes} min read`;
  else if (minutes > 60) return `${(minutes - minutes%60)/60} ${(minutes - minutes%60)/60 > 1 ? 'hrs' : 'hr'} ${minutes%60} min read`;
  return `${minutes} min read`;
}

export function extractTextFromMarkdown(content: string): string {
  // Remove frontmatter
  const withoutFrontmatter = content.replace(/^---[\s\S]*?---/, '');

  // Remove code blocks
  const withoutCode = withoutFrontmatter.replace(/```[\s\S]*?```/g, '');

  // Remove inline code
  const withoutInlineCode = withoutCode.replace(/`[^`]*`/g, '');

  // Remove markdown syntax
  const plainText = withoutInlineCode
    .replace(/#{1,6}\s/g, '') // headers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/[*_~]/g, '') // emphasis
    .replace(/>\s/g, '') // blockquotes
    .replace(/\|/g, ' '); // tables

  return plainText;
}
