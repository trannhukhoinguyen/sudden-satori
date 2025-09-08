import { config } from "../config.ts";
// ["blogs", "books", "interpretations", "sutras", "koans", "places", "practices", "masters", "speeches", "faqs"]

// derive type từ mảng config.collections
export type CollectionType = typeof config.collections[number];

const ICONS_MAP: Record<CollectionType, Record<string, string>> = {
  koans: {
    'Giới thiệu': '🪨',
    'Chưa phân loại': '🔮️',
    categorized: '⚡️',
  },

  places: {
    'Giới thiệu': '📍️️',
    'Chưa phân loại': '🏁',
    categorized: '🚩',
  },

  masters: {
    'Giới thiệu': '💫',
    'Chưa phân loại': '⭐️',
    categorized: '🌟',
  },

  faqs: {
    'Giới thiệu': '⚠️',
    'Chưa phân loại': '🔰',
    categorized: '❓',
  },

  speeches: {
    'Giới thiệu': '🔊',
    'Chưa phân loại': '🔈',
    categorized: '📢',
  },

  practices: {
    'Giới thiệu': '🎨',
    'Chưa phân loại': '🧩',
    categorized: '🎯',
  },

  blogs: {
    'Giới thiệu': '🪧',
    'Chưa phân loại': '📰',
    categorized: '📑',
  },

  sutras: {
    'Giới thiệu': '📚',
    'Chưa phân loại': '📓',
    categorized: '📙',
  },
  interpretations: {
    'Giới thiệu': '📚',
    'Chưa phân loại': '📓',
    categorized: '📗',
  },
  books: {
    'Giới thiệu': '📚',
    'Chưa phân loại': '📓',
    categorized: '📗',
  },
};

export default ICONS_MAP
