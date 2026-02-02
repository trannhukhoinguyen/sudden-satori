import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import { createIndex, type PagefindIndex } from "pagefind";

type ContentItem = {
  id: string;
  title: string;
  description: string;
  body: string;
  tags: string[];
  pubDate?: string;
  type: "card" | "blog" | "slide";
  url: string;
  filePath: string;
};

function readContentCollection(
  collectionPath: string,
  type: "card" | "blog" | "slide",
): ContentItem[] {
  const fullPath = join(process.cwd(), "src", "content", collectionPath);

  if (!existsSync(fullPath)) {
    console.warn(`Collection path does not exist: ${fullPath}`);
    return [];
  }

  const items: ContentItem[] = [];
  const entries = readdirSync(fullPath, {
    recursive: true,
    withFileTypes: true,
  });

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".md")) {
      const filePath = join(
        // biome-ignore lint/suspicious/noExplicitAny: Need to access 'path' property which may not exist in all @types/node versions
        (entry as any).path ?? entry.parentPath,
        entry.name,
      );
      const content = readFileSync(filePath, "utf-8");
      const { data, content: body } = matter(content);

      // Extract the ID (remove src/content/ and .md extension)
      const id = filePath
        .replace(fullPath, "")
        .replace(/^\//, "")
        .replace(/\.md$/, "")
        .replaceAll(".", "");

      // Create URL by removing .md extension but keeping the full path structure
      const url = `/${type === "blog" ? "blogs" : type === "card" ? "cards" : "slides"}/${id}`;

      items.push({
        id,
        title: data.title || "",
        description: data.description || "",
        body,
        tags: data.tags || [],
        pubDate: data.pubDate,
        type,
        url,
        filePath,
      });
    }
  }

  return items;
}

async function addItemsToIndex(items: ContentItem[], index?: PagefindIndex) {
  for (const item of items) {
    // Add each item as a custom record to the pagefind index
    await index?.addCustomRecord({
      url: item.url,
      content: `
        <h1>${item.title}</h1>
        ${item.description ? `<p class="description">${item.description}</p>` : ""}
        ${item.tags.length > 0 ? `<div class="tags">${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join(" ")}</div>` : ""}
        <div class="content">
          ${item.body}
        </div>
      `,
      language: "en",
      meta: {
        title: item.title,
        description: item.description,
        keywords: item.tags.join(", "),
        type: item.type,
        ...(item.pubDate && { date: item.pubDate }),
      },
      filters: {
        type: [item.type],
      },
    });
  }
}

async function buildPagefindIndex() {
  console.log("Building pagefind index from content files...");

  // Read all content collections
  const cards = readContentCollection("cards", "card");
  const blogs = readContentCollection("blogs", "blog");
  const slides = readContentCollection("slides", "slide");

  const allItems = [...cards, ...blogs, ...slides];
  console.log(`Found ${allItems.length} content items`);

  try {
    // Create pagefind index using Node API
    const { index } = await createIndex({});

    // Add all items to the index
    await addItemsToIndex(allItems, index);

    // Write the index files
    const outputPath = join(process.cwd(), "public", "_pagefind");
    if (!index) {
      throw new Error("Failed to create Pagefind index: 'index' is undefined.");
    }
    await index.writeFiles({
      outputPath,
    });

    console.log(`Pagefind index built successfully! Written to ${outputPath}`);
  } catch (error) {
    console.error("Error building pagefind index:", error);
    process.exit(1);
  }
}

buildPagefindIndex().catch(console.error);
