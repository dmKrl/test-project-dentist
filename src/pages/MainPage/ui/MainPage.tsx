import { observer } from 'mobx-react-lite';
import { Title } from '@/shared/Title/ui/Title';
import { Tabs } from '@/widgets/Tabs';
import { Filters } from '@/widgets/Filters';
import { Dropdowns } from '@/widgets/Dropdowns';
import { Table } from '@/widgets/Table';
import { FAB } from '@/shared/FAB';
import { useEffect } from 'react';
import { getEmployeeStore } from '@/entites/Employee';
import { TypeEmployeeDB } from '@/entites/Employee/model/types/employee';

export const MainPage = observer(() => {
    const employees: TypeEmployeeDB[] = getEmployeeStore.employees;

    useEffect(() => {
        getEmployeeStore.getEmployees();
    }, [getEmployeeStore]);

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
            <Table employees={employees} />
            <FAB />
        </section>
    );
});
