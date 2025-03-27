import { Title } from '@/shared/Title/ui/Title';
import { FAB } from '@/shared/FAB';
import { Breadcrumbs } from '@/shared/Breadcrumbs';
import { CreateForm } from '@/features/CreateEmployee';
import { useEffect } from 'react';
import { getEmployeeStore } from '@/entites/Employee';
import cls from './CreateEmployeePage.module.css';
import { observer } from 'mobx-react-lite';

export const CreateEmployeePage = observer(() => {
    useEffect(() => {
        getEmployeeStore.getRoles();
        getEmployeeStore.getPositions();
        getEmployeeStore.getDepartments();
    }, []);
    return (
        <section>
            <Breadcrumbs namePage="Добавление нового сотрудника" />
            <Title className={cls.createTitle}>
                Основные данные сотрудника
            </Title>
            <CreateForm />
            <FAB />
        </section>
    );
});
