import { observer } from 'mobx-react-lite';
import { Title } from '@/shared/Title/ui/Title';
import { Tabs } from '@/widgets/Tabs';
import { Dropdowns } from '@/widgets/Dropdowns';
import { Table } from '@/widgets/Table';
import { FAB } from '@/shared/FAB';
import { useEffect, useMemo } from 'react';
import { getEmployeeStore } from '@/entites/Employee';
import { TypeEmployeeDB } from '@/entites/Employee/model/types/employee';
import Pagination from '@/widgets/Pagination/ui/Pagination';
import { FiltersDismissal, filterStore } from '@/features/Filters';

export const MainPage = observer(() => {
    const employees: TypeEmployeeDB[] = getEmployeeStore.employees;

    console.log(filterStore.selectedCatogories);

    const filteredEmployees = useMemo(() => {
        return employees.filter((employee) => {
            const matchesStatus =
                filterStore.selectedCatogories.length === 0 ||
                filterStore.selectedCatogories.includes(
                    employee.status?.label ?? '',
                );

            const matchesName =
                filterStore.selectedName.length === 0 ||
                filterStore.selectedName.includes(employee.surname);

            return matchesStatus && matchesName;
        });
    }, [employees, filterStore.selectedCatogories, filterStore.selectedName]);

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
                <Dropdowns filteredEmployees={employees} />
            </div>
            <FiltersDismissal />
            <Table employees={filteredEmployees} />
            <Pagination
                pagination={getEmployeeStore.pagination}
                onPageChange={hangedOnChangePage}
            />
            <FAB />
        </section>
    );
});
