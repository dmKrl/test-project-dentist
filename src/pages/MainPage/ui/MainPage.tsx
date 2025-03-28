import { observer } from 'mobx-react-lite';
import { Title } from '@/shared/Title/ui/Title';
import { Tabs } from '@/widgets/Tabs';
import { Dropdowns } from '@/widgets/Dropdowns';
import { Table } from '@/widgets/Table';
import { FAB } from '@/shared/FAB';
import { useCallback, useEffect, useMemo } from 'react';
import { getEmployeeStore } from '@/entites/Employee';
import { TypeEmployeeDB } from '@/entites/Employee/model/types/employee';
import Pagination from '@/widgets/Pagination/ui/Pagination';
import { FiltersDismissal, filterStore } from '@/features/Filters';
import { changeToFullname } from '@/entites/Employee/model/lib/changeToFullname';

export const MainPage = observer(() => {
    const employees: TypeEmployeeDB[] = getEmployeeStore.employees;

    const filteredEmployees = useMemo(() => {
        return employees.filter((employee) => {
            const matchesStatus =
                filterStore.selectedCatogories.length === 0 ||
                filterStore.selectedCatogories.includes(
                    employee.status?.label ?? '',
                );

            const matchesName =
                filterStore.selectedName.length === 0 ||
                filterStore.selectedName.includes(
                    changeToFullname(
                        employee.surname,
                        employee.name,
                        employee.patronymic,
                    ),
                );

            const matchesRole =
                filterStore.selectendRole.length === 0 ||
                filterStore.selectendRole.includes(
                    employee.administrative_position?.label ?? '',
                );

            return matchesStatus && matchesName && matchesRole;
        });
    }, [
        employees,
        filterStore.selectedCatogories,
        filterStore.selectedName,
        filterStore.selectendRole,
    ]);

    useEffect(() => {
        getEmployeeStore.getEmployees();
    }, [getEmployeeStore]);

    useEffect(() => {
        getEmployeeStore.getRoles();
        getEmployeeStore.getPositions();
        getEmployeeStore.getDepartments();
    }, []);

    const hangedOnChangePage = useCallback(
        (page: number) => {
            getEmployeeStore.getEmployeesOnPage(page);
        },
        [getEmployeeStore],
    );

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
