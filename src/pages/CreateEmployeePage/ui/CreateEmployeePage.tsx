import { Title } from '@/shared/Title/ui/Title';
import cls from './CreateEmployeePage.module.css';
import { FAB } from '@/shared/FAB';
import { Breadcrumbs } from '@/shared/Breadcrumbs';
import { CreateForm } from '@/features/CreateEmployee';

export const CreateEmployeePage = () => {
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
};
