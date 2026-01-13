export interface RetreatSliderEvent {
    title: string;
    schedule: string;
    note: string;
}

export const retreatSliderEvents: RetreatSliderEvent[] = [
    {
        title: 'Thiền sáng',
        schedule: '05:00 – 06:00',
        note: 'hàng tháng'
    },
    {
        title: 'Thiền tối',
        schedule: '05:00 – 06:00',
        note: 'hàng tuần'
    },
    {
        title: 'Thiền 1 ngày',
        schedule: '05:00 – 06:00',
        note: 'hàng ngày'
    }
];
