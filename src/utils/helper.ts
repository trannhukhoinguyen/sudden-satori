export function toKebabCase(str: string): string {
  return str
    ?.normalize("NFD") // tách dấu khỏi ký tự (Ví dụ: "ấ" -> "a" + "̂")
    ?.replace(/[\u0300-\u036f]/g, "") // xoá toàn bộ dấu
    ?.replace(/đ/g, "d")              // chuyển đ -> d
    ?.replace(/Đ/g, "d")
    ?.toLowerCase()
    ?.trim()
    ?.replace(/[^a-z0-9\s-]/g, "") // xoá ký tự đặc biệt (chỉ giữ chữ, số, khoảng trắng, gạch ngang)
    ?.replace(/\s+/g, "-") // thay khoảng trắng bằng gạch ngang
    ?.replace(/-+/g, "-"); // gộp nhiều dấu "-" liên tiếp thành một
}

export function cleanSlug(input: string) {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // ❗ bỏ dấu
    .replace(/[{}]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s\/]+/g, '-')
}