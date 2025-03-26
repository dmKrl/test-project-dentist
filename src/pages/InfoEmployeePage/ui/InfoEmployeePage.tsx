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

export const InfoEmployeePage: FC<InfoPageProps> = () => {
    const chosenEmployer = infoEmployeeStore.choosenEmployee;

    return (
        <section>
            <Breadcrumbs namePage="Информация о сотруднике" />
            <Title>
                {changeToFullname(
                    chosenEmployer?.surname,
                    chosenEmployer?.name,
                    chosenEmployer?.patronymic,
                )}
            </Title>
            <InfoForm chosenEmployer={chosenEmployer} />
            <FAB />
        </section>
    );
};
