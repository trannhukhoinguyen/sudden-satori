export type LunarRule =
    | { type: 'daily' }
    | { type: 'weekly'; weekday?: number }
    | { type: 'monthly'; day?: number }
    | { type: 'yearly'; day: number; month: number };

export interface Events {
    title: string;
    schedule: string;
    note: string;
    lunarRule?: LunarRule;
}

export const upcomingEvents: Events[] = [
    {
        title: 'Thiền sáng',
        schedule: '05:00 - 06:00',
        note: 'hàng ngày',
        lunarRule: { type: 'daily' }
    },
    {
        title: 'Thiền 1 ngày',
        schedule: '05:00 - 18:00',
        note: 'mùng 1 âm lịch',
        lunarRule: { type: 'monthly', day: 1 }
    },
    {
        title: 'Lễ Vía Phật A Di Đà',
        schedule: 'Cả ngày',
        note: '17/11 ÂL',
        lunarRule: { type: 'yearly', day: 17, month: 11 }
    }
];

export const cyclicalEvents: Events[] = [
    {
        title: 'Thiền sáng',
        schedule: '05:00 - 06:00',
        note: 'hàng ngày',
        lunarRule: { type: 'daily' }
    },
    {
        title: 'Thiền 1 ngày',
        schedule: '05:00 - 18:00',
        note: 'mùng 1 âm lịch',
        lunarRule: { type: 'monthly', day: 1 }
    },
    {
        title: 'Lễ Vía Phật A Di Đà',
        schedule: 'Cả ngày',
        note: '17/11 ÂL',
        lunarRule: { type: 'yearly', day: 17, month: 11 }
    }
];
