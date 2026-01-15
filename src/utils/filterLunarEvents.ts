import type { Events } from '@/data/events/upcoming-events.ts';
import type { LunarDate } from '@/utils/lunar.js';

export function isEventToday(event: Events, lunar: LunarDate): boolean {
    const rule = event.lunarRule;
    if (!rule) return false;

    switch (rule.type) {
        case 'daily':
            return true;

        case 'monthly':
            return rule.day === undefined || rule.day === lunar.day;

        case 'yearly':
            return rule.day === lunar.day && rule.month === lunar.month;

        default:
            return false;
    }
}

export function getTodayLunarEvents(
    events: Events[],
    lunar: LunarDate
): Events[] {
    return events.filter(e => isEventToday(e, lunar));
}
