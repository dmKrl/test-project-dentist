import { FC } from 'react';
import cls from './Table.module.css';
import { TableInfo } from '../TableInfo/TableInfo';
import { Employee } from '@/entites/Employee';
import { TypeEmployeeDB } from '@/entites/Employee/model/types/employee';

interface TableProps {
    className?: string;
    employees?: TypeEmployeeDB[];
}

export const Table: FC<TableProps> = ({ employees }) => {
    console.log(employees);
    return (
        <table className={cls.table}>
            <TableInfo />
            <Employee employees={employees} />
        </table>
    );
};
