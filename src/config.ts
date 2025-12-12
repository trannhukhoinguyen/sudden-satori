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
  postsPerPage: 6,

  collections: [
    "health",

    "blogs",
    "wordpress",

    "books",
    "interpretations",

    "precepts",
    "films",
    "sutras",
    "koans",

    "places",
    "pagodas",
    "practices",

    "masters",
    "speeches",
    "faqs",
  ],

  categoryNames: {
    health: "Sức khỏe & Bài thuốc",
    blogs: "Bài viết",
    wordpress: "Duy Lực Thiền",
    books: "Sách",

    interpretations: "Luận giải",
    precepts: "Luật",
    films: "Phim Phật Giáo",

    /*NHÓM KINH*/
    sutras: "Kinh",
    lankavatara: "KINH LĂNG GIÀ",
    surangama: "Kinh Lăng Nghiêm",
    diamond: "Kinh Kim Cang",

    /*NHÓM CÔNG ÁN*/
    koans: "Công án",
    blueCliffRecord: "Bích Nham Lục",
    gatelessGate: "Vô Môn Quan",
    emptyValleyCollection: "Không Cốc Tập",
    vacantHallCollection: "Hư Đường Tập", //
    ironFlute: "Thiết Địch Đảo Xuy - Tiếng Sáo Thép", // Tetteki Tosui
    equanimityBook: "Thong Dong Lục", // Shoyoroku

    places: "Địa danh",
    pagodas: "Thiền đường",
    practices: "Thực hành",
    zongjinglus: "Tông Cảnh Lục",

    masters: "Thiền sư",
    speeches: "Ngữ lục",
    faqs: "FAQ - Hỏi đáp",
  },

  categoryDescriptions: {
    health: "Xem Bài viết làm sáng tỏ về Sức khỏe & Bài thuốc",
    blogs: "Xem Bài viết làm sáng tỏ về Phật Pháp",
    wordpress: "Xem Bài viết Duy Lực Thiền",
    books: "Xem Sách về Phật Pháp",

    interpretations: "Xem Luận giải các Kinh liên quan đến Tổ Sư Thiền",
    precepts: "Xem Luật liên quan đến Tổ Sư Thiền",
    films: "Xem Phim Phật Giáo liên quan đến Tổ Sư Thiền",

    sutras: "Xem Kinh liên quan đến Tổ Sư Thiền",
    lankavatara: "Xem KINH LĂNG GIÀ liên quan đến Tổ Sư Thiền",
    surangama: "Xem Kinh Lăng Nghiêm liên quan đến Tổ Sư Thiền",

    koans: "Xem các Công án Tổ Sư Thiền",
    blueCliffRecord: "Xem các Công án Bích Nham Lục Tổ Sư Thiền",
    gatelessGate: "Xem các Công án Vô Môn Quan Tổ Sư Thiền",
    emptyValleyCollection: "Xem các Công án Không Cốc Tập Tổ Sư Thiền",
    vacantHallCollection: "Xem các Công án Hư Đường Tập Tổ Sư Thiền",
    ironFlute: "Xem các Công án Tiếng Sáo Thép Tổ Sư Thiền",
    equanimityBook: "Xem các Công án Thong Dong Lục Tổ Sư Thiền",

    places: "Xem các Địa danh",
    pagodas: "Xem các Thiền đường",
    practices: "Xem các bài Thực hành Tổ Sư Thiền",
    zongjinglus: "Xem Tông Cảnh Lục",

    masters: "Xem Thiền sư",
    speeches: "Xem Ngữ lục",
    faqs: "Xem Hỏi đáp",
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
export const SITE_URL = config.siteUrl;
