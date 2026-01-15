// Có thể dùng thư viện nhỏ gọn
// npm i lunar-javascript
import { Solar } from 'lunar-javascript';

export interface LunarDate {
    day: number;
    month: number;
    year: number;
    isLeap: boolean;
}

export function getTodayLunar(): LunarDate {
    const today = Solar.fromDate(new Date());
    const lunar = today.getLunar();

    return {
        day: lunar.getDay(),
        month: lunar.getMonth(),
        year: lunar.getYear(),
        isLeap: lunar.isLeap(),
    };
}
