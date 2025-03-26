import { FC } from 'react';
import { Breadcrumbs } from '@/shared/Breadcrumbs';
import { Title } from '@/shared/Title';
import { infoEmployeeStore, InfoForm } from '@/entites/InfoForm';
import { FAB } from '@/shared/FAB';
import { TypeEmployeeDB } from '@/entites/Employee/model/types/employee';
import { changeToFullname } from '@/entites/Employee/model/lib/changeToFullname';

interface InfoPageProps {
    employeer?: TypeEmployeeDB;
}

export const InfoEmployeePage: FC<InfoPageProps> = ({ employeer }) => {
    const chosenEmployer = infoEmployeeStore.choosenEmployee;

    return (
        <section>
            <Breadcrumbs namePage="Информация о сотруднике" />
            <Title>
                {changeToFullname(
                    employeer?.surname,
                    employeer?.name,
                    employeer?.patronymic,
                ) || 'Иванов Иван Иванович'}
            </Title>
            <InfoForm chosenEmployer={chosenEmployer} />
            <FAB />
        </section>
    );
};
