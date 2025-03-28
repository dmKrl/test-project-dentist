import ky from 'ky';
import { makeAutoObservable, runInAction } from 'mobx';
import { TypeCreateEmployee } from '../types/typeCreateEmployee';

const mainUrl = 'https://api.mock.sb21.ru';

class CreateStore {
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async createEmployee(newEmployee: TypeCreateEmployee) {
        this.loading = true;
        this.error = null;
        try {
            await ky
                .post(`${mainUrl}/api/v1/users`, { json: newEmployee })
                .json<TypeCreateEmployee>();

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

export const createEmployeeStore = new CreateStore();
