import { Title } from '@/shared/Title/ui/Title';
import cls from './MainPage.module.css';
import { Tabs } from '@/widgets/Tabs';
import { Filters } from '@/widgets/Filters';
import { Dropdowns } from '@/widgets/Dropdowns';

export const MainPage = () => {
    return (
        <section className={cls.mainPage}>
            <Tabs />
            <Title buttonMounted>Штатное расписание</Title>
            <div>
                <Dropdowns />
            </div>
            <Filters
                categories={[
                    'Выбрать всех',
                    'Отображать уволенных',
                    'Отображать заблокированных',
                ]}
            />
        </section>
    );
};
