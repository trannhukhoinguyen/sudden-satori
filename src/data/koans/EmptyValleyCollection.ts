export interface EmptyValleyCollection {
  id: number;
  title: string;
  group: number;
  path: string;
  description: string;
  author?: string,
}

/*
* Konggu ji 空谷集 (Empty valley anthology)
* (空谷集, Kūkokushū): 6 quyển,
* san hành vào năm thứ 22 (1285) niên hiệu Chí Nguyên (至元),
* Nguyên văn: Lâm Tuyền Lão Nhân Bình Xướng Đầu Tử Thanh Hòa Thượng Tụng Cổ Không Cốc Tập
* (林泉老人評唱投子清和尚頌古空谷集, Rinsenrōjinhyōshōtōsuseioshōjukokūkokushū).
* TS. Đầu Tử Nghĩa Thanh (投子義清) thâu lục 100 tắc cơ duyên của cổ nhân, thêm vào lời tụng cổ cho mỗi tắc,
* sau đó TS. Đơn Hà Tử Thuần (丹霞子淳) còn thêm vào lời dạy chúng và trước ngữ,
* kế đến TS. Lâm Tuyền Tùng Luân (林泉從倫) ghi lời bình xướng
* */

const EmptyValleyCollections: EmptyValleyCollection[] = [
// 📘 Quyển 1
  {
    id: 1,
    title: "Thanh Nguyên Giai Cấp",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "...",
  },
  {
    id: 2,
    title: "Chẳng Những Tào Khê",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 3,
    title: "Vân Nham Dạo Núi",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 4,
    title: "Đạo Ngô Tham Sâu",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 5,
    title: "Vân Nham Tham Vấn Dược Sơn",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 6,
    title: "Giáp Sơn Thuyền Tử",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 7,
    title: "Nước Con Ăn Ơn",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 8,
    title: "Tăng Hội Thạch Sương",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 9,
    title: "Động Sơn Ý Tổ",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 10,
    title: "Giáp Sơn Đáp Phật",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 11,
    title: "Muôn Cửa Đều Mở",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 12,
    title: "Cửu Phong Đan Thanh",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 13,
    title: "Thiếu Sơn Thị Phi",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 14,
    title: "Lương Sơn Ý Tổ",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 15,
    title: "Long Nha Con Rùa",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 16,
    title: "Linh Vân Hoa Đào",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 17,
    title: "Mẫu Tháp Quốc Sư",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 18,
    title: "Một Hớp Cạn Sông Tây Giang",
    group: 1,
    path: "/mot-hop-can-song-tay-giang",
    description: "..."
  },
// 📘 Quyển 2
  {
    id: 19,
    title: "Tăng Hội Trường Sa",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 20,
    title: "Vân Nham Nam Tuyên",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 21,
    title: "Uống Trà Triệu Châu",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 22,
    title: "Đại Tùy Ô Qui",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 23,
    title: "Nam Tuyên Độ Mèo",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 24,
    title: "Vân Cư Ở Núi",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 25,
    title: "Đan Hà Thiêu Phật",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 26,
    title: "Gà Ở Tổ Phượng",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 27,
    title: "Sơ Sơn Đáp Phật",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 28,
    title: "Về Nguồn Được Chỉ",
    group: 2,
    path: "/ve-nguon-duoc-chi",
    description: "..."
  },
  {
    id: 29,
    title: "Hỏi Cảnh Giáp Sơn",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 30,
    title: "Tào Sơn Xuất Thế",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 31,
    title: "Không Chốn Ẩn Thân",
    group: 2,
    path: "/khong-chon-an-than",
    description: "..."
  },
  {
    id: 32,
    title: "Phong Huyệt Khúc Xưa",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 33,
    title: "Đầu Tử Kiếp Lửa",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
// 📘 Quyển 3
  {
    id: 34,
    title: "Mễ Hồ Hồi Ngộ",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 35,
    title: "Cảnh Thanh Có Lời",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 36,
    title: "Vân Môn Minh Giáo",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 37,
    title: "Vân Cư Sáu Cửa",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 38,
    title: "Phong Huyệt Hoàng Long",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 39,
    title: "Tuyết Phong Nam Tế",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 40,
    title: "Đại Sĩ Không Đứng Dậy",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 41,
    title: "Thủ Sơn Thành Thiết",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 42,
    title: "Vân Môn Bánh Bột",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 43,
    title: "Việc Truyền Thừa",
    group: 3,
    path: "/viec-truyen-thua",
    description: "..."
  },
  {
    id: 44,
    title: "Răng Cửa Mọc Lông",
    group: 3,
    path: "/rang-cua-moc-long",
    description: "..."
  },
  {
    id: 45,
    title: "Pháp Thân Báu",
    group: 3,
    path: "/phap-than-bau",
    description: "..."
  },
  {
    id: 46,
    title: "Ngắm Núi Ban Ngày",
    group: 3,
    path: "/ngam-nui-ban-ngay",
    description: "..."
  },
  {
    id: 47,
    title: "Rồng Thăm Tổ Phụng",
    group: 3,
    path: "/rong-tham-to-phung",
    description: "..."
  },
  {
    id: 48,
    title: "Ba Lăng Gà Vịt",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 49,
    title: "Đầu Tử Phàm Thánh",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 50,
    title: "Hỏi Đạo Triệu Châu",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 51,
    title: "Ngưỡng Sơn Sống Núi",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
// 📘 Quyển 4
  {
    id: 52,
    title: "Thủ Sơn Bồ Đề",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 53,
    title: "Nham Đầu Cảnh Buồm",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 54,
    title: "Phong Huyệt Nai Chúa",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 55,
    title: "Đầu Tử Ba Thân",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 56,
    title: "Ý Chỉ Tào Khê",
    group: 4,
    path: "/y-chi-tao-khe",
    description: "..."
  },
  {
    id: 57,
    title: "Tuyết Phong Sen Sanh Trường",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 58,
    title: "Quảng Giáo Kỹ Châu",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 59,
    title: "Phong Huyệt Đánh Cầu",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 60,
    title: "Tăng Hội Thủ Sơn",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 61,
    title: "Thủ Sơn Kinh Này",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 62,
    title: "Triệu Hoành Dốc Cao",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 63,
    title: "Cửu Phong Lòng Rùa",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 64,
    title: "Lâm Tế Suy Mạo",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 65,
    title: "Đại Tùy Chứng Qui",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 66,
    title: "Thụy Nham Bất Xuất",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 67,
    title: "Văn Thù Thành Nhọc",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 68,
    title: "Thượng Lam Thị Triển",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 69,
    title: "Lạc Phổ Tạng Giáo",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
// 📘 Quyển 5
  {
    id: 70,
    title: "Ba Tiêu Pháp Thân",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 71,
    title: "Ba Tiêu Tốt Xấu",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 72,
    title: "Thiên Bàng Gìn Giữ Tông Phong",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 73,
    title: "Hòa Sơn Đánh Trống",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 74,
    title: "Hoàng Liên Trước Tiếng",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 75,
    title: "Tư Phước Hình Tròn",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 76,
    title: "Sùng Phước Thanh Thoát",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 77,
    title: "Đạo Tràng Lương Sơn",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 78,
    title: "Bá Trượng Đặc Biệt",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 79,
    title: "Lịch Thôn Nấu Trà",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 80,
    title: "Văn Thù Chín Khúc",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 81,
    title: "Tuyết Phong Điển Tọa",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 82,
    title: "Đức Sơn Thượng Đường",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 83,
    title: "Hưng Hóa Quân Kỳ",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 84,
    title: "Trường Khánh Không Nghi",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 85,
    title: "Động Sơn Cọng Rau Lưu",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 86,
    title: "(Bỏ số – có thể là lỗi in ấn hoặc được gộp)",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 87,
    title: "U Thê Thượng Đường",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 88,
    title: "Đáp Ba Cân Gai",
    group: 5,
    path: "/dap-3-can-gai",
    description: "..."
  },
// 📘 Quyển 6
  {
    id: 89,
    title: "Ẩn Thân Bắc Đẩu",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 90,
    title: "Trước Lầu Ngũ Phụng",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 91,
    title: "Ngưỡng Sơn Sáp Thiêu",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 92,
    title: "Pháp Nhãn Huệ Siêu",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 93,
    title: "Triệu Châu Khám Phá Bà Già",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 94,
    title: "Trước Tháp Đa Tử",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 95,
    title: "Đại Dương Huyền Chỉ",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 96,
    title: "Đức Sơn Thượng Đường",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 97,
    title: "Đầu Tử Trăng Sáng",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 98,
    title: "Gậy Ba Tiêu",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 99,
    title: "Phù Sơn Tú Cầu",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 100,
    title: "Phù Sơn Gò Cao",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
];

export default EmptyValleyCollections;
