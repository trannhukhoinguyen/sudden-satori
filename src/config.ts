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
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "TỒ SƯ THIỀN - Đốn Ngộ",
  description: "Tổ Sư Thiền này là do đường lối chánh thức của Tổ Sư truyền xuống, gọi là tham thiền. " +
      "Tham thiền không phải là ngồi thiền, ngồi thiền cũng không phải là tham thiền. " +
      "Nhiều người lầm tưởng rằng ngồi thiền tức tham thiền kỳ thực tham thiền không cần ngồi cũng được. / " +
      "Như Chư Tổ dạy: Phải khi lao động mà tập tham được mới tốt, nếu chỉ thích ngồi yên một chỗ vắng lặng mà tập tham thì khó hy vọng kiến tánh. \n" +
      "Lục Tổ nói: \"Đạo do tâm ngộ, bất tại tọa\". " +
      "Phẩm Tọa thiền trong Pháp Bảo Đàn Kinh nói đến Tọa thiền là tâm tọa (chứ không phải thân tọa) nghĩa là: ngoài đối với tất cả cảnh giới thiện ác tâm niệm chẳng khởi gọi là tọa, trong thấy tự tánh chẳng động gọi là thiền. " +
      "Vậy thế nào là tham thiền? Chữ tham tức là Nghi, Nghi tức là không hiểu, một việc gì đã hiểu rồi thì hết nghi, hết nghi tức là không có tham, cho nên tham thiền rất chú trọng cái nghi gọi là nghi tình. / " +
      "Muốn khởi lên cái nghi tình phải nhờ câu thoại đầu, gọi là tham thoại đầu. / " +
      "Thế nào là thoại đầu? " +
      "Theo Ngài Hư Vân giải thích rằng khi muốn nói một câu thoại thì phải khởi niệm rồi mới nói được, lúc chưa khởi niệm muốn nói gọi là thoại đầu, nếu đã khởi niệm muốn nói, mặc dù chưa nói ra cũng đã là thoại vĩ rồi. " +
      "Hiện nay bắt đầu tham thiền thì chưa đến thoại đầu nhưng cũng không phải ở thoại vĩ, là từ thoại vĩ tiến đến thoại đầu, đang đi ở giữa đường một ngày kia sẽ tiến tới thoại đầu. " +
      "Lúc ấy câu thoại tự mất, nếu còn câu thoại thì chưa đến thoại đầu. " +
      "Ngài Hư Vân có thí dụ rằng: \"Thoại đầu là cây gậy, nghi tình là đi, như người cụt chân muốn đi phải nhờ cây gậy, cũng như muốn khởi nghi tình phải nhờ câu thoại đầu vậy. \n" +
      "Nói tham thoại đầu, thoại đầu thì nhiều lắm, muôn muôn ngàn ngàn kể không hết, bây giờ tôi chỉ đề ra 5 câu thoại đầu để cho người tham thiền tự mình lựa một câu, câu nào tự mình cảm thấy rất khó hiểu, hiểu không nổi thì câu đó thích hợp cho mình tham. " +
      "Chỉ được lựa một câu không cho lựa hai câu và sau khi quyết định câu nào rồi không cho đổi qua đổi lại, thẳng tới mà tham đến kiến tánh mới thôi. / " +
      "5 câu thoại đầu là: \n" +
      "Khi chưa có trời đất, ta là cái gì? \n" +
      "Muôn pháp về một, một về chổ nào? \n" +
      "Trước khi cha mẹ chưa sanh, mặt mũi bổn lai của ta ra sao? \n" +
      "Sanh từ đâu đến, chết đi về đâu? \n" +
      "Chẳng phải tâm, chẳng phải Phật, chẳng phải vật, là cái gì? / " +
      "Câu thoại đầu là câu hỏi, có hỏi thì phải có đáp, cũng như câu: \"Khi chưa có Trời đất, ta là cái gì?\" hỏi thầm trong bụng cảm thấy không hiểu thì đáp không ra, đáp không ra thì càng thấy thắc mắc, chính cái thắc mắc đó gọi là nghi tình. / " +
      "Hỏi câu thứ nhất đáp không ra thì tiếp tục hỏi câu thứ nhì, đáp không ra, tiếp tục hỏi câu thứ ba, cứ tiếp tục hỏi mãi. " +
      "Ngày đêm không ngừng; bất cứ đi, đứng, nằm, ngồi, đang làm công việc tay chân hay bằng trí óc, đi bộ, đi xe, đang ăn cơm, đang đi cầu, đang ngủ mê, đều phải tiếp tục hỏi tới hoài, không giây phút gián đoạn. " +
      "Người sơ tham thì hay quên cũng như một ngày 24 tiếng đồng hồ, gián đoạn 23 tiếng, tập tham dần dần thì sự gián đoạn giảm bớt còn 22 tiếng, rồi tiếp tục còn 21 tiếng, 20 tiếng... dần dần đến công phu miên mật tức là ngày đêm 24 giờ không giây phút gián đoạn. / " +
      "Khi công phu được thành khối cũng gọi là đến thoại đầu, cũng gọi là đến đầu sào trăm thước. " +
      "Từ đầu sào trăm thước tiến thêm một bước nữa là kiến tánh, đạt đến chỗ tự do tự tại, được giải thoát vĩnh viễn tất cả khổ. ",
  author: {
    name: "Nhất Thiết Phật Ngữ Tâm",
    bio: "",
    // avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    facebook: "https://www.facebook.com/Nhohoivanhin/",
    youtube: "https://www.youtube.com/c/tongphongtosuthien",
    bookcase: "https://pubhtml5.com/bookcase/wuxzq/"
  },
  siteUrl: "https://sudden-satori.vercel.app"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;

export const EXTRA_BLOG_CONFIG = {
  pathCategory: "categories",
  pathTag: "tags",
  noPostDescription: "Chưa có Bài viết nào.",
  noCategoryDescription: "Chưa có Category nào.",
  noTagDescription: "Chưa có Tag nào.",
};
export const BLOG_CONFIG = {
  blogs: {
    title: "Bài viết",
    path: "blogs",
    description: "Xem Bài viết làm sáng tỏ về Phật Pháp",
  },
  books: {
    title: "Sách",
    path: "books",
    description: "Xem Sách về Phật Pháp",
  },
  sutras: {
    title: "Luận giải",
    path: "interpretations",
    description: "Xem Luận giải cho các Kinh Phật",
  },
  interpretations: {
    title: "Luận giải",
    path: "interpretations",
    description: "Xem Luận giải cho các Kinh Phật",
  },
  koans: {
    title: "Công án",
    path: "koans",
    description: "Xem Công án",
  },
  practices: {
    title: "Thực hành",
    path: "practices",
    description: "Xem Thực hành",
  },
  poems: {
    title: "Thơ Thiền",
    path: "poems",
    description: "Xem Thơ Thiền",
  },
  zongjinglus: {
    title: "Tông Cảnh Lục",
    path: "zongjinglus",
    description: "Xem Tông Cảnh Lục",
  },
};

export const configNew = {
  site: {
    title: "Zen Study",
    description: "Trang nghiên cứu Thiền tông và các bộ Kinh, Luận, Công án.",
    base: import.meta.env.BASE_URL,
  },

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
  },
};
