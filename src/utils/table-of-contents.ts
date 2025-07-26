export interface Heading {
  depth: number;
  text: string;
  slug: string;
}

export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];

  // Remove frontmatter
  const withoutFrontmatter = content.replace(/^---[\s\S]*?---/, '');

  // Match markdown headings
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  let match;

  while ((match = headingRegex.exec(withoutFrontmatter)) !== null) {
    const depth = match[1].length;
    const text = match[2].trim();

    const slug = text
        .toLocaleLowerCase('vi') // giữ chữ thường tiếng Việt
        .replace(/[^\p{Letter}\p{Number}\s-]/gu, '') // bỏ ký tự đặc biệt, nhưng giữ chữ có dấu
        .replace(/\s+/g, '-') // đổi khoảng trắng thành "-"
        .replace(/^-+|-+$/g, ''); // bỏ dấu "-" thừa ở đầu/cuối

    headings.push({ depth, text, slug });
  }

  return headings;
}

export function filterHeadingsForTOC(headings: Heading[]): Heading[] {
  return headings.filter(h => h.depth === 2 || h.depth === 3);
}

/*
    const slug = text
      .toLowerCase() // chỉ hỗ trợ ký tự ASCII, dẫn đến chữ tiếng Việt có dấu bị loại bỏ
      .replace(/[^\w\s-]/g, '') // chỉ hỗ trợ ký tự ASCII, dẫn đến chữ tiếng Việt có dấu bị loại bỏ
      .replace(/\s+/g, '-')
      .replace(/^-+|-+$/g, '');
*/
