import { TypeEmployeeDB } from '@/entites/Employee/model/types/employee';
import { makeAutoObservable, runInAction } from 'mobx';

class InfoEmployeeStore {
    choosenEmployee: TypeEmployeeDB = {
        id: '',
        name: '',
        surname: '',
        patronymic: '',
        email: '',
        phone: '',
        department: null,
        status: null,
        roles: [],
        administrative_position: null,
        medical_position: null,
        hired_at: 0,
        fired_at: 0,
    };

    constructor() {
        makeAutoObservable(this);
    }

    setChoosenEmployee(employee: TypeEmployeeDB) {
        runInAction(() => {
            this.choosenEmployee = employee;
        })
    }
}

export const infoEmployeeStore = new InfoEmployeeStore();
