export interface author {
  name: string;
  bio: string;
  avatar?: string;
  references?: {
    link_1?: string;
    link_2?: string;
  };
}

export const authors: author[] = {
  title: "Đốn Ngộ",
  description: "Trực chỉ minh tâm, Kiến tánh thành Phật",
  author: {
    name: "Nhất Thiết Phật Ngữ Tâm",
    bio: "",
    // avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    x_twitter: "https://x.com/yourusername",
    facebook: "https://linkedin.com/in/yourusername",
    youtube: "your.email@example.com"
  },
  siteUrl: "https://sudden-satori.vercel.app"
};
