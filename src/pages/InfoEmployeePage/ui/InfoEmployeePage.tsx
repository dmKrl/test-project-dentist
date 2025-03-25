import { FC } from 'react';
import { Breadcrumbs } from '@/shared/Breadcrumbs';
import { Title } from '@/shared/Title';
import { InfoForm } from '@/entites/InfoForm';
import { TypeEmployee } from '@/entites/Employee';
import { FAB } from '@/shared/FAB';

interface InfoPageProps {
    employeer?: TypeEmployee;
}

export const InfoEmployeePage: FC<InfoPageProps> = ({ employeer }) => {
    return (
        <section>
            <Breadcrumbs namePage="Информация о сотруднике" />
            <Title>{employeer?.fullName || 'Иванов Иван Иванович'}</Title>
            <InfoForm />
            <FAB />
        </section>
    );
};
