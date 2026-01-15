import { Solar } from 'lunar-javascript';

export interface LunarDate {
    day: number;
    month: number;
    year: number;
}

export function getTodayLunar(): LunarDate {
    const lunar = Solar.fromDate(new Date()).getLunar();

    return {
        day: lunar.getDay(),
        month: lunar.getMonth(),
        year: lunar.getYear(),
    };
}
