import { FC } from 'react';
import cls from './Table.module.css';
import { TableInfo } from '../TableInfo/TableInfo';
import { Employee } from '@/entites/Employee';

interface TableProps {
    className?: string;
}

export const Table: FC<TableProps> = () => {
    return (
        <table className={cls.table}>
            <TableInfo />
            <Employee />
        </table>
    );
};
