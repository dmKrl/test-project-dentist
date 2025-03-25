import { Title } from '@/shared/Title/ui/Title';
import { Tabs } from '@/widgets/Tabs';
import { Filters } from '@/widgets/Filters';
import { Dropdowns } from '@/widgets/Dropdowns';
import { Table } from '@/widgets/Table';
import { FAB } from '@/shared/FAB';

export const MainPage = () => {
    return (
        <section>
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
            <Table />
            <FAB />
        </section>
    );
};
