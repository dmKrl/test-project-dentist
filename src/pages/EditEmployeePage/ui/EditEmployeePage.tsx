import { Title } from '@/shared/Title/ui/Title';
import { FAB } from '@/shared/FAB';
import { Breadcrumbs } from '@/shared/Breadcrumbs';
import { EditForm } from '@/features/EditEmployee/ui/EditForm/EditForm';
import cls from './EditEmployeePage.module.css';
import { changeToFullname } from '@/entites/Employee/model/lib/changeToFullname';
import { infoEmployeeStore } from '@/entites/InfoForm';

export const EditEmployeePage = () => {
    const chosenEmployer = infoEmployeeStore.choosenEmployee;

    return (
        <section className={cls.EditEmployeePage}>
            <Breadcrumbs namePage="Редактирование карточки сотрудника" />
            <Title>
                {changeToFullname(
                    chosenEmployer?.surname,
                    chosenEmployer?.name,
                    chosenEmployer?.patronymic,
                ) || 'Иванов Иван Иванович'}
            </Title>
            <EditForm chosenEmployer={chosenEmployer} />
            <FAB />
        </section>
    );
};
