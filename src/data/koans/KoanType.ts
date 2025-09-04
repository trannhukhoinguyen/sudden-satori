export interface koanType {
  id: number;
  title: string;
  subTitle: string;
  description: string;
}
export const koanDescription = {
  top:
    'Công án (zh. gōng-àn 公案, ja. kōan) cố nguyên nghĩa là một án công khai, quyết định phải trái trong quan phủ. ' +
    'Trong Thiền tông, thuật ngữ quan trọng này chỉ một phương pháp tu tập thiền định đặc biệt. ' +
    'Công án có thể là một đoạn kinh, một kinh nghiệm giác ngộ, một câu chuyện về một vị sư, một cuộc đàm thoại, vấn đáp hay một cuộc pháp chiến. ' +
    'Nhưng chúng có chung một điều là đề cập đến thể tính của vạn vật. ' +
    'Đặc trưng của công án là thường thường nghịch lý, "nằm ngoài phạm vi của lý luận". ' +
    'Công án không phải là "câu đố" thông thường vì nó không hề được giải đáp bằng lý luận, muốn hiểu nó phải nhảy qua một cấp độ khác của nhận thức. ' +
    'Khoảng giữa thế kỉ thứ X, Thiền tông bắt đầu dùng công án như phương tiện để giáo hoá và các thiền sinh sử dụng chúng làm đối tượng quán tưởng trong lúc thiền. ' +
    'Vì lời giải của công án thường nằm ngoài lý luận, nên thiền sinh thấy rõ giới hạn của tư duy và bị buộc phải chuyển hoá tâm thức bằng một bước nhảy của trực giác, nhảy qua khỏi sự mâu thuẫn của lý luận nhị nguyên. ' +
    'Với tâm thức này, thiền sinh có một kinh nghiệm trực tiếp về thể tính. Phương tiện công án được phổ biến trong các dòng thiền Lâm Tế tông, Tào Động tông ở Trung Quốc và Nhật Bản. ' +
    'Người ta cho rằng, gom góp lại có tất cả khoảng 1700 công án - một con số mang giá trị trừu tượng - và trong số đó 500-600 ngày nay còn được lưu hành tại Nhật. ' +
    'Phần lớn các công án được ghi lại trong các tập như Vô môn quan, Bích nham lục, Thong dong lục, Lâm Tế lục. ' +
    'Người ta thường nhắc đến việc sử dụng công án làm phương tiện tu tập trong tông Lâm Tế nhưng chính tông Tào Động cũng thường hay sử dụng. ' +
    'Các vị Thiền sư sau này khuyến khích môn đệ của mình tham quán công án nhằm cản trở tâm thức của thiền sinh trở lại tâm trạng của phàm phu - sau khi đã nếm được mùi vị giác ngộ lần đầu, có thể gọi là "lần đầu thấy đạo". ' +
    'Ngoài ra, việc quán công án cũng giúp thiền sinh phát triển và mở rộng kinh nghiệm giác ngộ cho đến lúc tỉnh ngộ triệt để, được thầy ấn khả. ' +
    'Khi trắc nghiệm sự chứng ngộ của môn đệ trong lúc tu tập công án cấp cao, các vị Thiền sư thường đặt ra những câu hỏi đặc biệt. ' +
    'Những câu hỏi ngang dọc, hỏi về sự liên hệ của công án (thiền sinh đang quán) với giáo lý Đại thừa, đặt những câu hỏi mới, khác biệt (tạp tắc 雜則, ja. zassoku) song song với công án gốc (bản tắc 本則, ja. honsoku). ' +
    'Vì vậy, công án chính được sáng rọi cùng tận bằng nhiều cách khác nhau. ' +
    'Điều dĩ nhiên là thiền sinh không thể tham quán tất cả 1700 công án nhưng một số tương đối lớn được tham quán và thiền sinh được trắc nghiệm tường tận. ',
  middle:
    'Bản tắc (zh.本則, ja. honsoku) nghĩa là "Quy tắc căn bản", là một cách gọi khác của một Công án, được sử dụng trong hai tập Bích nham lục và Vô môn quan để phân biệt với những thành phần khác của công án như "thuỳ thị", "trước ngữ," "bình xướng".',
  bottom: {
    intro: 'Là một phương tiện tối trọng để đạt giác ngộ, phép quán công án đòi hỏi ba yếu tố mà thiền sinh phải đạt được là:',
    body: [
      '1. ĐẠI TÍN ở đây được hiểu như là niềm tin tuyệt đối vào khả năng giác ngộ của chính mình',
      '2. ĐẠI PHẤN CHÍ là sự tinh tiến, kiên trì dũng mãnh',
      '3. ĐẠI NGHI ĐOÀN ở đây không có nghĩa nghi ngờ bình thường mà chỉ trạng thái tập trung tư tưởng tuyệt đỉnh',
    ],
  },
  blockquote: {
    intro:
      'Các điểm mâu thuẫn trong công án có nhiệm vụ gia tăng Đại nghi đoàn này và Thiền sư Bạch Ẩn bảo rằng: "Đại nghi - Đại ngộ" (zh. 大疑大悟), nghĩa là càng nghi nhiều, càng ngộ sâu. ' +
      'Trong lời bình của công án đầu tiên của Vô môn quan, Thiền sư Vô Môn Huệ Khai viết như sau (Trần Tuấn Mẫn dịch):',
    body:
      'Hãy tận dụng ba trăm sáu mươi xương cốt, tám vạn bốn ngàn lỗ chân lông, vận dụng cả thân tâm trở thành một khối nghi, tham ngay chữ không, ngày đêm nghiền ngẫm. ' +
      'Bỏ hết những cái biết tệ hại trước kia, lâu ngày trở thành thuần thục, tự nhiên trong ngoài thành một khối, như kẻ câm nằm mộng chỉ một mình mình hay. ' +
      'Bỗng nhiên bộc phát, trời kinh đất chuyển, như đoạt được thanh đại đao của Quan Vũ, gặp Phật giết Phật, gặp Tổ giết Tổ, dửng dưng với bờ sinh tử, đạt đại tự tại, chu du trong lục đạo, tứ sinh.... ',
  }
};

