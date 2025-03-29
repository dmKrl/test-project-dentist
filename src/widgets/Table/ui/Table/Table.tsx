import { FC } from 'react';
import cls from './Table.module.css';
import { TableInfo } from '../TableInfo/TableInfo';
import { Employee, TypeEmployeeDB } from '@/entites/Employee';

interface TableProps {
    className?: string;
    employees?: TypeEmployeeDB[];
}

export const Table: FC<TableProps> = ({ employees }) => {
    return (
        <table className={cls.table}>
            <TableInfo />
            <Employee employees={employees} />
        </table>
    );
};
