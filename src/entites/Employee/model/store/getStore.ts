import { DataPagination, TypeEmployeeDB } from '../types/employee';
import { makeAutoObservable, runInAction } from 'mobx';
import { mainUrl } from '../env/mainEnv';
import ky from 'ky';
import {
    Department,
    DepartmentsDB,
    Position,
    PositionsDB,
    Role,
    RolesDB,
} from '../types/infoSchema';

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
    departments: Department[] = [];
    roles: Role[] = [];
    positions: Position[] = [];
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
                .get(`${mainUrl}/api/v1/users?sort=id`)
                .json<IEmployeeResponse>();
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

    async getEmployeesOnPage(page: number) {
        this.loading = true;
        this.error = null;
        try {
            const responseEmployee = await ky
                .get(`${mainUrl}/api/v1/users?sort=id&page=${page}`)
                .json<IEmployeeResponse>();
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

    async getDepartments() {
        this.loading = true;
        this.error = null;
        try {
            const responseDepartments = await ky
                .get(`${mainUrl}/api/v1/departments`)
                .json<DepartmentsDB>();
            runInAction(() => {
                this.departments = responseDepartments.data.items;
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            runInAction(
                () =>
                (this.error =
                    error.message || 'Ошибка при загрузке департаментов'),
            );
        } finally {
            runInAction(() => (this.loading = false));
        }
    }

    async getPositions() {
        this.loading = true;
        this.error = null;
        try {
            const responsePositions = await ky
                .get(`${mainUrl}/api/v1/positions`)
                .json<PositionsDB>();
            runInAction(() => {
                this.positions = responsePositions.data.items;
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            runInAction(
                () =>
                (this.error =
                    error.message || 'Ошибка при загрузке позиций'),
            );
        } finally {
            runInAction(() => (this.loading = false));
        }
    }

    async getRoles() {
        this.loading = true;
        this.error = null;
        try {
            const responseRoles = await ky
                .get(`${mainUrl}/api/v1/roles`)
                .json<RolesDB>();
            runInAction(() => {
                this.roles = responseRoles.data.items;
            });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            runInAction(
                () =>
                (this.error =
                    error.message || 'Ошибка при загрузке ролей'),
            );
        } finally {
            runInAction(() => (this.loading = false));
        }
    }
}

export const getEmployeeStore = new EmployeeStore();
