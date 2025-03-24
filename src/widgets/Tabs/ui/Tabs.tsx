import { InputTheme } from '@/shared/Input';
import { Input } from '@/shared/Input/ui/Input';
import cls from './Tabs.module.css';

export const Tabs = () => {
    return (
        <div className={cls.tabs}>
            <Input
                type="radio"
                inputTheme={InputTheme.TABS_INPUT}
                labelInput="Карточка организации"
                checked
            />
            <Input
                type="radio"
                inputTheme={InputTheme.TABS_INPUT}
                labelInput="Обособленные подразделения"
            />
            <Input
                type="radio"
                inputTheme={InputTheme.TABS_INPUT}
                labelInput="Штатное расписание"
                className={cls.activeRadio}
            />
            <Input
                type="radio"
                inputTheme={InputTheme.TABS_INPUT}
                labelInput="Исполнительный орган по ВККиБМД"
            />
            <Input
                type="radio"
                inputTheme={InputTheme.TABS_INPUT}
                labelInput="Мониторинг"
            />
        </div>
    );
};