const koanTypes: koanType[] = [
  {
    id: 1,
    title: "PHÁP THÂN CÔNG ÁN",
    subTitle: "zh. 法身公案, ja. hosshin kōan",
    description:
        "chỉ các loại công án có thể giúp đỡ thiền sinh chỉ một bước một vượt thế giới nhị nguyên, lần đầu chứng ngộ trực tiếp Pháp thân (sa. dharmakāya, ja. hosshin), Phật tính (sa. buddhatā, ja. busshō), theo Tâm kinh thì gọi là \"Sắc tức là Không\". " +
        "Rất nhiều công án trong các tập danh tiếng được xếp vào loại này mà nổi danh nhất có lẽ là công án thứ nhất của tập Vô môn quan với tên \"Con chó của Triệu Châu\" (Triệu Châu cẩu tử 趙州狗子)."
  },
  {
    id: 2,
    title: "CƠ QUAN CÔNG ÁN",
    subTitle: "zh. 機關公案, ja. kikan kōan",
    description:
        "Cơ quan ở đây có thể hiểu là bộ phận, dụng cụ): mục đích của các Pháp thân công án là thế giới bất phân biệt, nhưng thiền sinh chưa được dừng chân nơi đây. " +
        "Cơ quan công án hướng dẫn thiền sinh đến một bước nữa, phân biệt trong thế giới không phân biệt, ngộ được lý \"Không tức là Sắc\". " +
        "Được xếp vào loại này là công án 17 và 37 của Vô môn quan."
  },
  {
    id: 3,
    title: "NGÔN THUYÊN CÔNG ÁN",
    subTitle: "zh. 言詮公案, ja. gonsen kōan",
    description:
        "Chỉ những công án mà thiền sinh phải tham quán ý nghĩa tột cùng của ngôn ngữ mà chư vị tiền bối sử dụng hoằng hoá (ngôn thuyên nghĩa là ngôn ngữ giải thích kĩ càng, trọn vẹn). " +
        "Các vị Thiền sư sử dụng ngôn ngữ rất tài tình, đầy thi vị nhưng điểm đặc sắc nhất là các ngôn ngữ này không hề dừng bước chỉ trong khuôn khổ thẩm mĩ mà vượt qua cả nó, bao hàm ý nghĩa cùng tột, trực chỉ chân lý. " +
        "Đại diện cho loại công án này chính là Bích nham lục của Thiền sư Viên Ngộ. " +
        "Một số công án trong Vô môn quan cũng được xếp vào loại này (21, 24, 27, 30, 33, 34)."
  },
  {
    id: 4,
    title: "NAN THẤU CÔNG ÁN",
    subTitle: "zh. 難透公案, ja. nantō kōan",
    description:
        "Chỉ những công án rất khó (nan) lĩnh hội (thấu) vì những sự đối nghịch ngay trong trường hợp được trình bày. Các công án thuộc loại này giúp thiền sinh khinh an thấu rõ được sự vô ngại của sự vật, có thể nói theo giáo lý của Hoa nghiêm tông là Sự sự vô ngại (zh. 事事無礙). Chính sự chinh phục, thấu hiểu lý này là yếu tố của tâm tư khinh an, tự do tự tại mà các bậc giác ngộ thụ hưởng. " +
        "Thiền sư Bạch Ẩn Huệ Hạc thường nhắc đến tám công án thuộc loại này mà trong đó ba công án nằm trong tập Vô môn quan, đó là tắc 13, 35, 38. Công án 38 như sau: \"Ngũ Tổ Pháp Diễn hỏi chúng: Ví như con trâu đi qua khung cửa, đầu, sừng, bốn chân đều lọt, sao đuôi lại chẳng lọt được?\""
  },
  {
    id: 5,
    title: "NGŨ VỊ CÔNG ÁN",
    subTitle: "zh. 五位公案, ja. goi kōan",
    description:
        "Chỉ các công án cuối cùng mà thiền sinh phải vượt qua. " +
        "Các công án này có liên hệ trực tiếp với Ngũ vị quân thần (Động Sơn ngũ vị) của vị Khai tổ tông Tào Động là Thiền sư Động Sơn Lương Giới. " +
        "Kinh nghiệm giác ngộ của thiền sinh—đạt được qua bốn loại công án trước—được thử thách lần cuối."
  },
];

export default koanTypes;
