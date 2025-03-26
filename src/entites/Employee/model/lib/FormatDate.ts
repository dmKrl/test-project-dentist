import { format } from 'date-fns';
import { ru } from 'date-fns/locale'; // для русской локализации

export function formatDate(date: Date | number | string | undefined): string {
    if (!date) {
        return '';
    }
    try {
        const parsedDate = new Date(date);

        if (isNaN(parsedDate.getTime())) {
            return 'Некорректная дата';
        }

        return format(parsedDate, 'dd.MM.yyyy', { locale: ru });
    } catch (error: unknown) {
        return `${error}`;
    }
}