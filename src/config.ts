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
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Đốn Ngộ",
  description: "Kiến tánh thành Phật",
  author: {
    name: "Nhất Thiết Phật Ngữ Tâm",
    bio: "",
    // avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    facebook: "https://www.facebook.com/Nhohoivanhin/",
    youtube: "https://www.youtube.com/c/tongphongtosuthien"
  },
  siteUrl: "https://sudden-satori.vercel.app"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;
