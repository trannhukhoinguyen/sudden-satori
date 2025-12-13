export interface gate {
  id: number;
  title: string;
  image: string;
  description: string;
}


const gates: gate[] = [
  {
    id: 1,
    title: "SƠ QUAN 初關",
    image: "/images/zen/gate-1.jpg",
    description: "💠 NGHĨA: / " +
        "\"Sơ Quan\" là cửa đầu tiên trong quá trình tham thiền chứng ngộ. " +
        "Đây là cửa ngộ đầu tiên, khi hành giả đốn ngộ kiến tánh, được gọi là kiến tánh thành Phật theo Tổ Sư Thiền. / " +
        "💠 NỘI DUNG: / " +
        "Còn gọi là \"Sát Nhân Kiếm\" 殺人劍 - lưỡi kiếm giết người, vì hành giả phải đoạn trừ hoàn toàn vọng tưởng, tri kiến, sở tri chướng. " +
        "Đây là nơi phá vỡ cái “ngã”, vọng thức, ngũ ấm, xuyên thủng được lớp vỏ chấp trước lâu đời. " +
        "Hành giả khai ngộ được bản tâm, đạt được nghi tình đốn đoạn, nhất niệm không sinh, và thấy được “bổn lai diện mục”. / " +
        "💠 BIỂU HIỆN: / " +
        "Sau khi vượt qua Sơ Quan, hành giả thường trải nghiệm một đại ngộ, khóc, cười, hét, nhảy múa, hoặc viết kệ. " +
        "Tuy nhiên, sự thấy biết còn chưa thuần, dễ rơi vào kiến giải ngộ."
  },
  {
    id: 2,
    title: "TRÙNG QUAN 重關",
    image: "/images/zen/gate-2.jpg",
    description: "💠 NGHĨA: / " +
        "\"Trùng\" nghĩa là lặp lại, chồng lên, tức là cửa ải tiếp theo sau khi ngộ. " +
        "Đây là giai đoạn hành giả kiểm chứng, mài giũa, sống được với ngộ, gọi là hành giải tương ưng. / " +
        "💠 NỘI DUNG: / " +
        "Còn gọi là \"Hoạt nhân kiếm\" 活人劍 - lưỡi kiếm cứu người sống, vì hành giả vào ra sinh tử tự do, cứu độ chúng sanh mà không rơi vào hai bên. " +
        "Hành giả cần làm sạch hết vi tế vô minh, loại bỏ những tàn dư của thức tình, tập khí, phân biệt, để sống thực tại rốt ráo. " +
        "Có thể ví như “đánh bóng gương sáng, để chiếu soi khắp pháp giới”. / " +
        "💠 BIỂU HIỆN: / " +
        "Lúc này hành giả có tự do xuất nhập, tâm vô trụ, phân biệt không dính mắc, không còn sợ hãi trước các cảnh giới hay nghịch duyên. " +
        "Thiền sư Hư Vân gọi đây là giai đoạn \"cưỡi lừa tìm lừa\", ngộ rồi vẫn phải tu."
  },
  {
    id: 3,
    title: "MẠT HẬU LAO QUAN 末後牢關",
    image: "/images/zen/gate-3.jpg",
    description: "💠 NGHĨA: / " +
        "\"Mạt hậu\" nghĩa là cuối cùng, \"lao quan\" là cửa ải kiên cố, khó vượt. " +
        "Đây là cửa ngộ rốt ráo, khi hành giả vượt ra ngoài tất cả pháp - kể cả sự chứng ngộ. / " +
        "💠 NỘI DUNG: / " +
        "Là cửa hoàn toàn thoát ly kiến thủ, ngay cả ý niệm “đã ngộ” cũng bị quét sạch. " +
        "Không còn gì để thủ xả, không còn dấu vết chứng ngộ hay giải thoát - gọi là “xả phược hoàn đan, nhập triệt để vô sanh.” " +
        "Không còn “người tu - pháp tu - đạo quả”; tất cả được buông rơi. / " +
        "💠 BIỂU HIỆN: / " +
        "Hành giả trở nên vô sự nhân (người không việc), đi đứng nằm ngồi đều là đạo. " +
        "Đây là cảnh giới “không ngộ cũng chẳng mê”, “ngộ mà không có người ngộ”, là chỗ triệt ngộ viên mãn."
  },
];

export default gates;
