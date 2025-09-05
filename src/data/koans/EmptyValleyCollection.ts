export interface EmptyValleyCollection {
  id: number;
  titleOfficial?: string;
  title?: string;
  group: number;
  path: string;
  description: string;
  author?: string,
  cover?: string,
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
* https://www.rongmotamhon.net/xem-kinh_lam-tuyen-lao-nhon-binh_ddplklkd_muc-luc.html
* */

const EmptyValleyCollections: EmptyValleyCollection[] = [
// 📘 Quyển 1
  {
    id: 1,
    titleOfficial: "Thanh Nguyên giai cấp",
    title: "Không rơi giai cấp",
    group: 1,
    path: "evc001-khong-roi-giai-cap",
    description: "...",
  },
  {
    id: 2,
    titleOfficial: "Chẳng Những Tào Khê",
    title: "Chẳng Những Tào Khê",
    group: 1,
    path: "evc002-chang-nhung-tao-khe",
    description: "..."
  },
  {
    id: 3,
    titleOfficial: "Vân Nham Dạo Núi",
    title: "Tiếng dao khua khi dạo núi",
    group: 1,
    path: "evc003-tieng-dao-khua-khi-dao-nui",
    description: "..."
  },
  {
    id: 4,
    titleOfficial: "Đạo Ngô Tham Sâu",
    title: "Kiểu chào dáng nữ nhân",
    group: 1,
    path: "evc004-kieu-chao-dang-nu-nhan",
    description: "..."
  },
  {
    id: 5,
    titleOfficial: "Vân Nham Tham Vấn Dược Sơn",
    title: "Một câu đủ trăm vị",
    group: 1,
    path: "evc005-mot-cau-du-tram-vi",
    description: "..."
  },
  {
    id: 6,
    titleOfficial: "Giáp Sơn Thuyền Tử",
    title: "Thả dây nhợ ngàn thước",
    group: 1,
    path: "evc006-tha-day-nho-ngan-thuoc",
    description: "..."
  },
  {
    id: 7,
    titleOfficial: "Nước Con An Ổn",
    title: "Nước Con An Ổn",
    group: 1,
    path: "evc007-nuoc-con-an-on",
    description: "..."
  },
  {
    id: 8,
    titleOfficial: "Tăng hỏi Thạch Sương",
    title: "Cái khóa không tua",
    group: 1,
    path: "evc008-cai-khoa-khong-tua",
    description: "..."
  },
  {
    id: 9,
    titleOfficial: "Động Sơn Ý Tổ",
    title: "Động Sơn Ý Tổ",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 10,
    titleOfficial: "Giáp Sơn Đáp Phật",
    title: "Giáp Sơn Đáp Phật",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 11,
    titleOfficial: "Muôn Cửa Đều Mở",
    title: "Muôn Cửa Đều Mở",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 12,
    titleOfficial: "Cửu Phong Đan Thanh",
    title: "Cửu Phong Đan Thanh",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 13,
    titleOfficial: "Thiếu Sơn Thị Phi",
    title: "Thiếu Sơn Thị Phi",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 14,
    titleOfficial: "Lương Sơn Ý Tổ",
    title: "Lương Sơn Ý Tổ",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 15,
    titleOfficial: "Long Nha Con Rùa",
    title: "Long Nha Con Rùa",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 16,
    titleOfficial: "Linh Vân Hoa Đào",
    title: "Linh Vân Hoa Đào",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 17,
    titleOfficial: "Mẫu Tháp Quốc Sư",
    title: "Mẫu Tháp Quốc Sư",
    group: 1,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 18,
    titleOfficial: "Một Hớp Cạn Sông Tây Giang",
    title: "Một Hớp Cạn Sông Tây Giang",
    group: 1,
    path: "/mot-hop-can-song-tay-giang",
    description: "..."
  },
// 📘 Quyển 2
  {
    id: 19,
    titleOfficial: "Tăng Hội Trường Sa",
    title: "Tăng Hội Trường Sa",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 20,
    titleOfficial: "Vân Nham Nam Tuyên",
    title: "Vân Nham Nam Tuyên",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 21,
    titleOfficial: "Uống Trà Triệu Châu",
    title: "Uống Trà Triệu Châu",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 22,
    titleOfficial: "Đại Tùy Ô Qui",
    title: "Đại Tùy Ô Qui",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 23,
    titleOfficial: "Nam Tuyên Độ Mèo",
    title: "Nam Tuyên Độ Mèo",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 24,
    titleOfficial: "Vân Cư Ở Núi",
    title: "Vân Cư Ở Núi",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 25,
    titleOfficial: "Đan Hà Thiêu Phật",
    title: "Đan Hà Thiêu Phật",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 26,
    titleOfficial: "Gà Ở Tổ Phượng",
    title: "Gà Ở Tổ Phượng",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 27,
    titleOfficial: "Sơ Sơn Đáp Phật",
    title: "Sơ Sơn Đáp Phật",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 28,
    titleOfficial: "Về Nguồn Được Chỉ",
    title: "Về Nguồn Được Chỉ",
    group: 2,
    path: "/ve-nguon-duoc-chi",
    description: "..."
  },
  {
    id: 29,
    titleOfficial: "Hỏi Cảnh Giáp Sơn",
    title: "Hỏi Cảnh Giáp Sơn",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 30,
    titleOfficial: "Tào Sơn Xuất Thế",
    title: "Tào Sơn Xuất Thế",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 31,
    titleOfficial: "Không Chốn Ẩn Thân",
    title: "Không Chốn Ẩn Thân",
    group: 2,
    path: "/khong-chon-an-than",
    description: "..."
  },
  {
    id: 32,
    titleOfficial: "Phong Huyệt Khúc Xưa",
    title: "Phong Huyệt Khúc Xưa",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 33,
    titleOfficial: "Đầu Tử Kiếp Lửa",
    title: "Đầu Tử Kiếp Lửa",
    group: 2,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
// 📘 Quyển 3
  {
    id: 34,
    titleOfficial: "Mễ Hồ Hồi Ngộ",
    title: "Mễ Hồ Hồi Ngộ",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 35,
    titleOfficial: "Cảnh Thanh Có Lời",
    title: "Cảnh Thanh Có Lời",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 36,
    titleOfficial: "Vân Môn Minh Giáo",
    title: "Vân Môn Minh Giáo",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 37,
    titleOfficial: "Vân Cư Sáu Cửa",
    title: "Vân Cư Sáu Cửa",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 38,
    titleOfficial: "Phong Huyệt Hoàng Long",
    title: "Phong Huyệt Hoàng Long",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 39,
    titleOfficial: "Tuyết Phong Nam Tế",
    title: "Tuyết Phong Nam Tế",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 40,
    titleOfficial: "Đại Sĩ Không Đứng Dậy",
    title: "Đại Sĩ Không Đứng Dậy",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 41,
    titleOfficial: "Thủ Sơn Thành Thiết",
    title: "Thủ Sơn Thành Thiết",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 42,
    titleOfficial: "Vân Môn Bánh Bột",
    title: "Vân Môn Bánh Bột",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 43,
    titleOfficial: "Việc Truyền Thừa",
    title: "Việc Truyền Thừa",
    group: 3,
    path: "/viec-truyen-thua",
    description: "..."
  },
  {
    id: 44,
    titleOfficial: "Răng Cửa Mọc Lông",
    title: "Răng Cửa Mọc Lông",
    group: 3,
    path: "/rang-cua-moc-long",
    description: "..."
  },
  {
    id: 45,
    titleOfficial: "Pháp Thân Báu",
    title: "Pháp Thân Báu",
    group: 3,
    path: "/phap-than-bau",
    description: "..."
  },
  {
    id: 46,
    titleOfficial: "Ngắm Núi Ban Ngày",
    title: "Ngắm Núi Ban Ngày",
    group: 3,
    path: "/ngam-nui-ban-ngay",
    description: "..."
  },
  {
    id: 47,
    titleOfficial: "Rồng Thăm Tổ Phụng",
    title: "Rồng Thăm Tổ Phụng",
    group: 3,
    path: "/rong-tham-to-phung",
    description: "..."
  },
  {
    id: 48,
    titleOfficial: "Ba Lăng Gà Vịt",
    title: "Ba Lăng Gà Vịt",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 49,
    titleOfficial: "Đầu Tử Phàm Thánh",
    title: "Đầu Tử Phàm Thánh",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 50,
    titleOfficial: "Hỏi Đạo Triệu Châu",
    title: "Hỏi Đạo Triệu Châu",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 51,
    titleOfficial: "Ngưỡng Sơn Sống Núi",
    title: "Ngưỡng Sơn Sống Núi",
    group: 3,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
// 📘 Quyển 4
  {
    id: 52,
    titleOfficial: "Thủ Sơn Bồ Đề",
    title: "Thủ Sơn Bồ Đề",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 53,
    titleOfficial: "Nham Đầu Cảnh Buồm",
    title: "Nham Đầu Cảnh Buồm",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 54,
    titleOfficial: "Phong Huyệt Nai Chúa",
    title: "Phong Huyệt Nai Chúa",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 55,
    titleOfficial: "Đầu Tử Ba Thân",
    title: "Đầu Tử Ba Thân",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 56,
    titleOfficial: "Ý Chỉ Tào Khê",
    title: "Ý Chỉ Tào Khê",
    group: 4,
    path: "/y-chi-tao-khe",
    description: "..."
  },
  {
    id: 57,
    titleOfficial: "Tuyết Phong Sen Sanh Trường",
    title: "Tuyết Phong Sen Sanh Trường",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 58,
    titleOfficial: "Quảng Giáo Kỹ Châu",
    title: "Quảng Giáo Kỹ Châu",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 59,
    titleOfficial: "Phong Huyệt Đánh Cầu",
    title: "Phong Huyệt Đánh Cầu",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 60,
    titleOfficial: "Tăng Hội Thủ Sơn",
    title: "Tăng Hội Thủ Sơn",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 61,
    titleOfficial: "Thủ Sơn Kinh Này",
    title: "Thủ Sơn Kinh Này",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 62,
    titleOfficial: "Triệu Hoành Dốc Cao",
    title: "Triệu Hoành Dốc Cao",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 63,
    titleOfficial: "Cửu Phong Lòng Rùa",
    title: "Cửu Phong Lòng Rùa",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 64,
    titleOfficial: "Lâm Tế Suy Mạo",
    title: "Lâm Tế Suy Mạo",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 65,
    titleOfficial: "Đại Tùy Chứng Qui",
    title: "Đại Tùy Chứng Qui",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 66,
    titleOfficial: "Thụy Nham Bất Xuất",
    title: "Thụy Nham Bất Xuất",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 67,
    titleOfficial: "Văn Thù Thành Nhọc",
    title: "Văn Thù Thành Nhọc",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 68,
    titleOfficial: "Thượng Lam Thị Triển",
    title: "Thượng Lam Thị Triển",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 69,
    titleOfficial: "Lạc Phổ Tạng Giáo",
    title: "Lạc Phổ Tạng Giáo",
    group: 4,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
// 📘 Quyển 5
  {
    id: 70,
    titleOfficial: "Ba Tiêu Pháp Thân",
    title: "Ba Tiêu Pháp Thân",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 71,
    titleOfficial: "Ba Tiêu Tốt Xấu",
    title: "Ba Tiêu Tốt Xấu",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 72,
    titleOfficial: "Thiên Bàng Gìn Giữ Tông Phong",
    title: "Thiên Bàng Gìn Giữ Tông Phong",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 73,
    titleOfficial: "Hòa Sơn Đánh Trống",
    title: "Hòa Sơn Đánh Trống",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 74,
    titleOfficial: "Hoàng Liên Trước Tiếng",
    title: "Hoàng Liên Trước Tiếng",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 75,
    titleOfficial: "Tư Phước Hình Tròn",
    title: "Tư Phước Hình Tròn",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 76,
    titleOfficial: "Sùng Phước Thanh Thoát",
    title: "Sùng Phước Thanh Thoát",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 77,
    titleOfficial: "Đạo Tràng Lương Sơn",
    title: "Đạo Tràng Lương Sơn",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 78,
    titleOfficial: "Bá Trượng Đặc Biệt",
    title: "Bá Trượng Đặc Biệt",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 79,
    titleOfficial: "Lịch Thôn Nấu Trà",
    title: "Lịch Thôn Nấu Trà",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 80,
    titleOfficial: "Văn Thù Chín Khúc",
    title: "Văn Thù Chín Khúc",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 81,
    titleOfficial: "Tuyết Phong Điển Tọa",
    title: "Tuyết Phong Điển Tọa",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 82,
    titleOfficial: "Đức Sơn Thượng Đường",
    title: "Đức Sơn Thượng Đường",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 83,
    titleOfficial: "Hưng Hóa Quân Kỳ",
    title: "Hưng Hóa Quân Kỳ",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 84,
    titleOfficial: "Trường Khánh Không Nghi",
    title: "Trường Khánh Không Nghi",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 85,
    titleOfficial: "Động Sơn Cọng Rau Lưu",
    title: "Động Sơn Cọng Rau Lưu",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 86,
    titleOfficial: "Quốc sư thị giả thị giả",
    title: "Quốc sư thị giả thị giả",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 87,
    titleOfficial: "U Thê Thượng Đường",
    title: "U Thê Thượng Đường",
    group: 5,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 88,
    titleOfficial: "Đáp Ba Cân Gai",
    title: "Đáp Ba Cân Gai",
    group: 5,
    path: "/dap-3-can-gai",
    description: "..."
  },
// 📘 Quyển 6
  {
    id: 89,
    titleOfficial: "Ẩn Thân Bắc Đẩu",
    title: "Ẩn Thân Bắc Đẩu",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 90,
    titleOfficial: "Trước Lầu Ngũ Phụng",
    title: "Trước Lầu Ngũ Phụng",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 91,
    titleOfficial: "Ngưỡng Sơn Sáp Thiêu",
    title: "Ngưỡng Sơn Sáp Thiêu",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 92,
    titleOfficial: "Pháp Nhãn Huệ Siêu",
    title: "Pháp Nhãn Huệ Siêu",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 93,
    titleOfficial: "Triệu Châu Khám Phá Bà Già",
    title: "Triệu Châu Khám Phá Bà Già",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 94,
    titleOfficial: "Trước Tháp Đa Tử",
    title: "Trước Tháp Đa Tử",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 95,
    titleOfficial: "Đại Dương Huyền Chỉ",
    title: "Đại Dương Huyền Chỉ",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 96,
    titleOfficial: "Đức Sơn Thượng Đường",
    title: "Đức Sơn Thượng Đường",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 97,
    titleOfficial: "Đầu Tử Trăng Sáng",
    title: "Đầu Tử Trăng Sáng",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 98,
    titleOfficial: "Gậy Ba Tiêu",
    title: "Gậy Ba Tiêu",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 99,
    titleOfficial: "Phù Sơn Tú Cầu",
    title: "Phù Sơn Tú Cầu",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
  {
    id: 100,
    titleOfficial: "Phù Sơn Gò Cao",
    title: "Phù Sơn Gò Cao",
    group: 6,
    path: "/khong-roi-giai-cap",
    description: "..."
  },
];

export default EmptyValleyCollections;

/*
* quyển nhất
nhất thanh nguyên giai cấp sâm học nhị phi đãn tào khê đôi bật
tam vân nham du sơn đao kiếm tứ đạo ngô thâm thâm lễ bái
ngũ nham sâm dược sơn ngũ vị lục giáp sơn thuyền tử chu tiếp
thất ngã quốc yến nhiên khám ban bát tăng vấn thạch sương khí dụng
cửu đỗng sơn tổ ý tổ giáo thập giáp sơn đáp phật phật tổ
thập nhất vạn hộ câu khai môn hộ thập nhị cửu phong đan thanh chân tượng
thập tam thiều sơn thị phi phong vân thập tứ lương sơn tổ ý tổ giáo
thập ngũ long nha ô quy tổ giáo thập lục linh vân đào hoa hoa quả
thập thất quốc sư đáp dạng đế vương thập bát hấp tận tây giang thuỷ hoả
quyển nhị
thập cửu tăng vấn trường sa phật tổ nhị thập vân nham nam toàn tính danh
nhị thập nhất triệu châu khiết trà trà thang nhị thập nhị đại tùy ô quy quy ngư
nhị thập tam nam toàn trảm miêu miêu khuyển nhị thập tứ vân cư cư sơn trụ sơn
nhị thập ngũ đan hà thiêu phật phật tượng nhị thập lục kê thê phụng sào am cư
nhị thập thất sơ sơn đáp phật phật tổ nhị thập bát quy căn đắc chỉ đối cơ
nhị thập cửu vấn giáp sơn cảnh nhân cảnh tam thập tào sơn xuất thế phật tổ
tam thập nhất vô ẩn thân xứ sâm học tam thập nhị phong huyệt cổ khúc cầm kì
tam thập tam đầu tử kiếp hoả thuỷ hoả
quyển tam
tam thập tứ mễ hồ vấn ngộ ngộ đạo tam thập ngũ kính thanh hữu ngôn yển tức
tam thập lục vân môn minh giáo hồ bính tam thập thất vân cư lục hộ môn hộ
tam thập bát phong huyệt hoàng long đối cơ tam thập cửu tuyết phong nam tế lễ bái
tứ thập đại sĩ bất khởi đế vương tứ thập nhất thủ sơn thân thiết tuế thời
tứ thập nhị vân môn hồ bính hồ bính tứ thập tam thân truyền để sự tính danh
tứ thập tứ bản xỉ sinh mao tổ giáo tứ thập ngũ vấn pháp thân bảo
tứ thập lục nhật lí khán sơn tổ giáo tứ thập thất long tú phụng sào sơ thái
tứ thập bát ba lăng kê áp tổ giáo tứ thập cửu đầu tử phàm thánh phật tổ
ngũ thập vấn triệu châu đạo đại đạo ngũ thập nhất ngưỡng sơn sơn hà khí dụng
quyển tứ
ngũ thập nhị thủ sơn bồ đề kiếu lộ ngũ thập tam nham đầu phiến phàm chu tiếp
ngũ thập tứ phong huyệt trần lộc ngưu lộc ngũ thập ngũ đầu tử tam thân thuyết pháp
ngũ thập lục tào khê ý chỉ tổ giáo ngũ thập thất tuyết phong trường cừ nhân cảnh
ngũ thập bát quảng giáo kí châu sâm học ngũ thập cửu phong huyệt bì cừu sâm học
lục thập tăng vấn thủ sơn sâm học lục thập nhất thủ sơn thử kinh kinh giáo
lục thập nhị triệu hoành cao pha phật tổ lục thập tam cửu phong quy mao tổ giáo
lục thập tứ lâm tế xuy mao đao kiếm lục thập ngũ đại tùy chứng quy hương đăng
lục thập lục thụy nham bất xuất lục thập thất giao thù thành lao chi thể
lục thập bát thượng lam thị triền sâm học lục thập cửu lạc phố tạng giáo kinh giáo
quyển ngũ
thất thập ba tiêu pháp thân pháp thân thất thập nhất ba tiêu hảo ác thiên hoá
thất thập nhị thiên bành đương hộ phật tổ thất thập tam hoà sơn đả cổ pháp khí
thất thập tứ hoàng liên thanh tiền đối cơ thất thập ngũ tư phúc viên tướng viên tướng
thất thập lục sùng phúc khoan khuếch đối cơ thất thập thất lương sơn đạo trường cầm kì
thất thập bát bá trượng kì đặc trụ sơn
* thất thập cửu lịch thôn tiên trà trà thang
bát thập văn thù cửu khúc vấn pháp
* bát thập nhất tuyết phong điển tòa lương thực
bát thập nhị đức sơn thượng đường bổng ái
* bát thập tam hưng hoá quân kì cốt đổng
bát thập tứ trường khánh bất nghi chi thể
* bát thập ngũ đỗng sơn hành mão thiên truỷ
bát thập lục Quốc sư thị giả thị giả
quyển lục
bát thập thất u thê thượng đường pháp khí bát thập bát đáp ma tam cân phật tổ
bát thập cửu bắc ẩu tạng thân pháp thân cửu thập ngũ phụng lâu tiền đại đạo
cửu thập nhất ngưỡng sơn sáp thiêu điền địa cửu thập nhị pháp nhãn tuệ siêu phật tổ
cửu thập tam triệu châu khám bà ni nữ
* cửu thập tứ đa tử đáp tiền đáp miếu
cửu thập ngũ đại dương huyền chỉ cốt đổng
* cửu thập lục đức sơn thượng đường phật tổ
cửu thập thất đầu tử nguyệt viên nhật nguyệt cửu thập bát ba tiêu trụ trượng trượng lạp
cửu thập cửu phù sơn tú cầu pháp thuộc nhất bá phù sơn cốt đôi tổ giáo
* */
