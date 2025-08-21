export function calculateReadingTime(text: string): string {
  // Average reading speed: 200 words per minute for technical content
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  if (minutes < 1) return "Less than 1 phút đọc";
  else if (minutes <= 60) return `${minutes} phút đọc`;
  else if (minutes > 60) return `${(minutes - minutes % 60) / 60} giờ ${minutes % 60} phút đọc`;
  return `${minutes} phút đọc`;
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
