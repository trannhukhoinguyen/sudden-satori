import type { Branch } from "./StructureDisplay.astro";

export interface ArticleData {
  title: string;
  url?: string;
  description: string;
  keyPoints: string[];
  references: {
    title: string;
    url: string | null;
  }[];
  tools: {
    title: string;
    url: string | null;
  }[];
  mermaidMarkdown: string;
}

export interface PakoContent {
  pakoValue: string;
  cleanedText: string;
  structureText: {
    root: string;
    branches: Branch[];
  };
}

export interface CardTheme {
  backgroundClass?: string;
}

export const isValidUrl = (url: string | null): boolean => {
  if (!url) return false;
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === "http:" || urlObj.protocol === "https:";
  } catch {
    return false;
  }
};

// Astro component types
export interface Tag {
  tag: string;
  count?: number;
  size: number;
}

export interface Card {
  id: string;
  title: string;
  template: string;
}

export interface CardCoverProps {
  title: string;
  template: string;
  size?: "small" | "medium";
}

export interface CardsPageProps {
  cards: Card[];
  tags: Tag[];
  tag: string;
}
