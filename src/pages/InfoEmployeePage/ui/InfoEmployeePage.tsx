import { Breadcrumbs } from '@/shared/Breadcrumbs';
import { Title } from '@/shared/Title';
import { infoEmployeeStore, InfoForm } from '@/entites/InfoForm';
import { FAB } from '@/shared/FAB';
import { changeToFullname } from '@/entites/Employee/model/lib/changeToFullname';

export const InfoEmployeePage = () => {
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
