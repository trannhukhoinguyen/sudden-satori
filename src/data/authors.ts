export interface author {
  id: number;
  name: string;
  bio: string;
  avatar?: string;
  references?: {
    link_1?: string;
    link_2?: string;
    extra?: string;
    link_3?: string[];
  };
  compositions: {
    pdf_1?: {
      title?: string;
      link?: string;
    };
    pdf_2?: {
      title?: string;
      link?: string;
    }
    pdf_3?: {
      title?: string;
      link?: string;
    }
  },
  lectures?: string[],
  youtubeIds?: string[],
}

const authors: author[] = [
    {
      id: 1,
      name: "Tăng Phụng Nghi",
      bio: "Tự Thuấn Vi, hiệu Kim Giản, quê ở Hành Dương, Hồ Nam, đậu Tiến Sĩ đời Vạn Lịch nhà Minh. " +
          "Ông từng gặp một vị Tăng, cùng nhau tranh luận 3 ngày không dứt. " +
          "Do vậy, Ông tin Phật, trì giới, ăn chay, nghiên cứu kinh luận. " +
          "Một hôm, Ông thấy trăng lặn, mặt trời mọc, hoát nhiên đại ngộ. " +
          "Ông soạn bộ Tam Tông Thông gồm: Thủ Lăng Nghiêm Kinh Tông Thông, Lăng Già Kinh Tông Thông và Kim Cang Kinh Tông Thông.",
      avatar: "",
      references: {
        link_1: "https://blog.phapthihoi.org/tu-dien-phat-giao/tang-phung-nghi/",
        link_2: "",
      },
      compositions: {
        pdf_1: {
          title: "KIM CANG KINH TÔNG THÔNG",
          link: "https://thuvienhoasen.org/images/file/Rj70qp1G0QgQACoQ/kim-cang-tong-thong-thich-nhuan-chau-dich.pdf",
        },
        pdf_2: {
          title: "THỦ LĂNG NGHIÊM KINH TÔNG THÔNG",
          link: "https://thuvienhoasen.org/images/file/0Xx2rJ1G0QgQADJh/kinh-thu-lang-nghiem-tong-thong-nhan-te-thien-su-dich.pdf",
        },
/*        pdf_3: {
          title: "KINH LĂNG GIÀ TÔNG THÔNG",
          link: "",
        },*/
      },
    },
    {
      id: 2,
      name: "Thích Duy Lực",
      bio: "",
      avatar: "",
      references: {
        link_1: "https://tosuthien.com/",
        link_2: "https://duylucthien.wordpress.com/about/",
        extra: "/pdfs/thien-su-Thich-Duy-Luc.pdf",
        link_3: [
          "https://thuvienhoasen.org/author/post/792/1/thich-duy-luc",
          "https://ph.tinhtong.vn/Home/MP3?p=MP3*-+T+Duy+Luc",
          "https://tosuthien.net/",
          "https://tosuthien.info/",
          "https://apps.apple.com/ai/app/tosuthien/id1660073789",
          "https://www.mixcloud.com/tosuthien/",
          "https://tosuthien.blogspot.com/",
          "http://tuvien.com/to_su_thien/",
        ],
      },
      compositions: {
        pdf_1: {
          title: "ĐƯỜNG LỐI THỰC HÀNH THAM TỒ SƯ THIỀN",
          link: "https://phapthihoi.org/kinh/Ebooks/Thien-Tong/Hoc-Thien/Duong-Loi-Thuc-Hanh-Tham-To-Su-Thien-HT-Duy-Luc.pdf",
        },
        pdf_2: {
          title: "KINH LĂNG GIÀ",
          link: "http://tosuthien.info/kinh_sach_storage/kinh%20lang%20gia.pdf",
        },
      },
      lectures: [
        "https://thamtosuthien.net/videos/chua-phan-loai/thay-duy-luc-day-tham-thoai-dau-phu-de-anh-ngu-quan-thoai-18.html)",
      ],
      youtubeIds: [
        "DLS2VpXg3N8", // "https://www.youtube.com/embed/DLS2VpXg3N8?html5=1&autoplay=0&controls=0&showinfo=0&rel=0&modestbranding=0&playsinline=1)",
      ],
    },
];

export default authors;
