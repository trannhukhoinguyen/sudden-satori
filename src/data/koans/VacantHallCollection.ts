export interface VacantHallCollection {
  id: number;
  titleOfficial?: string;
  title?: string;
  group: number;
  path: string;
  description: string;
  author?: string,
}

/*
* Xutang ji 虛堂集 (Empty hall anthology)
* (虛堂集, Kidōshū): 6 quyển,
* san hành vào năm đầu (1295) niên hiệu Nguyên Trinh (元貞) nhà Nguyên.
* Nguyên văn: Lâm Tuyền Lão Nhân Bình Xướng Đơn Hà Thuần Thiền Sư Tụng Cổ Hư Đường Tập
* (林泉老人評唱丹霞淳禪師頌古虛堂集, Rinsenrōjinhyōshōtankajunzenjijukokidōshū).
* Đây là tập thâu 6 100 tắc tụng cổ của TS. Đơn Hà Tử Thuần (丹霞子淳) nhà Tống để làm kim chỉ nam cho hàng hậu học biện đạo.
* Từ các bài tụng cổ được thâu 6 trong Đơn Hà Ngữ Lục (丹霞語錄),
* mỗi tắc có lời dạy chúng của Lâm Tuyền Lão Nhân (TS. Lâm Tuyền Tùng Luân - 林泉從倫),
* rồi được thêm vào trước ngữ cho cổ tắc do Đơn Hà nêu lên, kế đến thêm vào tụng cổ của Đơn Hà,
* cuối cùng có lời bình xướng của TS. Lâm Tuyền Tùng Luân (林泉從倫).
* https://www.rongmotamhon.net/xem-kinh_lam-tuyen-lao-nhon-binh_ddpmtdsc_muc-luc.html
* */

const VacantHallCollections: VacantHallCollection[] = [
  {
    id: 1,
    titleOfficial: "Thanh Nguyên giai cấp sâm học",
    title: "Không rơi giai cấp",
    group: 1,
    path: "vhc001-khong-roi-giai-cap",
    description: "...",
  },
];

export default VacantHallCollections;

/*
* quyển I
1 Thanh Nguyên giai cấp sâm học
2 Thạch Đầu Tào khê đối cơ
3 Dược Sơn toạ thứ thiền định
4 Thuyền Tử Giáp Sơn chu tiếp
5 Bế thụ Đỗng Sơn sâm học
6 Sa di trụ am vũ tuyết
7 Đạo Ngô 5 phong đối cơ
8 Đỗng Sơn lang mạc tính danh
9 Vân Nham cân bình hương đăng
10 Nam toàn dị loại tỉnh phóng
11 Giáp Sơn thị cảnh nhân cảnh
12 Giáp Sơn bất hội môn hộ
13 Giáp Sơn thượng đường thị chúng
14 Giáp Sơn bát trần Phật tổ
15 Thạch Sương xúc mục bình tích
16 Tiêm Nguyên trì thiêu thiên hoá
17 Đỗng Sơn sơ thu giải kết
18 Đỗng Sơn đại sự phục sức
*
quyển II
19 Đỗng Sơn điểu đạo kiếu lộ
20 Thần Sơn quá kiếu kiếu lộ
21 Lạc Phố đào kim trân bảo
22 Lạc Phố tổ ý tổ giáo
23 Lạc Phố cung dưỡng Phật tổ
24 Cáp khê tướng khán tỉnh phóng
25 Lạc Phố 1 hào phi tẩu
26 Lạc Phố Phật pháp vấn pháp
27 Lạc Phố quy hương tỉnh phóng
28 Lạc Phố tổ giáo tổ giáo
29 Thiều Sơn lễ bái lễ bái
30 Thiều Sơn gia phong gia phong
31 Hoàng Sơn mễ giá lương thực
32 Thượng Lam bản phân đối cơ
33 Tứ thiền nhập đán kiếu lộ
*
quyển III
34 Hải Hồ hành đạo đại đạo
35 Thiên cái dục thất mộc dục
36 Cửu Phong hữu ngôn Phật tổ
37 Cửu Phong tướng truyền Phật tổ
38 Cửu Phong thị giả thiên hoá
39 Đại quang Đạt Ma Phật tổ
40 Cường đức thượng tòa ngưu lộc
41 Văn Thù tăng do chân tượng
42 Phụng Tường thạch trụ nhân cảnh
43 Tăng vấn Tào Sơn tân chủ
44 Tào từ Đỗng Sơn du Sơn
45 Thậm vật tống mộc thủ quý miêu khuyển
46 Khô mộc hoa khai hoa quả
47 Sơ Sơn thọ đáp đáp miếu
48 Vân Cư thượng đường thị chúng
49 Thanh Lâm kính vãng thỏ xà
*
quyển IV
52 Thử xâm đằng phi tẩu
51 Bạch thuỷ thanh sắc thị chúng
52 Bạch Mã pháp thân pháp thân
53 Cửu Phong cử nhất thị chúng
54 Thiên Đồng ưng dụng tâm nhãn
55 Thanh tịnh hành giả kinh giáo
56 Bắc Viện ngưu đầu Phật tổ
57 Thanh Phong đại sự đối cơ
58 Mộc bình nhất âu chu tiếp
59 Đồng toàn tướng truyền cốt đổng
60 Vấn bá nham thiền thiền định
61 Vấn bá đạo đại đạo
62 Vấn bá nham giáo kinh giáo
63 Lặc Đàm đối đảo khí dụng
64 Đồng An nhân sư Phật tổ
65 Cốc Sơn tổ ý tổ giáo
66 Bạch Vân thâm xứ đối cơ
67 Đại Lĩnh thanh tịnh trân bảo
68 Đồng An gia phong gia phong
*
quyển V
69 Y kinh giải nghĩa kinh giáo
70 Vấn chư Phật sư Phật tổ
71 Cô phong độc tú điện đường
72 Vấn bản lai tâm tâm nhãn
73 Bản lai phụ mẫu tỉnh phóng
74 Tây lai đích ý tổ giáo
75 A dục gia phong gia phong
76 Tứ hải yến thanh đối cơ
77 Phi tư lượng xứ đối cơ thất
78 Bạch mi sái nhiệt tuế thời
79 Thấu pháp thân cú pháp thân
80 Thạch Môn gia phong gia phong
*
quyển VI
81 Tịnh chúng liên hoa hoa quả
82 Đồng An nhị cơ đối cơ
83 Quảng Đức ngôn ngữ đối cơ
84 Quảng Đức 9 phụ kính phiến
85 Quảng Đức ba lang chu tiếp
86 Vân Quang tác ngưu ngưu lộc
87 Thái Nguyên số gia trai dục
88 Lương Sơn nhật dụng đối cơ
89 Lương Sơn tổ ý tổ giáo
90 Lương Sơn không kiếp pháp khí
91 Đại Dương thượng đường thị chúng
92 Đại Dương gia phong gia phong
93 Đầu Tử tông phong pháp thuộc
94 Đầu Tử thị chúng phi tẩu
95 Đầu Tử niêm hương đế vương
96 Thiên Ninh thùy gia pháp thuộc
97 Thiên Ninh dạ bán đối cơ
98 Thiên Ninh thượng đường pháp thân
99 Bảo Thọ thượng đường trượng lạp
100 Tam giới duy tâm thị chúng
* */
