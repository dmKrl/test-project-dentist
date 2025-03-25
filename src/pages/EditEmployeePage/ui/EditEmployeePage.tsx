import { Title } from '@/shared/Title/ui/Title';
import cls from './EditEmployeePage.module.css';
import { FAB } from '@/shared/FAB';
import { Breadcrumbs } from '@/shared/Breadcrumbs';
import { TypeEmployee } from '@/entites/Employee';
import { FC } from 'react';
import { EditForm } from '@/entites/EditForm/ui/EditForm';

interface EditPageProps {
    employeer?: TypeEmployee;
}

export const EditEmployeePage: FC<EditPageProps> = ({ employeer }) => {
    return (
        <section className={cls.EditEmployeePage}>
            <Breadcrumbs namePage="Редактирование карточки сотрудника" />
            <Title>{employeer?.fullName || 'Иванов Иван Иванович'}</Title>
            <EditForm />
            <FAB />
        </section>
    );
};
