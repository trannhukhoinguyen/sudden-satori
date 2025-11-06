import { format, parseISO } from "date-fns";

/**
 * Format a date in a human-readable format
 * @param {Date|string} date The date to format
 * @param {string} formatStr The format string (default: 'MMMM d, yyyy')
 * @returns {string} The formatted date
 */
export function formatDate(date, formatStr = "MMMM d, yyyy") {
  if (!date) return "";
  
  // If date is a string, parse it
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  
  return format(dateObj, formatStr);
}

/**
 * Check if a date is in the future
 * @param {Date|string} date The date to check
 * @returns {boolean} True if the date is in the future
 */
export function isFutureDate(date) {
  if (!date) return false;
  
  // If date is a string, parse it
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  
  return dateObj > new Date();
}

/**
 * Check if a date is in the past
 * @param {Date|string} date The date to check
 * @returns {boolean} True if the date is in the past
 */
export function isPastDate(date) {
  if (!date) return false;
  
  // If date is a string, parse it
  const dateObj = typeof date === "string" ? parseISO(date) : date;
  
  return dateObj < new Date();
}
export function toKebabCase(str) {
  return str
    ?.normalize("NFD") // tách dấu khỏi ký tự (Ví dụ: "ấ" -> "a" + "̂")
    ?.replace(/[\u0300-\u036f]/g, "") // xoá toàn bộ dấu
    ?.toLowerCase()
    ?.trim()
    ?.replace(/[^a-z0-9\s-]/g, "") // xoá ký tự đặc biệt (chỉ giữ chữ, số, khoảng trắng, gạch ngang)
    ?.replace(/\s+/g, "-") // thay khoảng trắng bằng gạch ngang
    ?.replace(/-+/g, "-"); // gộp nhiều dấu "-" liên tiếp thành một
}