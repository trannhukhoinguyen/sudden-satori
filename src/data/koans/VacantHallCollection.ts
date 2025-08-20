export interface VacantHallCollection {
  id: number;
  title: string;
  description: string;
  author?: string,
}

/*
* Xutang ji 虛堂集 (Empty hall anthology)
* (虛堂集, Kidōshū): 6 quyển,
* san hành vào năm đầu (1295) niên hiệu Nguyên Trinh (元貞) nhà Nguyên.
* Nguyên văn: Lâm Tuyền Lão Nhân Bình Xướng Đơn Hà Thuần Thiền Sư Tụng Cổ Hư Đường Tập
* (林泉老人評唱丹霞淳禪師頌古虛堂集, Rinsenrōjinhyōshōtankajunzenjijukokidōshū).
* Đây là tập thâu lục 100 tắc tụng cổ của TS. Đơn Hà Tử Thuần (丹霞子淳) nhà Tống để làm kim chỉ nam cho hàng hậu học biện đạo.
* Từ các bài tụng cổ được thâu lục trong Đơn Hà Ngữ Lục (丹霞語錄),
* mỗi tắc có lời dạy chúng của Lâm Tuyền Lão Nhân (TS. Lâm Tuyền Tùng Luân - 林泉從倫),
* rồi được thêm vào trước ngữ cho cổ tắc do Đơn Hà nêu lên, kế đến thêm vào tụng cổ của Đơn Hà,
* cuối cùng có lời bình xướng của TS. Lâm Tuyền Tùng Luân (林泉從倫).
* */

const VacantHallCollections: VacantHallCollection[] = [
  {
    id: 1,
    title: "SƠ QUAN",
    description: "..."
  },
  {
    id: 2,
    title: "TRÙNG QUAN",
    description: "..."
  },
  {
    id: 3,
    title: "MẠT HẬU LAO QUAN",
    description: "..."
  },
];

export default VacantHallCollections;

/*
*
* */
