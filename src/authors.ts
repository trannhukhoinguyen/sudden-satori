export interface author {
  name: string;
  bio: string;
  avatar?: string;
  references?: {
    link_1?: string;
    link_2?: string;
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
}

export const authors: author[] = [
    {
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
    }
];
