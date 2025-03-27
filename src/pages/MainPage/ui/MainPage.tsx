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
import Pagination from '@/widgets/Pagination/ui/Pagination';

export const MainPage = observer(() => {
    const employees: TypeEmployeeDB[] = getEmployeeStore.employees;

    useEffect(() => {
        getEmployeeStore.getEmployees();
    }, [getEmployeeStore]);

    const hangedOnChangePage = (page: number) => {
        getEmployeeStore.getEmployeesOnPage(page);
    };

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
            <Pagination
                pagination={getEmployeeStore.pagination}
                onPageChange={hangedOnChangePage}
            />
            <FAB />
        </section>
    );
});
