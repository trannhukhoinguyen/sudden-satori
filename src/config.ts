export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    facebook?: string;
    youtube?: string;
    bookcase?: string;
    bookcase2?: string;
    tosuthien1: string;
    masterSite: string;
    zenSite: string;
  };
  siteUrl: string;
  base: string;
  postsPerPage: number;
  collections: string[];
  categoryNames: {};
  categoryDescriptions: {};
  postConfig: {};
}

export const config: SiteConfig = {
  title: "TỔ SƯ THIỀN",
  description:
      "Tổ Sư Thiền là đường lối Tham Thiền chánh thức của Tổ Sư truyền xuống từ Đức Phật Thích Ca. " +
      "Khi công phu & nghi tình thành khối được gọi là đến Thoại Đầu, tiến thêm một bước nữa là Kiến Tánh, " +
      "đạt đến chỗ tự do tự tại, được giải thoát vĩnh viễn tất cả khổ. ",
  author: {
    name: "TỔ SƯ THIỀN",
    bio: "Nhất Thiết Phật Ngữ Tâm",
    // avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    facebook: "https://www.facebook.com/Nhohoivanhin/",
    youtube: "https://www.youtube.com/c/tongphongtosuthien",
    bookcase: "https://pubhtml5.com/bookcase/wuxzq/",
    bookcase2: "https://pubhtml5.com/bookcase/cunen/",
    tosuthien1: "https://tosuthien.vercel.app",
    masterSite: "https://patriarchalzen.vercel.app/",
    zenSite: "https://tosuthien.com#col-2057150686"
  },
  siteUrl: "https://tosuthien.org",

  // NEW CONFIGS
  base: import.meta.env.BASE_URL,

  // số bài trên 1 trang (dùng cho phân trang, recentPosts,...)
  postsPerPage: 5,

  collections: [
    "blogs",
    "books",
    "interpretations",
    "sutras",
    "koans",
    "poems",
    "practices",
    "zongjinglus",
    "speeches",
  ],

  categoryNames: {
    blogs: "Bài viết",
    books: "Sách",
    interpretations: "Luận giải",
    sutras: "Kinh",
    koans: "Công án",
    poems: "Thơ Thiền",
    practices: "Thực hành",
    zongjinglus: "Tông Cảnh Lục",
    speeches: "Ngữ lục",
  },

  categoryDescriptions: {
    blogs: "Xem Bài viết làm sáng tỏ về Phật Pháp",
    books: "Xem Sách về Phật Pháp",
    interpretations: "Xem Luận giải các Kinh liên quan đến Tổ Sư Thiền",
    sutras: "Xem Kinh liên quan đến Tổ Sư Thiền",
    koans: "Xem các Công án Tổ Sư Thiền",
    poems: "Xem các bài Thơ Thiền",
    practices: "Xem các bài Thực hành Tổ Sư Thiền",
    zongjinglus: "Xem Tông Cảnh Lục",
    speeches: "Xem Ngữ lục",
  },

  postConfig: {
    noPostDescription: "Chưa có Bài viết nào",
    noCategoryDescription: "Chưa có Category nào",
    noTagDescription: "Chưa có Tag nào",
  },
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;
