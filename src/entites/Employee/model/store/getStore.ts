import ky from 'ky';
import { DataPagination, TypeEmployeeDB } from '../types/employee';
import { makeAutoObservable, runInAction } from 'mobx';

const mainUrl = 'https://api.mock.sb21.ru';

interface IEmployeeData {
    items: TypeEmployeeDB[];
    pagination: DataPagination;
}

interface IEmployeeResponse {
    data: IEmployeeData;
    message: string;
}

class EmployeeStore {
    employees: TypeEmployeeDB[] = [];
    loading: boolean = false;
    error: string | null = null;
    pagination: DataPagination | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async getEmployees() {
        this.loading = true;
        this.error = null;
        try {
            const responseEmployee = await ky
                .get(`${mainUrl}/api/v1/users`)
                .json<IEmployeeResponse>();
            console.log(responseEmployee);
            runInAction(() => {
                this.employees = responseEmployee.data.items;
                this.pagination = responseEmployee.data.pagination;
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            runInAction(
                () =>
                    (this.error =
                        error.message || 'Ошибка при загрузке сотрудников'),
            );
        } finally {
            runInAction(() => (this.loading = false));
        }
    }
}

export const getEmployeeStore = new EmployeeStore();
