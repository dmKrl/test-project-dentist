import { Title } from '@/shared/Title/ui/Title';
import { FAB } from '@/shared/FAB';
import { Breadcrumbs } from '@/shared/Breadcrumbs';
import { getEmployeeStore, TypeEmployee } from '@/entites/Employee';
import { FC, useEffect } from 'react';
import { EditForm } from '@/features/EditEmployee/ui/EditForm/EditForm';
import cls from './EditEmployeePage.module.css';

interface EditPageProps {
    employeer?: TypeEmployee;
}

export const EditEmployeePage: FC<EditPageProps> = ({ employeer }) => {
    useEffect(() => {
        getEmployeeStore.getRoles();
        getEmployeeStore.getPositions();
        getEmployeeStore.getDepartments();
    }, []);
    return (
        <section className={cls.EditEmployeePage}>
            <Breadcrumbs namePage="Редактирование карточки сотрудника" />
            <Title>{employeer?.fullName || 'Иванов Иван Иванович'}</Title>
            <EditForm />
            <FAB />
        </section>
    );
};
