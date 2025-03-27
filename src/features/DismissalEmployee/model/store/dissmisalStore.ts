import { mainUrl } from '@/entites/Employee';
import { makeAutoObservable, runInAction } from 'mobx';
import ky from 'ky';

class DismissalStore {
    loading: boolean = false;
    error: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    async dismissalEmployee(id: string | number | undefined) {
        this.loading = true;
        this.error = null;
        try {
            await ky.delete(`${mainUrl}/api/v1/users/${id}`).json();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            runInAction(
                () =>
                    (this.error =
                        error.message || 'Ошибка при удалении сотрудника'),
            );
        } finally {
            runInAction(() => (this.loading = false));
        }
    }
}

export const dismissalEmployeeStore = new DismissalStore();
