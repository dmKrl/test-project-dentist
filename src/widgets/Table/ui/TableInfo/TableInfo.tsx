import cls from './TableInfo.module.css';
import { InfoItem } from '@/shared/InfoItem/ui/InfoItem';

export const TableInfo = () => {
    return (
        <thead className={cls.tableInfo}>
            <tr>
                <InfoItem className={cls.entryStart}></InfoItem>
                <InfoItem className={cls.fullName}>ФИО</InfoItem>
                <InfoItem className={cls.phone}>Телефон</InfoItem>
                <InfoItem className={cls.mail}>E-mail</InfoItem>
                <InfoItem className={cls.password}>Пароль</InfoItem>
                <InfoItem className={cls.jobPosition}>Должность</InfoItem>
                <InfoItem className={cls.role}>Роль в ВКК</InfoItem>
                <InfoItem className={cls.status}>Статус УЗ</InfoItem>
                <InfoItem className={cls.pap}>ПЭП</InfoItem>
                <InfoItem className={cls.dateJoin}>
                    Дата принятия на работу
                </InfoItem>
                <InfoItem className={cls.dateQuit}>Дата увольнения</InfoItem>
                <InfoItem className={cls.dismiss}></InfoItem>
                <InfoItem className={cls.entry}></InfoItem>
                <InfoItem className={cls.entry}></InfoItem>
                <InfoItem className={cls.entry}></InfoItem>
            </tr>
        </thead>
    );
};
